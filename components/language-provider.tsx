"use client"

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';
import { translations, Language, type TranslationStructure } from '@/lib/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationStructure;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({
  children,
  initialLanguage = 'es'
}: {
  children: React.ReactNode;
  initialLanguage?: Language;
}) {
  const pathname = usePathname();
  const [language, setLanguageState] = useState<Language>(initialLanguage);

  const pathLanguage = useMemo<Language | null>(() => {
    const segment = pathname?.split('/')[1];
    if (segment === 'en' || segment === 'es') {
      return segment;
    }
    return null;
  }, [pathname]);

  const resolvedLanguage = pathLanguage ?? language;

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = resolvedLanguage;
    }
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', resolvedLanguage);
    }
  }, [resolvedLanguage]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const value: LanguageContextType = {
    language: resolvedLanguage,
    setLanguage,
    t: translations[resolvedLanguage] as TranslationStructure,
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
