import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import {
  Mail,
  MapPin,
  ExternalLink,
  Copy,
  Check,
  Send,
  Sparkles,
  Clock
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TelegramIcon } from './Icons';
import confetti from 'canvas-confetti';

export default function Contact() {
  const { cvData, t, isRTL } = useTheme();
  const { personal } = cvData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copiedField, setCopiedField] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text, fieldName) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);

    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.8 }
    });

    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4500);
  };

  const contactChannels = [
    {
      id: 'email',
      icon: Mail,
      iconBg: 'bg-brand-500/10 text-brand-600 dark:text-brand-400 border-brand-500/20',
      title: t.contact.emailTitle,
      handle: personal.email,
      link: `mailto:${personal.email}`,
      linkTitle: t.contact.sendEmail,
      isExternal: false
    },
    {
      id: 'telegram',
      icon: TelegramIcon,
      iconBg: 'bg-[#229ED9]/10 text-[#229ED9] border-[#229ED9]/20',
      title: t.contact.telegramTitle,
      handle: personal.telegramHandle || '@ali_dev',
      link: personal.telegram || 'https://t.me',
      linkTitle: t.contact.openTelegram,
      isExternal: true
    },
    {
      id: 'linkedin',
      icon: LinkedinIcon,
      iconBg: 'bg-[#0A66C2]/10 text-[#0A66C2] border-[#0A66C2]/20',
      title: t.contact.linkedinTitle,
      handle: personal.linkedinHandle || 'linkedin.com/in/ali-dev',
      link: personal.linkedin || 'https://linkedin.com',
      linkTitle: t.contact.viewProfile,
      isExternal: true
    },
    {
      id: 'github',
      icon: GithubIcon,
      iconBg: 'bg-slate-200/80 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700',
      title: t.contact.githubTitle,
      handle: personal.githubHandle || 'github.com/ali-dev',
      link: personal.github || 'https://github.com',
      linkTitle: t.contact.viewGithub,
      isExternal: true
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-0 rounded-full dark:bg-brand-950/50 text-brand-600 dark:text-brand-400 text-xl font-semibold uppercase tracking-wider mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.contact.badge}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            {t.contact.heading}
          </h2>
          {t.contact.subheading && (
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              {t.contact.subheading}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="flex flex-col justify-between space-y-4">
            <div className="glass-card rounded-3xl p-5 sm:p-6 border border-slate-200/80 dark:border-slate-800 shadow-xl shadow-slate-200/30 dark:shadow-none hover:border-emerald-500/40 transition-all">
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-slate-900 dark:text-white">
                      {t.contact.locationTitle}
                    </h3>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      {personal.location}
                    </p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shrink-0">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span>{isRTL ? "آماده همکاری" : "Available"}</span>
                </span>
              </div>

              <div className="pt-3 border-t border-slate-200/70 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span className="font-mono">{personal.timezone}</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-brand-500" />
                  <span>{isRTL ? "پاسخگویی سریع کمتر از ۱۲ ساعت" : "< 12h response"}</span>
                </span>
              </div>
            </div>

            <div className="space-y-3">
              {contactChannels.map((channel) => {
                const IconComponent = channel.icon;
                const isCopied = copiedField === channel.id;

                return (
                  <div
                    key={channel.id}
                    className="glass-card rounded-2xl p-3.5 sm:p-4 border border-slate-200/80 dark:border-slate-800 shadow-md hover:border-brand-500/40 transition-all flex items-center justify-between gap-3 group"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className={`w-10 h-10 rounded-2xl border flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform ${channel.iconBg}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors">
                          {channel.title}
                        </h4>
                        <span className="font-mono text-xs text-slate-500 dark:text-slate-400 truncate block select-all" title={channel.handle}>
                          {channel.handle}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={() => handleCopy(channel.handle, channel.id)}
                        className="p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 transition-colors cursor-pointer"
                        title={t.contact.copy}
                      >
                        {isCopied ? (
                          <Check className="w-4 h-4 text-emerald-500" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>

                      <a
                        href={channel.link}
                        target={channel.isExternal ? '_blank' : '_self'}
                        rel={channel.isExternal ? 'noreferrer' : undefined}
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-brand-500 hover:text-slate-950 dark:hover:bg-brand-500 dark:hover:text-slate-950 text-slate-700 dark:text-slate-300 font-semibold text-xs border border-slate-200 dark:border-slate-700/70 hover:border-brand-500 transition-all cursor-pointer"
                      >
                        <span className="hidden sm:inline">{channel.linkTitle}</span>
                        {channel.isExternal ? (
                          <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                        ) : (
                          <Mail className="w-3.5 h-3.5 shrink-0" />
                        )}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="h-full">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xl shadow-slate-200/30 dark:shadow-none h-full flex flex-col justify-between space-y-6">
              <div className="space-y-1">
                <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                  {t.contact.sendDirect}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  {t.contact.sendDirectSub}
                </p>
              </div>

              {submitted ? (
                <div className="py-12 px-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3 animate-fade-in my-auto">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-black flex items-center justify-center mx-auto font-bold shadow-lg shadow-emerald-500/30">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                    {t.contact.successMsg}
                  </h4>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col justify-between">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        {t.contact.name} *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={t.contact.namePlaceholder}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        {t.contact.email} *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder={t.contact.emailPlaceholder}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      {t.contact.subject}
                    </label>
                    <input
                      type="text"
                      placeholder={t.contact.subjectPlaceholder}
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      {t.contact.message} *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder={t.contact.messagePlaceholder}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-2xl bg-brand-500 hover:bg-brand-400 text-slate-950 font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t.contact.sendBtn}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
