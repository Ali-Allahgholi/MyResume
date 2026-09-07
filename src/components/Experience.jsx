import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import {
  Briefcase,
  MapPin,
  Calendar,
  ChevronDown,
  CheckCircle,
  Layers
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

        {/* Section Header */}
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

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical timeline spine line */}
          <div className="absolute left-4 sm:left-8 rtl:left-auto rtl:right-4 sm:rtl:right-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-brand-500 via-brand-400 to-slate-300 dark:to-slate-800" />

          <div className="space-y-8">
            {experience.map((item, index) => {
              const isExpanded = expandedId === item.id;
              const isFirst = index === 0;

              return (
                <div
                  key={item.id}
                  className="relative pl-12 sm:pl-20 rtl:pl-0 rtl:pr-12 sm:rtl:pr-20"
                >
                  {/* Timeline Bullet Node */}
                  <div
                    className={`absolute left-2 sm:left-6 rtl:left-auto rtl:right-2 sm:rtl:right-6 -translate-x-1/2 rtl:translate-x-1/2 top-6 w-5 h-5 rounded-full border-4 flex items-center justify-center transition-all duration-300 ${isExpanded
                      ? 'border-emerald-500 bg-white dark:bg-slate-950 scale-110 shadow-[0_0_12px_rgba(16,185,129,0.5)]'
                      : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900'
                      }`}
                  >
                    {isExpanded ? (
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                      </span>
                    ) : (
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                    )}
                  </div>

                  {/* Experience Card */}
                  <div className="glass-card rounded-3xl p-6 sm:p-7 transition-all duration-300 hover:shadow-lg">

                    {/* Header Strip */}
                    <div
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer select-none"
                      onClick={() => toggleExpand(item.id)}
                    >
                      <div>
                        <div className="flex items-center gap-3 flex-wrap">
                          <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white">
                            {item.role}
                          </h3>
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold">
                            {item.type}
                          </span>
                        </div>
                        <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mt-1">
                          {item.company}
                        </p>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end gap-4 text-xs text-slate-500 dark:text-slate-400">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {item.period}
                          </span>
                          <span className="hidden sm:flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            {item.location}
                          </span>
                        </div>

                        <div className={`p-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    {/* Description Paragraph */}
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mt-4">
                      {item.description}
                    </p>

                    {/* Expandable Details */}
                    {isExpanded && (
                      <div className="mt-6 pt-6 border-t border-slate-200/80 dark:border-slate-800 space-y-5 animate-fade-in">
                        {/* Achievements */}
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                            {t.experience.keyAchievements}
                          </h4>
                          <ul className="space-y-2">
                            {item.achievements.map((ach, idx) => (
                              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                                <CheckCircle className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                                <span>{ach}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Tech Stack Chips */}
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2.5">
                            {t.experience.technologies}
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {item.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/50"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
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
