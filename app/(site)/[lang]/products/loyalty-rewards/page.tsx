import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  Award,
  BarChart3,
  Building2,
  Gift,
  KeyRound,
  Lock,
  Plug,
  RefreshCw,
  ShieldAlert,
  ShoppingBag,
  SlidersHorizontal,
  Smartphone,
  Sparkles,
  UserCheck,
  type LucideIcon,
} from 'lucide-react';
import Navigation from '@/app/_components/Navigation';
import Footer from '@/app/_components/Footer';
import WhatsAppButton from '@/app/_components/WhatsAppButton';
import ScrollToTopButton from '@/app/_components/ScrollToTopButton';
import ContactModalButton from '@/app/_components/ContactModalButton';
import LoyaltyRewardsWalletCard from '@/app/_components/products/LoyaltyRewardsWalletCard';
import LoyaltyRewardsFeatureCards from '@/app/_components/products/LoyaltyRewardsFeatureCards';
import { isLocale, localePath, locales } from '@/lib/i18n';
import { BRAND_NAME, getAbsoluteUrl } from '@/lib/seo';
import { translations } from '@/lib/translations';

type PageParams = {
  lang: string;
};

const pillarIcons: LucideIcon[] = [Award, Gift, Smartphone];
const featureIcons: LucideIcon[] = [
  ShoppingBag,
  SlidersHorizontal,
  UserCheck,
  ShieldAlert,
  Plug,
  BarChart3,
];
const securityIcons: LucideIcon[] = [Building2, Lock, KeyRound, RefreshCw];

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) {
    return {};
  }

  const t = translations[lang];
  const page = t.loyaltyRewardsPage;
  const currentPath = localePath(lang, '/products/loyalty-rewards');
  const title = `${t.products.loyaltyRewards.title} | ${BRAND_NAME}`;

  return {
    title,
    description: page.heroDescription,
    alternates: {
      canonical: currentPath,
      languages: {
        es: '/products/loyalty-rewards',
        en: '/en/products/loyalty-rewards',
        'x-default': '/products/loyalty-rewards',
      },
    },
    openGraph: {
      title,
      description: page.heroDescription,
      type: 'website',
      url: getAbsoluteUrl(currentPath),
      siteName: BRAND_NAME,
      locale: lang === 'es' ? 'es_EC' : 'en_US',
    },
  };
}

export default async function LoyaltyRewardsPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) {
    notFound();
  }

  const t = translations[lang];
  const page = t.loyaltyRewardsPage;

  return (
    <main id="top" className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Navigation t={t} language={lang} />

      {/* Hero */}
      <section className="pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20 border border-blue-500/20 dark:border-blue-400/30 rounded-full text-blue-600 dark:text-cyan-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                {page.eyebrow}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight heading-safe mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-cyan-700 dark:from-white dark:via-cyan-300 dark:to-blue-400 bg-clip-text text-transparent">
                  {page.heroTitle}
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                {page.heroDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <ContactModalButton
                  t={t}
                  size="lg"
                  className="min-w-[12.5rem] bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-sm sm:text-base shadow-xl shadow-blue-500/30 hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.7)] hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-500"
                >
                  {page.ctaPrimary}
                </ContactModalButton>
                <a
                  href="#how-it-works"
                  className="min-w-[12.5rem] inline-flex items-center justify-center rounded-lg border border-cyan-200 bg-white px-6 py-3 text-sm sm:text-base font-semibold text-cyan-700 transition-all hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-cyan-50 hover:shadow-lg dark:border-cyan-900/70 dark:bg-slate-900 dark:text-cyan-300 dark:hover:bg-slate-800"
                >
                  {page.ctaSecondary}
                </a>
              </div>
            </div>

            <LoyaltyRewardsWalletCard
              programLabel={page.card.program}
              memberLabel={page.card.memberLabel}
              member={page.card.member}
              tierLabel={page.card.tierLabel}
              tier={page.card.tier}
              pointsLabel={page.card.pointsLabel}
              points={page.card.points}
            />
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/40">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">
              {page.pillarsTitle}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
              {page.pillarsSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
            {page.pillars.map((pillar, i) => {
              const Icon = pillarIcons[i];
              return (
                <div
                  key={pillar.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-5">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">
              {page.featuresTitle}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
              {page.featuresSubtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
            {page.features.map((feature, i) => {
              const Icon = featureIcons[i];
              return (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-900/30">
                    <Icon className="h-5 w-5 text-blue-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <LoyaltyRewardsFeatureCards
        title={page.featureCardsTitle}
        subtitle={page.featureCardsSubtitle}
        cards={page.featureCards}
      />

      {/* How it works */}
      <section id="how-it-works" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/40 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">
              {page.howItWorksTitle}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
              {page.howItWorksSubtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {page.steps.map((step, i) => (
              <div key={step.title} className="relative">
                {i < page.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-5 left-[calc(50%+1.5rem)] right-0 h-px bg-gradient-to-r from-blue-300 to-cyan-300 dark:from-blue-800 dark:to-cyan-800" />
                )}
                <div className="relative flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 text-white font-bold text-sm mb-4">
                  {i + 1}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security / technical */}
      <section className="relative overflow-hidden py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-blue-900 dark:from-slate-950 dark:to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-transparent dark:from-blue-500/10 opacity-70" />
        <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:32px_32px]" />

        <div className="relative max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-12 max-w-2xl">
            {page.securityTitle}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {page.securityItems.map((item, i) => {
              const Icon = securityIcons[i];
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 sm:p-6"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 mb-4">
                    <Icon className="h-4 w-4 text-cyan-300" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1.5">{item.title}</h3>
                  <p className="text-xs leading-relaxed text-slate-300">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-10">
            {page.faqTitle}
          </h2>

          <div className="space-y-3">
            {page.faq.map((item) => (
              <details
                key={item.question}
                className="group rounded-xl border border-slate-200 bg-white px-5 py-4 dark:border-slate-800 dark:bg-slate-900"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-slate-900 dark:text-white marker:content-none [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <span className="flex-shrink-0 text-slate-400 transition-transform duration-200 group-open:rotate-45 text-xl leading-none">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-blue-900 dark:from-slate-950 dark:to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-transparent dark:from-blue-500/10 opacity-70" />

        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            {page.finalCtaTitle}
          </h2>
          <p className="text-base sm:text-lg text-slate-200 mb-9 max-w-xl mx-auto leading-relaxed">
            {page.finalCtaDescription}
          </p>
          <ContactModalButton
            t={t}
            size="lg"
            className="bg-white text-slate-900 hover:bg-slate-100 px-10 py-6 text-base font-bold rounded-xl shadow-2xl transition-all duration-300 hover:scale-[1.02]"
          >
            {page.finalCtaButton}
          </ContactModalButton>
        </div>
      </section>

      <Footer t={t} locale={lang} />
      <WhatsAppButton t={t} />
      <ScrollToTopButton t={t} />
    </main>
  );
}
