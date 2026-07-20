'use client';

import { useEffect, useRef, useState } from 'react';

interface NavigationDropdownItem {
  href: string;
  iconId: string;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
}

interface NavigationDesktopDropdownProps {
  label: string;
  href: string;
  items: NavigationDropdownItem[];
  columns?: 2 | 3;
}

const CLOSE_DELAY_MS = 200;

export default function NavigationDesktopDropdown({
  label,
  href,
  items,
  columns = 2,
}: NavigationDesktopDropdownProps) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), CLOSE_DELAY_MS);
  };

  const gridColsClass =
    columns === 3
      ? 'grid-cols-[repeat(3,minmax(210px,max-content))]'
      : 'grid-cols-[repeat(2,minmax(210px,max-content))]';

  return (
    <div className="relative">
      <a
        href={href}
        className="flex items-center gap-1.5 text-[15px] text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors font-medium py-2"
        aria-haspopup="menu"
        aria-expanded={open}
        onMouseEnter={() => {
          cancelClose();
          setOpen(true);
        }}
        onMouseLeave={scheduleClose}
        onFocus={() => {
          cancelClose();
          setOpen(true);
        }}
        onBlur={scheduleClose}
      >
        {label}
        <svg
          className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          focusable="false"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </a>

      {/* Dims the page behind the panel, like the reference design. Stops at the navbar so it stays visible on top. */}
      <div
        className={`fixed inset-x-0 top-16 bottom-0 z-40 bg-slate-900/40 transition-opacity duration-200 ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        aria-hidden="true"
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
      />

      <div
        className={`fixed left-1/2 top-16 z-50 max-w-[92vw] -translate-x-1/2 pt-3 transition-all duration-200 ${
          open
            ? 'opacity-100 visible translate-y-0 pointer-events-auto'
            : 'opacity-0 invisible translate-y-1 pointer-events-none'
        }`}
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
      >
        <div className="rounded-2xl border border-slate-200/80 bg-white shadow-2xl shadow-slate-900/10 dark:border-slate-700/80 dark:bg-slate-800 overflow-hidden">
          <div className="px-8 py-7">
            <div className="mb-4 border-b border-slate-100 pb-3 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:border-slate-700 dark:text-slate-500">
              {label}
            </div>
            <div className={`grid ${gridColsClass} gap-x-10 gap-y-5`}>
              {items.map((item) => (
                <a key={item.href} href={item.href} className="group/item flex items-start gap-3">
                  <div
                    className={`mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg ${item.bgColor}`}
                  >
                    <svg
                      className={`h-4 w-4 ${item.iconColor}`}
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
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-slate-800 dark:text-slate-100 transition-colors group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400">
                      {item.title}
                    </div>
                    <p className="mt-0.5 line-clamp-2 text-xs leading-snug text-slate-500 dark:text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
