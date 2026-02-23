import type { Language } from '@/lib/translations';

export const locales: Language[] = ['es', 'en'];
export const defaultLocale: Language = 'es';

export function isLocale(value: string): value is Language {
  return locales.includes(value as Language);
}

export function localePrefix(language: Language): string {
  return language === defaultLocale ? '' : `/${language}`;
}

export function localePath(language: Language, path = '/'): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const normalized = normalizedPath === '' ? '/' : normalizedPath;
  const prefix = localePrefix(language);
  if (normalized === '/') {
    return prefix || '/';
  }
  return `${prefix}${normalized}`;
}
