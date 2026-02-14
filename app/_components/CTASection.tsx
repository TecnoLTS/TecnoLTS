import { Sparkles, ArrowRight, Zap, Shield, Rocket, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { translations } from '@/lib/translations';

type TranslationStructure = typeof translations.en;

interface CTASectionProps {
  t: TranslationStructure;
}

export default function CTASection({ t }: CTASectionProps) {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Fondo con gradiente animado - matching page colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 animate-gradient-shift" 
           style={{ backgroundSize: '300% 300%' }} />
      
      {/* Efectos de luz y resplandor */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-400/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl animate-float" 
           style={{ animationDelay: '2s', animationDuration: '25s' }} />
      
      {/* Partículas flotantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="particle particle-1" />
        <div className="particle particle-2" />
        <div className="particle particle-3" />
        <div className="particle particle-4" />
        <div className="particle particle-5" />
      </div>
      
      {/* Patrón de cuadrícula */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAgMi4yMS0xLjc5IDQtNCA0cy00LTEuNzktNC00IDEuNzktNC00IDQgNCAxLjc5IDQgNHptMCAxMmMwIDIuMjEtMS43OSA0LTQgNHMtNC0xLjc5LTQtNCAxLjc5LTQgNC00IDQgMS43OSA0IDR6bTAgMTJjMCAyLjIxLTEuNzkgNC00IDRzLTQtMS43OS00LTQgMS43OS00IDQtNCA0IDEuNzkgNCA0eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Badge con animación */}
        <div className="flex justify-center mb-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white font-semibold shadow-2xl hover:scale-105 transition-transform duration-300">
            <Sparkles className="w-5 h-5 animate-pulse" />
            <span className="text-sm md:text-base">{t.cta.badge}</span>
          </div>
        </div>

        {/* Título principal con efecto dramático */}
        <div className="text-center mb-8 animate-fade-in-up animation-delay-100">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 heading-safe">
            <span className="inline-block hover:scale-105 transition-transform duration-300">
              {t.cta.title}
            </span>
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 mx-auto rounded-full mb-8 animate-shimmer" 
               style={{ backgroundSize: '200% 100%' }} />
        </div>

        {/* Descripción mejorada */}
        <p className="text-xl md:text-2xl text-blue-50 mb-12 max-w-3xl mx-auto text-center leading-relaxed animate-fade-in-up animation-delay-200">
          {t.cta.description}
        </p>

        {/* Botón principal con efectos impactantes */}
        <div className="flex justify-center mb-20 animate-fade-in-up animation-delay-300">
          <a href="#contact-form" className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-500 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse" />
            <Button 
              size="lg" 
              className="relative bg-white text-blue-600 hover:bg-blue-50 text-lg md:text-xl px-10 py-7 shadow-2xl rounded-xl font-bold group-hover:scale-105 transition-all duration-300"
            >
              {t.cta.button}
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </a>
        </div>

        {/* Tarjetas de estadísticas mejoradas con efectos 3D */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-16">
          {/* Tecnología */}
          <div className="group relative animate-fade-in-up animation-delay-100">
            <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl blur-lg opacity-25 group-hover:opacity-75 transition duration-500" />
            <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-2xl min-h-[200px] flex flex-col">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl mb-4 group-hover:rotate-12 transition-transform duration-500 shadow-lg flex-shrink-0">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                {t.cta.stats.projects.value}
              </div>
              <div className="text-blue-50 font-medium text-sm leading-snug">
                {t.cta.stats.projects.label}
              </div>
            </div>
          </div>

          {/* Soluciones */}
          <div className="group relative animate-fade-in-up animation-delay-200">
            <div className="absolute -inset-1 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl blur-lg opacity-25 group-hover:opacity-75 transition duration-500" />
            <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-2xl min-h-[200px] flex flex-col">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl mb-4 group-hover:rotate-12 transition-transform duration-500 shadow-lg flex-shrink-0">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                {t.cta.stats.solutions.value}
              </div>
              <div className="text-blue-50 font-medium text-sm leading-snug">
                {t.cta.stats.solutions.label}
              </div>
            </div>
          </div>

          {/* Soporte */}
          <div className="group relative animate-fade-in-up animation-delay-300">
            <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl blur-lg opacity-25 group-hover:opacity-75 transition duration-500" />
            <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-2xl min-h-[200px] flex flex-col">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl mb-4 group-hover:rotate-12 transition-transform duration-500 shadow-lg flex-shrink-0">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                {t.cta.stats.support.value}
              </div>
              <div className="text-blue-50 font-medium text-sm leading-snug">
                {t.cta.stats.support.label}
              </div>
            </div>
          </div>

          {/* Calidad */}
          <div className="group relative animate-fade-in-up animation-delay-400">
            <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl blur-lg opacity-25 group-hover:opacity-75 transition duration-500" />
            <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-2xl min-h-[200px] flex flex-col">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl mb-4 group-hover:rotate-12 transition-transform duration-500 shadow-lg flex-shrink-0">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                {t.cta.stats.quality.value}
              </div>
              <div className="text-blue-50 font-medium text-sm leading-snug">
                {t.cta.stats.quality.label}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
