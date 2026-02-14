import type { translations } from '@/lib/translations';

type TranslationStructure = typeof translations.en;

interface HeroGridSectionProps {
  t: TranslationStructure;
}

export default function HeroGridSection({ t }: HeroGridSectionProps) {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap -mx-4 lg:items-end">
          <div className="w-full lg:w-1/2 xl:w-1/2 px-4 order-2 lg:order-1">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden">
                <img
                  src="/pexels-photo-3184292.jpeg"
                  alt="Business Professional"
                  className="w-full h-full object-cover min-h-[280px] sm:min-h-[400px] lg:min-h-[750px]"
                />
              </div>

              <div className="box-area absolute bottom-0 left-0 w-full max-w-[180px] sm:max-w-[241px] bg-white dark:bg-slate-900 rounded-tr-[12px] pt-[12px] sm:pt-[15px] pr-[12px] sm:pr-[15px] pb-0 pl-0">
                <div className="absolute left-0 w-[13px] h-[13px] -top-[13px] box-area-corner-before" />
                <div className="absolute right-[-13px] bottom-0 w-[13px] h-[13px] box-area-corner-after" />

                <div className="bg-white dark:bg-slate-800 rounded-tl-[12px] rounded-tr-[12px] rounded-br-[12px] rounded-bl-[12px] p-4 sm:p-6 shadow-lg min-h-[160px] sm:min-h-[226px] flex flex-col justify-between">
                  <div>
                    <span className="text-cyan-600 dark:text-cyan-400 font-semibold text-xs sm:text-sm mb-2 sm:mb-3 block">
                      {t.heroGrid.experiences.label}
                    </span>
                    <div className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 leading-none">
                      {t.heroGrid.experiences.value}
                    </div>
                  </div>
                  <h6 className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm font-normal leading-tight">
                    {t.heroGrid.experiences.text}
                  </h6>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 xl:w-1/2 px-4 order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col justify-center">
                <div className="mb-6">
                  <span className="inline-flex items-center px-3 py-1.5 bg-cyan-100 text-cyan-700 text-xs font-bold rounded-md uppercase tracking-wide">
                    <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <rect x="3" y="3" width="18" height="18" rx="4" />
                    </svg>
                    {t.heroGrid.badge}
                  </span>
                </div>

                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 text-gray-900 dark:text-white leading-tight heading-safe">
                  {t.heroGrid.title}<br />
                  {t.heroGrid.titleLine2}<br />
                  {t.heroGrid.titleLine3} <span className="text-cyan-600 dark:text-cyan-400">{t.heroGrid.titleHighlight}.</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-500 dark:from-blue-700 dark:via-cyan-700 dark:to-teal-600 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl text-white relative overflow-hidden min-h-[200px] sm:min-h-[280px]">
                  <div>
                    <div className="flex items-center gap-0.5 mb-3 sm:mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current text-yellow-300" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed text-white">
                      {t.heroGrid.testimonial.text}
                    </p>
                  </div>

                  <div className="flex items-end justify-between relative z-10">
                    <div>
                      <h6 className="font-bold text-base sm:text-lg mb-0.5 text-white">{t.heroGrid.testimonial.author}</h6>
                      <span className="text-blue-100 text-xs sm:text-sm">{t.heroGrid.testimonial.role}</span>
                    </div>
                    <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white/20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                    </svg>
                  </div>
                </div>

                <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-xl relative min-h-[200px] sm:min-h-[280px]">
                  <img
                    src="/pexels-photo-3184611.jpeg"
                    alt="Thumbnail"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
