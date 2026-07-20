import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navigation from '@/app/_components/Navigation';
import Footer from '@/app/_components/Footer';
import WhatsAppButton from '@/app/_components/WhatsAppButton';
import ScrollToTopButton from '@/app/_components/ScrollToTopButton';
import { isLocale, localePath, locales } from '@/lib/i18n';
import { BRAND_NAME, getAbsoluteUrl } from '@/lib/seo';
import { translations } from '@/lib/translations';

type ProductsPageParams = {
  lang: string;
};

const PRODUCT_SLUGS = [
  'loyalty-rewards',
  'invoicing',
  'monitoring-software',
  'ecommerce',
  'mailing',
] as const;

const productTranslationKeys = {
  'loyalty-rewards': 'loyaltyRewards',
  invoicing: 'invoicing',
  'monitoring-software': 'monitoringSoftware',
  ecommerce: 'ecommerce',
  mailing: 'mailing',
} as const;

const pageMetaByLocale = {
  es: {
    title: `Productos | ${BRAND_NAME}`,
    description: 'Explora los productos de TecnoLTS: fidelización, facturación electrónica, monitoreo, ecommerce y mailing.',
  },
  en: {
    title: `Products | ${BRAND_NAME}`,
    description: 'Explore TecnoLTS products: loyalty, electronic invoicing, monitoring, ecommerce and mailing.',
  },
} as const;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<ProductsPageParams>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) {
    return {};
  }

  const localeMeta = pageMetaByLocale[lang];
  const currentPath = localePath(lang, '/products');

  return {
    title: localeMeta.title,
    description: localeMeta.description,
    alternates: {
      canonical: currentPath,
      languages: {
        es: '/products',
        en: '/en/products',
        'x-default': '/products',
      },
    },
    openGraph: {
      title: localeMeta.title,
      description: localeMeta.description,
      type: 'website',
      url: getAbsoluteUrl(currentPath),
      siteName: BRAND_NAME,
      locale: lang === 'es' ? 'es_EC' : 'en_US',
    },
  };
}

export default async function ProductsIndexPage({
  params,
}: {
  params: Promise<ProductsPageParams>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) {
    notFound();
  }

  const t = translations[lang];
  const comingSoonLabel = lang === 'es' ? 'Próximamente' : 'Coming soon';

  return (
    <main id="top" className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Navigation t={t} language={lang} />

      <section className="mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pt-36">
        <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          {t.products.title}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
          {t.products.subtitle}
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCT_SLUGS.map((slug) => {
            const key = productTranslationKeys[slug];
            const product = t.products[key];
            const isAvailable = slug === 'loyalty-rewards';
            return (
              <Link
                key={slug}
                href={localePath(lang, `/products/${slug}`)}
                className="group relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-800/80"
              >
                <span
                  className={`absolute right-5 top-5 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${
                    isAvailable
                      ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400'
                      : 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400'
                  }`}
                >
                  {isAvailable ? t.products.available : comingSoonLabel}
                </span>
                <h2 className="pr-20 text-xl font-bold text-slate-900 dark:text-white">{product.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {product.description}
                </p>
                {isAvailable && (
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 transition-colors group-hover:text-blue-500 dark:text-cyan-400">
                    {t.products.ctaLabel} <span aria-hidden="true">→</span>
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </section>

      <Footer t={t} locale={lang} />
      <WhatsAppButton t={t} />
      <ScrollToTopButton t={t} />
    </main>
  );
}
