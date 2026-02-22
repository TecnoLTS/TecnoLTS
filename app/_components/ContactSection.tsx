import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import LazyContactForm from './LazyContactForm';
import type { TranslationStructure } from '@/lib/translations';
import { getContactEmail, getContactPhone } from '@/lib/seo';

interface ContactSectionProps {
  t: TranslationStructure;
}

export default function ContactSection({ t }: ContactSectionProps) {
  const contactPhone = getContactPhone();
  const contactEmail = getContactEmail();

  return (
    <section id="contact" className="deferred-section py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3 heading-safe">
                {t.contact.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {t.contact.subtitle} {t.contact.subtitleLine2}
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{t.contact.info.location}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{t.contact.info.locationValue}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{t.contact.info.phone}</h3>
                    <a
                      href={`tel:${contactPhone.replace(/[^\d+]/g, '')}`}
                      className="text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                    >
                      {contactPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{t.contact.info.email}</h3>
                    <a
                      href={`mailto:${contactEmail}`}
                      className="text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors break-all"
                    >
                      {contactEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{t.contact.info.schedule}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{t.contact.info.scheduleValue}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl shadow-xl border border-gray-200 dark:border-slate-700 flex-1 min-h-[320px] p-6 bg-white dark:bg-slate-900 flex flex-col justify-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {t.contact.info.location}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {t.contact.info.locationValue}
              </p>
              <a
                href="https://www.google.com/maps/place/Quito,+Ecuador"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 font-medium transition-colors"
              >
                Abrir en Google Maps
              </a>
            </div>
          </div>

          <div id="contact-form" className="lg:col-span-3 scroll-mt-20">
            <LazyContactForm t={t} />
          </div>
        </div>
      </div>
    </section>
  );
}
