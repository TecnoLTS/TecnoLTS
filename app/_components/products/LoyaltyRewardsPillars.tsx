import { Award, Bell, Check, Gift, Wallet } from 'lucide-react';

interface Pillar {
  title: string;
  description: string;
}

interface Reward {
  name: string;
  pts: string;
}

interface LoyaltyRewardsPillarsProps {
  title: string;
  subtitle: string;
  pillars: Pillar[];
  tiers: string[];
  rewards: Reward[];
  deliveryTags: string[];
  walletNote: string;
  programLabel: string;
  program: string;
  pointsLabel: string;
  points: string;
}

/* ---------- Pillar 1: tiers that level up on their own ---------- */

function TiersVisual({ tiers }: { tiers: string[] }) {
  return (
    <div className="flex h-full flex-col justify-center gap-4">
      <div className="flex items-start justify-between">
        {tiers.map((tier, idx) => {
          const done = idx < 1;
          const current = idx === 1;
          return (
            <div key={tier} className="flex flex-1 flex-col items-center gap-1.5">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
                  done
                    ? 'bg-blue-500 text-white'
                    : current
                      ? 'bg-gradient-to-br from-blue-500 to-cyan-500 text-white ring-4 ring-blue-500/20 dark:ring-cyan-400/20'
                      : 'bg-slate-200 text-slate-400 dark:bg-slate-700 dark:text-slate-500'
                }`}
              >
                {done ? <Check className="h-4 w-4" /> : <Award className="h-4 w-4" />}
              </div>
              <span
                className={`text-[11px] font-semibold ${
                  current
                    ? 'text-slate-900 dark:text-white'
                    : 'text-slate-400 dark:text-slate-500'
                }`}
              >
                {tier}
              </span>
            </div>
          );
        })}
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
        <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
      </div>
    </div>
  );
}

/* ---------- Pillar 2: rewards, your way ---------- */

function RewardsVisual({ rewards, deliveryTags }: { rewards: Reward[]; deliveryTags: string[] }) {
  return (
    <div className="flex h-full flex-col justify-center gap-2">
      {rewards.map((reward) => (
        <div
          key={reward.name}
          className="flex items-center justify-between rounded-lg bg-white px-2.5 py-1.5 shadow-sm ring-1 ring-slate-200/70 dark:bg-slate-900 dark:ring-slate-700/50"
        >
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-amber-100 dark:bg-amber-500/20">
              <Gift className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
            </div>
            <span className="text-xs font-medium text-slate-700 dark:text-slate-200">
              {reward.name}
            </span>
          </div>
          <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-bold text-blue-600 dark:bg-blue-900/40 dark:text-cyan-400">
            {reward.pts}
          </span>
        </div>
      ))}
      <div className="flex flex-wrap gap-1 pt-0.5">
        {deliveryTags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-100 px-2 py-0.5 text-[9px] font-medium text-slate-500 dark:bg-slate-700/60 dark:text-slate-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- Pillar 3: the card lives in their wallet ---------- */

function WalletVisual({
  programLabel,
  program,
  pointsLabel,
  points,
  walletNote,
}: {
  programLabel: string;
  program: string;
  pointsLabel: string;
  points: string;
  walletNote: string;
}) {
  return (
    <div className="flex h-full flex-col justify-center gap-2">
      <div className="rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 p-2.5 shadow-md shadow-blue-600/20">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[7px] font-medium uppercase tracking-widest text-white/60">
              {programLabel}
            </p>
            <p className="text-[10px] font-bold text-white">{program}</p>
          </div>
          <Wallet className="h-3.5 w-3.5 text-white/80" />
        </div>
        <div className="mt-2 flex items-end justify-between">
          <p className="text-lg font-extrabold leading-none text-white">{points}</p>
          <span className="text-[8px] uppercase tracking-wider text-white/70">{pointsLabel}</span>
        </div>
      </div>
      <div className="flex items-center gap-2 rounded-lg bg-white px-2 py-1.5 shadow-sm ring-1 ring-slate-200/70 dark:bg-slate-900 dark:ring-slate-700/50">
        <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-blue-500 to-cyan-500">
          <Bell className="h-3 w-3 text-white" />
        </div>
        <span className="text-[10px] font-medium leading-tight text-slate-600 dark:text-slate-300">
          {walletNote}
        </span>
      </div>
    </div>
  );
}

export default function LoyaltyRewardsPillars({
  title,
  subtitle,
  pillars,
  tiers,
  rewards,
  deliveryTags,
  walletNote,
  programLabel,
  program,
  pointsLabel,
  points,
}: LoyaltyRewardsPillarsProps) {
  const visuals = [
    <TiersVisual key="tiers" tiers={tiers} />,
    <RewardsVisual key="rewards" rewards={rewards} deliveryTags={deliveryTags} />,
    <WalletVisual
      key="wallet"
      programLabel={programLabel}
      program={program}
      pointsLabel={pointsLabel}
      points={points}
      walletNote={walletNote}
    />,
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="mb-5 min-h-[7.5rem] rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200/70 dark:bg-slate-800/50 dark:ring-slate-700/50">
                {visuals[i]}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
