'use client';

import { useLanguage } from '@/components/language-provider';
import { Code, Shield, Network, Lock, Layers, Server, Zap, HardDrive } from 'lucide-react';
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

export default function HomePage() {
  const { t, language } = useLanguage();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const orgName = 'TecnoLTS';
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: orgName,
    url: siteUrl,
    logo: `${siteUrl}/og-image.svg`,
    description: t.seo.organizationDescription,
    sameAs: [],
  };

  return (
    <main id="top" className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
      </div>

      <Navigation />

      <HeroSection t={t} />

      <ServiceCard
        id="software"
        icon={Code}
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

      <ServiceCard
        id="cybersecurity"
        icon={Shield}
        title={t.services.cybersecurity.title}
        description={t.services.cybersecurity.description}
        items={t.services.cybersecurity.items}
        cta={t.services.cybersecurity.cta}
        coreCapabilitiesLabel={t.labels.coreCapabilities}
        gradient="bg-gradient-to-br from-cyan-500 to-blue-600"
        backgroundColor="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-cyan-950/50"
        iconPosition="left"
        locale={language}
      />

      <ServiceCard
        id="network"
        icon={Network}
        title={t.services.network.title}
        description={t.services.network.description}
        items={t.services.network.items}
        cta={t.services.network.cta}
        coreCapabilitiesLabel={t.labels.coreCapabilities}
        gradient="bg-gradient-to-br from-cyan-500 to-cyan-700"
        backgroundColor="bg-white dark:bg-slate-900"
        iconPosition="right"
        locale={language}
      />

      <ServiceCard
        id="iso"
        icon={Lock}
        title={t.services.iso.title}
        description={t.services.iso.description}
        items={t.services.iso.items}
        cta={t.services.iso.cta}
        coreCapabilitiesLabel={t.labels.coreCapabilities}
        gradient="bg-gradient-to-br from-purple-500 to-purple-700"
        backgroundColor="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-900 dark:to-purple-950/50"
        iconPosition="left"
        locale={language}
      />

      <ServiceCard
        id="backups"
        icon={Layers}
        title={t.services.backups.title}
        description={t.services.backups.description}
        items={t.services.backups.items}
        cta={t.services.backups.cta}
        coreCapabilitiesLabel={t.labels.coreCapabilities}
        gradient="bg-gradient-to-br from-emerald-500 to-emerald-700"
        backgroundColor="bg-white dark:bg-slate-900"
        iconPosition="right"
        locale={language}
      />

      <ServiceCard
        id="licensing"
        icon={Server}
        title={t.services.licensing.title}
        description={t.services.licensing.description}
        items={t.services.licensing.items}
        cta={t.services.licensing.cta}
        coreCapabilitiesLabel={t.labels.coreCapabilities}
        gradient="bg-gradient-to-br from-blue-500 to-indigo-600"
        backgroundColor="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-blue-950/50"
        iconPosition="left"
        locale={language}
      />

      <ServiceCard
        id="disaster-recovery"
        icon={Zap}
        title={t.services.disasterRecovery.title}
        description={t.services.disasterRecovery.description}
        items={t.services.disasterRecovery.items}
        cta={t.services.disasterRecovery.cta}
        coreCapabilitiesLabel={t.labels.coreCapabilities}
        gradient="bg-gradient-to-br from-rose-500 to-rose-700"
        backgroundColor="bg-white dark:bg-slate-900"
        iconPosition="right"
        locale={language}
      />

      <ServiceCard
        id="datacenter"
        icon={HardDrive}
        title={t.services.dataCenter.title}
        description={t.services.dataCenter.description}
        items={t.services.dataCenter.items}
        cta={t.services.dataCenter.cta}
        coreCapabilitiesLabel={t.labels.coreCapabilities}
        gradient="bg-gradient-to-br from-teal-500 to-teal-700"
        backgroundColor="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-slate-900 dark:to-teal-950/50"
        iconPosition="left"
        checkColor="text-teal-500"
        locale={language}
      />

      <HeroGridSection t={t} />

      <CTASection t={t} />

      <TrustedBySection t={t} />

      <ContactSection t={t} />

      <ScrollToTopButton />

      <WhatsAppButton t={t} />

      <Footer t={t} />
    </main>
  );
}
