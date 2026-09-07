import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import {
  Code2,
  Server,
  Wrench,
  Users,
  Sparkles,
  Search,
  CheckCircle2,
  Code,
  FileCode2,
  Globe,
  Palette,
  Cpu,
  Layers,
  Database,
  Share2,
  Zap,
  Terminal,
  Flame,
  Box,
  Cloud,
  GitBranch,
  Layout
} from 'lucide-react';

const iconMap = {
  Code,
  FileCode2,
  Globe,
  Palette,
  Cpu,
  Layers,
  Server,
  Database,
  Share2,
  Zap,
  Terminal,
  Flame,
  Box,
  Cloud,
  GitBranch,
  CheckCircle2,
  Layout
};

export default function Skills() {
  const { cvData, t } = useTheme();
  const { skills } = cvData;
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = [
    { id: 'all', label: t.skills.tabs.all, icon: Sparkles },
    { id: 'frontend', label: t.skills.tabs.frontend, icon: Code2 },
    { id: 'backend', label: t.skills.tabs.backend, icon: Server },
    { id: 'tools', label: t.skills.tabs.tools, icon: Wrench },
    { id: 'soft', label: t.skills.tabs.soft, icon: Users },
  ];

  const getFilteredSkills = () => {
    let list = [];
    if (activeTab === 'all' || activeTab === 'frontend') {
      list.push(...skills.frontend.map(s => ({ ...s, category: t.skills.tabs.frontend })));
    }
    if (activeTab === 'all' || activeTab === 'backend') {
      list.push(...skills.backend.map(s => ({ ...s, category: t.skills.tabs.backend })));
    }
    if (activeTab === 'all' || activeTab === 'tools') {
      list.push(...skills.toolsAndDevops.map(s => ({ ...s, category: t.skills.tabs.tools })));
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(item =>
        item.name.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
      );
    }
    return list;
  };

  const filteredSkills = getFilteredSkills();

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-0 rounded-full dark:bg-brand-950/50 text-brand-600 dark:text-brand-400 text-xl font-semibold uppercase tracking-wider mb-5">
            <Code2 className="w-3.5 h-3.5" />
            <span>{t.skills.badge}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            {t.skills.heading}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            {t.skills.subheading}
          </p>
        </div>

        {/* Filters & Search Toolbar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 w-full md:w-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${activeTab === tab.id
                    ? 'bg-white dark:bg-slate-900 text-brand-600 dark:text-brand-400 shadow-sm border border-slate-200/80 dark:border-slate-800'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 rtl:left-auto rtl:right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <input
              type="text"
              placeholder={t.skills.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 rtl:pr-10 rtl:pl-4 py-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-slate-900 dark:text-white text-xs sm:text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-all"
            />
          </div>
        </div>

        {/* Content View */}
        {activeTab === 'soft' ? (
          /* Soft Skills Card Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.softSkills.map((skill) => (
              <div
                key={skill}
                className="glass-card rounded-2xl p-5 flex items-center gap-3 border border-slate-200/80 dark:border-slate-700/60 hover:border-brand-400 transition-all group"
              >
                <div className="p-2 rounded-xl bg-brand-50 dark:bg-brand-950/50 text-brand-600 dark:text-brand-400 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <span className="font-semibold text-slate-800 dark:text-slate-200 text-sm sm:text-base">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        ) : (
          /* Technical Skills Matrix Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredSkills.map((skill) => {
              const Icon = iconMap[skill.icon] || Code;
              return (
                <div
                  key={skill.name}
                  className="glass-card rounded-2xl p-5 hover:border-brand-500/40 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-brand-600 dark:text-brand-400 group-hover:bg-brand-50 dark:group-hover:bg-brand-950/60 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-slate-900 dark:text-white text-base">
                          {skill.name}
                        </h4>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                          {skill.category}
                        </span>
                      </div>
                    </div>
                    <span className="font-mono text-xs font-bold text-brand-600 dark:text-brand-400">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Level bar */}
                  <div className="w-full h-2 rounded-full bg-slate-200/80 dark:bg-slate-800 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-brand-500 to-brand-400 transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
