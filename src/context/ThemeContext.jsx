import React, { createContext, useContext, useState, useEffect } from 'react';
import { cvDataEn, cvDataFa } from '../data/cvData';
import { translations } from '../data/translations';

const ThemeContext = createContext();

const ACCENT_COLORS = [
  { id: 'mint', name: 'Mint Emerald (Default)', color: '#56e39f', border: 'border-emerald-400', bg: 'bg-[#56e39f]' },
  { id: 'cyan', name: 'Cyber Cyan', color: '#06b6d4', border: 'border-cyan-500', bg: 'bg-cyan-500' },
  { id: 'blue', name: 'Indigo Blue', color: '#3b82f6', border: 'border-blue-500', bg: 'bg-blue-500' },
  { id: 'emerald', name: 'Forest Green', color: '#10b981', border: 'border-emerald-500', bg: 'bg-emerald-500' },
  { id: 'violet', name: 'Vibrant Violet', color: '#8b5cf6', border: 'border-violet-500', bg: 'bg-violet-500' },
  { id: 'rose', name: 'Electric Rose', color: '#f43f5e', border: 'border-rose-500', bg: 'bg-rose-500' },
  { id: 'amber', name: 'Warm Amber', color: '#f59e0b', border: 'border-amber-500', bg: 'bg-amber-500' },
];

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('cv_theme');
    if (saved) return saved;
    return 'dark';
  });

  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('cv_lang') || 'en';
  });

  const [accent, setAccent] = useState(() => {
    return localStorage.getItem('cv_accent') || 'mint';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('cv_theme', theme);
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('lang', language);
    root.setAttribute('dir', language === 'fa' ? 'rtl' : 'ltr');
    localStorage.setItem('cv_lang', language);
  }, [language]);

  useEffect(() => {
    const root = document.documentElement;
    if (accent === 'blue') {
      root.removeAttribute('data-accent');
    } else {
      root.setAttribute('data-accent', accent);
    }
    localStorage.setItem('cv_accent', accent);
  }, [accent]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'fa' : 'en'));
  };

  const isRTL = language === 'fa';
  const cvData = isRTL ? cvDataFa : cvDataEn;
  const t = translations[language] || translations.en;

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        accent,
        setAccent,
        accentsList: ACCENT_COLORS,
        language,
        setLanguage,
        toggleLanguage,
        isRTL,
        cvData,
        t,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
