"use client"

import React, { createContext, useContext, useEffect, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { translations, Language, type TranslationStructure } from '@/lib/translations';

interface LanguageContextType {
  language: Language;
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

  const pathLanguage = useMemo<Language | null>(() => {
    const segment = pathname?.split('/')[1];
    if (segment === 'en' || segment === 'es') {
      return segment;
    }
    return null;
  }, [pathname]);

  const resolvedLanguage = pathLanguage ?? initialLanguage;

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = resolvedLanguage;
    }
  }, [resolvedLanguage]);

  const value: LanguageContextType = {
    language: resolvedLanguage,
    t: translations[resolvedLanguage],
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
