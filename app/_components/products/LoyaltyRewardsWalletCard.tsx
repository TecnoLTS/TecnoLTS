import { Award, Sparkles, Wallet } from 'lucide-react';

interface LoyaltyRewardsWalletCardProps {
  programLabel: string;
  memberLabel: string;
  member: string;
  tierLabel: string;
  tier: string;
  pointsLabel: string;
  points: string;
}

export default function LoyaltyRewardsWalletCard({
  programLabel,
  memberLabel,
  member,
  tierLabel,
  tier,
  pointsLabel,
  points,
}: LoyaltyRewardsWalletCardProps) {
  return (
    <div className="relative mt-6 lg:mt-0 animate-fade-in-up animation-delay-200">
      <div className="relative mx-auto max-w-sm rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-600 via-blue-600 to-cyan-600 p-5 sm:p-7 shadow-2xl shadow-blue-500/30 border border-white/10">
        <div className="flex items-center justify-between">
          <span className="text-xs sm:text-sm font-semibold tracking-wide text-white/80">
            {programLabel}
          </span>
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/15">
            <Wallet className="h-4 w-4 text-white" />
          </div>
        </div>

        <div className="mt-8 sm:mt-10">
          <div className="text-[11px] uppercase tracking-wider text-white/60">{memberLabel}</div>
          <div className="text-lg sm:text-xl font-bold text-white">{member}</div>
        </div>

        <div className="mt-5 sm:mt-6 flex items-end justify-between">
          <div>
            <div className="text-[11px] uppercase tracking-wider text-white/60">{pointsLabel}</div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white leading-none mt-1">
              {points}
            </div>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5">
            <Award className="h-3.5 w-3.5 text-white" />
            <span className="text-xs font-semibold text-white">
              {tierLabel}: {tier}
            </span>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 flex items-center gap-1 opacity-70">
          {Array.from({ length: 24 }).map((_, i) => (
            <span
              key={i}
              className="bg-white/70 rounded-full"
              style={{ width: 2, height: i % 3 === 0 ? 16 : 10 }}
            />
          ))}
        </div>
      </div>

      <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-emerald-700 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-[11px] sm:text-xs font-bold shadow-lg animate-fade-in animation-delay-500 hover:scale-105 transition-all duration-500 cursor-default flex items-center gap-1.5">
        <Sparkles className="w-3.5 h-3.5" />
        Google Wallet
      </div>
    </div>
  );
}
