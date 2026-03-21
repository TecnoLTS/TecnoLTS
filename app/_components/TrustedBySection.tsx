import Image from 'next/image';
import type { TranslationStructure } from '@/lib/translations';

interface TrustedBySectionProps {
  t: TranslationStructure;
}

export default function TrustedBySection({ t }: TrustedBySectionProps) {
  return (
    <section className="deferred-section py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white dark:bg-slate-800 rounded-3xl py-8 sm:py-12 px-4 sm:px-8 shadow-2xl">
          <p className="text-gray-500 dark:text-gray-400 text-xs font-medium mb-8 sm:mb-12 tracking-[0.2em] uppercase text-center">
            {t.cta.trustedBy}
          </p>
          <div className="grid grid-cols-1 gap-4 sm:gap-8 max-w-xl mx-auto">
            <a
              href="https://www.paramascotasecc.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block transition-all duration-300 hover:scale-110"
            >
              <div className="relative h-16 sm:h-24 flex items-center justify-center">
                <Image
                  src="/logos/paramascotas.png"
                  alt="Paramascotas"
                  width={1000}
                  height={500}
                  className="object-contain w-full h-full dark:hidden px-2 sm:px-0"
                  loading="lazy"
                />
                <Image
                  src="/logos/Logo-paramascotas-(blanco).png"
                  alt="Paramascotas"
                  width={1000}
                  height={500}
                  className="object-contain w-full h-full hidden dark:block px-2 sm:px-0"
                  loading="lazy"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
