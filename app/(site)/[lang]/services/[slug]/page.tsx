import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import MonitoringPage from '@/app/_components/MonitoringPage';
import ServiceDetailPage from '@/app/_components/ServiceDetailPage';
import { isLocale, localePath, locales } from '@/lib/i18n';
import { translations } from '@/lib/translations';
import { BRAND_ALIASES, BRAND_NAME, getAbsoluteUrl, getSiteUrl } from '@/lib/seo';

const serviceConfig = {
  software: {
    translationKey: 'software',
    iconName: 'Code',
    gradient: 'bg-gradient-to-br from-blue-500 to-blue-700',
    checkColor: 'text-blue-500',
  },
  network: {
    translationKey: 'network',
    iconName: 'Network',
    gradient: 'bg-gradient-to-br from-purple-500 to-indigo-600',
    checkColor: 'text-purple-500',
  },
  'iso-27001': {
    translationKey: 'iso',
    iconName: 'Lock',
    gradient: 'bg-gradient-to-br from-green-500 to-emerald-600',
    checkColor: 'text-green-500',
  },
  cybersecurity: {
    translationKey: 'cybersecurity',
    iconName: 'Shield',
    gradient: 'bg-gradient-to-br from-cyan-500 to-blue-600',
    checkColor: 'text-cyan-500',
  },
  backups: {
    translationKey: 'backups',
    iconName: 'Layers',
    gradient: 'bg-gradient-to-br from-orange-500 to-red-600',
    checkColor: 'text-orange-500',
  },
  licensing: {
    translationKey: 'licensing',
    iconName: 'Server',
    gradient: 'bg-gradient-to-br from-indigo-500 to-purple-600',
    checkColor: 'text-indigo-500',
  },
  'disaster-recovery': {
    translationKey: 'disasterRecovery',
    iconName: 'Zap',
    gradient: 'bg-gradient-to-br from-rose-500 to-pink-600',
    checkColor: 'text-rose-500',
  },
  datacenter: {
    translationKey: 'dataCenter',
    iconName: 'HardDrive',
    gradient: 'bg-gradient-to-br from-teal-500 to-cyan-600',
    checkColor: 'text-teal-500',
  },
} as const;

const serviceSlugs = [
  'software',
  'monitoring',
  'network',
  'iso-27001',
  'cybersecurity',
  'backups',
  'licensing',
  'disaster-recovery',
  'datacenter',
] as const;

type ServiceSlug = (typeof serviceSlugs)[number];

type PageParams = {
  lang: string;
  slug: string;
};

function getServiceData(lang: 'es' | 'en', slug: ServiceSlug) {
  const t = translations[lang];

  if (slug === 'monitoring') {
    return t.serviceDetails.monitoring;
  }

  return t.serviceDetails[serviceConfig[slug as keyof typeof serviceConfig].translationKey];
}

const serviceIntentKeywords: Record<ServiceSlug, { es: string[]; en: string[] }> = {
  software: {
    es: ['desarrollo de software a medida', 'software empresarial', 'aplicaciones web y moviles'],
    en: ['custom software development', 'enterprise software', 'web and mobile apps'],
  },
  monitoring: {
    es: ['monitoreo y observabilidad', 'opentelemetry', 'prometheus y zabbix'],
    en: ['monitoring and observability', 'opentelemetry', 'prometheus and zabbix'],
  },
  network: {
    es: ['soluciones de redes', 'infraestructura de red', 'redes empresariales'],
    en: ['network solutions', 'network infrastructure', 'enterprise networking'],
  },
  'iso-27001': {
    es: ['auditoria iso 27001', 'cumplimiento iso 27001', 'seguridad de la informacion'],
    en: ['iso 27001 audit', 'iso 27001 compliance', 'information security management'],
  },
  cybersecurity: {
    es: ['ciberseguridad empresarial', 'proteccion contra ransomware', 'seguridad informatica'],
    en: ['enterprise cybersecurity', 'ransomware protection', 'managed security services'],
  },
  backups: {
    es: ['respaldos y recuperacion', 'backup empresarial', 'copias de seguridad inmutables'],
    en: ['backup and recovery', 'business backup', 'immutable backups'],
  },
  licensing: {
    es: ['licenciamiento de software', 'cumplimiento de licencias', 'auditoria de licencias'],
    en: ['software licensing', 'license compliance', 'license audit'],
  },
  'disaster-recovery': {
    es: ['recuperacion ante desastres', 'continuidad del negocio', 'plan de recuperacion'],
    en: ['disaster recovery', 'business continuity', 'recovery planning'],
  },
  datacenter: {
    es: ['diseno de data center', 'infraestructura de centro de datos', 'optimizacion de data center'],
    en: ['data center design', 'data center infrastructure', 'data center optimization'],
  },
};

