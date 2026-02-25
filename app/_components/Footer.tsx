import Image from 'next/image';
import { ArrowRight, Facebook, Instagram } from 'lucide-react';
import type { Language, TranslationStructure } from '@/lib/translations';
import { getContactEmail, getContactPhone, getWhatsAppHref, getFacebookUrl, getInstagramUrl, getTikTokUrl } from '@/lib/seo';
import { localePath } from '@/lib/i18n';
import EmailLink from '@/components/EmailLink';

interface FooterProps {
  t: TranslationStructure;
  locale?: Language;
}

export default function Footer({ t, locale = 'es' }: FooterProps) {
  const contactEmail = getContactEmail();
  const contactPhone = getContactPhone();
  const whatsAppHref = getWhatsAppHref();
  const facebookUrl = getFacebookUrl();
  const instagramUrl = getInstagramUrl();
  const tiktokUrl = getTikTokUrl();
  const serviceHref = (slug: string) => localePath(locale, `/services/${slug}`);

  return (
    <footer className="deferred-section bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
                loading="lazy"
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm italic">
              {t.footer.description}
            </p>
            <div className="flex gap-3">
              {facebookUrl ? (
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 bg-white/5 hover:bg-blue-600/20 rounded-lg flex items-center justify-center border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>
              ) : (
                <span aria-label="Facebook (próximamente)" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center border border-white/10 opacity-70 cursor-not-allowed">
                  <Facebook className="w-5 h-5 text-white" />
                </span>
              )}
              {instagramUrl ? (
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 bg-white/5 hover:bg-pink-600/20 rounded-lg flex items-center justify-center border border-white/10 hover:border-pink-500/50 transition-all duration-300"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
              ) : (
                <span aria-label="Instagram (próximamente)" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center border border-white/10 opacity-70 cursor-not-allowed">
                  <Instagram className="w-5 h-5 text-white" />
                </span>
              )}
              {tiktokUrl ? (
                <a
                  href={tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="w-10 h-10 bg-white/5 hover:bg-cyan-600/20 rounded-lg flex items-center justify-center border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" className="text-white"/>
                  </svg>
                </a>
              ) : (
                <span aria-label="TikTok (próximamente)" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center border border-white/10 opacity-70 cursor-not-allowed">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" className="text-white"/>
                  </svg>
                </span>
              )}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6 uppercase tracking-wider text-sm">{t.footer.services}</h3>
            <ul className="space-y-3.5">
              <li><a href={serviceHref('software')} className="text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0" />
                <span className="group-hover:translate-x-1 transition-transform">{t.services.software.title}</span>
              </a></li>
              {/* Nuevo Enlace: Monitoreo */}
              <li><a href={serviceHref('monitoring')} className="text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0" />
                <span className="group-hover:translate-x-1 transition-transform">{t.services.monitoring.title}</span>
              </a></li>
              <li><a href={serviceHref('network')} className="text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0" />
                <span className="group-hover:translate-x-1 transition-transform">{t.services.network.title}</span>
              </a></li>
              <li><a href={serviceHref('cybersecurity')} className="text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0" />
                <span className="group-hover:translate-x-1 transition-transform">{t.services.cybersecurity.title}</span>
              </a></li>
              <li><a href={serviceHref('iso-27001')} className="text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0" />
                <span className="group-hover:translate-x-1 transition-transform">{t.services.iso.title}</span>
              </a></li>
              <li><a href={serviceHref('backups')} className="text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0" />
                <span className="group-hover:translate-x-1 transition-transform">{t.services.backups.title}</span>
              </a></li>
              <li><a href={serviceHref('licensing')} className="text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0" />
                <span className="group-hover:translate-x-1 transition-transform">{t.services.licensing.title}</span>
              </a></li>
              <li><a href={serviceHref('disaster-recovery')} className="text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0" />
                <span className="group-hover:translate-x-1 transition-transform">{t.services.disasterRecovery.title}</span>
              </a></li>
              <li><a href={serviceHref('datacenter')} className="text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 group">
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
              <li><span className="text-sm text-gray-300 flex items-center gap-2 group">
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0" />
                <span className="group-hover:translate-x-1 transition-transform">{t.footer.careers}</span>
              </span></li>
              <li><span className="text-sm text-gray-300 flex items-center gap-2 group">
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0" />
                <span className="group-hover:translate-x-1 transition-transform">{t.footer.blog}</span>
              </span></li>
              <li><span className="text-sm text-gray-300 flex items-center gap-2 group">
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0" />
                <span className="group-hover:translate-x-1 transition-transform">{t.footer.privacy}</span>
              </span></li>
              <li><span className="text-sm text-gray-300 flex items-center gap-2 group">
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0" />
                <span className="group-hover:translate-x-1 transition-transform">{t.footer.terms}</span>
              </span></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6 uppercase tracking-wider text-sm">{t.footer.contact}</h3>
            <ul className="space-y-6">
              <li className="text-gray-400 flex items-start gap-3 text-sm">
                <span className="text-cyan-400 mt-1 flex-shrink-0">✉</span>
                <div>
                  <p className="text-white font-medium mb-1">{t.footer.contactEmailLabel}</p>
                  <EmailLink email={contactEmail} className="break-all" />
                </div>
              </li>
              <li className="text-gray-400 flex items-start gap-3 text-sm">
                <span className="text-cyan-400 mt-1 flex-shrink-0">☎</span>
                <div>
                  <p className="text-white font-medium mb-1">{t.footer.contactPhoneLabel}</p>
                  <a
                    href={whatsAppHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-words hover:text-cyan-400 transition-colors border-b border-gray-700 hover:border-cyan-400 pb-0.5"
                  >
                    {contactPhone}
                  </a>
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
            <span className="text-gray-400">v2.1.0</span>
            <span className="opacity-20">|</span>
            <a href="#top" className="hover:text-white transition-colors flex items-center gap-1">Top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
