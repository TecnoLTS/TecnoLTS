import { ArrowRight } from 'lucide-react';
import type { translations } from '@/lib/translations';

type TranslationStructure = typeof translations.en;

interface FooterProps {
  t: TranslationStructure;
}

export default function Footer({ t }: FooterProps) {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 rounded-xl" />
              <span className="text-2xl font-bold text-white">TecnoLTS</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
              {t.footer.description}
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors border border-white/10">
                <span className="text-white">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors border border-white/10">
                <span className="text-white">𝕏</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors border border-white/10">
                <span className="text-white">in</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">{t.footer.services}</h3>
            <ul className="space-y-2.5">
              <li><a href="#software" className="text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="group-hover:translate-x-1 transition-transform">{t.services.software.title}</span>
              </a></li>
              <li><a href="#network" className="text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="group-hover:translate-x-1 transition-transform">{t.services.network.title}</span>
              </a></li>
              <li><a href="#cybersecurity" className="text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="group-hover:translate-x-1 transition-transform">{t.services.cybersecurity.title}</span>
              </a></li>
              <li><a href="#iso" className="text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="group-hover:translate-x-1 transition-transform">{t.services.iso.title}</span>
              </a></li>
              <li><a href="#backups" className="text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="group-hover:translate-x-1 transition-transform">{t.services.backups.title}</span>
              </a></li>
              <li><a href="#licensing" className="text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="group-hover:translate-x-1 transition-transform">{t.services.licensing.title}</span>
              </a></li>
              <li><a href="#disaster-recovery" className="text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="group-hover:translate-x-1 transition-transform">{t.services.disasterRecovery.title}</span>
              </a></li>
              <li><a href="#datacenter" className="text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="group-hover:translate-x-1 transition-transform">{t.services.dataCenter.title}</span>
              </a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">{t.footer.company}</h3>
            <ul className="space-y-2.5">
              <li><a href="#about" className="text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="group-hover:translate-x-1 transition-transform">{t.footer.about}</span>
              </a></li>
              <li><a href="#" className="text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="group-hover:translate-x-1 transition-transform">{t.footer.careers}</span>
              </a></li>
              <li><a href="#" className="text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="group-hover:translate-x-1 transition-transform">{t.footer.blog}</span>
              </a></li>
              <li><a href="#" className="text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="group-hover:translate-x-1 transition-transform">{t.footer.privacy}</span>
              </a></li>
              <li><a href="#" className="text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="group-hover:translate-x-1 transition-transform">{t.footer.terms}</span>
              </a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">{t.footer.contact}</h3>
            <ul className="space-y-4">
              <li className="text-gray-400 flex items-start gap-3 text-sm">
                <span className="text-cyan-400 mt-0.5 text-base">✉</span>
                <div>
                  <p className="text-white font-medium mb-1">{t.footer.contactEmailLabel}</p>
                  <a href="mailto:info@tecnotls.com" className="hover:text-cyan-400 transition-colors">info@tecnotls.com</a>
                </div>
              </li>
              <li className="text-gray-400 flex items-start gap-3 text-sm">
                <span className="text-cyan-400 mt-0.5 text-base">☎</span>
                <div>
                  <p className="text-white font-medium mb-1">{t.footer.contactPhoneLabel}</p>
                  <a href="tel:+15551234567" className="hover:text-cyan-400 transition-colors">+1 (555) 123-4567</a>
                </div>
              </li>
              <li className="text-gray-400 flex items-start gap-3 text-sm">
                <span className="text-cyan-400 mt-0.5 text-base">📍</span>
                <div>
                  <p className="text-white font-medium mb-1">{t.footer.contactLocationLabel}</p>
                  <span>{t.contact.info.locationValue}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; 2026 TecnoLTS. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
