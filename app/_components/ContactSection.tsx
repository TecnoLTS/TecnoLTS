import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '@/components/contact-form';
import type { translations } from '@/lib/translations';

type TranslationStructure = typeof translations.en;

interface ContactSectionProps {
  t: TranslationStructure;
}

export default function ContactSection({ t }: ContactSectionProps) {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 scroll-mt-20">
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
                    <p className="text-gray-600 dark:text-gray-400">+593 99 291 0848</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{t.contact.info.email}</h3>
                    <p className="text-gray-600 dark:text-gray-400">info@tecnolts.com</p>
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

            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-slate-700 flex-1 min-h-[320px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255168.17123728427!2d-78.52495258749998!3d-0.1806532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a4002427c9f%3A0x44b991e158ef5572!2sQuito%2C%20Ecuador!5e0!3m2!1ses!2sec!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-300"
              ></iframe>
            </div>
          </div>

          <div id="contact-form" className="lg:col-span-3 scroll-mt-20">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
