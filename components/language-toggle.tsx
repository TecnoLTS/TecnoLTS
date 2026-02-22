'use client';

import { usePathname } from 'next/navigation';
import type { Language } from '@/lib/translations';

interface LanguageToggleProps {
  initialLanguage?: Language;
}

const toggleButtonClass =
  'inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2';

const resolveLanguageFromPath = (
  pathname: string,
  fallback: Language
): Language => {
  const pathLanguage = pathname.split('/')[1];
  return pathLanguage === 'en' || pathLanguage === 'es'
    ? pathLanguage
    : fallback;
};

export function LanguageToggle({
  initialLanguage = 'es',
}: LanguageToggleProps) {
  const pathname = usePathname();
  const currentLanguage = resolveLanguageFromPath(pathname || '/', initialLanguage);

  const nextLang = currentLanguage === 'en' ? 'es' : 'en';
  const title = currentLanguage === 'en' ? 'Cambiar a Español' : 'Switch to English';

  const handleToggle = () => {
    const currentPath = pathname || window.location.pathname || '/';
    const withoutLang = currentPath.replace(/^\/(en|es)(?=\/|$)/, '') || '/';
    const destination = `/${nextLang}${withoutLang === '/' ? '' : withoutLang}`;
    const query = window.location.search;
    const hash = window.location.hash;

    window.location.assign(`${destination}${query}${hash}`);
  };

  return (
    <button
      type="button"
      className={toggleButtonClass}
      onClick={handleToggle}
      aria-label="Toggle language"
      title={title}
    >
      <div className="flex items-center justify-center gap-1">
        <span className="text-xs font-medium">{currentLanguage === 'en' ? 'ES' : 'EN'}</span>
      </div>
      <span className="sr-only">Toggle language</span>
    </button>
  );
}
