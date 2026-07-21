import Image from 'next/image';
import { ThemeToggle } from '@/components/theme-toggle';
import { LanguageToggle } from '@/components/language-toggle';
import NavigationMobileMenu from './NavigationMobileMenu';
import NavigationDesktopDropdown from './NavigationDesktopDropdown';
import ServiceIconSprite from './ServiceIconSprite';
import ProductIconSprite from './ProductIconSprite';
import type { Language, TranslationStructure } from '@/lib/translations';
import { localePath } from '@/lib/i18n';

interface NavigationProps {
  t: TranslationStructure;
  language: Language;
}

interface NavigationItem {
  href: string;
  iconId: string;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
}

export default function Navigation({ t, language }: NavigationProps) {
  const homeHref = localePath(language);
  const servicesIndexHref = localePath(language, '/services');
  const productsIndexHref = localePath(language, '/products');
  const contactHref = `${localePath(language)}#contact`;

  const services: NavigationItem[] = [
    {
      href: localePath(language, '/services/software'),
      iconId: 'service-icon-software',
      title: t.services.software.title,
      description: t.services.software.menuDescription,
      bgColor: 'bg-blue-100 dark:bg-blue-900/50',
      iconColor: 'text-blue-600 dark:text-blue-400',
    },
    {
      href: localePath(language, '/services/monitoring'),
      iconId: 'service-icon-monitoring',
      title: t.services.monitoring.title,
      description: t.services.monitoring.menuDescription,
      bgColor: 'bg-indigo-100 dark:bg-indigo-900/50',
      iconColor: 'text-indigo-600 dark:text-indigo-400',
    },
    {
      href: localePath(language, '/services/cybersecurity'),
      iconId: 'service-icon-cybersecurity',
      title: t.services.cybersecurity.title,
      description: t.services.cybersecurity.menuDescription,
      bgColor: 'bg-emerald-100 dark:bg-emerald-900/50',
      iconColor: 'text-emerald-600 dark:text-emerald-400',
    },
    {
      href: localePath(language, '/services/network'),
      iconId: 'service-icon-network',
      title: t.services.network.title,
      description: t.services.network.menuDescription,
      bgColor: 'bg-cyan-100 dark:bg-cyan-900/50',
      iconColor: 'text-cyan-600 dark:text-cyan-400',
    },
    {
      href: localePath(language, '/services/iso-27001'),
      iconId: 'service-icon-iso',
      title: t.services.iso.title,
      description: t.services.iso.menuDescription,
      bgColor: 'bg-purple-100 dark:bg-purple-900/50',
      iconColor: 'text-purple-600 dark:text-purple-400',
    },
    {
      href: localePath(language, '/services/backups'),
      iconId: 'service-icon-backups',
      title: t.services.backups.title,
      description: t.services.backups.menuDescription,
      bgColor: 'bg-orange-100 dark:bg-orange-900/50',
      iconColor: 'text-orange-600 dark:text-orange-400',
    },
    {
      href: localePath(language, '/services/licensing'),
      iconId: 'service-icon-filecheck',
      title: t.services.licensing.title,
      description: t.services.licensing.menuDescription,
      bgColor: 'bg-indigo-100 dark:bg-indigo-900/50',
      iconColor: 'text-indigo-600 dark:text-indigo-400',
    },
    {
      href: localePath(language, '/services/disaster-recovery'),
      iconId: 'service-icon-disaster-recovery',
      title: t.services.disasterRecovery.title,
      description: t.services.disasterRecovery.menuDescription,
      bgColor: 'bg-rose-100 dark:bg-rose-900/50',
      iconColor: 'text-rose-600 dark:text-rose-400',
    },
    {
      href: localePath(language, '/services/datacenter'),
      iconId: 'service-icon-datacenter',
      title: t.services.dataCenter.title,
      description: t.services.dataCenter.menuDescription,
      bgColor: 'bg-teal-100 dark:bg-teal-900/50',
      iconColor: 'text-teal-600 dark:text-teal-400',
    },
  ];

  const products: NavigationItem[] = [
    {
      href: localePath(language, '/products/loyalty-rewards'),
      iconId: 'product-icon-loyalty',
      title: t.products.loyaltyRewards.title,
      description: t.products.loyaltyRewards.description,
      bgColor: 'bg-amber-100 dark:bg-amber-900/50',
      iconColor: 'text-amber-600 dark:text-amber-400',
    },
    {
      href: localePath(language, '/products/invoicing'),
      iconId: 'product-icon-invoicing',
      title: t.products.invoicing.title,
      description: t.products.invoicing.description,
      bgColor: 'bg-green-100 dark:bg-green-900/50',
      iconColor: 'text-green-600 dark:text-green-400',
    },
    {
      href: localePath(language, '/products/monitoring-software'),
      iconId: 'product-icon-monitoring',
      title: t.products.monitoringSoftware.title,
      description: t.products.monitoringSoftware.description,
      bgColor: 'bg-sky-100 dark:bg-sky-900/50',
      iconColor: 'text-sky-600 dark:text-sky-400',
    },
    {
      href: localePath(language, '/products/ecommerce'),
      iconId: 'product-icon-ecommerce',
      title: t.products.ecommerce.title,
      description: t.products.ecommerce.description,
      bgColor: 'bg-fuchsia-100 dark:bg-fuchsia-900/50',
      iconColor: 'text-fuchsia-600 dark:text-fuchsia-400',
    },
    {
      href: localePath(language, '/products/mailing'),
      iconId: 'product-icon-mail',
      title: t.products.mailing.title,
      description: t.products.mailing.description,
      bgColor: 'bg-violet-100 dark:bg-violet-900/50',
      iconColor: 'text-violet-600 dark:text-violet-400',
    },
  ];

  return (
    <>
      <ServiceIconSprite />
      <ProductIconSprite />
      <nav className="mobile-nav-surface fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-700/50 z-50 animate-slide-in-left">
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

            <div className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
              <a href={homeHref} className="text-[17px] text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors font-medium">
                {t.nav.home}
              </a>
              <NavigationDesktopDropdown
                label={t.nav.services}
                href={servicesIndexHref}
                items={services}
                columns={3}
              />
              <NavigationDesktopDropdown
                label={t.nav.products}
                href={productsIndexHref}
                items={products}
                columns={2}
              />
              <a href={contactHref} className="text-[17px] text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors font-medium">
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
                  sections={[
                    {
                      label: t.nav.services,
                      href: servicesIndexHref,
                      linkLabel: t.nav.services,
                      items: services,
                    },
                    {
                      label: t.nav.products,
                      href: productsIndexHref,
                      linkLabel: t.nav.products,
                      items: products,
                    },
                  ]}
                  contactHref={contactHref}
                  contactLabel={t.nav.contact}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
