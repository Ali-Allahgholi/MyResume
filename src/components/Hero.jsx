import React from 'react';
import { useTheme } from '../context/ThemeContext';
import {
  ArrowRight,
  Send,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Terminal, TypingAnimation } from './magicui/terminal';

export default function Hero() {
  const { cvData, t, language, isRTL } = useTheme();
  const { personal } = cvData;

  const triggerConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-5 overflow-hidden min-h-[92vh] flex flex-col justify-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">

        <div className="mb-8 sm:mb-12 animate-fade-in">
          {language === 'fa' ? (
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-slate-900 dark:text-white uppercase leading-[1.2]">
              سلام، من یک توسعه‌دهنده <span className="text-[#56e39f] font-extrabold dark:bg-transparent px-1 rounded">فرانت‌اند</span><br className="hidden sm:inline" /> هستم
            </h1>
          ) : (
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-slate-900 dark:text-white uppercase leading-[1.05]">
              HI, I'M A <span className="text-[#56e39f] font-extrabold dark:bg-transparent px-1 rounded">FRONTEND</span><br className="hidden sm:inline" /> DEVELOPER
            </h1>
          )}
        </div>

        <div className="relative max-w-xl mx-auto mb-12 px-3 sm:px-0 w-full animate-fade-in group">
          <div className="absolute -top-4 -left-2 sm:-top-5 sm:-left-5 md:-left-6 z-20 pointer-events-none">
            <div
              className="animate-float-smooth-1 opacity-90 dark:opacity-85 hover:opacity-100 hover:scale-125 transition-all duration-300 pointer-events-auto select-none cursor-pointer drop-shadow-md"
              title="React"
            >
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#0284c7] dark:text-[#61dafb]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(0 12 12)" />
                <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
                <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
                <circle cx="12" cy="12" r="1.8" fill="currentColor" />
              </svg>
            </div>
          </div>

          <div className="absolute -top-4 -right-2 sm:-top-5 sm:-right-5 md:-right-6 z-20 pointer-events-none">
            <div
              className="animate-float-smooth-2 opacity-95 dark:opacity-90 hover:opacity-100 hover:scale-125 transition-all duration-300 pointer-events-auto select-none cursor-pointer drop-shadow-[0_0_12px_rgba(247,223,30,0.35)]"
              title="JavaScript"
            >
              <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 48 48" fill="none">
                <rect x="3" y="3" width="42" height="42" rx="11" stroke="#eab308" strokeWidth="2.2" strokeOpacity="0.95" fill="rgba(247, 223, 30, 0.12)" />
                <g transform="translate(-1.5, -4.5)">
                  <path fill="#ca8a04" className="dark:fill-[#f7df1e]" d="M28.5 35.8c.8 1.4 2.3 2.4 4.5 2.4 2 0 3.2-1 3.2-2.5 0-1.7-1.3-2.3-3.6-3.3l-1.2-.5c-3.5-1.5-5.8-3.4-5.8-7.3 0-3.7 2.9-6.5 7.2-6.5 3.2 0 5.3 1.2 6.7 3.8l-3.5 2.3c-.7-1.4-1.8-2-3.3-2-1.4 0-2.4.9-2.4 2.1 0 1.4 1 2 3.4 3l1.3.6c4.1 1.7 6.4 3.6 6.4 7.8 0 4.4-3.5 6.9-8.2 6.9-4.7 0-7.4-2.3-8.7-5.1l4-2.4zM16.3 35.5c.6 1.1 1.3 1.9 2.6 1.9 1.2 0 1.9-.5 1.9-2.1V18.5H26v16.9c0 4.1-2.4 6.2-6.2 6.2-3.3 0-5.4-1.7-6.5-4l4-2.1z" />
                </g>
              </svg>
            </div>
          </div>

          <div className="absolute -top-6 sm:-top-7 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
            <div
              className="animate-float-smooth-5 opacity-90 dark:opacity-85 hover:opacity-100 hover:scale-125 transition-all duration-300 pointer-events-auto select-none cursor-pointer drop-shadow-md"
              title="HTML5"
            >
              <svg className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" viewBox="0 0 48 48">
                <path fill="#e34f26" d="M6 4l3.6 36.3 14.4 4 14.4-4L42 4H6z" />
                <path fill="#ef652a" d="M24 7.3v33.4l11.4-3.2L38.2 7.3H24z" />
                <path fill="#ebebeb" d="M24 17.5h-7.6l-.5-5.5H24v-4.7H10.4l1.6 17.6H24v-4.7zm0 13.9l-.1.03-6.5-1.8-.4-4.7H12.3l.8 9.2 10.9 3v-5.7z" />
                <path fill="#ffffff" d="M24 17.5v-4.7h13.6l-.4 4.7H24zm0 9.4v-4.7h7.8l-.7 7.4-7.1 2v-4.7z" />
              </svg>
            </div>
          </div>

          <div className="absolute -bottom-4 -left-2 sm:-bottom-5 sm:-left-5 md:-left-6 z-20 pointer-events-none">
            <div
              className="animate-float-smooth-3 opacity-90 dark:opacity-85 hover:opacity-100 hover:scale-125 transition-all duration-300 pointer-events-auto select-none cursor-pointer drop-shadow-md"
              title="Tailwind CSS"
            >
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#0284c7] dark:text-[#38bdf8]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.975 12 6.001 12z" />
              </svg>
            </div>
          </div>

          <div className="absolute -bottom-4 -right-2 sm:-bottom-5 sm:-right-5 md:-right-6 z-20 pointer-events-none">
            <div
              className="animate-float-smooth-4 opacity-95 dark:opacity-90 hover:opacity-100 hover:scale-125 transition-all duration-300 pointer-events-auto select-none cursor-pointer drop-shadow-[0_0_12px_rgba(56,189,248,0.35)]"
              title="TypeScript"
            >
              <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 48 48" fill="none">
                <rect x="3" y="3" width="42" height="42" rx="11" stroke="#0284c7" strokeWidth="2.2" strokeOpacity="0.95" fill="rgba(56, 189, 248, 0.12)" />
                <g transform="translate(-1.5, -4.5)">
                  <path fill="#0284c7" className="dark:fill-[#38bdf8]" d="M29.5 35.8c.8 1.4 2.3 2.4 4.5 2.4 2 0 3.2-1 3.2-2.5 0-1.7-1.3-2.3-3.6-3.3l-1.2-.5c-3.5-1.5-5.8-3.4-5.8-7.3 0-3.7 2.9-6.5 7.2-6.5 3.2 0 5.3 1.2 6.7 3.8l-3.5 2.3c-.7-1.4-1.8-2-3.3-2-1.4 0-2.4.9-2.4 2.1 0 1.4 1 2 3.4 3l1.3.6c4.1 1.7 6.4 3.6 6.4 7.8 0 4.4-3.5 6.9-8.2 6.9-4.7 0-7.4-2.3-8.7-5.1l4-2.4zM9.5 22.2h6v18.4h4.8V22.2h6V18.1H9.5v4.1z" />
                </g>
              </svg>
            </div>
          </div>
          <Terminal
            title="developer.js"
            loopDelay={10000}
            className="shadow-2xl border-slate-700/60 bg-slate-950/90 dark:bg-[#0a0f1d]/95 backdrop-blur-md"
          >
            <TypingAnimation
              lineNumber={1}
              duration={22}
              tokens={[
                { text: "export ", className: "text-purple-400 font-semibold" },
                { text: "const ", className: "text-purple-400 font-semibold" },
                { text: "developer", className: "text-[#56e39f] font-semibold" },
                { text: " = {", className: "text-slate-300" },
              ]}
            />

            <TypingAnimation
              lineNumber={2}
              delay={120}
              duration={20}
              tokens={[
                { text: "  name", className: "text-sky-400" },
                { text: ": ", className: "text-slate-300" },
                { text: "\"Ali Allahgholi\"", className: "text-emerald-400 dark:text-emerald-300" },
                { text: ",", className: "text-slate-300" },
              ]}
            />

            <TypingAnimation
              lineNumber={3}
              delay={120}
              duration={20}
              tokens={[
                { text: "  role", className: "text-sky-400" },
                { text: ": ", className: "text-slate-300" },
                { text: "\"Web Programmer\"", className: "text-emerald-400 dark:text-emerald-300" },
                { text: ",", className: "text-slate-300" },
              ]}
            />

            <TypingAnimation
              lineNumber={4}
              delay={120}
              duration={16}
              tokens={[
                { text: "  stack", className: "text-sky-400" },
                { text: ": [", className: "text-slate-300" },
                { text: "\"React\"", className: "text-amber-300" },
                { text: ", ", className: "text-slate-300" },
                { text: "\"TypeScript\"", className: "text-amber-300" },
                { text: ", ", className: "text-slate-300" },
                { text: "\"Tailwind CSS\"", className: "text-amber-300" },
                { text: ", ", className: "text-slate-300" },
                { text: "\"JavaScript\"", className: "text-amber-300" },
                { text: ", ", className: "text-slate-300" },
                { text: "\"Bootstrap\"", className: "text-amber-300" },
                { text: "],", className: "text-slate-300" },
              ]}
            />

            <TypingAnimation
              lineNumber={5}
              delay={120}
              duration={18}
              tokens={[
                { text: "  focus", className: "text-sky-400" },
                { text: ": [", className: "text-slate-300" },
                { text: "\"Performance\"", className: "text-teal-300" },
                { text: ", ", className: "text-slate-300" },
                { text: "\"Clean Code\"", className: "text-teal-300" },
                { text: ", ", className: "text-slate-300" },
                { text: "\"Modern UI\"", className: "text-teal-300" },
                { text: "]", className: "text-slate-300" },
              ]}
            />

            <TypingAnimation
              lineNumber={6}
              delay={120}
              duration={24}
              tokens={[
                { text: "};", className: "text-slate-300" },
              ]}
            />
          </Terminal>
        </div>

        <div className="max-w-3xl mx-auto mb-5 px-2">
          {language === 'fa' ? (
            <p className="font-sans font-bold text-sm sm:text-base md:text-lg tracking-wide text-slate-900 dark:text-white leading-relaxed">
              &lt;من رابط‌های کاربری سریع، واکنش‌گرا و کاربرپسند را با فناوری‌های مدرن فرانت‌اند پیاده‌سازی می‌کنم. ابزارهای اصلی من{' '}
              <span className="text-[#56e39f] font-extrabold bg-transparent dark:bg-transparent px-1 rounded font-mono">
                JAVASCRIPT
              </span>
              ،{' '}
              <span className="text-[#56e39f] font-extrabold bg-transparent dark:bg-transparent px-1 rounded font-mono">
                REACT
              </span>{' '}
              و فریم‌ورک‌های مدرن CSS هستند. /&gt;
            </p>
          ) : (
            <p className="font-mono sm:font-sans font-bold text-sm sm:text-base md:text-lg tracking-wide text-slate-900 dark:text-white uppercase leading-relaxed">
              &lt;I BUILD FAST, RESPONSIVE, AND USER-FRIENDLY WEB INTERFACES USING MODERN FRONTEND TECHNOLOGIES. MY MAIN TOOLS OF CHOICE ARE{' '}
              <span className="text-[#56e39f] font-extrabold bg-transparent dark:bg-transparent px-1 rounded">
                JAVASCRIPT
              </span>{' '}
              ,{' '}
              <span className="text-[#56e39f] font-extrabold bg-transparent dark:bg-transparent px-1 rounded">
                REACT
              </span>{' '}
              AND MODERN CSS FRAMEWORKS. /&gt;
            </p>
          )}
        </div>

        <p className="max-w-2xl mx-auto text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
          {personal.tagline || personal.summary}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#about"
            onClick={triggerConfetti}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#56e39f] hover:bg-[#48e59b] text-[#0d130f] font-bold text-sm sm:text-base shadow-lg shadow-[#56e39f]/25 hover:shadow-xl hover:shadow-[#56e39f]/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all cursor-pointer"
            title={t.hero.resumeBtn}
          >
            <span>{t.hero.resumeBtn}</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-slate-200/80 hover:bg-slate-300 dark:bg-slate-800/80 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-sm border border-slate-300/80 dark:border-slate-700 transition-all hover:-translate-y-0.5"
          >
            <span>{t.hero.contactBtn}</span>
            <Send className="w-4 h-4 text-[#56e39f]" />
          </a>

          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-transparent hover:bg-slate-200/50 dark:hover:bg-white/5 text-slate-700 dark:text-slate-300 font-semibold text-sm border border-slate-300 dark:border-slate-700/60 transition-all hover:-translate-y-0.5"
          >
            <span>{t.hero.projectsBtn}</span>
            <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
          </a>
        </div>
      </div>
    </section>
  );
}
