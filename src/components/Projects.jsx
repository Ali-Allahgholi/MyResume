import React from 'react';
import { useTheme } from '../context/ThemeContext';
import {
  Layers,
  ExternalLink,
  ArrowLeft,
  ArrowRight,
  Ban
} from 'lucide-react';

import iranArzLogo from '../assets/Iran-Arz.svg';
import aloPriceLogo from '../assets/Alo-price-logo.png';

function ProjectLogo({ logoKey, type, title }) {
  if (logoKey === 'iranArz' || type === 'crypto') {
    return (
      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-slate-900 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center p-2.5 shadow-md relative group-hover:scale-105 transition-transform shrink-0 overflow-hidden">
        <img
          src={iranArzLogo}
          alt={title || "Iran Arz 360"}
          className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(249,179,59,0.25)]"
        />
      </div>
    );
  }

  if (logoKey === 'aloPrice' || type === 'company') {
    return (
      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-slate-900 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center p-2.5 shadow-md relative group-hover:scale-105 transition-transform shrink-0 overflow-hidden">
        <img
          src={aloPriceLogo}
          alt={title || "Alo Price"}
          className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(234,179,8,0.25)]"
        />
      </div>
    );
  }

  return (
    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 flex items-center justify-center shadow-md relative group-hover:scale-105 transition-transform shrink-0">
      <Layers className="w-7 h-7 text-brand-500" />
    </div>
  );
}

export default function Projects() {
  const { cvData, t, isRTL } = useTheme();
  const { projects } = cvData;

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-0 rounded-full dark:bg-brand-950/50 text-brand-600 dark:text-brand-400 text-xl font-semibold uppercase tracking-wider mb-5">
            <Layers className="w-3.5 h-3.5" />
            <span>{t.projects.badge}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            {t.projects.heading}
          </h2>
          {t.projects.subheading && (
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
              {t.projects.subheading}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xl shadow-slate-200/30 dark:shadow-none hover:border-brand-500/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="space-y-1">
                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors">
                      {project.title}
                    </h3>
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono text-slate-500 dark:text-slate-400 hover:text-brand-500 transition-colors"
                      >
                        <span>{project.enSub}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="text-xs sm:text-sm font-mono text-slate-500 dark:text-slate-400 block">
                        {project.enSub}
                      </span>
                    )}
                  </div>

                  <ProjectLogo logoKey={project.logoKey} type={project.iconType} title={project.title} />
                </div>

                <div className="mb-5">
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl dark:bg-brand-950/50 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800/60 text-xs sm:text-[13px] font-semibold">
                    <span className="text-brand-600 dark:text-brand-400 font-medium">{project.roleLabel}</span>
                    <span className="font-bold">{project.roleValue}</span>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>
              </div>

              <div className="space-y-5 pt-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700/60 hover:border-brand-500/30 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3.5 px-6 rounded-2xl bg-brand-500 hover:bg-brand-400 text-slate-950 font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
                  >
                    <span>{project.actionText}</span>
                    <ArrowIcon className="w-5 h-5" />
                  </a>
                ) : (
                  <div className="w-full py-3.5 px-6 rounded-2xl bg-slate-100/90 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/70 text-slate-500 dark:text-slate-400 font-semibold text-sm sm:text-base flex items-center justify-center gap-2 select-none cursor-not-allowed">
                    <span>{project.actionText}</span>
                    <Ban className="w-4 h-4 text-rose-500/80 dark:text-rose-400/80" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
