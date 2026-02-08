"use client"

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Language } from '@/lib/translations';

type TranslationStructure = typeof translations.en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationStructure;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const pathLang = window.location.pathname.split('/').filter(Boolean)[0] as Language | undefined;
    if (pathLang === 'en' || pathLang === 'es') {
      setLanguageState(pathLang);
      localStorage.setItem('language', pathLang);
      return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang') as Language | null;
    if (urlLang === 'en' || urlLang === 'es') {
      setLanguageState(urlLang);
      localStorage.setItem('language', urlLang);
      return;
    }

    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'es')) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language] as TranslationStructure,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
