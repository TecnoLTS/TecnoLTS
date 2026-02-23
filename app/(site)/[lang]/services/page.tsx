import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navigation from '@/app/_components/Navigation';
import Footer from '@/app/_components/Footer';
import WhatsAppButton from '@/app/_components/WhatsAppButton';
import ScrollToTopButton from '@/app/_components/ScrollToTopButton';
import { isLocale, localePath, locales } from '@/lib/i18n';
import { BRAND_NAME, getAbsoluteUrl, getServiceDefinitions } from '@/lib/seo';
import { translations } from '@/lib/translations';

type ServicesPageParams = {
  lang: string;
};

const pageMetaByLocale = {
  es: {
    title: `Servicios IT Empresariales | ${BRAND_NAME}`,
    description:
      'Explore todos los servicios IT de TecnoLTS: desarrollo de software, monitoreo, ciberseguridad, redes, ISO 27001 y más.',
    heading: 'Servicios IT para empresas en crecimiento',
    lead: 'Seleccione un servicio para ver el detalle técnico y agendar una consulta especializada.',
    backLabel: 'Volver al inicio',
    ctaLabel: 'Ver detalle del servicio',
  },
  en: {
    title: `Enterprise IT Services | ${BRAND_NAME}`,
    description:
      'Explore all TecnoLTS enterprise IT services: software development, monitoring, cybersecurity, network solutions, ISO 27001 and more.',
    heading: 'Enterprise IT services built for growth',
    lead: 'Select a service to view technical details and schedule a specialized consultation.',
    backLabel: 'Back to home',
    ctaLabel: 'View service details',
  },
} as const;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<ServicesPageParams>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) {
    return {};
  }

  const localeMeta = pageMetaByLocale[lang];
  const currentPath = localePath(lang, '/services');

  return {
    title: localeMeta.title,
    description: localeMeta.description,
    alternates: {
      canonical: currentPath,
      languages: {
        es: '/services',
        'es-EC': '/services',
        'es-419': '/services',
        en: '/en/services',
        'en-US': '/en/services',
        'x-default': '/services',
      },
    },
    openGraph: {
      title: localeMeta.title,
      description: localeMeta.description,
      type: 'website',
      url: getAbsoluteUrl(currentPath),
      siteName: BRAND_NAME,
      images: [
        {
          url: '/og-image.svg',
          width: 1200,
          height: 630,
          alt: localeMeta.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: localeMeta.title,
      description: localeMeta.description,
      images: ['/og-image.svg'],
    },
  };
}

export default async function ServicesIndexPage({
  params,
}: {
  params: Promise<ServicesPageParams>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) {
    notFound();
  }

  const t = translations[lang];
  const localeMeta = pageMetaByLocale[lang];
  const services = getServiceDefinitions(t);
  const pagePath = localePath(lang, '/services');
  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: service.title,
      url: getAbsoluteUrl(localePath(lang, `/services/${service.slug}`)),
    })),
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: lang === 'es' ? 'Inicio' : 'Home',
        item: getAbsoluteUrl(localePath(lang)),
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: lang === 'es' ? 'Servicios' : 'Services',
        item: getAbsoluteUrl(pagePath),
      },
    ],
  };

  return (
    <main id="top" className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navigation t={t} language={lang} />

      <section className="mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pt-36">
        <Link
          href={localePath(lang)}
          className="mb-6 inline-flex items-center text-sm text-slate-600 transition-colors hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-300"
        >
          ← {localeMeta.backLabel}
        </Link>
        <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          {localeMeta.heading}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
          {localeMeta.lead}
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.slug}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:border-cyan-800/80"
            >
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">{service.title}</h2>
              <p className="mt-2 min-h-[4.5rem] text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {service.description}
              </p>
              <Link
                href={localePath(lang, `/services/${service.slug}`)}
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-cyan-700 transition-colors group-hover:text-cyan-500 dark:text-cyan-300"
              >
                {localeMeta.ctaLabel} <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <Footer t={t} locale={lang} />
      <WhatsAppButton t={t} />
      <ScrollToTopButton t={t} />
    </main>
  );
}