function buildServiceKeywords(
  lang: 'es' | 'en',
  slug: ServiceSlug,
  serviceData: ReturnType<typeof getServiceData>
) {
  const baseKeywords =
    lang === 'es'
      ? ['servicios IT empresariales', 'consultoría tecnológica', 'Quito', 'Ecuador']
      : ['enterprise IT services', 'technology consulting', 'Quito', 'Ecuador'];
  const localizedIntentKeywords = serviceIntentKeywords[slug][lang];
  const crossLanguageIntentKeywords =
    lang === 'es' ? serviceIntentKeywords[slug].en : serviceIntentKeywords[slug].es;

  return Array.from(
    new Set([
      BRAND_NAME,
      ...BRAND_ALIASES,
      serviceData.title,
      ...localizedIntentKeywords,
      ...crossLanguageIntentKeywords,
      ...serviceData.items.slice(0, 3),
      ...serviceData.technologies.slice(0, 5),
      ...baseKeywords,
    ])
  );
}

function buildServiceFaqSchema(lang: 'es' | 'en', serviceData: ReturnType<typeof getServiceData>) {
  const topItems = serviceData.items.slice(0, 3).join(', ');
  const topBenefits = serviceData.benefits.slice(0, 2).join(', ');
  const topTechnologies = serviceData.technologies.slice(0, 5).join(', ');

  if (lang === 'es') {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: `¿Qué incluye el servicio de ${serviceData.title}?`,
          acceptedAnswer: {
            '@type': 'Answer',
            text: `Incluye ${topItems}.`,
          },
        },
        {
          '@type': 'Question',
          name: `¿Qué beneficios ofrece ${serviceData.title}?`,
          acceptedAnswer: {
            '@type': 'Answer',
            text: `Entre los beneficios están ${topBenefits}.`,
          },
        },
        {
          '@type': 'Question',
          name: `¿Qué tecnologías utiliza TecnoLTS en ${serviceData.title}?`,
          acceptedAnswer: {
            '@type': 'Answer',
            text: `Trabajamos con tecnologías como ${topTechnologies}.`,
          },
        },
      ],
    };
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `What is included in ${serviceData.title}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `The service includes ${topItems}.`,
        },
      },
      {
        '@type': 'Question',
        name: `What business benefits does ${serviceData.title} provide?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Main benefits include ${topBenefits}.`,
        },
      },
      {
        '@type': 'Question',
        name: `Which technologies does TecnoLTS use for ${serviceData.title}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `We use technologies such as ${topTechnologies}.`,
        },
      },
    ],
  };
}

