import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import {
  Briefcase,
  MapPin,
  Calendar,
  ChevronDown,
  CheckCircle
} from 'lucide-react';

export default function Experience() {
  const { cvData, t } = useTheme();
  const { experience } = cvData;
  const [expandedId, setExpandedId] = useState(experience[0]?.id || null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-0 rounded-full dark:bg-brand-950/50 text-brand-600 dark:text-brand-400 text-xl font-semibold uppercase tracking-wider mb-5">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{t.experience.badge}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            {t.experience.heading}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            {t.experience.subheading}
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 sm:left-8 rtl:left-auto rtl:right-4 sm:rtl:right-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-brand-500 via-brand-400 to-slate-300 dark:to-slate-800" />

          <div className="space-y-8">
            {experience.map((item) => {
              const isExpanded = expandedId === item.id;

              return (
                <div
                  key={item.id}
                  className="relative pl-12 sm:pl-20 rtl:pl-0 rtl:pr-12 sm:rtl:pr-20"
                >
                  <div
                    className={`absolute left-2 sm:left-6 rtl:left-auto rtl:right-2 sm:rtl:right-6 -translate-x-1/2 rtl:translate-x-1/2 top-6 w-5 h-5 rounded-full border-4 flex items-center justify-center transition-all duration-300 ${isExpanded
                      ? 'border-emerald-500 bg-white dark:bg-slate-950 scale-110 shadow-[0_0_12px_rgba(16,185,129,0.5)]'
                      : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900'
                      }`}
                  >
                    <div className={`w-1.5 h-1.5 rounded-full ${isExpanded ? 'bg-emerald-500' : 'bg-transparent'}`} />
                  </div>

                  <div
                    onClick={() => toggleExpand(item.id)}
                    className={`glass-card rounded-3xl p-6 sm:p-8 cursor-pointer border transition-all duration-300 select-none ${isExpanded
                      ? 'border-brand-500/50 shadow-xl shadow-brand-500/5'
                      : 'border-slate-200/80 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">
                            {item.role}
                          </h3>
                          <span className="text-xs px-2.5 py-0.5 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 font-medium">
                            {item.type}
                          </span>
                        </div>
                        <p className="text-base font-semibold text-brand-600 dark:text-brand-400">
                          {item.company}
                        </p>
                      </div>

                      <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{item.location}</span>
                        </div>
                        <div className={`p-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-brand-500' : ''
                          }`}>
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-700/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {isExpanded && item.achievements && item.achievements.length > 0 && (
                      <div className="mt-6 pt-6 border-t border-slate-200/80 dark:border-slate-800 animate-fade-in space-y-3">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          {t.experience.keyAchievements}
                        </h4>
                        <ul className="space-y-2">
                          {item.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
