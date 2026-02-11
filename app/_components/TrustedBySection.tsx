import Image from 'next/image';
import type { translations } from '@/lib/translations';

type TranslationStructure = typeof translations.en;

interface TrustedBySectionProps {
  t: TranslationStructure;
}

export default function TrustedBySection({ t }: TrustedBySectionProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white dark:bg-slate-800 rounded-3xl py-12 px-8 shadow-2xl">
          <p className="text-gray-500 dark:text-gray-400 text-xs font-medium mb-12 tracking-[0.2em] uppercase text-center">
            {t.cta.trustedBy}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <a
              href="https://www.paramascotasecc.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block transition-all duration-300 hover:scale-110"
            >
              <div className="relative h-24 flex items-center justify-center">
                <Image
                  src="/logos/paramascotas.png"
                  alt="Paramascotas"
                  width={1000}
                  height={500}
                  quality={75}
                  priority
                  className="object-contain max-w-full max-h-full dark:hidden"
                />
                <Image
                  src="/logos/Logo-paramascotas-(blanco).png"
                  alt="Paramascotas"
                  width={1000}
                  height={500}
                  quality={75}
                  priority
                  className="object-contain max-w-full max-h-full hidden dark:block"
                />
              </div>
            </a>
            <a
              href="https://www.autorespuestoscore.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block transition-all duration-300 hover:scale-110"
            >
              <div className="relative h-24 flex items-center justify-center">
                <Image
                  src="/logos/autorespuestoscore.png"
                  alt="Autorespuestos Core"
                  width={600}
                  height={200}
                  quality={75}
                  priority
                  className="object-contain max-w-full max-h-full dark:hidden"
                />
                <Image
                  src="/logos/Logo-autorepuestoscore-(blanco).png"
                  alt="Autorespuestos Core"
                  width={600}
                  height={200}
                  quality={75}
                  priority
                  className="object-contain max-w-full max-h-full hidden dark:block"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
