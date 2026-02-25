'use client';

import { useEffect, useState } from 'react';
import type { TranslationStructure } from '@/lib/translations';

interface ScrollToTopButtonProps {
  t: TranslationStructure;
}

export default function ScrollToTopButton({ t }: ScrollToTopButtonProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frameId: number | null = null;

    const updateVisibility = () => {
      const shouldShow = window.scrollY >= 320;
      setVisible((prev) => (prev === shouldShow ? prev : shouldShow));
      frameId = null;
    };

    const handleScroll = () => {
      if (frameId !== null) {
        return;
      }
      frameId = window.requestAnimationFrame(updateVisibility);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-4 sm:right-6 z-50 transition-all duration-300 ${
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <a
        href="#top"
        className="relative bg-gradient-to-br from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
        aria-label={t.ui.scrollTopAria}
      >
        <span className="w-5 h-5 relative z-10 flex items-center justify-center text-base leading-none">↑</span>
        <span className="absolute right-full mr-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-xl border border-gray-700">
          {t.ui.scrollTopText}
        </span>
      </a>
    </div>
  );
}
