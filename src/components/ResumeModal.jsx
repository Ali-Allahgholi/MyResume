import React, { useEffect, useRef } from 'react';
import {
  X,
  Download,
  ExternalLink,
  Printer,
  FileText,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { useTheme } from '../context/ThemeContext';

export default function ResumeModal({ isOpen, onClose }) {
  const { t } = useTheme();
  const modalRef = useRef(null);

  const resumePdfUrl = `${import.meta.env.BASE_URL}Ali-Allahgholi-Resume.pdf`;

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/80 backdrop-blur-md animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-4xl h-[94vh] max-h-[940px] bg-white dark:bg-[#0f1422] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden text-slate-900 dark:text-slate-100 transition-all"
        dir="ltr"
      >
        <div className="flex items-center justify-between gap-3 px-4 sm:px-6 py-3.5 bg-slate-100/90 dark:bg-slate-900/95 border-b border-slate-200 dark:border-slate-800 backdrop-blur-sm select-none z-10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#56e39f]/20 dark:bg-[#56e39f]/15 border border-[#56e39f]/30 flex items-center justify-center text-[#15803d] dark:text-[#56e39f]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 id="resume-modal-title" className="font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-tight">
                {t?.modal?.resumeTitle || 'Ali Allahgholi — Resume'}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {t?.modal?.pageBadge || 'Official CV • 1 Page'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <a
              href={resumePdfUrl}
              download="Ali-Allahgholi-Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-xl bg-[#56e39f] hover:bg-[#48e59b] text-slate-950 font-semibold text-xs sm:text-sm shadow-sm transition-all hover:scale-105 active:scale-95"
              title={t?.modal?.downloadPdf || 'Download PDF'}
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">{t?.modal?.downloadPdf || 'Download PDF'}</span>
            </a>

            <a
              href={resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
              title={t?.modal?.openNewTab || 'Open in New Tab'}
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
              title={t?.modal?.print || 'Print'}
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-rose-500 hover:text-white dark:hover:bg-rose-500 dark:hover:text-white transition-all ml-1"
              title={t?.modal?.close || 'Close'}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto bg-slate-100 dark:bg-slate-950 p-3 sm:p-6 md:p-8 flex justify-center items-start">
          <div className="w-full max-w-3xl bg-white text-slate-900 rounded-xl shadow-2xl p-6 sm:p-10 md:p-12 border border-slate-200 font-sans select-text">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-200">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                  Ali Allahgholi
                </h1>
                <p className="text-base sm:text-lg font-bold text-[#0284c7] mt-1">
                  Frontend Developer
                </p>
              </div>

              <div className="flex flex-col gap-1 text-xs sm:text-sm text-slate-600 sm:text-right">
                <div className="flex items-center sm:justify-end gap-1.5 text-slate-700">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>Tehran , Iran</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  <a
                    href="tel:+989921481709"
                    className="font-semibold text-slate-800 hover:text-[#0284c7] transition-colors"
                  >
                    +98 992 148 1709
                  </a>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <a
                    href="mailto:a.allahgholi03@gmail.com"
                    className="text-[#0284c7] hover:underline font-medium break-all"
                  >
                    a.allahgholi03@gmail.com
                  </a>
                </div>
                <div className="flex items-center sm:justify-end gap-3 mt-1 pt-1 border-t border-slate-100 sm:border-0 sm:pt-0">
                  <a
                    href="https://www.linkedin.com/in/ali-allahgholi-103a4b368/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#0284c7] hover:underline font-medium"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                    <span>Linkedin</span>
                  </a>
                  <span className="text-slate-300">•</span>
                  <a
                    href="https://github.com/Ali-Allahgholi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#0284c7] hover:underline font-medium"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Github</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
              <div className="md:col-span-2 space-y-7">
                <section>
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#0284c7] mb-3">
                    Summary
                  </h3>
                  <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <p>
                      Front-End Developer with hands-on experience in building modern,
                      responsive, and user-centric web applications using React and
                      TypeScript.
                    </p>
                    <p>
                      Passionate about writing clean, maintainable, and scalable code while
                      delivering intuitive user experiences.
                    </p>
                    <p>
                      Experienced in collaborating with cross-functional teams, integrating
                      RESTful APIs, and continuously improving application performance
                      through best development practices and continuous learning.
                    </p>
                  </div>
                </section>

                <section>
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#0284c7] mb-3">
                    Experience
                  </h3>
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-baseline justify-between gap-1">
                      <h4 className="text-sm sm:text-base font-bold text-slate-900">
                        Frontend Developer — <span className="font-extrabold">Alo Price</span>
                      </h4>
                    </div>
                    <p className="text-xs italic text-slate-500 font-medium">
                      January 2025 - PRESENT
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed list-disc list-outside pl-4">
                      <li>
                        Designed and developed a modern, user-friendly admin panel with a strong
                        focus on usability and user experience (UX).
                      </li>
                      <li>
                        User permissions and access levels were dictated entirely by their assigned
                        roles within the system .
                      </li>
                      <li>
                        Built responsive, reusable, and maintainable user interfaces using{' '}
                        <span className="font-semibold text-slate-900">React</span> and{' '}
                        <span className="font-semibold text-slate-900">TypeScript</span>.
                      </li>
                      <li>
                        Integrated RESTful APIs and collaborated closely with backend developers
                        to deliver seamless application functionality.
                      </li>
                      <li>
                        Collaborated in a Git-based team workflow, participating in code reviews,
                        version control, and feature development.
                      </li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#0284c7] mb-3">
                    Education
                  </h3>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-900">
                      Islamic Azad University — <span className="font-normal italic">Bachelor's Degree</span>
                    </h4>
                    <p className="text-xs text-slate-500 italic">
                      September 2023 - Present
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 pt-0.5">
                      Bachelor of Science in Computer Engineering
                    </p>
                  </div>
                </section>
              </div>

              <div className="space-y-8 md:pl-4 md:border-l md:border-slate-100">
                <section>
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#0284c7] mb-3">
                    Skills
                  </h3>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                      HTML
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                      CSS
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                      Javascript
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                      React.js
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                      Typescript
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                      Tailwind
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                      Bootstrap
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                      Git
                    </li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#0284c7] mb-3">
                    Languages
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium">
                    English
                  </p>
                </section>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-center space-y-2">
                  <p className="text-xs text-slate-500 font-medium">
                    Looking for the original PDF?
                  </p>
                  <a
                    href={resumePdfUrl}
                    download="Ali-Allahgholi-Resume.pdf"
                    className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-sm transition-all"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>{t?.modal?.downloadPdf || 'Download PDF'}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