export function generateStaticParams() {
  return locales.flatMap((lang) => serviceSlugs.map((slug) => ({ lang, slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang) || !serviceSlugs.includes(slug as ServiceSlug)) {
    return {};
  }

  const typedLang = lang as 'es' | 'en';
  const serviceData = getServiceData(typedLang, slug as ServiceSlug);
  const localizedServicePath = localePath(typedLang, `/services/${slug}`);
  const serviceUrl = getAbsoluteUrl(localizedServicePath);
  const metadataTitle = serviceData.metadata?.title || `${serviceData.title} | ${BRAND_NAME}`;
  const metadataDescription = serviceData.metadata?.description || serviceData.description;
  const keywords = buildServiceKeywords(typedLang, slug as ServiceSlug, serviceData);

  return {
    title: metadataTitle,
    description: metadataDescription,
    keywords,
    alternates: {
      canonical: localizedServicePath,
      languages: {
        es: `/services/${slug}`,
        'es-EC': `/services/${slug}`,
        'es-419': `/services/${slug}`,
        en: `/en/services/${slug}`,
        'en-US': `/en/services/${slug}`,
        'x-default': `/services/${slug}`,
      },
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
      title: metadataTitle,
      description: metadataDescription,
      url: serviceUrl,
      siteName: BRAND_NAME,
      type: 'website',
      locale: typedLang === 'es' ? 'es_EC' : 'en_US',
      alternateLocale: typedLang === 'es' ? ['en_US'] : ['es_EC'],
      images: [
        {
          url: '/og-image.svg',
          width: 1200,
          height: 630,
          alt: serviceData.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metadataTitle,
      description: metadataDescription,
      images: ['/og-image.svg'],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { lang, slug } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  if (!serviceSlugs.includes(slug as ServiceSlug)) {
    notFound();
  }

  const t = translations[lang];
  const typedLang = lang as 'es' | 'en';
  const typedSlug = slug as ServiceSlug;
  const siteUrl = getSiteUrl();
  const serviceData = getServiceData(typedLang, typedSlug);
  const localizedServicePath = localePath(typedLang, `/services/${slug}`);
  const serviceUrl = getAbsoluteUrl(localizedServicePath);
  const serviceKeywords = buildServiceKeywords(typedLang, typedSlug, serviceData);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${serviceUrl}#service`,
    name: serviceData.title,
    description: serviceData.description,
    serviceType: serviceData.title,
    provider: {
      '@type': 'Organization',
      '@id': `${siteUrl}#organization`,
      name: BRAND_NAME,
      url: siteUrl,
    },
    areaServed: [
      {
        '@type': 'Country',
        name: 'Ecuador',
      },
    ],
    availableLanguage: ['es', 'en'],
    url: serviceUrl,
    category: serviceData.title,
    keywords: serviceKeywords.join(', '),
    mainEntityOfPage: serviceUrl,
    offers: {
      '@type': 'Offer',
      url: serviceUrl,
      availability: 'https://schema.org/InStock',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: typedLang === 'es' ? 'Inicio' : 'Home',
        item: getAbsoluteUrl(localePath(typedLang)),
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: serviceData.title,
        item: serviceUrl,
      },
    ],
  };

  const faqSchema = buildServiceFaqSchema(typedLang, serviceData);

  if (slug === 'monitoring') {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <MonitoringPage t={t} language={lang} />
      </>
    );
  }

  const config = serviceConfig[slug as keyof typeof serviceConfig];
  const service = t.serviceDetails[config.translationKey];

  const labels = lang === 'es'
    ? {
        benefits: 'Capacidades Clave',
        technologies: 'Tecnologías y Herramientas',
        process: 'Nuestro Proceso',
        getStarted: '¿Listo para comenzar?',
      }
    : {
        benefits: 'Core Capabilities',
        technologies: 'Technologies and Tools',
        process: 'Our Process',
        getStarted: 'Ready to get started?',
      };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServiceDetailPage
        title={service.title}
        description={service.description}
        detailedDescription={service.detailedDescription}
        iconName={config.iconName}
        gradient={config.gradient}
        items={service.items}
        benefits={service.benefits}
        technologies={service.technologies}
        process={service.process}
        cta={service.cta}
        checkColor={config.checkColor}
        locale={lang}
        t={t}
        labels={labels}
      />
    </>
  );
}
