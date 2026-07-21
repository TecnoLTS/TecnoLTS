'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import {
  BarChart3,
  Check,
  FileSpreadsheet,
  Send,
  Upload,
  UploadCloud,
  Wallet,
  type LucideIcon,
} from 'lucide-react';

interface FeatureCard {
  headline: string;
  description: string;
}

interface LoyaltyRewardsFeatureCardsProps {
  title: string;
  subtitle: string;
  cards: FeatureCard[];
}

const icons: LucideIcon[] = [Upload, Send, BarChart3];

/* ---------- Shared stage frame ---------- */

function Stage({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`relative w-full max-w-xl rounded-[1.75rem] bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800/50 dark:to-slate-900/40 ring-1 ring-slate-200/70 dark:ring-slate-700/50 p-5 sm:p-8 ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_60%)]" />
      <div className="relative">{children}</div>
    </div>
  );
}

/* ---------- 1. Bulk import ---------- */

function ImportMockup() {
  const rows = [
    ['Juan García', 'juan@mail.com', '+593 99…'],
    ['María López', 'maria@mail.com', '+593 98…'],
    ['Carlos Ruiz', 'carlos@mail.com', '+593 96…'],
    ['Ana Salazar', 'ana@mail.com', '+593 95…'],
  ];
  return (
    <Stage>
      <div className="rounded-2xl bg-white dark:bg-slate-900 shadow-xl ring-1 ring-slate-200/70 dark:ring-slate-800 p-5 sm:p-6">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
              <UploadCloud className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                Import customers
              </div>
              <div className="text-[11px] text-slate-400">Step 2 of 3</div>
            </div>
          </div>
          <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400">
            Ready
          </span>
        </div>

        <div className="border-2 border-dashed border-blue-300 dark:border-blue-600/50 rounded-xl px-4 py-6 text-center bg-blue-50/70 dark:bg-blue-900/20">
          <div className="mx-auto mb-2 flex h-11 w-11 items-center justify-center rounded-xl bg-white dark:bg-slate-800 shadow-sm ring-1 ring-slate-200/70 dark:ring-slate-700">
            <FileSpreadsheet className="h-5 w-5 text-blue-600 dark:text-cyan-400" />
          </div>
          <div className="text-sm font-semibold text-slate-700 dark:text-slate-200">
            clientes.xlsx
          </div>
          <div className="text-[11px] text-slate-400 mt-0.5">CSV · XLSX — Name, Email, Phone</div>
        </div>

        <div className="mt-4 overflow-hidden rounded-xl ring-1 ring-slate-200/80 dark:ring-slate-800">
          <div className="grid grid-cols-[1.2fr_1.3fr_0.9fr] gap-2 bg-slate-50 dark:bg-slate-800/60 px-3 py-2 text-[11px] font-semibold text-slate-500 dark:text-slate-400">
            <span>Name</span>
            <span>Email</span>
            <span>Phone</span>
          </div>
          {rows.map(([name, email, phone]) => (
            <div
              key={email}
              className="grid grid-cols-[1.2fr_1.3fr_0.9fr] gap-2 px-3 py-2 text-[11px] text-slate-700 dark:text-slate-200 border-t border-slate-100 dark:border-slate-800"
            >
              <span className="truncate">{name}</span>
              <span className="truncate text-slate-500 dark:text-slate-400">{email}</span>
              <span className="truncate text-slate-500 dark:text-slate-400">{phone}</span>
            </div>
          ))}
          <div className="px-3 py-2 text-[11px] text-slate-400 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
            + 2,546 more rows
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
            <Check className="h-3.5 w-3.5" />
            2,550 records · 0 errors
          </div>
          <button className="rounded-lg bg-blue-600 hover:bg-blue-700 px-4 py-2 text-xs font-bold text-white transition-colors">
            Import all
          </button>
        </div>
      </div>

      {/* Floating success toast */}
      <div className="absolute -top-3 -right-2 sm:-right-4 flex items-center gap-2 rounded-xl bg-white dark:bg-slate-800 px-3 py-2 shadow-xl ring-1 ring-slate-200/70 dark:ring-slate-700">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white">
          <Check className="h-3.5 w-3.5" />
        </div>
        <div className="text-[11px] font-bold text-slate-800 dark:text-slate-100 leading-tight">
          2,550 imported
          <div className="font-normal text-slate-400">in 4 seconds</div>
        </div>
      </div>
    </Stage>
  );
}

/* ---------- 2. Campaigns → wallet ---------- */

function CampaignMockup() {
  return (
    <Stage className="pb-14 sm:pb-8">
      {/* Composer card */}
      <div className="rounded-2xl bg-white dark:bg-slate-900 shadow-xl ring-1 ring-slate-200/70 dark:ring-slate-800 p-5 sm:p-6 sm:pr-24">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
              <Send className="h-4 w-4" />
            </div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">New campaign</div>
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <div className="text-[11px] font-semibold text-slate-400 mb-1">Title</div>
            <div className="rounded-lg border border-slate-200 dark:border-slate-700 px-3 py-2 text-sm font-medium text-slate-800 dark:text-slate-100">
              Weekend Special 🎉
            </div>
          </div>
          <div>
            <div className="text-[11px] font-semibold text-slate-400 mb-1">Message</div>
            <div className="rounded-lg border border-slate-200 dark:border-slate-700 px-3 py-2 text-sm text-slate-600 dark:text-slate-300">
              Double points on every purchase this weekend!
            </div>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-slate-50 dark:bg-slate-800/60 px-3 py-2">
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
              Audience
            </span>
            <span className="text-xs font-bold text-slate-800 dark:text-slate-100">
              All members · 12,450
            </span>
          </div>
          <button className="w-full flex items-center justify-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 py-2.5 text-sm font-bold text-white transition-colors">
            <Send className="h-4 w-4" />
            Send to Google Wallet
          </button>
        </div>
      </div>

      {/* Floating phone with wallet push notification */}
      <div className="absolute right-2 -bottom-6 sm:right-3 sm:-bottom-2 w-36 sm:w-44 rotate-3">
        <div className="rounded-[1.75rem] bg-slate-900 p-1.5 shadow-2xl ring-1 ring-black/20">
          <div className="rounded-[1.4rem] overflow-hidden bg-gradient-to-br from-indigo-500 via-blue-600 to-cyan-500 aspect-[9/17]">
            {/* status bar */}
            <div className="flex items-center justify-between px-3 pt-2 text-[8px] font-semibold text-white/90">
              <span>9:41</span>
              <span>●●● ▮</span>
            </div>
            <div className="mt-2 text-center text-[9px] font-medium text-white/80">Fri, Jun 6</div>
            <div className="mt-1 text-center text-3xl font-bold text-white tracking-tight">
              9:41
            </div>

            {/* notification */}
            <div className="mt-4 mx-2 rounded-xl bg-white/95 backdrop-blur px-2.5 py-2 shadow-lg">
              <div className="flex items-center gap-1.5 mb-1">
                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500">
                  <Wallet className="h-2.5 w-2.5 text-white" />
                </div>
                <span className="text-[8px] font-semibold text-slate-500">Google Wallet</span>
                <span className="ml-auto text-[7px] text-slate-400">now</span>
              </div>
              <div className="text-[9px] font-bold text-slate-900 leading-tight">Aroma Café</div>
              <div className="text-[8px] text-slate-600 leading-snug">
                🎉 Double points this weekend!
              </div>
            </div>
          </div>
        </div>
      </div>
    </Stage>
  );
}

/* ---------- 3. Dashboard ---------- */

// Brand categorical hues (validated for CVD; contrast relieved by direct labels).
const C_BLUE = '#2563eb';
const C_CYAN = '#06b6d4';
const C_AMBER = '#f59e0b';

function Panel({
  title,
  right,
  children,
  className = '',
}: {
  title: string;
  right?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl bg-slate-50 dark:bg-slate-800/50 ring-1 ring-slate-200/70 dark:ring-slate-700/50 p-3 ${className}`}
    >
      <div className="mb-2 flex items-center justify-between">
        <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-300">{title}</span>
        {right}
      </div>
      {children}
    </div>
  );
}

