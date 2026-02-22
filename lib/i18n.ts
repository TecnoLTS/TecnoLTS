import type { Language } from '@/lib/translations';

export const locales: Language[] = ['es', 'en'];

export function isLocale(value: string): value is Language {
  return locales.includes(value as Language);
}
