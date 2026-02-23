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

const cleanHashUrlScript = `
  (function () {
    try {
      var ANCHOR_NAV_CLASS = 'anchor-nav-active';
      var EXTRA_OFFSET = 12;

      var getNavOffset = function () {
        var nav = document.querySelector('nav');
        if (nav && nav.offsetHeight) {
          return nav.offsetHeight + EXTRA_OFFSET;
        }
        return 76;
      };

      var cleanHashFromUrl = function () {
        window.history.replaceState(
          null,
          '',
          window.location.pathname + window.location.search
        );
      };

      var normalizePath = function (path) {
        if (!path || path === '/') {
          return '/';
        }
        return path.endsWith('/') ? path.slice(0, -1) : path;
      };

      var alignToAnchorTarget = function (hash) {
        if (!hash || hash === '#top' || hash === '#') {
          return;
        }

        var target = null;
        try {
          target = document.querySelector(hash);
        } catch (error) {}

        if (!target) {
          return;
        }

        var rect = target.getBoundingClientRect();
        var top = Math.max(0, window.scrollY + rect.top - getNavOffset());
        window.scrollTo({
          top: top,
          behavior: 'auto'
        });
      };

      var finalizeAnchorNavigation = function (hash, delay) {
        window.setTimeout(function () {
          alignToAnchorTarget(hash);
          cleanHashFromUrl();

          window.requestAnimationFrame(function () {
            document.documentElement.classList.remove(ANCHOR_NAV_CLASS);
            window.requestAnimationFrame(function () {
              alignToAnchorTarget(hash);
            });
          });

          window.setTimeout(function () {
            alignToAnchorTarget(hash);
          }, 220);
        }, delay);
      };

      var scrollToHashPrecisely = function (hash, behavior) {
        if (!hash) {
          return;
        }

        if (hash === '#top' || hash === '#') {
          document.documentElement.classList.add(ANCHOR_NAV_CLASS);
          var shouldReduceMotionTop = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          var topScrollBehavior = shouldReduceMotionTop ? 'auto' : behavior;

          window.scrollTo({
            top: 0,
            behavior: topScrollBehavior
          });

          finalizeAnchorNavigation(hash, topScrollBehavior === 'smooth' ? 750 : 180);
          return;
        }

        var tries = 0;
        var maxTries = 120;

        var attempt = function () {
          var target = null;
          try {
            target = document.querySelector(hash);
          } catch (error) {
            return;
          }

          if (!target) {
            tries += 1;
            if (tries < maxTries) {
              window.requestAnimationFrame(attempt);
            }
            return;
          }

          document.documentElement.classList.add(ANCHOR_NAV_CLASS);

          window.requestAnimationFrame(function () {
            var freshTarget = null;
            try {
              freshTarget = document.querySelector(hash);
            } catch (error) {
              document.documentElement.classList.remove(ANCHOR_NAV_CLASS);
              return;
            }

            if (!freshTarget) {
              document.documentElement.classList.remove(ANCHOR_NAV_CLASS);
              return;
            }

            var rect = freshTarget.getBoundingClientRect();
            var top = Math.max(0, window.scrollY + rect.top - getNavOffset());
            var shouldReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            var scrollBehavior = shouldReduceMotion ? 'auto' : behavior;

            window.scrollTo({
              top: top,
              behavior: scrollBehavior
            });

            finalizeAnchorNavigation(hash, scrollBehavior === 'smooth' ? 750 : 260);
          });
        };

        window.requestAnimationFrame(attempt);
      };

      var handleAnchorClick = function (event) {
        var target = event.target;
        if (!(target instanceof Element)) {
          return;
        }

        var link = target.closest('a[href]');
        if (!link) {
          return;
        }

        if (link.hasAttribute('download') || link.getAttribute('target') === '_blank') {
          return;
        }

        var href = link.getAttribute('href');
        if (!href || href.indexOf('#') === -1) {
          return;
        }

        var url = null;
        try {
          url = new URL(link.href, window.location.href);
        } catch (error) {
          return;
        }

        if (!url.hash || url.origin !== window.location.origin) {
          return;
        }

        if (normalizePath(url.pathname) !== normalizePath(window.location.pathname)) {
          return;
        }

        event.preventDefault();
        scrollToHashPrecisely(url.hash, 'smooth');
      };

      if (window.location.hash) {
        scrollToHashPrecisely(window.location.hash, 'auto');
      }

      window.addEventListener('hashchange', function () {
        scrollToHashPrecisely(window.location.hash, 'auto');
      });

      document.addEventListener('click', handleAnchorClick, true);
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
        <script
          dangerouslySetInnerHTML={{ __html: cleanHashUrlScript }}
        />
      </body>
    </html>
  );
}
