import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import {
  Sun,
  Moon,
  Globe,
  User,
  Briefcase,
  Layers,
  Send
} from 'lucide-react';

import { SiteLogo } from './Icons';

export default function Navbar() {
  const { theme, toggleTheme, cvData, language, toggleLanguage, t } = useTheme();
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'about', label: t.nav.about, href: '#about', icon: User },
    { id: 'experience', label: t.nav.experience, href: '#experience', icon: Briefcase },
    { id: 'projects', label: t.nav.projects, href: '#projects', icon: Layers },
    { id: 'contact', label: t.nav.contact, href: '#contact', icon: Send },
  ];

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setActiveSection(targetId);

    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(targetId);
      if (el) {
        const yOffset = -80;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const sections = ['contact', 'projects', 'experience', 'about', 'home'];

    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY < 120) {
        setActiveSection('home');
        return;
      }

      if (window.innerHeight + scrollY >= document.documentElement.scrollHeight - 80) {
        setActiveSection('contact');
        return;
      }

      const scrollPosition = scrollY + 240;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el && scrollPosition >= el.offsetTop) {
          setActiveSection(sectionId);
          return;
        }
      }

      setActiveSection('home');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 no-print pointer-events-none py-2.5 sm:py-3.5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 flex items-center justify-center">
          <nav
            className="pointer-events-auto relative flex items-center justify-between md:justify-center gap-1.5 sm:gap-2.5 md:gap-3 px-3 sm:px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-[#12141a]/95 backdrop-blur-xl border border-slate-200/90 dark:border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_12px_35px_rgba(0,0,0,0.45)] w-full md:w-auto max-w-[98vw] sm:max-w-none"
            aria-label="Main Navigation"
          >
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, 'home')}
              className="relative flex items-center gap-1.5 sm:gap-2 group px-2 sm:px-2.5 py-1 rounded-full hover:bg-slate-100 dark:hover:bg-white/5 transition-all shrink-0 select-none cursor-pointer overflow-hidden"
              title={cvData.personal.fullName}
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-45 dark:opacity-20 pointer-events-none overflow-hidden rounded-full">
                <SiteLogo className="w-12 h-12 text-emerald-600 dark:text-[#56e39f] transform scale-150 rotate-3" />
              </div>

              <div className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-emerald-500/20 dark:bg-[#56e39f]/15 border border-emerald-600/40 dark:border-[#56e39f]/35 flex items-center justify-center text-emerald-700 dark:text-[#56e39f] shadow-sm group-hover:scale-105 group-hover:bg-emerald-500/30 dark:group-hover:bg-[#56e39f]/25 transition-all shrink-0">
                <SiteLogo className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>

              <span className="relative font-display font-bold text-xs sm:text-[13px] md:text-sm text-black dark:text-white tracking-tight group-hover:text-emerald-600 dark:group-hover:text-[#56e39f] transition-colors whitespace-nowrap">
                {cvData.personal.fullName}
              </span>
            </a>

            <div className="hidden md:block w-[1px] h-4 sm:h-5 bg-slate-300 dark:bg-white/15 shrink-0" aria-hidden="true" />

            <div className="hidden md:flex items-center gap-0.5 sm:gap-1 md:gap-1.5 shrink-0">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`relative px-2 sm:px-3 py-1 text-xs sm:text-[13px] tracking-wide transition-colors duration-200 whitespace-nowrap select-none cursor-pointer ${isActive
                        ? 'text-black dark:text-[#56e39f] font-bold'
                        : 'text-slate-800 hover:text-black font-medium dark:text-neutral-400 dark:hover:text-white'
                      }`}
                  >
                    {item.label}

                    {isActive && (
                      <>
                        <span
                          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 sm:w-10 h-4 bg-emerald-500/35 dark:bg-[#56e39f]/45 blur-[5px] pointer-events-none rounded-full"
                          aria-hidden="true"
                        />
                        <span
                          className="absolute -bottom-1 left-1.5 right-1.5 h-[2px] bg-emerald-600 dark:bg-[#56e39f] rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)] dark:shadow-[0_0_10px_#56e39f,0_0_3px_#56e39f]"
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </a>
                );
              })}
            </div>

            <div className="hidden md:block w-[1px] h-4 sm:h-5 bg-slate-300 dark:bg-white/15 shrink-0" aria-hidden="true" />

            <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
              <button
                type="button"
                onClick={toggleLanguage}
                className="inline-flex items-center gap-1 px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 active:scale-95 text-black dark:bg-white/5 dark:hover:bg-white/10 dark:text-neutral-300 dark:hover:text-white text-xs font-bold transition-all border border-slate-200/90 dark:border-white/5 cursor-pointer select-none"
                title={t.nav.langTitle}
                aria-label="Toggle Language"
              >
                <Globe className="w-3.5 h-3.5 text-emerald-600 dark:text-[#56e39f]" />
                <span className="font-mono text-[11px] sm:text-xs font-bold text-black dark:text-neutral-200">{language === 'en' ? 'FA' : 'EN'}</span>
              </button>

              <button
                type="button"
                onClick={toggleTheme}
                className="p-1 sm:p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 active:scale-95 text-black dark:bg-white/5 dark:hover:bg-white/10 dark:text-neutral-300 dark:hover:text-white transition-all border border-slate-200/90 dark:border-white/5 cursor-pointer select-none"
                title={theme === 'dark' ? t.nav.themeLight : t.nav.themeDark}
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500 dark:text-amber-400" />
                ) : (
                  <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-600 dark:text-indigo-400" />
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      <nav
        className="fixed bottom-3 sm:bottom-4 left-0 right-0 z-40 md:hidden flex justify-center px-3 sm:px-4 pointer-events-none no-print"
        aria-label="Mobile Bottom Navigation"
      >
        <div className="pointer-events-auto flex items-center justify-around gap-1 px-3 py-1.5 rounded-full bg-white/92 dark:bg-[#12141a]/95 backdrop-blur-2xl border border-slate-200/90 dark:border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.15)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.6)] w-full max-w-[360px] sm:max-w-[400px]">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`relative flex flex-col items-center justify-center gap-1 py-1 px-2 rounded-2xl transition-all duration-200 select-none cursor-pointer flex-1 ${
                  isActive
                    ? 'text-emerald-700 dark:text-[#56e39f] font-bold'
                    : 'text-slate-600 hover:text-black dark:text-neutral-400 dark:hover:text-white font-medium'
                }`}
              >
                {isActive && (
                  <span
                    className="absolute inset-0 bg-emerald-500/15 dark:bg-[#56e39f]/15 rounded-2xl pointer-events-none"
                    aria-hidden="true"
                  />
                )}

                {Icon && (
                  <Icon
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isActive ? 'scale-110 text-emerald-600 dark:text-[#56e39f]' : ''
                    }`}
                  />
                )}
                <span className="text-[11px] leading-none tracking-tight whitespace-nowrap">
                  {item.label}
                </span>

                {isActive && (
                  <span
                    className="w-1 h-1 rounded-full bg-emerald-600 dark:bg-[#56e39f] shadow-[0_0_6px_#10b981] dark:shadow-[0_0_8px_#56e39f]"
                    aria-hidden="true"
                  />
                )}
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
}
