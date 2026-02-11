'use client';

import { useState } from 'react';
import { Code, Shield, Network, Lock, Layers, FileCheck, Zap, HardDrive, ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { LanguageToggle } from '@/components/language-toggle';
import { useLanguage } from '@/components/language-provider';

export default function Navigation() {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      href: '#software',
      icon: Code,
      title: t.services.software.title,
      bgColor: 'bg-blue-100 dark:bg-blue-900/50',
      iconColor: 'text-blue-600 dark:text-blue-400',
      hoverBg: 'group-hover/item:bg-blue-500',
      mobileHover: 'hover:bg-blue-50 dark:hover:bg-blue-900/20'
    },
    {
      href: '#network',
      icon: Network,
      title: t.services.network.title,
      bgColor: 'bg-cyan-100 dark:bg-cyan-900/50',
      iconColor: 'text-cyan-600 dark:text-cyan-400',
      hoverBg: 'group-hover/item:bg-cyan-500',
      mobileHover: 'hover:bg-cyan-50 dark:hover:bg-cyan-900/20'
    },
    {
      href: '#iso',
      icon: Lock,
      title: t.services.iso.title,
      bgColor: 'bg-purple-100 dark:bg-purple-900/50',
      iconColor: 'text-purple-600 dark:text-purple-400',
      hoverBg: 'group-hover/item:bg-purple-500',
      mobileHover: 'hover:bg-purple-50 dark:hover:bg-purple-900/20'
    },
    {
      href: '#cybersecurity',
      icon: Shield,
      title: t.services.cybersecurity.title,
      bgColor: 'bg-emerald-100 dark:bg-emerald-900/50',
      iconColor: 'text-emerald-600 dark:text-emerald-400',
      hoverBg: 'group-hover/item:bg-emerald-500',
      mobileHover: 'hover:bg-emerald-50 dark:hover:bg-emerald-900/20'
    },
    {
      href: '#backups',
      icon: Layers,
      title: t.services.backups.title,
      bgColor: 'bg-orange-100 dark:bg-orange-900/50',
      iconColor: 'text-orange-600 dark:text-orange-400',
      hoverBg: 'group-hover/item:bg-orange-500',
      mobileHover: 'hover:bg-orange-50 dark:hover:bg-orange-900/20'
    },
    {
      href: '#licensing',
      icon: FileCheck,
      title: t.services.licensing.title,
      bgColor: 'bg-indigo-100 dark:bg-indigo-900/50',
      iconColor: 'text-indigo-600 dark:text-indigo-400',
      hoverBg: 'group-hover/item:bg-indigo-500',
      mobileHover: 'hover:bg-indigo-50 dark:hover:bg-indigo-900/20'
    },
    {
      href: '#disaster-recovery',
      icon: Zap,
      title: t.services.disasterRecovery.title,
      bgColor: 'bg-rose-100 dark:bg-rose-900/50',
      iconColor: 'text-rose-600 dark:text-rose-400',
      hoverBg: 'group-hover/item:bg-rose-500',
      mobileHover: 'hover:bg-rose-50 dark:hover:bg-rose-900/20'
    },
    {
      href: '#datacenter',
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
            <a href="#" className="flex items-center gap-2 group/logo">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 rounded-xl group-hover/logo:scale-110 group-hover/logo:rotate-6 transition-all duration-300 shadow-lg group-hover/logo:shadow-xl" />
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent group-hover/logo:from-blue-600 group-hover/logo:to-cyan-500 dark:group-hover/logo:from-blue-400 dark:group-hover/logo:to-cyan-400 transition-all duration-300">
                TecnoLTS
              </span>
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4">
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
                          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 dark:hover:from-blue-900/30 dark:hover:to-cyan-900/30 transition-all duration-200 group/item hover:scale-105 hover:translate-x-1"
                        >
                          <div className={`w-8 h-8 rounded-lg ${service.bgColor} ${service.hoverBg} flex items-center justify-center transition-all duration-300 group-hover/item:scale-110 group-hover/item:rotate-6`}>
                            <Icon className={`w-4 h-4 ${service.iconColor} group-hover/item:text-white transition-all duration-300 group-hover/item:scale-110`} />
                          </div>
                          <span className="text-gray-700 dark:text-gray-300 font-medium text-sm group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors">{service.title}</span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium">
              {t.nav.about}
            </a>
            <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium">
              {t.nav.contact}
            </a>
            <div className="flex items-center gap-2 ml-2">
              <ThemeToggle />
              <LanguageToggle />
            </div>
            <Button asChild className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 relative overflow-hidden group/cta">
              <a href="#contact-form" className="relative z-10">
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300"></span>
                <span className="relative">{t.nav.getStarted}</span>
              </a>
            </Button>
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
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700">
          <div className="px-4 py-4 space-y-3 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="space-y-2">
              <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 px-2 mb-2">{t.nav.services}</div>
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <a
                    key={service.href}
                    href={service.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg ${service.mobileHover} transition-colors`}
                  >
                    <Icon className={`w-5 h-5 ${service.iconColor} flex-shrink-0`} />
                    <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{service.title}</span>
                  </a>
                );
              })}
            </div>

            <div className="border-t border-gray-200 dark:border-slate-700 pt-3 space-y-2">
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors text-sm font-medium"
              >
                {t.nav.about}
              </a>
              <a
                href="#contact-form"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors text-sm font-medium"
              >
                {t.nav.contact}
              </a>
            </div>

            <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700">
              <a href="#contact-form" onClick={() => setMobileMenuOpen(false)}>
                {t.nav.getStarted}
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
