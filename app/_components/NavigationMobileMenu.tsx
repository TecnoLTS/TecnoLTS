'use client';

import { useState } from 'react';

interface NavigationMobileServiceItem {
  href: string;
  iconId: string;
  title: string;
  bgColor: string;
  iconColor: string;
  mobileHover: string;
}

interface NavigationMobileMenuProps {
  ariaLabel: string;
  homeHref: string;
  homeLabel: string;
  servicesHref: string;
  servicesLinkLabel: string;
  servicesLabel: string;
  contactHref: string;
  contactLabel: string;
  services: NavigationMobileServiceItem[];
}

export default function NavigationMobileMenu({
  ariaLabel,
  homeHref,
  homeLabel,
  servicesHref,
  servicesLinkLabel,
  servicesLabel,
  contactHref,
  contactLabel,
  services,
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
        className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors touch-manipulation"
        aria-label={ariaLabel}
        aria-expanded={isOpen}
        aria-controls="mobile-nav-menu"
      >
        <span className="text-xl leading-none">{isOpen ? '×' : '☰'}</span>
      </button>

      {isOpen && (
        <div
          id="mobile-nav-menu"
          className="md:hidden fixed top-16 inset-x-0 bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700 shadow-2xl animate-fade-in"
          onClickCapture={handleMenuClickCapture}
        >
          <div className="px-4 py-4 space-y-3 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <a
              href={homeHref}
              className="block px-3 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors text-sm font-medium"
            >
              {homeLabel}
            </a>
            <a
              href={servicesHref}
              className="block px-3 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors text-sm font-medium"
            >
              {servicesLinkLabel}
            </a>
            <div className="space-y-2">
              <div className="text-sm font-semibold text-gray-400 dark:text-gray-500 px-3 mb-2 uppercase tracking-wider">
                {servicesLabel}
              </div>
              {services.map((service) => {
                return (
                  <a
                    key={service.href}
                    href={service.href}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg ${service.mobileHover} transition-colors group min-w-0`}
                  >
                    <div className={`w-10 h-10 rounded-xl ${service.bgColor} flex items-center justify-center transition-transform group-active:scale-95`}>
                      <svg
                        className={`w-5 h-5 ${service.iconColor}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <use href={`#${service.iconId}`} />
                      </svg>
                    </div>
                    <span className="min-w-0 flex-1 break-words leading-snug text-gray-700 dark:text-gray-300 text-sm font-medium">
                      {service.title}
                    </span>
                  </a>
                );
              })}
            </div>

            <div className="border-t border-gray-200 dark:border-slate-700 pt-4 space-y-2">
              <a
                href={contactHref}
                className="block px-3 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors text-sm font-medium"
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
