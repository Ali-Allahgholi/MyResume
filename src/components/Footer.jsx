import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, SiteLogo } from './Icons';

export default function Footer() {
  const { cvData, t } = useTheme();
  const { personal } = cvData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-white/60 dark:bg-slate-950/60 backdrop-blur-md py-12 pb-24 md:pb-12 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="relative flex items-center gap-3 group">
            <div className="absolute -left-2 -top-2 opacity-15 dark:opacity-10 pointer-events-none overflow-hidden">
              <SiteLogo className="w-14 h-14 text-emerald-600 dark:text-[#56e39f] transform rotate-6" />
            </div>

            <div className="relative w-9 h-9 rounded-xl bg-emerald-500/15 dark:bg-[#56e39f]/15 border border-emerald-500/30 dark:border-[#56e39f]/30 flex items-center justify-center text-emerald-600 dark:text-[#56e39f] shadow-sm group-hover:scale-105 group-hover:bg-emerald-500/25 dark:group-hover:bg-[#56e39f]/25 transition-all">
              <SiteLogo className="w-5 h-5" />
            </div>

            <div className="relative">
              <p className="font-display font-bold text-sm text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-[#56e39f] transition-colors">
                {personal.fullName}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {personal.roleTitle}
              </p>
            </div>
          </div>

          <div className="text-center text-xs text-slate-500 dark:text-slate-400">
            <p>© Ali Allahgholi | All Rights Reserved</p>
          </div>

          <div className="flex items-center gap-3">
            {personal.github && (
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl text-slate-500 hover:text-brand-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
            {personal.linkedin && (
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl text-slate-500 hover:text-brand-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            )}
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-brand-500 hover:text-black dark:bg-slate-800 dark:hover:bg-brand-500 dark:hover:text-black text-slate-700 dark:text-slate-300 transition-all shadow-sm cursor-pointer"
              title={t.footer.backToTop}
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
