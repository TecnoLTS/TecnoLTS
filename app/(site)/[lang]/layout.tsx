import '../../global.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { isLocale, localePath, locales } from '@/lib/i18n';
import type { Language } from '@/lib/translations';
import {
  BRAND_ALIASES,
  BRAND_NAME,
  getContactCountryCode,
  getContactCountryName,
  getContactEmail,
  getContactLocality,
  getContactPhone,
  getContactRegion,
  getSiteUrl,
  getSocialProfiles,
} from '@/lib/seo';

type LayoutParams = {
  lang: string;
};

const inter = Inter({ subsets: ['latin'], display: 'optional' });
const siteUrl = getSiteUrl();
const themeInitScript = `
  (function () {
    try {
      var storedTheme = localStorage.getItem('theme');
      var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      var shouldUseDark = storedTheme ? storedTheme === 'dark' : prefersDark;
      var root = document.documentElement;
      root.classList.toggle('dark', shouldUseDark);
      root.style.colorScheme = shouldUseDark ? 'dark' : 'light';
    } catch (error) {}
  })();
`;

const metadataByLocale: Record<Language, { title: string; description: string; locale: string }> = {
  es: {
    title: `${BRAND_NAME} - Soluciones y Servicios IT Empresariales`,
    description:
      'Proveedor líder de soluciones IT empresariales, incluyendo desarrollo de software, infraestructura de red, monitoreo y auditorías ISO 27001.',
    locale: 'es_EC',
  },
  en: {
    title: `${BRAND_NAME} - Enterprise IT Solutions & Services`,
    description:
      'Leading provider of enterprise IT solutions including software development, network infrastructure, monitoring, and ISO 27001 security audits.',
    locale: 'en_US',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#020617' },
  ],
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<LayoutParams>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) {
    return {};
  }

  const localeMetadata = metadataByLocale[lang];
  const localizedHomePath = localePath(lang);
  const keywords =
    lang === 'es'
      ? [
        BRAND_NAME,
        ...BRAND_ALIASES,
        'tenco lts',
        'soluciones IT',
        'servicios IT empresariales',
        'consultoría IT',
        'soporte IT empresarial',
        'desarrollo de software',
        'desarrollo de software a medida',
        'monitoreo y observabilidad',
        'ciberseguridad',
        'ciberseguridad empresarial',
        'soluciones de redes',
        'auditorías ISO 27001',
        'gestión de respaldos',
        'backup y recuperación',
        'licenciamiento de software',
        'recuperación ante desastres',
        'diseño de data center',
        'servicios tecnológicos en quito',
        'Quito',
        'Ecuador',
      ]
      : [
        BRAND_NAME,
        ...BRAND_ALIASES,
        'tenco lts',
        'IT solutions',
        'enterprise IT services',
        'IT consulting',
        'managed IT services',
        'software development',
        'custom software development',
        'monitoring and observability',
        'cybersecurity services',
        'enterprise cybersecurity',
        'network solutions',
        'ISO 27001 audits',
        'backup and recovery',
        'software licensing',
        'disaster recovery',
        'data center design',
        'IT services in Quito',
        'Quito',
        'Ecuador',
      ];

  return {
    title: localeMetadata.title,
    description: localeMetadata.description,
    keywords,
    metadataBase: new URL(siteUrl),
    applicationName: BRAND_NAME,
    creator: BRAND_NAME,
    publisher: BRAND_NAME,
    authors: [{ name: BRAND_NAME, url: siteUrl }],
    category: 'technology',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: localizedHomePath,
      languages: {
        es: '/',
        'es-EC': '/',
        'es-419': '/',
        en: '/en',
        'en-US': '/en',
        'x-default': '/',
      },
    },
    manifest: '/manifest.webmanifest',
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
        { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
        { url: '/favicon.svg', type: 'image/svg+xml' },
      ],
      shortcut: ['/favicon.ico'],
      apple: [{ url: '/apple-touch-icon.png', type: 'image/png', sizes: '180x180' }],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    openGraph: {
      title: localeMetadata.title,
      description: localeMetadata.description,
      type: 'website',
      url: `${siteUrl}${localizedHomePath}`,
      siteName: BRAND_NAME,
      locale: localeMetadata.locale,
      alternateLocale: lang === 'es' ? ['en_US'] : ['es_EC'],
      images: [
        {
          url: '/og-image.svg',
          width: 1200,
          height: 630,
          alt: localeMetadata.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: localeMetadata.title,
      description: localeMetadata.description,
      images: ['/og-image.svg'],
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
      yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
      yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<LayoutParams>;
}) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const localizedMetadata = metadataByLocale[lang];
  const organizationId = `${siteUrl}#organization`;
  const localBusinessId = `${siteUrl}#local-business`;
  const websiteId = `${siteUrl}#website`;
  const socialProfiles = getSocialProfiles();
  const contactEmail = getContactEmail();
  const contactPhone = getContactPhone();
  const contactCountryCode = getContactCountryCode();
  const contactCountryName = getContactCountryName();
  const contactLocality = getContactLocality();
  const contactRegion = getContactRegion();
  const siteNavigationItems =
    lang === 'es'
      ? [
        { name: 'Inicio', url: `${siteUrl}/` },
        { name: 'Servicios', url: `${siteUrl}/services` },
        { name: 'Contacto', url: `${siteUrl}/#contact-form` },
        { name: 'Desarrollo de software', url: `${siteUrl}/services/software` },
        { name: 'Monitoreo y observabilidad', url: `${siteUrl}/services/monitoring` },
        { name: 'Ciberseguridad', url: `${siteUrl}/services/cybersecurity` },
        { name: 'Soluciones de redes', url: `${siteUrl}/services/network` },
        { name: 'ISO 27001', url: `${siteUrl}/services/iso-27001` },
      ]
      : [
        { name: 'Home', url: `${siteUrl}/en` },
        { name: 'Services', url: `${siteUrl}/en/services` },
        { name: 'Contact', url: `${siteUrl}/en#contact-form` },
        { name: 'Software development', url: `${siteUrl}/en/services/software` },
        { name: 'Monitoring and observability', url: `${siteUrl}/en/services/monitoring` },
        { name: 'Cybersecurity', url: `${siteUrl}/en/services/cybersecurity` },
        { name: 'Network solutions', url: `${siteUrl}/en/services/network` },
        { name: 'ISO 27001', url: `${siteUrl}/en/services/iso-27001` },
      ];

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': organizationId,
    name: BRAND_NAME,
    alternateName: BRAND_ALIASES,
    url: siteUrl,
    logo: `${siteUrl}/icon-512.png`,
    image: `${siteUrl}/og-image.svg`,
    description: localizedMetadata.description,
    email: contactEmail,
    telephone: contactPhone,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        telephone: contactPhone,
        email: contactEmail,
        availableLanguage: ['es', 'en'],
        areaServed: contactCountryCode,
        url: `${siteUrl}/#contact-form`,
      },
    ],
    sameAs: socialProfiles.length > 0 ? socialProfiles : undefined,
  };
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': localBusinessId,
    name: BRAND_NAME,
    image: `${siteUrl}/og-image.svg`,
    logo: `${siteUrl}/icon-512.png`,
    url: siteUrl,
    email: contactEmail,
    telephone: contactPhone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: contactLocality,
      addressRegion: contactRegion,
      addressCountry: contactCountryCode,
    },
    openingHours: 'Mo-Fr 08:30-17:30',
    priceRange: 'N/A',
    areaServed: [
      {
        '@type': 'Country',
        name: contactCountryName,
      },
    ],
    availableLanguage: ['es', 'en'],
    parentOrganization: {
      '@id': organizationId,
    },
  };
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': websiteId,
    name: BRAND_NAME,
    alternateName: BRAND_ALIASES,
    url: siteUrl,
    inLanguage: lang === 'es' ? ['es', 'es-EC'] : ['en', 'en-US'],
    publisher: {
      '@id': organizationId,
    },
    about: {
      '@id': localBusinessId,
    },
  };
  const siteNavigationSchema = {
    '@context': 'https://schema.org',
    '@graph': siteNavigationItems.map((item, index) => ({
      '@type': 'SiteNavigationElement',
      '@id': `${siteUrl}#nav-${lang}-${index + 1}`,
      name: item.name,
      url: item.url,
    })),
  };

  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
      </head>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigationSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