function LegendDot({ color, label }: { color: string; label: string }) {
  return (
    <span className="flex items-center gap-1 text-[9px] font-medium text-slate-500 dark:text-slate-400">
      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: color }} />
      {label}
    </span>
  );
}

function DashboardMockup() {
  // Grouped bars: points earned vs redeemed, 5 recent weeks.
  const earned = [40, 52, 34, 46, 50];
  const redeemed = [22, 30, 18, 26, 28];
  const groupX = [20, 60, 100, 140, 180];

  // Members by tier (real tier distribution: most customers start at Bronce).
  const tiers = [
    { label: 'Bronce', pct: 65, offset: 0, color: C_BLUE },
    { label: 'Plata', pct: 22, offset: -65, color: C_CYAN },
    { label: 'Oro', pct: 13, offset: -87, color: C_AMBER },
  ];

  return (
    <Stage className="pb-12 sm:pb-8">
      <div className="rounded-2xl bg-white dark:bg-slate-900 shadow-xl ring-1 ring-slate-200/70 dark:ring-slate-800 p-4 sm:p-5">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <div className="text-sm font-bold text-slate-900 dark:text-white">Loyalty analytics</div>
          <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-[10px] font-medium text-slate-500 dark:text-slate-400">
            Last 30 days
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {/* Line — points activity */}
          <Panel
            title="Points activity"
            right={<span className="text-[10px] font-bold text-blue-600 dark:text-cyan-400">+18%</span>}
          >
            <svg viewBox="0 0 200 66" className="w-full">
              <defs>
                <linearGradient id="lr-area" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={C_BLUE} stopOpacity="0.25" />
                  <stop offset="100%" stopColor={C_BLUE} stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0 48 C 20 44, 30 30, 50 34 S 80 20, 100 30 S 140 12, 160 20 S 185 8, 200 12"
                fill="none"
                stroke={C_BLUE}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M0 48 C 20 44, 30 30, 50 34 S 80 20, 100 30 S 140 12, 160 20 S 185 8, 200 12 L200 66 L0 66 Z"
                fill="url(#lr-area)"
              />
              <circle cx="200" cy="12" r="3.5" fill={C_BLUE} stroke="white" strokeWidth="1.5" />
            </svg>
            <div className="mt-1 flex justify-between text-[8px] font-medium text-slate-400">
              <span>Jan</span>
              <span>Mar</span>
              <span>May</span>
              <span>Jul</span>
            </div>
          </Panel>

          {/* Bars — earned vs redeemed */}
          <Panel
            title="Earned vs redeemed"
            right={
              <span className="flex gap-2">
                <LegendDot color={C_BLUE} label="Earned" />
                <LegendDot color={C_CYAN} label="Redeemed" />
              </span>
            }
          >
            <svg viewBox="0 0 200 66" className="w-full">
              <line x1="0" y1="58" x2="200" y2="58" stroke="currentColor" strokeWidth="1" className="text-slate-200 dark:text-slate-700" />
              {groupX.map((cx, i) => (
                <g key={cx}>
                  <rect x={cx - 13} y={58 - earned[i]} width="12" height={earned[i]} rx="2" fill={C_BLUE} />
                  <rect x={cx + 1} y={58 - redeemed[i]} width="12" height={redeemed[i]} rx="2" fill={C_CYAN} />
                </g>
              ))}
            </svg>
          </Panel>

          {/* Donut — members by tier */}
          <Panel title="Members by tier">
            <div className="flex items-center gap-3">
              <div className="relative h-[4.5rem] w-[4.5rem] flex-shrink-0">
                <svg viewBox="0 0 40 40" className="h-full w-full -rotate-90">
                  {tiers.map((t) => (
                    <circle
                      key={t.label}
                      cx="20"
                      cy="20"
                      r="15.915"
                      fill="none"
                      stroke={t.color}
                      strokeWidth="5"
                      pathLength={100}
                      strokeDasharray={`${t.pct} ${100 - t.pct}`}
                      strokeDashoffset={t.offset}
                    />
                  ))}
                </svg>
                <span className="absolute inset-0 flex flex-col items-center justify-center leading-none">
                  <span className="text-sm font-extrabold text-slate-900 dark:text-white">12.4K</span>
                  <span className="text-[7px] font-medium text-slate-400">members</span>
                </span>
              </div>
              <div className="space-y-1.5">
                {tiers.map((t) => (
                  <div key={t.label} className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: t.color }} />
                    <span className="text-[10px] font-medium text-slate-600 dark:text-slate-300">{t.label}</span>
                    <span className="text-[10px] font-bold text-slate-900 dark:text-white tabular-nums">{t.pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </Panel>

          {/* Ring — digital card adoption */}
          <Panel title="Digital card adoption">
            <div className="flex items-center gap-3">
              <div className="relative h-[4.5rem] w-[4.5rem] flex-shrink-0">
                <svg viewBox="0 0 40 40" className="h-full w-full -rotate-90">
                  <circle cx="20" cy="20" r="15.915" fill="none" strokeWidth="5" stroke="currentColor" className="text-slate-200 dark:text-slate-700" />
                  <circle
                    cx="20"
                    cy="20"
                    r="15.915"
                    fill="none"
                    strokeWidth="5"
                    stroke={C_BLUE}
                    strokeLinecap="round"
                    pathLength={100}
                    strokeDasharray="92 8"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-sm font-extrabold text-blue-600 dark:text-cyan-400">
                  92%
                </span>
              </div>
              <div className="text-[10px] leading-snug text-slate-500 dark:text-slate-400">
                <span className="font-semibold text-slate-700 dark:text-slate-200">Google &amp; Apple Wallet</span>
                <br />
                saved by 11.4K of 12.4K members
              </div>
            </div>
          </Panel>
        </div>
      </div>

      {/* Floating insight, echoing the reference's soft-shadow callouts */}
      <div className="absolute -top-3 -right-2 sm:-right-4 flex items-center gap-2 rounded-xl bg-white dark:bg-slate-800 px-3 py-2 shadow-xl ring-1 ring-slate-200/70 dark:ring-slate-700">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white">
          <BarChart3 className="h-3.5 w-3.5" />
        </div>
        <div className="text-[11px] font-bold text-slate-800 dark:text-slate-100 leading-tight">
          9 reports
          <div className="font-normal text-slate-400">CSV · Excel export</div>
        </div>
      </div>
    </Stage>
  );
}

const mockups = [ImportMockup, CampaignMockup, DashboardMockup];

/* ---------- Section ---------- */

export default function LoyaltyRewardsFeatureCards({
  title,
  subtitle,
  cards,
}: LoyaltyRewardsFeatureCardsProps) {
  const [active, setActive] = useState(0);
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.index);
            if (!Number.isNaN(idx)) setActive(idx);
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    blockRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">{subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left: scrolling text blocks */}
          <div>
            {cards.map((card, i) => {
              const Icon = icons[i];
              const Mockup = mockups[i];
              const isActive = active === i;
              return (
                <div
                  key={card.headline}
                  data-index={i}
                  ref={(el) => {
                    blockRefs.current[i] = el;
                  }}
                  className={`border-l-2 pl-6 sm:pl-8 py-8 sm:py-12 transition-colors duration-500 ${
                    isActive
                      ? 'border-blue-600 dark:border-cyan-400'
                      : 'border-slate-200 dark:border-slate-800'
                  }`}
                >
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl mb-5 transition-colors duration-500 ${
                      isActive
                        ? 'bg-gradient-to-br from-blue-500 to-cyan-500 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3
                    className={`text-xl sm:text-2xl font-bold mb-3 leading-tight transition-colors duration-500 ${
                      isActive
                        ? 'text-blue-600 dark:text-cyan-400'
                        : 'text-slate-900 dark:text-white'
                    }`}
                  >
                    {card.headline}
                  </h3>
                  <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {card.description}
                  </p>

                  {/* Mobile: inline mockup under each block */}
                  <div className="lg:hidden mt-8 flex justify-center">
                    <Mockup />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: sticky cross-fading mockup (desktop) */}
          <div className="hidden lg:block">
            <div className="sticky top-24 flex items-center justify-center min-h-[36rem]">
              <div className="relative w-full flex items-center justify-center">
                {mockups.map((Mockup, i) => (
                  <div
                    key={i}
                    className={`transition-all duration-500 ease-out flex items-center justify-center ${
                      active === i
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-4 absolute inset-0 pointer-events-none'
                    }`}
                    aria-hidden={active !== i}
                  >
                    <Mockup />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
