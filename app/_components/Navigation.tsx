'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  Code, Shield, Network, Lock, Layers, 
  FileCheck, Zap, HardDrive, ChevronDown, 
  Menu, X, Activity 
} from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { LanguageToggle } from '@/components/language-toggle';
import { useLanguage } from '@/components/language-provider';

export default function Navigation() {
  const { t, language } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lista de servicios actualizada con Monitoreo
  const services = [
    {
      href: `/${language}#software`,
      icon: Code,
      title: t.services.software.title,
      bgColor: 'bg-blue-100 dark:bg-blue-900/50',
      iconColor: 'text-blue-600 dark:text-blue-400',
      hoverBg: 'group-hover/item:bg-blue-500',
      mobileHover: 'hover:bg-blue-50 dark:hover:bg-blue-900/20'
    },
    {
      href: `/${language}#monitoring`,
      icon: Activity,
      title: t.services.monitoring.title,
      bgColor: 'bg-indigo-100 dark:bg-indigo-900/50',
      iconColor: 'text-indigo-600 dark:text-indigo-400',
      hoverBg: 'group-hover/item:bg-indigo-500',
      mobileHover: 'hover:bg-indigo-50 dark:hover:bg-indigo-900/20'
    },
    {
      href: `/${language}#cybersecurity`,
      icon: Shield,
      title: t.services.cybersecurity.title,
      bgColor: 'bg-emerald-100 dark:bg-emerald-900/50',
      iconColor: 'text-emerald-600 dark:text-emerald-400',
      hoverBg: 'group-hover/item:bg-emerald-500',
      mobileHover: 'hover:bg-emerald-50 dark:hover:bg-emerald-900/20'
    },
    {
      href: `/${language}#network`,
      icon: Network,
      title: t.services.network.title,
      bgColor: 'bg-cyan-100 dark:bg-cyan-900/50',
      iconColor: 'text-cyan-600 dark:text-cyan-400',
      hoverBg: 'group-hover/item:bg-cyan-500',
      mobileHover: 'hover:bg-cyan-50 dark:hover:bg-cyan-900/20'
    },
    {
      href: `/${language}#iso`,
      icon: Lock,
      title: t.services.iso.title,
      bgColor: 'bg-purple-100 dark:bg-purple-900/50',
      iconColor: 'text-purple-600 dark:text-purple-400',
      hoverBg: 'group-hover/item:bg-purple-500',
      mobileHover: 'hover:bg-purple-50 dark:hover:bg-purple-900/20'
    },
    {
      href: `/${language}#backups`,
      icon: Layers,
      title: t.services.backups.title,
      bgColor: 'bg-orange-100 dark:bg-orange-900/50',
      iconColor: 'text-orange-600 dark:text-orange-400',
      hoverBg: 'group-hover/item:bg-orange-500',
      mobileHover: 'hover:bg-orange-50 dark:hover:bg-orange-900/20'
    },
    {
      href: `/${language}#licensing`,
      icon: FileCheck,
      title: t.services.licensing.title,
      bgColor: 'bg-indigo-100 dark:bg-indigo-900/50',
      iconColor: 'text-indigo-600 dark:text-indigo-400',
      hoverBg: 'group-hover/item:bg-indigo-500',
      mobileHover: 'hover:bg-indigo-50 dark:hover:bg-indigo-900/20'
    },
    {
      href: `/${language}#disaster-recovery`,
      icon: Zap,
      title: t.services.disasterRecovery.title,
      bgColor: 'bg-rose-100 dark:bg-rose-900/50',
      iconColor: 'text-rose-600 dark:text-rose-400',
      hoverBg: 'group-hover/item:bg-rose-500',
      mobileHover: 'hover:bg-rose-50 dark:hover:bg-rose-900/20'
    },
    {
      href: `/${language}#datacenter`,
      icon: HardDrive,
      title: t.services.dataCenter.title,
      bgColor: 'bg-teal-100 dark:bg-teal-900/50',
      iconColor: 'text-teal-600 dark:text-teal-400',
      hoverBg: 'group-hover/item:bg-teal-500',
      mobileHover: 'hover:bg-teal-50 dark:hover:bg-teal-900/20'
    },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-slate-700/50 z-50 animate-slide-in-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href={`/${language}`} className="flex items-center">
              <Image
                src="/logos/tecnolts-logo.svg"
                alt="TecnoLTS"
                width={180}
                height={44}
                priority
                className="h-10 w-auto object-contain"
              />
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href={`/${language}`} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium">
              {t.nav.home}
            </a>
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium py-2">
                {t.nav.services}
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-gray-200 dark:border-slate-700 overflow-hidden backdrop-blur-lg">
                  <div className="p-2 space-y-1">
                    {services.map((service) => {
                      const Icon = service.icon;
                      return (
                        <a
                          key={service.href}
                          href={service.href}
                          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 dark:hover:from-blue-900/30 dark:hover:to-cyan-900/30 transition-all duration-300 group/item hover:translate-x-1 min-w-0"
                        >
                          <div className={`w-8 h-8 rounded-lg ${service.bgColor} ${service.hoverBg} flex items-center justify-center transition-all duration-500 group-hover/item:scale-105 group-hover/item:shadow-lg flex-shrink-0`}>
                            <Icon className={`w-4 h-4 ${service.iconColor} group-hover/item:text-white transition-all duration-500 group-hover/item:scale-105`} />
                          </div>
                          <span className="min-w-0 flex-1 break-words text-gray-700 dark:text-gray-300 font-medium text-sm group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors duration-300">{service.title}</span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <a href={`/${language}#about`} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium">
              {t.nav.about}
            </a>
            <a href={`/${language}#contact`} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium">
              {t.nav.contact}
            </a>
            <div className="flex items-center gap-2 ml-2">
              <ThemeToggle />
              <LanguageToggle />
            </div>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <LanguageToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors touch-manipulation"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700 shadow-2xl animate-fade-in">
          <div className="px-4 py-4 space-y-3 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <a
              href={`/${language}`}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors text-sm font-medium"
            >
              {t.nav.home}
            </a>
            <div className="space-y-2">
              <div className="text-sm font-semibold text-gray-400 dark:text-gray-500 px-3 mb-2 uppercase tracking-wider">{t.nav.services}</div>
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <a
                    key={service.href}
                    href={service.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg ${service.mobileHover} transition-colors group min-w-0`}
                  >
                    <div className={`w-10 h-10 rounded-xl ${service.bgColor} flex items-center justify-center transition-transform group-active:scale-95`}>
                      <Icon className={`w-5 h-5 ${service.iconColor}`} />
                    </div>
                    <span className="min-w-0 flex-1 break-words leading-snug text-gray-700 dark:text-gray-300 text-sm font-medium">{service.title}</span>
                  </a>
                );
              })}
            </div>

            <div className="border-t border-gray-200 dark:border-slate-700 pt-4 space-y-2">
              <a
                href={`/${language}#about`}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors text-sm font-medium"
              >
                {t.nav.about}
              </a>
              <a
                href={`/${language}#contact`}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors text-sm font-medium"
              >
                {t.nav.contact}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
