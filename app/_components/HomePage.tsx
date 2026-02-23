import Navigation from './Navigation';
import HeroSection from './HeroSection';
import ServiceCard from './ServiceCard';
import HeroGridSection from './HeroGridSection';
import CTASection from './CTASection';
import TrustedBySection from './TrustedBySection';
import ContactSection from './ContactSection';
import ScrollToTopButton from './ScrollToTopButton';
import WhatsAppButton from './WhatsAppButton';
import Footer from './Footer';
import AboutSection from './AboutSection';
import type { Language, TranslationStructure } from '@/lib/translations';
import {
  BRAND_NAME,
  getLocalizedServiceUrls,
  getSiteUrl,
} from '@/lib/seo';
import { localePath } from '@/lib/i18n';

interface HomePageProps {
  t: TranslationStructure;
  language: Language;
}

export default function HomePage({ t, language }: HomePageProps) {
  const siteUrl = getSiteUrl();
  const orgName = BRAND_NAME;
  const orgId = `${siteUrl}#organization`;
  const websiteId = `${siteUrl}#website`;
  const localizedServices = getLocalizedServiceUrls(t, language);
  const localizedHomePath = localePath(language);
  const professionalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${siteUrl}#professional-service`,
    name: orgName,
    url: `${siteUrl}${localizedHomePath}`,
    description: t.seo.organizationDescription,
    logo: `${siteUrl}/icon-512.png`,
    image: `${siteUrl}/og-image.svg`,
    areaServed: [
      {
        '@type': 'Country',
        name: 'Ecuador',
      },
    ],
    serviceType:
      language === 'es' ? 'Servicios IT empresariales' : 'Enterprise IT services',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: language === 'es' ? 'Catálogo de servicios TecnoLTS' : 'TecnoLTS services catalog',
      itemListElement: localizedServices.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.description,
          url: service.url,
        },
      })),
    },
    provider: {
      '@id': orgId,
    },
  };
  const servicesItemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${siteUrl}${localizedHomePath}#services`,
    name:
      language === 'es'
        ? 'Servicios IT empresariales de TecnoLTS'
        : 'TecnoLTS enterprise IT services',
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    numberOfItems: localizedServices.length,
    itemListElement: localizedServices.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: service.url,
      name: service.title,
      description: service.description,
      provider: {
        '@id': orgId,
      },
    })),
  };

  const homepageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${siteUrl}${localizedHomePath}#webpage`,
    url: `${siteUrl}${localizedHomePath}`,
    name:
      language === 'es'
        ? 'TecnoLTS - Soluciones y servicios IT empresariales'
        : 'TecnoLTS - Enterprise IT solutions and services',
    isPartOf: {
      '@id': websiteId,
    },
    about: {
      '@id': orgId,
    },
  };

  return (
    <main id="top" className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesItemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />

      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
      </div>

      <Navigation t={t} language={language} />

      <HeroSection t={t} language={language} />


      {/* --- 1. DESARROLLO DE SOFTWARE --- */}
      <ServiceCard
        id="software"
        title={t.services.software.title}
        description={t.services.software.description}
        items={t.services.software.items}
        cta={t.services.software.cta}
        coreCapabilitiesLabel={t.labels.coreCapabilities}
        gradient="bg-gradient-to-br from-blue-500 to-blue-700"
        backgroundColor="bg-white dark:bg-slate-900"
        iconPosition="right"
        locale={language}
      />

      {/* --- 2. MONITOREO Y OBSERVABILIDAD (NUEVO) --- */}
      <ServiceCard
        id="monitoring"
        title={t.services.monitoring.title}
        description={t.services.monitoring.description}
        items={t.services.monitoring.items}
        cta={t.services.monitoring.cta}
        coreCapabilitiesLabel={t.labels.coreCapabilities}
        gradient="bg-gradient-to-br from-orange-500 to-red-600"
        backgroundColor="bg-gradient-to-br from-slate-50 to-orange-50 dark:from-slate-900 dark:to-orange-950/20"
        iconPosition="left"
        locale={language}
      />

      {/* --- 3. CIBERSEGURIDAD --- */}
      <ServiceCard
        id="cybersecurity"
        title={t.services.cybersecurity.title}
        description={t.services.cybersecurity.description}
        items={t.services.cybersecurity.items}
        cta={t.services.cybersecurity.cta}
        coreCapabilitiesLabel={t.labels.coreCapabilities}
        gradient="bg-gradient-to-br from-cyan-500 to-blue-600"
        backgroundColor="bg-white dark:bg-slate-900"
        iconPosition="right"
        locale={language}
      />

      {/* --- 4. SOLUCIONES DE RED --- */}
      <ServiceCard
        id="network"
        title={t.services.network.title}
        description={t.services.network.description}
        items={t.services.network.items}
        cta={t.services.network.cta}
        coreCapabilitiesLabel={t.labels.coreCapabilities}
        gradient="bg-gradient-to-br from-cyan-500 to-cyan-700"
        backgroundColor="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-cyan-950/50"
        iconPosition="left"
        locale={language}
      />

      {/* --- 5. ISO 27001 --- */}
      <ServiceCard
        id="iso"
        title={t.services.iso.title}
        description={t.services.iso.description}
        items={t.services.iso.items}
        cta={t.services.iso.cta}
        coreCapabilitiesLabel={t.labels.coreCapabilities}
        gradient="bg-gradient-to-br from-purple-500 to-purple-700"
        backgroundColor="bg-white dark:bg-slate-900"
        iconPosition="right"
        locale={language}
      />

      {/* --- 6. GESTIÓN DE BACKUPS --- */}
      <ServiceCard
        id="backups"
        title={t.services.backups.title}
        description={t.services.backups.description}
        items={t.services.backups.items}
        cta={t.services.backups.cta}
        coreCapabilitiesLabel={t.labels.coreCapabilities}
        gradient="bg-gradient-to-br from-emerald-500 to-emerald-700"
        backgroundColor="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-900 dark:to-purple-950/50"
        iconPosition="left"
        locale={language}
      />

      {/* --- 7. LICENCIAMIENTOS --- */}
      <ServiceCard
        id="licensing"
        title={t.services.licensing.title}
        description={t.services.licensing.description}
        items={t.services.licensing.items}
        cta={t.services.licensing.cta}
        coreCapabilitiesLabel={t.labels.coreCapabilities}
        gradient="bg-gradient-to-br from-blue-500 to-indigo-600"
        backgroundColor="bg-white dark:bg-slate-900"
        iconPosition="right"
        locale={language}
      />

      {/* --- 8. REC. DE DESASTRES --- */}
      <ServiceCard
        id="disaster-recovery"
        title={t.services.disasterRecovery.title}
        description={t.services.disasterRecovery.description}
        items={t.services.disasterRecovery.items}
        cta={t.services.disasterRecovery.cta}
        coreCapabilitiesLabel={t.labels.coreCapabilities}
        gradient="bg-gradient-to-br from-rose-500 to-rose-700"
        backgroundColor="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-blue-950/50"
        iconPosition="left"
        locale={language}
      />

      {/* --- 9. DATA CENTER --- */}
      <ServiceCard
        id="datacenter"
        title={t.services.dataCenter.title}
        description={t.services.dataCenter.description}
        items={t.services.dataCenter.items}
        cta={t.services.dataCenter.cta}
        coreCapabilitiesLabel={t.labels.coreCapabilities}
        gradient="bg-gradient-to-br from-teal-500 to-teal-700"
        backgroundColor="bg-white dark:bg-slate-900"
        iconPosition="right"
        checkColor="text-teal-500"
        locale={language}
      />

      <HeroGridSection t={t} />

      <CTASection t={t} />

      <TrustedBySection t={t} />
      <AboutSection t={t} />


      <ContactSection t={t} />

      <ScrollToTopButton t={t} />

      <WhatsAppButton t={t} />

      <Footer t={t} locale={language} />
    </main>
  );
}
