import { ArrowRight, Zap, Shield, Rocket, Star } from 'lucide-react';
import type { TranslationStructure } from '@/lib/translations';
import ContactModalButton from './ContactModalButton';

interface CTASectionProps {
  t: TranslationStructure;
}

export default function CTASection({ t }: CTASectionProps) {
  return (
    <section className="deferred-section py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-500">
      {/* FONDO ADAPTATIVO ELEGANTE: 
          Claro: Gradiente profundo de azul pizarra a azul marino. Más sobrio.
          Oscuro: Gradiente muy oscuro de pizarra a azul noche, se funde con el entorno.
      */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-blue-900 dark:from-slate-950 dark:to-slate-900 transition-all duration-500" />
      
      {/* Capa de profundidad sutil (luz radial) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-transparent dark:from-blue-500/10 opacity-70" />

      {/* Patrón técnico de puntos sutil */}
      <div className="absolute inset-0 opacity-[0.07] dark:opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          {/* Badge Minimalista */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-full text-white text-xs font-medium tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-200 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-300"></span>
              </span>
              {t.cta.badge}
            </div>
          </div>

          {/* Título */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight max-w-4xl mx-auto">
            {t.cta.title}
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-cyan-300 to-blue-400 mx-auto rounded-full mb-8 opacity-80" />

          {/* Descripción - Color ajustado para mejor contraste */}
          <p className="text-lg md:text-xl text-slate-200 dark:text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            {t.cta.description}
          </p>

          {/* Botón Principal - Colores más sobrios */}
          <div className="flex justify-center">
            <ContactModalButton
              t={t}
              size="lg"
              // Modo claro: Texto gris oscuro en lugar de azul.
              // Modo oscuro: Fondo azul más apagado (blue-800) en lugar de eléctrico.
              className="bg-white text-slate-900 hover:bg-slate-100 dark:bg-blue-800 dark:text-white dark:hover:bg-blue-700 px-10 py-7 text-lg font-bold rounded-xl shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-blue-900/20 dark:hover:shadow-black/30"
            >
              {t.cta.button}
              <ArrowRight className="ml-2 h-5 w-5" />
            </ContactModalButton>
          </div>
        </div>

        {/* Cuadrícula de Estadísticas/Beneficios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard icon={Rocket} title={t.cta.stats.projects.value} label={t.cta.stats.projects.label} />
          <StatCard icon={Star} title={t.cta.stats.solutions.value} label={t.cta.stats.solutions.label} />
          <StatCard icon={Zap} title={t.cta.stats.support.value} label={t.cta.stats.support.label} />
          <StatCard icon={Shield} title={t.cta.stats.quality.value} label={t.cta.stats.quality.label} />
        </div>
      </div>
    </section>
  );
}

function StatCard({ icon: Icon, title, label }: { icon: any, title: string, label: string }) {
  return (
    // Tarjetas con fondo más oscuro y borde más sutil
    <div className="group bg-slate-800/30 dark:bg-slate-900/40 backdrop-blur-md rounded-2xl p-6 border border-white/10 dark:border-white/5 hover:border-cyan-400/30 transition-all duration-300 text-left hover:-translate-y-1">
      <div className="w-12 h-12 bg-white/10 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4 text-cyan-200 dark:text-cyan-400 group-hover:scale-105 transition-transform duration-300">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold text-white mb-1">
        {title}
      </h3>
      <p className="text-slate-300/80 dark:text-slate-400 text-sm font-medium leading-snug">
        {label}
      </p>
    </div>
  );
}
