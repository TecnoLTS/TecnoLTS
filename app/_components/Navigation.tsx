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
    { href: '#software', icon: Code, title: t.services.software.title, color: 'blue' },
    { href: '#network', icon: Network, title: t.services.network.title, color: 'cyan' },
    { href: '#iso', icon: Lock, title: t.services.iso.title, color: 'purple' },
    { href: '#cybersecurity', icon: Shield, title: t.services.cybersecurity.title, color: 'emerald' },
    { href: '#backups', icon: Layers, title: t.services.backups.title, color: 'orange' },
    { href: '#licensing', icon: FileCheck, title: t.services.licensing.title, color: 'indigo' },
    { href: '#disaster-recovery', icon: Zap, title: t.services.disasterRecovery.title, color: 'rose' },
    { href: '#datacenter', icon: HardDrive, title: t.services.dataCenter.title, color: 'teal' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-slate-700/50 z-50 animate-slide-in-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 rounded-xl" />
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                TecnoLTS
              </span>
            </div>
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
                          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 dark:hover:from-blue-900/30 dark:hover:to-cyan-900/30 transition-all duration-200 group/item"
                        >
                          <div className={`w-8 h-8 rounded-lg bg-${service.color}-100 dark:bg-${service.color}-900/50 flex items-center justify-center group-hover/item:bg-${service.color}-500 transition-colors`}>
                            <Icon className={`w-4 h-4 text-${service.color}-600 dark:text-${service.color}-400 group-hover/item:text-white`} />
                          </div>
                          <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">{service.title}</span>
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
            <Button asChild className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 shadow-lg transition-all duration-300 magnetic hover-lift">
              <a href="#contact-form">{t.nav.getStarted}</a>
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
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-${service.color}-50 dark:hover:bg-${service.color}-900/20 transition-colors`}
                  >
                    <Icon className={`w-5 h-5 text-${service.color}-600 dark:text-${service.color}-400 flex-shrink-0`} />
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
