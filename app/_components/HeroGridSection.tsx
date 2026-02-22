import Image from 'next/image';
import { Award, Star, Quote } from 'lucide-react';
import type { TranslationStructure } from '@/lib/translations';

interface HeroGridSectionProps {
  t: TranslationStructure;
}

export default function HeroGridSection({ t }: HeroGridSectionProps) {
  return (
    <section id="about" className="deferred-section py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 scroll-mt-20 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-2 lg:items-end lg:gap-x-8 lg:gap-y-10">
          <div className="order-1 lg:order-2 lg:pl-6">
            <div className="flex flex-col justify-center">
              <div className="mb-4 sm:mb-6">
                <span className="inline-flex items-center px-4 py-1.5 bg-cyan-50 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 text-xs font-bold rounded-full uppercase tracking-widest border border-cyan-100 dark:border-cyan-800/50">
                  <Award className="w-3.5 h-3.5 mr-2" />
                  {t.heroGrid.badge}
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-6">
                {t.heroGrid.title} {t.heroGrid.titleLine2} {t.heroGrid.titleLine3}
                <span className="text-cyan-600 dark:text-cyan-400"> {t.heroGrid.titleHighlight}.</span>
              </h2>
              <div className="w-20 h-1.5 bg-cyan-500 rounded-full opacity-20" />
            </div>
          </div>

          <div className="order-2 lg:order-1 lg:row-span-2">
            <div className="relative">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden min-h-[220px] sm:min-h-[400px] lg:min-h-[750px]">
                <Image
                  src="/pexels-photo-3184292.jpeg"
                  alt="Business Professional"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>

              <div className="box-area absolute bottom-0 left-0 w-full max-w-[170px] sm:max-w-[241px] bg-white dark:bg-slate-900 rounded-tr-[12px] pt-[10px] sm:pt-[15px] pr-[10px] sm:pr-[15px] pb-0 pl-0">
                <div className="absolute left-0 w-[13px] h-[13px] -top-[13px] box-area-corner-before" />
                <div className="absolute right-[-13px] bottom-0 w-[13px] h-[13px] box-area-corner-after" />

                <div className="bg-white dark:bg-slate-800 rounded-[12px] p-3 sm:p-6 shadow-lg min-h-[136px] sm:min-h-[226px] flex flex-col justify-between">
                  <div>
                    <span className="text-cyan-700 dark:text-cyan-300 font-semibold text-xs sm:text-sm mb-2 sm:mb-3 block">
                      {t.heroGrid.experiences.label}
                    </span>
                    <div className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 leading-none">
                      {t.heroGrid.experiences.value}
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm font-normal leading-tight">
                    {t.heroGrid.experiences.text}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-3 lg:order-3 lg:pl-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-gradient-to-br from-slate-800 to-blue-900 dark:from-slate-900 dark:to-blue-950 rounded-2xl sm:rounded-3xl p-5 sm:p-8 flex flex-col justify-between shadow-xl text-white relative overflow-hidden min-h-[220px] sm:min-h-[300px]">
                <Quote className="absolute top-5 right-5 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 text-white/10" />

                <div className="relative z-10">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base mb-4 leading-relaxed italic text-blue-50/90">
                    "{t.heroGrid.testimonial.text}"
                  </p>
                </div>

                <div className="relative z-10 pt-4 border-t border-white/10">
                  <p className="font-bold text-base sm:text-lg text-white">{t.heroGrid.testimonial.author}</p>
                  <span className="text-blue-200/70 text-xs sm:text-sm font-medium">{t.heroGrid.testimonial.role}</span>
                </div>
              </div>

              <div className="hidden md:block bg-slate-900 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-100 dark:border-slate-800 relative min-h-[220px] sm:min-h-[300px]">
                <Image
                  src="/pexels-photo-3184611.jpeg"
                  alt="Team meeting"
                  fill
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  className="absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity hover:opacity-100"
                />
                <div className="absolute inset-0 bg-slate-900/10 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
