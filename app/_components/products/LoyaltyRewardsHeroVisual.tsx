import { Award, Gift, QrCode, Scan, Sparkles, Star, Wallet, Zap } from 'lucide-react';

interface HeroVisualActivity {
  label: string;
  pts: string;
}

interface LoyaltyRewardsHeroVisualProps {
  programLabel: string;
  program: string;
  memberLabel: string;
  member: string;
  pointsLabel: string;
  points: string;
  tier: string;
  recentActivity: string;
  activity: HeroVisualActivity[];
  catalogCta: string;
  availableOn: string;
  scanToJoin: string;
  levelUpTitle: string;
  levelUpSub: string;
  scanPoints: string;
}

export default function LoyaltyRewardsHeroVisual({
  programLabel,
  program,
  memberLabel,
  member,
  pointsLabel,
  points,
  tier,
  recentActivity,
  activity,
  catalogCta,
  availableOn,
  scanToJoin,
  levelUpTitle,
  levelUpSub,
  scanPoints,
}: LoyaltyRewardsHeroVisualProps) {
  return (
    <div className="relative flex h-full w-full select-none items-center justify-center scale-[1.08] lg:scale-[1.15]">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      {/* Phone frame */}
      <div className="relative z-10 animate-float">
        <div className="relative w-[220px] rounded-[2.5rem] border border-white/10 bg-gray-900 p-2.5 shadow-2xl shadow-blue-900/40 sm:w-[240px]">
          {/* Notch */}
          <div className="absolute left-1/2 top-0 z-20 h-5 w-20 -translate-x-1/2 rounded-b-2xl bg-gray-900" />

          {/* Screen */}
          <div className="relative aspect-[9/19] overflow-hidden rounded-[2rem] bg-gray-100">
            {/* Status bar */}
            <div className="flex items-center justify-between bg-gray-50 px-4 pb-1 pt-6">
              <span className="text-[9px] font-semibold text-gray-700">9:41</span>
              <div className="flex items-center gap-1">
                <div className="h-1.5 w-3 rounded-sm bg-gray-700" />
                <div className="h-1.5 w-1 rounded-sm bg-gray-400" />
              </div>
            </div>

            {/* Wallet header */}
            <div className="border-b border-gray-200 bg-gray-50 px-3 py-1.5">
              <p className="text-center text-[8px] font-medium uppercase tracking-wider text-gray-400">
                Wallet
              </p>
            </div>

            {/* Wallet card */}
            <div className="mx-3 mt-3 rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 p-3.5 shadow-lg shadow-blue-600/30">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[7px] font-medium uppercase tracking-widest text-white/60">
                    {programLabel}
                  </p>
                  <p className="mt-0.5 text-[9px] font-bold leading-tight text-white">{program}</p>
                </div>
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-white/15">
                  <Wallet className="h-3 w-3 text-white" />
                </div>
              </div>

              <div className="mt-3">
                <p className="text-[6px] uppercase tracking-widest text-white/50">{memberLabel}</p>
                <p className="mt-0.5 text-[10px] font-bold text-white">{member}</p>
              </div>

              <div className="mt-2.5 flex items-end justify-between">
                <div>
                  <p className="text-[6px] uppercase tracking-widest text-white/50">{pointsLabel}</p>
                  <p className="mt-0.5 text-[22px] font-extrabold leading-none text-white">{points}</p>
                </div>
                <div className="flex items-center gap-1 rounded-full bg-white/15 px-2 py-1">
                  <Award className="h-2.5 w-2.5 text-amber-300" />
                  <span className="text-[7px] font-semibold text-white">{tier}</span>
                </div>
              </div>

              {/* Barcode lines */}
              <div className="mt-3 flex items-center gap-0.5 opacity-60">
                {Array.from({ length: 28 }).map((_, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-white/80"
                    style={{ width: 1.5, height: i % 3 === 0 ? 12 : 7 }}
                  />
                ))}
              </div>
            </div>

            {/* Recent activity */}
            <div className="mx-3 mt-2.5 space-y-1.5">
              <p className="px-0.5 text-[9px] font-semibold uppercase tracking-wider text-gray-400">
                {recentActivity}
              </p>
              {activity.map((item, i) => {
                const isEarn = item.pts.trim().startsWith('+');
                return (
                  <div
                    key={i}
                    className="flex items-center justify-between rounded-lg bg-white px-2 py-1.5 shadow-sm"
                  >
                    <div className="flex items-center gap-1.5">
                      <div
                        className={`flex h-4 w-4 items-center justify-center rounded-full ${
                          isEarn ? 'bg-emerald-100' : 'bg-rose-100'
                        }`}
                      >
                        {isEarn ? (
                          <Zap className="h-2 w-2 text-emerald-600" />
                        ) : (
                          <Gift className="h-2 w-2 text-rose-500" />
                        )}
                      </div>
                      <span className="text-[9px] font-medium text-gray-600">{item.label}</span>
                    </div>
                    <span
                      className={`text-[10px] font-bold ${
                        isEarn ? 'text-emerald-600' : 'text-rose-500'
                      }`}
                    >
                      {item.pts}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Catalog CTA */}
            <div className="mx-3 mt-2.5">
              <button className="flex w-full items-center justify-center gap-1 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-2 text-[8px] font-bold text-white shadow-md shadow-blue-500/30">
                <Gift className="h-2.5 w-2.5" />
                {catalogCta}
              </button>
            </div>

            {/* Bottom bar */}
            <div className="mt-2 flex items-center justify-center gap-5 py-3">
              <div className="h-1 w-1 rounded-full bg-gray-300" />
              <div className="h-1 w-8 rounded-full bg-gray-800" />
              <div className="h-1 w-1 rounded-full bg-gray-300" />
            </div>
          </div>
        </div>

        {/* Home indicator */}
        <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-gray-700" />
      </div>

      {/* Floating badge — Google Wallet */}
      <div className="animate-float-delay-1 absolute -right-2 top-2 z-20 sm:-right-6 sm:top-4">
        <div className="flex items-center gap-2 rounded-xl border border-gray-100 bg-white px-3 py-2 shadow-xl">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500">
            <Wallet className="h-4 w-4 text-white" />
          </div>
          <div>
            <p className="text-[8px] leading-none text-gray-400">{availableOn}</p>
            <p className="mt-0.5 text-[11px] font-bold leading-none text-gray-800">Google Wallet</p>
          </div>
        </div>
      </div>

      {/* Floating badge — Apple Wallet */}
      <div className="animate-float-delay-2 absolute -left-4 top-16 z-20 sm:-left-8 sm:top-20">
        <div className="flex items-center gap-2 rounded-xl border border-gray-100 bg-white px-3 py-2 shadow-xl">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500">
            <Wallet className="h-4 w-4 text-white" />
          </div>
          <div>
            <p className="text-[8px] leading-none text-gray-400">{availableOn}</p>
            <p className="mt-0.5 text-[11px] font-bold leading-none text-gray-800">Apple Wallet</p>
          </div>
        </div>
      </div>

      {/* Floating QR badge */}
      <div className="animate-float-delay-3 absolute -right-3 bottom-20 z-20 sm:-right-8 sm:bottom-24">
        <div className="flex flex-col items-center gap-1 rounded-xl border border-gray-100 bg-white p-2.5 shadow-xl">
          <QrCode className="h-10 w-10 text-gray-800" />
          <p className="text-center text-[8px] font-semibold leading-tight text-gray-500">
            {scanToJoin}
          </p>
        </div>
      </div>

      {/* Floating notification toast */}
      <div className="animate-float-delay-4 absolute -left-2 bottom-10 z-20 sm:-left-6 sm:bottom-12">
        <div className="flex max-w-[180px] items-center gap-2 rounded-2xl border border-gray-100 bg-white px-3 py-2 shadow-xl">
          <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-amber-100">
            <Award className="h-3.5 w-3.5 text-amber-600" />
          </div>
          <div>
            <p className="text-[10px] font-bold leading-tight text-gray-800">{levelUpTitle}</p>
            <p className="mt-0.5 text-[8px] leading-tight text-gray-400">{levelUpSub}</p>
          </div>
        </div>
      </div>

      {/* Floating stars decoration */}
      <div className="animate-float-delay-2 absolute -right-8 top-1/3 flex flex-col gap-3 opacity-50 sm:-right-14">
        <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
        <Star className="h-2 w-2 fill-blue-400 text-blue-400" />
        <Star className="h-3.5 w-3.5 fill-cyan-400 text-cyan-400" />
      </div>

      {/* Scan badge */}
      <div className="animate-float-delay-5 absolute -left-2 top-1/2 z-20 -translate-y-1/2 sm:-left-6">
        <div className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-3 py-2 shadow-lg">
          <Scan className="h-4 w-4 text-white" />
          <p className="text-[12px] font-bold text-white">{scanPoints}</p>
          <Sparkles className="h-3 w-3 text-white/80" />
        </div>
      </div>
    </div>
  );
}
