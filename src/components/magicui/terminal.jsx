import React, {
  Children,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { cn } from '../../lib/utils';

const SequenceContext = createContext(null);
const useSequence = () => useContext(SequenceContext);

const ItemIndexContext = createContext(null);
const useItemIndex = () => useContext(ItemIndexContext);

export function AnimatedSpan({
  children,
  delay = 0,
  className,
  ...props
}) {
  const sequence = useSequence();
  const itemIndex = useItemIndex();
  const [isVisible, setIsVisible] = useState(!sequence);

  useEffect(() => {
    if (!sequence || itemIndex === null) return;
    if (sequence.activeIndex === itemIndex) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        sequence.completeItem(itemIndex);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [sequence, sequence?.activeIndex, itemIndex, delay]);

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        'font-mono text-xs sm:text-sm tracking-normal transition-all duration-300 animate-fade-in flex items-center gap-2',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function TypingAnimation({
  children,
  tokens,
  lineNumber,
  className,
  duration = 20,
  delay = 0,
  as: Component = 'div',
  ...props
}) {
  const sequence = useSequence();
  const itemIndex = useItemIndex();
  const [charCount, setCharCount] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const totalLength = useMemo(() => {
    if (tokens && Array.isArray(tokens)) {
      return tokens.reduce((acc, t) => acc + (t.text ? t.text.length : 0), 0);
    }
    if (typeof children === 'string') {
      return children.length;
    }
    return 0;
  }, [tokens, children]);

  useEffect(() => {
    if (!sequence || itemIndex === null) {
      const startTimer = setTimeout(() => setIsTyping(true), delay);
      return () => clearTimeout(startTimer);
    }

    if (sequence.activeIndex === itemIndex) {
      const startTimer = setTimeout(() => {
        setIsTyping(true);
      }, delay);
      return () => clearTimeout(startTimer);
    }
  }, [sequence, sequence?.activeIndex, itemIndex, delay]);

  useEffect(() => {
    if (!isTyping) return;

    let i = 0;
    const interval = setInterval(() => {
      if (i < totalLength) {
        setCharCount(i + 1);
        i++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
        if (sequence && itemIndex !== null) {
          sequence.completeItem(itemIndex);
        }
      }
    }, duration);

    return () => clearInterval(interval);
  }, [isTyping, totalLength, duration, sequence, itemIndex]);

  if (sequence && itemIndex !== null && sequence.activeIndex < itemIndex) {
    return null;
  }

  let content = null;
  if (tokens && Array.isArray(tokens)) {
    let accumulated = 0;
    content = tokens.map((token, idx) => {
      if (charCount <= accumulated) return null;
      const start = accumulated;
      const end = accumulated + token.text.length;
      accumulated = end;
      const visibleCount = Math.max(0, Math.min(token.text.length, charCount - start));
      return (
        <span key={idx} className={token.className}>
          {token.text.slice(0, visibleCount)}
        </span>
      );
    });
  } else if (typeof children === 'string') {
    content = <span>{children.slice(0, charCount)}</span>;
  }

  return (
    <Component
      className={cn(
        'font-mono text-xs sm:text-[13px] tracking-normal flex items-start leading-relaxed whitespace-pre font-normal',
        className
      )}
      {...props}
    >
      {lineNumber !== undefined && (
        <span className="select-none text-slate-600 dark:text-slate-500 w-5 inline-block text-right mr-3 shrink-0 font-mono text-xs">
          {lineNumber}
        </span>
      )}
      <span className="inline-flex items-center flex-wrap">
        {content}
        {isTyping && (
          <span className="inline-block w-1.5 h-3.5 ml-0.5 bg-[#56e39f] animate-pulse" />
        )}
      </span>
    </Component>
  );
}

export function Terminal({
  children,
  className,
  sequence = true,
  loop = true,
  loopDelay = 10000,
  pauseOnHover = true,
  title = 'terminal',
  onReplay,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [key, setKey] = useState(0);
  const [clearPhase, setClearPhase] = useState('idle');
  const [isHovered, setIsHovered] = useState(false);

  const handleRestart = () => {
    setClearPhase('idle');
    setActiveIndex(0);
    setKey((prev) => prev + 1);
    if (onReplay) onReplay();
  };

  const contextValue = useMemo(() => {
    if (!sequence) return null;
    return {
      completeItem: (index) => {
        setActiveIndex((current) => (index === current ? current + 1 : current));
      },
      activeIndex,
    };
  }, [sequence, activeIndex]);

  const totalItems = Children.count(children);
  const isSequenceFinished = activeIndex >= totalItems;

  useEffect(() => {
    if (!loop || !sequence || totalItems === 0) return;
    if (isSequenceFinished) {
      if (isHovered && pauseOnHover) return;

      const holdTimer = setTimeout(() => {
        setClearPhase('prompt_clear');

        const fadeTimer = setTimeout(() => {
          setClearPhase('fading');

          const resetTimer = setTimeout(() => {
            setActiveIndex(0);
            setKey((prev) => prev + 1);
            setClearPhase('idle');
            if (onReplay) onReplay();
          }, 650);

          return () => clearTimeout(resetTimer);
        }, 750);

        return () => clearTimeout(fadeTimer);
      }, loopDelay);

      return () => clearTimeout(holdTimer);
    }
  }, [isSequenceFinished, totalItems, loop, loopDelay, sequence, onReplay, isHovered, pauseOnHover]);

  const wrappedChildren = useMemo(() => {
    if (!sequence) return children;
    const array = Children.toArray(children);
    return array.map((child, index) => (
      <ItemIndexContext.Provider key={`${key}-${index}`} value={index}>
        {child}
      </ItemIndexContext.Provider>
    ));
  }, [children, sequence, key]);

  return (
    <SequenceContext.Provider value={contextValue}>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn(
          'w-full max-w-xl mx-auto rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800/90 bg-slate-900/95 dark:bg-[#0b1120]/95 text-slate-200 shadow-2xl backdrop-blur-md overflow-hidden text-left transition-all duration-300 hover:border-slate-700 dark:hover:border-slate-700/80 group',
          className
        )}
        dir="ltr"
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-slate-950/70 select-none">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]/40 shadow-sm" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]/40 shadow-sm" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]/40 shadow-sm" />
          </div>
          <div className="text-[11px] font-mono font-medium text-slate-400 tracking-wider flex items-center gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
            <span className={cn(
              "w-1.5 h-1.5 rounded-full transition-colors",
              clearPhase !== 'idle' ? "bg-amber-400" : isSequenceFinished ? "bg-[#56e39f]" : "bg-[#56e39f] animate-ping"
            )} />
            <span>{title} ~ zsh</span>
            {loop && (
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-normal ml-1">
                {clearPhase === 'prompt_clear' ? '(clearing)' : isSequenceFinished ? '(completed)' : '(running)'}
              </span>
            )}
          </div>
          <button
            onClick={handleRestart}
            title="Replay sequence"
            className="text-[11px] font-mono text-slate-400 hover:text-[#56e39f] transition-colors p-1 rounded hover:bg-slate-800/60 cursor-pointer"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
              <path d="M21 3v5h-5" />
              <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
              <path d="M3 21v-5h5" />
            </svg>
          </button>
        </div>

        <div className="p-4 sm:p-5 text-slate-100 overflow-x-auto min-h-[250px] sm:min-h-[240px] font-mono leading-relaxed relative flex flex-col justify-start">
          <div
            className={cn(
              "grid gap-y-2 font-mono text-xs sm:text-[13px] transition-all duration-500 ease-out",
              clearPhase === 'fading'
                ? "opacity-0 -translate-y-2.5 blur-[1.5px] scale-[0.99]"
                : "opacity-100 translate-y-0 blur-0 scale-100"
            )}
          >
            {wrappedChildren}

            {clearPhase === 'prompt_clear' && (
              <div className="flex items-center text-[#56e39f] font-mono text-xs sm:text-[13px] pt-1 animate-fade-in">
                <span>&gt; clear</span>
                <span className="inline-block w-2 h-3.5 ml-1 bg-[#56e39f] animate-pulse" />
              </div>
            )}
          </div>
        </div>
      </div>
    </SequenceContext.Provider>
  );
}

export default Terminal;
