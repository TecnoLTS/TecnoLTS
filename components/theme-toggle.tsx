'use client';

import * as React from 'react';

const toggleButtonClass =
  'inline-flex h-10 w-10 items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2';

export function ThemeToggle() {
  const [mounted, setMounted] = React.useState(false);
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    const root = document.documentElement;
    setIsDark(root.classList.contains('dark'));
    setMounted(true);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = () => {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
        return;
      }
      const dark = mediaQuery.matches;
      root.classList.toggle('dark', dark);
      root.style.colorScheme = dark ? 'dark' : 'light';
      setIsDark(dark);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleSystemThemeChange);
      return () =>
        mediaQuery.removeEventListener('change', handleSystemThemeChange);
    }

    mediaQuery.addListener(handleSystemThemeChange);
    return () => mediaQuery.removeListener(handleSystemThemeChange);
  }, []);

  const handleToggle = () => {
    const root = document.documentElement;
    const nextDark = !isDark;
    root.classList.toggle('dark', nextDark);
    root.style.colorScheme = nextDark ? 'dark' : 'light';
    localStorage.setItem('theme', nextDark ? 'dark' : 'light');
    setIsDark(nextDark);
  };

  if (!mounted) {
    return (
      <button type="button" className={toggleButtonClass} aria-label="Toggle theme">
        <span className="text-base leading-none">○</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      className={toggleButtonClass}
      aria-label="Toggle theme"
    >
      <span className="text-lg leading-none">{isDark ? '☀' : '☾'}</span>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
