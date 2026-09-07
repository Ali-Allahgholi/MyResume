import React from 'react';
import { useTheme } from '../context/ThemeContext';
import {
  GraduationCap,
  Award,
  CheckCircle,
  Calendar,
  MapPin,
  Quote,
  Star,
  Sparkles
} from 'lucide-react';

export default function Education() {
  const { cvData, t } = useTheme();
  const { education, certifications, testimonials } = cvData;

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-0 rounded-full dark:bg-brand-950/50 text-brand-600 dark:text-brand-400 text-xl font-semibold uppercase tracking-wider mb-5">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{t.education.badge}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            {t.education.heading}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            {t.education.subheading}
          </p>
        </div>

        {/* Education & Certs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">

          {/* Education Degrees */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 rounded-xl bg-brand-50 dark:bg-brand-950/50 text-brand-600 dark:text-brand-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                {t.education.academicTitle}
              </h3>
            </div>

            <div className="space-y-4">
              {education.map((item) => (
                <div
                  key={item.id}
                  className="glass-card rounded-3xl p-6 sm:p-7 space-y-3 border border-slate-200/80 dark:border-slate-800"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                        {item.degree}
                      </h4>
                      <p className="text-sm font-semibold text-brand-600 dark:text-brand-400 mt-0.5">
                        {item.institution}
                      </p>
                    </div>
                    <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold shrink-0">
                      {item.gpa}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 pt-1">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.location}
                    </span>
                  </div>

                  {item.honors && (
                    <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800/80 flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span>{item.honors}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Licenses & Industry Certifications */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 rounded-xl bg-brand-50 dark:bg-brand-950/50 text-brand-600 dark:text-brand-400">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                {t.education.certificationsTitle}
              </h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="glass-card rounded-3xl p-5 sm:p-6 flex items-center justify-between gap-4 border border-slate-200/80 dark:border-slate-800 hover:border-brand-400 transition-colors"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-brand-600 dark:text-brand-400 shrink-0">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                        {cert.name}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {cert.issuer} • {cert.year}
                      </p>
                    </div>
                  </div>

                  <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400 hidden sm:inline">
                    {cert.credentialId}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
