'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import type { TranslationStructure } from '@/lib/translations';

interface FooterProps {
  t: TranslationStructure;
  locale?: string;
}

export default function Footer({ t, locale = 'es' }: FooterProps) {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logos/tecnolts-logo-v2.svg"
                alt="TecnoLTS"
                width={220}
                height={56}
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm italic">
              {t.footer.description}
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-all border border-white/10 hover:border-cyan-500/50 hover:shadow-[0_0_15px_-5px_rgba(6,182,212,0.5)]">
                <span className="text-white">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-all border border-white/10 hover:border-cyan-500/50 hover:shadow-[0_0_15px_-5px_rgba(6,182,212,0.5)]">
                <span className="text-white">𝕏</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-all border border-white/10 hover:border-cyan-500/50 hover:shadow-[0_0_15px_-5px_rgba(6,182,212,0.5)]">
                <span className="text-white">in</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6 uppercase tracking-wider text-sm">{t.footer.services}</h3>
            <ul className="space-y-3.5">
              <li><a href={`/${locale}/services/software`} className="text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0" />
                <span className="group-hover:translate-x-1 transition-transform">{t.services.software.title}</span>
              </a></li>
              {/* Nuevo Enlace: Monitoreo */}
              <li><a href={`/${locale}/services/monitoring`} className="text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0" />
                <span className="group-hover:translate-x-1 transition-transform">{t.services.monitoring.title}</span>
              </a></li>
              <li><a href={`/${locale}/services/network`} className="text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0" />
                <span className="group-hover:translate-x-1 transition-transform">{t.services.network.title}</span>
              </a></li>
              <li><a href={`/${locale}/services/cybersecurity`} className="text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0" />
                <span className="group-hover:translate-x-1 transition-transform">{t.services.cybersecurity.title}</span>
              </a></li>
              <li><a href={`/${locale}/services/iso-27001`} className="text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0" />
                <span className="group-hover:translate-x-1 transition-transform">{t.services.iso.title}</span>
              </a></li>
              <li><a href={`/${locale}/services/backups`} className="text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0" />
                <span className="group-hover:translate-x-1 transition-transform">{t.services.backups.title}</span>
              </a></li>
              <li><a href={`/${locale}/services/licensing`} className="text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0" />
                <span className="group-hover:translate-x-1 transition-transform">{t.services.licensing.title}</span>
              </a></li>
              <li><a href={`/${locale}/services/disaster-recovery`} className="text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0" />
                <span className="group-hover:translate-x-1 transition-transform">{t.services.disasterRecovery.title}</span>
              </a></li>
              <li><a href={`/${locale}/services/datacenter`} className="text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0" />
                <span className="group-hover:translate-x-1 transition-transform">{t.services.dataCenter.title}</span>
              </a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6 uppercase tracking-wider text-sm">{t.footer.company}</h3>
            <ul className="space-y-3.5">
              <li><a href="#about" className="text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0" />
                <span className="group-hover:translate-x-1 transition-transform">{t.footer.about}</span>
              </a></li>
              <li><a href="#" className="text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0" />
                <span className="group-hover:translate-x-1 transition-transform">{t.footer.careers}</span>
              </a></li>
              <li><a href="#" className="text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0" />
                <span className="group-hover:translate-x-1 transition-transform">{t.footer.blog}</span>
              </a></li>
              <li><a href="#" className="text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0" />
                <span className="group-hover:translate-x-1 transition-transform">{t.footer.privacy}</span>
              </a></li>
              <li><a href="#" className="text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0" />
                <span className="group-hover:translate-x-1 transition-transform">{t.footer.terms}</span>
              </a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6 uppercase tracking-wider text-sm">{t.footer.contact}</h3>
            <ul className="space-y-6">
              <li className="text-gray-400 flex items-start gap-3 text-sm">
                <span className="text-cyan-400 mt-1 flex-shrink-0">✉</span>
                <div>
                  <p className="text-white font-medium mb-1">{t.footer.contactEmailLabel}</p>
                  <a href="mailto:info@tecnotls.com" className="break-all hover:text-cyan-400 transition-colors border-b border-gray-700 hover:border-cyan-400 pb-0.5">info@tecnotls.com</a>
                </div>
              </li>
              <li className="text-gray-400 flex items-start gap-3 text-sm">
                <span className="text-cyan-400 mt-1 flex-shrink-0">☎</span>
                <div>
                  <p className="text-white font-medium mb-1">{t.footer.contactPhoneLabel}</p>
                  <a href="tel:+15551234567" className="break-words hover:text-cyan-400 transition-colors border-b border-gray-700 hover:border-cyan-400 pb-0.5">+1 (555) 123-4567</a>
                </div>
              </li>
              <li className="text-gray-400 flex items-start gap-3 text-sm">
                <span className="text-cyan-400 mt-1 flex-shrink-0">📍</span>
                <div>
                  <p className="text-white font-medium mb-1">{t.footer.contactLocationLabel}</p>
                  <span className="break-words leading-relaxed">{t.contact.info.locationValue}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} TecnoLTS. {t.footer.rights}
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-white transition-colors">v2.1.0</a>
            <span className="opacity-20">|</span>
            <a href="#top" className="hover:text-white transition-colors flex items-center gap-1">Top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
