import { Sparkles, ArrowRight, CheckCircle, TrendingUp, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { TranslationStructure } from '@/lib/translations';

interface HeroSectionProps {
  t: TranslationStructure;
}

export default function HeroSection({ t }: HeroSectionProps) {
  return (
    <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="scroll-reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20 border border-blue-500/20 dark:border-blue-400/30 rounded-full text-blue-600 dark:text-cyan-400 text-xs sm:text-sm font-medium mb-3 sm:mb-4 md:mb-6 animate-fade-in-up hover:scale-[1.02] hover:shadow-lg hover:border-blue-500/40 dark:hover:border-blue-400/50 transition-all duration-500 cursor-default">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              {t.hero.badge}
            </div>
            <h1 className="text-[28px] leading-[1.2] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 sm:leading-tight heading-safe animate-fade-in-up animation-delay-100 min-h-[8.6rem] sm:min-h-0">
              <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-cyan-700 dark:from-white dark:via-cyan-300 dark:to-blue-400 bg-clip-text text-transparent">
                {t.hero.title}
              </span>
            </h1>
            <p className="text-sm leading-relaxed sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-5 sm:mb-6 md:mb-8 min-h-[5.8rem] sm:min-h-0">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-1.5 sm:mb-0 animate-fade-in-up animation-delay-300">
              <Button asChild size="lg" className="min-w-[12.5rem] bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-sm sm:text-base md:text-lg shadow-xl shadow-blue-500/30 hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.7)] hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-500 group/hero-cta relative overflow-hidden">
                <a href="#contact-form" className="flex items-center justify-center relative z-10">
                  <span className="absolute inset-0 translate-x-[-100%] group-hover/hero-cta:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent"></span>
                  <span className="relative flex items-center">
                    {t.hero.ctaPrimary}
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover/hero-cta:translate-x-1 transition-transform duration-500" />
                  </span>
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 mt-6 sm:mt-8 md:mt-12 pt-5 sm:pt-6 md:pt-8 border-t border-gray-200 dark:border-slate-700 animate-fade-in-up animation-delay-400">
              <div className="text-center sm:text-left group/stat hover:scale-110 transition-transform duration-300">
                <div className="text-lg sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-0.5 sm:mb-1 group-hover/stat:from-cyan-600 group-hover/stat:to-blue-600 transition-all duration-300">
                  {t.hero.stats.experience.value}
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-tight">
                  {t.hero.stats.experience.label}
                </div>
              </div>
              <div className="text-center sm:text-left group/stat hover:scale-110 transition-transform duration-300">
                <div className="text-lg sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-0.5 sm:mb-1 group-hover/stat:from-cyan-600 group-hover/stat:to-blue-600 transition-all duration-300">
                  {t.hero.stats.quality.value}
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-tight">
                  {t.hero.stats.quality.label}
                </div>
              </div>
              <div className="text-center sm:text-left group/stat hover:scale-110 transition-transform duration-300">
                <div className="text-lg sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-0.5 sm:mb-1 group-hover/stat:from-cyan-600 group-hover/stat:to-blue-600 transition-all duration-300">
                  {t.hero.stats.technologies.value}
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-tight">
                  {t.hero.stats.technologies.label}
                </div>
              </div>
            </div>
          </div>

          <div className="hero-visual-deferred relative mt-6 lg:mt-0 animate-fade-in-up animation-delay-200">
            <div className="hero-terminal-shell relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-2xl shadow-blue-500/20 sm:shadow-blue-500/30 border border-slate-700 hover:shadow-[0_25px_70px_-15px_rgba(59,130,246,0.4)] transition-all duration-700 group/terminal">
              <div className="relative bg-slate-950 rounded-lg sm:rounded-xl overflow-hidden border border-slate-700/50">
                <div className="flex items-center gap-2 px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-3 bg-slate-900 border-b border-slate-700/50">
                  <div className="flex gap-1 sm:gap-1.5 md:gap-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full bg-red-500" />
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full bg-yellow-500" />
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 text-center text-slate-400 text-[9px] sm:text-[10px] md:text-xs font-mono">
                    app.tsx
                  </div>
                </div>

                <div className="p-2.5 sm:p-3 md:p-4 lg:p-6 font-mono text-[9px] sm:text-[10px] md:text-xs lg:text-sm space-y-1 sm:space-y-1.5 md:space-y-2 min-h-[220px] sm:min-h-[250px] md:min-h-[300px] lg:min-h-[340px] overflow-x-auto">
                  <div className="flex gap-1.5 sm:gap-2 md:gap-3">
                    <span className="text-slate-400 flex-shrink-0">1</span>
                    <span className="text-purple-400">function</span>
                    <span className="text-yellow-300">chooseTechPartner</span>
                    <span className="text-slate-400">(</span>
                    <span className="text-blue-300">project</span>
                    <span className="text-slate-400">) {'{'}</span>
                  </div>
                  <div className="flex gap-1.5 sm:gap-2 md:gap-3 pl-3 sm:pl-4 md:pl-6">
                    <span className="text-slate-400 flex-shrink-0">2</span>
                    <span className="text-purple-400">if</span>
                    <span className="text-slate-400">(</span>
                    <span className="text-blue-300">project</span>
                    <span className="text-yellow-300">complexity</span>
                    <span className="text-slate-400">&gt;</span>
                    <span className="text-cyan-300">50</span>
                    <span className="text-slate-400">) {'{'}</span>
                  </div>
                  <div className="flex gap-1.5 sm:gap-2 md:gap-3 pl-6 sm:pl-8 md:pl-12">
                    <span className="text-slate-400 flex-shrink-0">3</span>
                    <span className="text-purple-400">return</span>
                    <span className="text-emerald-300">"TecnoLTS"</span>
                    <span className="text-slate-400">;</span>
                  </div>
                  <div className="flex gap-1.5 sm:gap-2 md:gap-3 pl-3 sm:pl-4 md:pl-6">
                    <span className="text-slate-400 flex-shrink-0">4</span>
                    <span className="text-slate-400">{'} else {'}</span>
                  </div>
                  <div className="flex gap-1.5 sm:gap-2 md:gap-3 pl-6 sm:pl-8 md:pl-12">
                    <span className="text-slate-400 flex-shrink-0">5</span>
                    <span className="text-purple-400">return</span>
                    <span className="text-emerald-300">"TecnoLTS"</span>
                    <span className="text-slate-400">;</span>
                  </div>
                  <div className="flex gap-1.5 sm:gap-2 md:gap-3 pl-3 sm:pl-4 md:pl-6">
                    <span className="text-slate-400 flex-shrink-0">6</span>
                    <span className="text-slate-400">{'}'}</span>
                  </div>
                  <div className="flex gap-1.5 sm:gap-2 md:gap-3">
                    <span className="text-slate-400 flex-shrink-0">7</span>
                    <span className="text-slate-400">{'}'}</span>
                  </div>
                  <div className="flex gap-1.5 sm:gap-2 md:gap-3">
                    <span className="text-slate-400 flex-shrink-0">8</span>
                  </div>
                  <div className="flex gap-1.5 sm:gap-2 md:gap-3">
                    <span className="text-slate-400 flex-shrink-0">9</span>
                    <span className="text-slate-300">{t.code.commentEvaluating}</span>
                  </div>
                  <div className="flex gap-1.5 sm:gap-2 md:gap-3">
                    <span className="text-slate-400 flex-shrink-0">10</span>
                    <span className="text-purple-400">const</span>
                    <span className="text-blue-300">partner</span>
                    <span className="text-slate-400">=</span>
                    <span className="text-yellow-300">chooseTechPartner</span>
                    <span className="text-slate-400">(</span>
                    <span className="text-cyan-300">yourProject</span>
                    <span className="text-slate-400">);</span>
                  </div>

                  <div className="pt-2 sm:pt-3 md:pt-4 space-y-0.5 sm:space-y-1 border-t border-slate-800 mt-2 sm:mt-3 md:mt-4">
                    <div className="flex gap-1.5 sm:gap-2 items-center">
                      <CheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-emerald-400 text-[9px] sm:text-[10px] md:text-xs">{t.code.analysisCompleted}</span>
                    </div>
                    <div className="flex gap-1.5 sm:gap-2 items-center">
                      <TrendingUp className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-cyan-400 text-[9px] sm:text-[10px] md:text-xs">{t.code.result}</span>
                    </div>
                    <div className="flex gap-1.5 sm:gap-2 items-center pt-1 sm:pt-2">
                      <CheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-emerald-400 text-[9px] sm:text-[10px] md:text-xs">{t.code.bestOption}</span>
                    </div>
                  </div>

                  <div className="flex gap-1.5 sm:gap-2 md:gap-3 pt-1 sm:pt-2">
                    <span className="text-slate-400 flex-shrink-0">11</span>
                    <span className="w-1.5 sm:w-2 h-3 sm:h-4 md:h-5 bg-cyan-400 inline-block animate-pulse"></span>
                  </div>
                </div>
              </div>

              <div className="absolute top-2 right-2 sm:top-3 sm:right-3 xl:-top-4 xl:-right-4 bg-emerald-700 text-white px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-lg sm:rounded-xl text-[10px] sm:text-xs md:text-sm font-bold shadow-lg animate-fade-in animation-delay-500 hover:scale-105 hover:shadow-[0_10px_30px_-10px_rgba(16,185,129,0.6)] transition-all duration-500 cursor-default max-w-[calc(100%-1rem)] z-10">
                {t.hero.uptimeBadge}
              </div>
              <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 xl:-bottom-4 xl:-left-4 bg-blue-700 text-white px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-lg sm:rounded-xl text-[10px] sm:text-xs md:text-sm font-semibold shadow-lg animate-fade-in animation-delay-500 hover:scale-105 hover:shadow-[0_10px_30px_-10px_rgba(59,130,246,0.6)] transition-all duration-500 cursor-default group/shield max-w-[calc(100%-1rem)] z-10">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Shield className="w-3 h-3 sm:w-4 sm:h-4 group-hover/shield:scale-105 transition-transform duration-500" />
                  {t.hero.secureBadge}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
