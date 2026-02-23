import Image from 'next/image';
import { ThemeToggle } from '@/components/theme-toggle';
import { LanguageToggle } from '@/components/language-toggle';
import NavigationMobileMenu from './NavigationMobileMenu';
import NavigationDesktopServicesMenu from './NavigationDesktopServicesMenu';
import ServiceIconSprite from './ServiceIconSprite';
import type { Language, TranslationStructure } from '@/lib/translations';
import { localePath } from '@/lib/i18n';

interface NavigationProps {
  t: TranslationStructure;
  language: Language;
}

interface ServiceItem {
  href: string;
  iconId: string;
  title: string;
  bgColor: string;
  iconColor: string;
  hoverBg: string;
  mobileHover: string;
}

export default function Navigation({ t, language }: NavigationProps) {
  const homeHref = localePath(language);
  const servicesIndexHref = localePath(language, '/services');
  const contactHref = `${localePath(language)}#contact-form`;
  const services: ServiceItem[] = [
    {
      href: localePath(language, '/services/software'),
      iconId: 'service-icon-software',
      title: t.services.software.title,
      bgColor: 'bg-blue-100 dark:bg-blue-900/50',
      iconColor: 'text-blue-600 dark:text-blue-400',
      hoverBg: 'group-hover/item:bg-blue-500',
      mobileHover: 'hover:bg-blue-50 dark:hover:bg-blue-900/20',
    },
    {
      href: localePath(language, '/services/monitoring'),
      iconId: 'service-icon-monitoring',
      title: t.services.monitoring.title,
      bgColor: 'bg-indigo-100 dark:bg-indigo-900/50',
      iconColor: 'text-indigo-600 dark:text-indigo-400',
      hoverBg: 'group-hover/item:bg-indigo-500',
      mobileHover: 'hover:bg-indigo-50 dark:hover:bg-indigo-900/20',
    },
    {
      href: localePath(language, '/services/cybersecurity'),
      iconId: 'service-icon-cybersecurity',
      title: t.services.cybersecurity.title,
      bgColor: 'bg-emerald-100 dark:bg-emerald-900/50',
      iconColor: 'text-emerald-600 dark:text-emerald-400',
      hoverBg: 'group-hover/item:bg-emerald-500',
      mobileHover: 'hover:bg-emerald-50 dark:hover:bg-emerald-900/20',
    },
    {
      href: localePath(language, '/services/network'),
      iconId: 'service-icon-network',
      title: t.services.network.title,
      bgColor: 'bg-cyan-100 dark:bg-cyan-900/50',
      iconColor: 'text-cyan-600 dark:text-cyan-400',
      hoverBg: 'group-hover/item:bg-cyan-500',
      mobileHover: 'hover:bg-cyan-50 dark:hover:bg-cyan-900/20',
    },
    {
      href: localePath(language, '/services/iso-27001'),
      iconId: 'service-icon-iso',
      title: t.services.iso.title,
      bgColor: 'bg-purple-100 dark:bg-purple-900/50',
      iconColor: 'text-purple-600 dark:text-purple-400',
      hoverBg: 'group-hover/item:bg-purple-500',
      mobileHover: 'hover:bg-purple-50 dark:hover:bg-purple-900/20',
    },
    {
      href: localePath(language, '/services/backups'),
      iconId: 'service-icon-backups',
      title: t.services.backups.title,
      bgColor: 'bg-orange-100 dark:bg-orange-900/50',
      iconColor: 'text-orange-600 dark:text-orange-400',
      hoverBg: 'group-hover/item:bg-orange-500',
      mobileHover: 'hover:bg-orange-50 dark:hover:bg-orange-900/20',
    },
    {
      href: localePath(language, '/services/licensing'),
      iconId: 'service-icon-filecheck',
      title: t.services.licensing.title,
      bgColor: 'bg-indigo-100 dark:bg-indigo-900/50',
      iconColor: 'text-indigo-600 dark:text-indigo-400',
      hoverBg: 'group-hover/item:bg-indigo-500',
      mobileHover: 'hover:bg-indigo-50 dark:hover:bg-indigo-900/20',
    },
    {
      href: localePath(language, '/services/disaster-recovery'),
      iconId: 'service-icon-disaster-recovery',
      title: t.services.disasterRecovery.title,
      bgColor: 'bg-rose-100 dark:bg-rose-900/50',
      iconColor: 'text-rose-600 dark:text-rose-400',
      hoverBg: 'group-hover/item:bg-rose-500',
      mobileHover: 'hover:bg-rose-50 dark:hover:bg-rose-900/20',
    },
    {
      href: localePath(language, '/services/datacenter'),
      iconId: 'service-icon-datacenter',
      title: t.services.dataCenter.title,
      bgColor: 'bg-teal-100 dark:bg-teal-900/50',
      iconColor: 'text-teal-600 dark:text-teal-400',
      hoverBg: 'group-hover/item:bg-teal-500',
      mobileHover: 'hover:bg-teal-50 dark:hover:bg-teal-900/20',
    },
  ];

  return (
    <>
      <ServiceIconSprite />
      <nav className="mobile-nav-surface fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-slate-700/50 z-50 animate-slide-in-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <a href={homeHref} className="flex items-center">
              <Image
                src="/logos/tecnolts-logo-v2.svg"
                alt="TecnoLTS"
                width={180}
                height={44}
                className="h-10 w-auto object-contain"
                priority
              />
            </a>

            <div className="hidden md:flex items-center gap-4 absolute left-1/2 -translate-x-1/2">
              <a href={homeHref} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium">
                {t.nav.home}
              </a>
              <NavigationDesktopServicesMenu
                label={t.nav.services}
                href={servicesIndexHref}
                services={services}
              />
              <a href={contactHref} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium">
                {t.nav.contact}
              </a>
            </div>

            <div className="flex items-center gap-2 md:ml-3">
              <ThemeToggle />
              <LanguageToggle initialLanguage={language} />
              <div className="md:hidden">
                <NavigationMobileMenu
                  ariaLabel="Toggle menu"
                  homeHref={homeHref}
                  homeLabel={t.nav.home}
                  servicesHref={servicesIndexHref}
                  servicesLinkLabel={t.nav.services}
                  servicesLabel={t.nav.services}
                  contactHref={contactHref}
                  contactLabel={t.nav.contact}
                  services={services}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
