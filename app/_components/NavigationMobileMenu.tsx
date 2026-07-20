'use client';

import { useState } from 'react';

interface NavigationMobileItem {
  href: string;
  iconId: string;
  title: string;
  bgColor: string;
  iconColor: string;
}

interface NavigationMobileSection {
  label: string;
  href: string;
  linkLabel: string;
  items: NavigationMobileItem[];
}

interface NavigationMobileMenuProps {
  ariaLabel: string;
  homeHref: string;
  homeLabel: string;
  sections: NavigationMobileSection[];
  contactHref: string;
  contactLabel: string;
}

export default function NavigationMobileMenu({
  ariaLabel,
  homeHref,
  homeLabel,
  sections,
  contactHref,
  contactLabel,
}: NavigationMobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClickCapture = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    if (target.closest('a')) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors touch-manipulation"
        aria-label={ariaLabel}
        aria-expanded={isOpen}
        aria-controls="mobile-nav-menu"
      >
        <span className="text-xl leading-none">{isOpen ? '×' : '☰'}</span>
      </button>

      {isOpen && (
        <div
          id="mobile-nav-menu"
          className="md:hidden fixed top-16 inset-x-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 shadow-2xl animate-fade-in"
          onClickCapture={handleMenuClickCapture}
        >
          <div className="px-4 py-4 space-y-3 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <a
              href={homeHref}
              className="block px-3 py-2.5 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-sm font-medium"
            >
              {homeLabel}
            </a>

            {sections.map((section) => (
              <div key={section.href} className="space-y-2">
                <a
                  href={section.href}
                  className="block px-3 py-2.5 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-sm font-medium"
                >
                  {section.linkLabel}
                </a>
                <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 px-3 mb-2 uppercase tracking-wider">
                  {section.label}
                </div>
                {section.items.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors group min-w-0"
                  >
                    <div
                      className={`w-10 h-10 rounded-xl ${item.bgColor} flex items-center justify-center transition-transform group-active:scale-95 flex-shrink-0`}
                    >
                      <svg
                        className={`w-5 h-5 ${item.iconColor}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <use href={`#${item.iconId}`} />
                      </svg>
                    </div>
                    <span className="min-w-0 flex-1 break-words leading-snug text-slate-700 dark:text-slate-300 text-sm font-medium">
                      {item.title}
                    </span>
                  </a>
                ))}
              </div>
            ))}

            <div className="border-t border-slate-200 dark:border-slate-700 pt-4 space-y-2">
              <a
                href={contactHref}
                className="block px-3 py-2.5 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-sm font-medium"
              >
                {contactLabel}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
