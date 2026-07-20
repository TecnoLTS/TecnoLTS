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

type ProductPageParams = {
  lang: string;
  slug: string;
};

const productConfig = {
  'loyalty-rewards': {
    translationKey: 'loyaltyRewards',
    iconId: 'product-icon-loyalty',
    bgColor: 'bg-amber-100 dark:bg-amber-900/50',
    iconColor: 'text-amber-600 dark:text-amber-400',
  },
  invoicing: {
    translationKey: 'invoicing',
    iconId: 'product-icon-invoicing',
    bgColor: 'bg-green-100 dark:bg-green-900/50',
    iconColor: 'text-green-600 dark:text-green-400',
  },
  'monitoring-software': {
    translationKey: 'monitoringSoftware',
    iconId: 'product-icon-monitoring',
    bgColor: 'bg-sky-100 dark:bg-sky-900/50',
    iconColor: 'text-sky-600 dark:text-sky-400',
  },
  ecommerce: {
    translationKey: 'ecommerce',
    iconId: 'product-icon-ecommerce',
    bgColor: 'bg-fuchsia-100 dark:bg-fuchsia-900/50',
    iconColor: 'text-fuchsia-600 dark:text-fuchsia-400',
  },
  mailing: {
    translationKey: 'mailing',
    iconId: 'product-icon-mail',
    bgColor: 'bg-violet-100 dark:bg-violet-900/50',
    iconColor: 'text-violet-600 dark:text-violet-400',
  },
} as const;

type ProductSlug = keyof typeof productConfig;

function isProductSlug(value: string): value is ProductSlug {
  return value in productConfig;
}

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    Object.keys(productConfig).map((slug) => ({ lang, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<ProductPageParams>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang) || !isProductSlug(slug)) {
    return {};
  }

  const t = translations[lang];
  const product = t.products[productConfig[slug].translationKey];
  const currentPath = localePath(lang, `/products/${slug}`);
  const title = `${product.title} | ${BRAND_NAME}`;

  return {
    title,
    description: product.description,
    alternates: {
      canonical: currentPath,
      languages: {
        es: `/products/${slug}`,
        en: `/en/products/${slug}`,
        'x-default': `/products/${slug}`,
      },
    },
    openGraph: {
      title,
      description: product.description,
      type: 'website',
      url: getAbsoluteUrl(currentPath),
      siteName: BRAND_NAME,
      locale: lang === 'es' ? 'es_EC' : 'en_US',
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<ProductPageParams>;
}) {
  const { lang, slug } = await params;
  if (!isLocale(lang) || !isProductSlug(slug)) {
    notFound();
  }

  const t = translations[lang];
  const config = productConfig[slug];
  const product = t.products[config.translationKey];

  return (
    <main id="top" className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Navigation t={t} language={lang} />

      <section className="mx-auto max-w-3xl px-4 pb-24 pt-32 text-center sm:px-6 sm:pt-36 lg:px-8">
        <div
          className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl ${config.bgColor}`}
        >
          <svg
            className={`h-8 w-8 ${config.iconColor}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            focusable="false"
          >
            <use href={`#${config.iconId}`} />
          </svg>
        </div>

        <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          {product.title}
        </h1>
        <p className="mt-3 text-base text-slate-600 dark:text-slate-300">{product.description}</p>

        <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-8 dark:border-slate-700 dark:bg-slate-900">
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {t.products.comingSoon}
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={localePath(lang, '/products')}
            className="inline-flex items-center gap-1 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            ← {t.products.backToProducts}
          </Link>
          <Link
            href={`${localePath(lang)}#contact`}
            className="inline-flex items-center gap-1 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
          >
            {t.nav.contact}
          </Link>
        </div>
      </section>

      <Footer t={t} locale={lang} />
      <WhatsAppButton t={t} />
      <ScrollToTopButton t={t} />
    </main>
  );
}
