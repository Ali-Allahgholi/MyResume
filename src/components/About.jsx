import React from 'react';
import { useTheme } from '../context/ThemeContext';
import {
  User,
  Code2,
  Terminal
} from 'lucide-react';
import { MinimalTechIcons } from './MinimalTechIcons';

export default function About() {
  const { cvData, language, t } = useTheme();
  const { personal } = cvData;

  const techSkills = [
    { name: "React", icon: MinimalTechIcons.React, bg: "bg-[#61dafb]/10", border: "hover:border-[#61dafb]/50" },
    { name: "TypeScript", icon: MinimalTechIcons.TypeScript, bg: "bg-[#38bdf8]/10", border: "hover:border-[#38bdf8]/50" },
    { name: "JavaScript", icon: MinimalTechIcons.JavaScript, bg: "bg-[#f7df1e]/10", border: "hover:border-[#f7df1e]/50" },
    { name: "HTML5", icon: MinimalTechIcons.HTML, bg: "bg-[#e34f26]/10", border: "hover:border-[#e34f26]/50" },
    { name: "CSS", icon: MinimalTechIcons.CSS, bg: "bg-[#38bdf8]/10", border: "hover:border-[#38bdf8]/50" },
    { name: "Tailwind CSS", icon: MinimalTechIcons.Tailwind, bg: "bg-[#38bdf8]/10", border: "hover:border-[#38bdf8]/50" },
    { name: "Bootstrap", icon: MinimalTechIcons.Bootstrap, bg: "bg-[#a855f7]/10", border: "hover:border-[#a855f7]/50" },
    { name: "Alpine.js", icon: MinimalTechIcons.Alpine, bg: "bg-[#38bdf8]/10", border: "hover:border-[#38bdf8]/50" },
    { name: "Git", icon: MinimalTechIcons.Git, bg: "bg-[#f43f5e]/10", border: "hover:border-[#f43f5e]/50" },
  ];

  return (
    <section id="about" className="py-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-0 rounded-full dark:bg-brand-950/50 text-brand-600 dark:text-brand-400 text-xl font-semibold uppercase tracking-wider mb-5">
            <User className="w-3.5 h-3.5" />
            <span>{t.about.badge}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            {t.about.heading}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            {t.about.subheading}
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Detailed Bio & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-5">
              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Terminal className="w-5 h-5 text-brand-500" />
                Professional Summary
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base whitespace-pre-line">
                {personal.summary}
              </p>

              <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Location:</span>
                  <span>{personal.location}</span>
                </div>
              </div>
            </div>


          </div>
          {/* Right Column: Skills */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-3xl p-6 sm:p-7 space-y-5 border border-slate-200/80 dark:border-slate-800 shadow-xl shadow-slate-200/30 dark:shadow-none">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-900 dark:text-white text-lg">
                      {t?.skills?.badge || (language === 'fa' ? 'مهارت‌های تخصصی' : 'Skills & Technologies')}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {language === 'fa' ? 'ابزارها و فناوری‌های اصلی' : 'Core stack & tools'}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700/60">
                  {techSkills.length} {language === 'fa' ? 'مهارت' : 'Skills'}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {techSkills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className={`relative flex items-center justify-between p-3 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/80 ${skill.border} hover:shadow-md dark:hover:shadow-brand-500/5 hover:-translate-y-0.5 transition-all duration-200 group cursor-default`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className={`w-9 h-9 rounded-xl ${skill.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-all duration-300`}>
                          <Icon />
                        </div>
                        <div className="truncate">
                          <span className="font-semibold text-sm text-slate-800 dark:text-slate-100 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors block truncate">
                            {skill.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
