import Link from 'next/link';
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  FileSearch,
  Gauge,
  ImageIcon,
  Network,
  ServerCog,
  Shield,
  Zap,
  Layers
} from 'lucide-react';
import Navigation from '@/app/_components/Navigation';
import Footer from '@/app/_components/Footer';
import WhatsAppButton from '@/app/_components/WhatsAppButton';
import ScrollToTopButton from '@/app/_components/ScrollToTopButton';
import ContactModalButton from './ContactModalButton';
import type { Language, TranslationStructure } from '@/lib/translations';
import { localePath } from '@/lib/i18n';

type MonitoringPillar = {
  title: string;
  desc: string;
};

const pillarIcons = [Gauge, Network, FileSearch];

interface MonitoringPageProps {
  t: TranslationStructure;
  language: Language;
}

export default function MonitoringPage({ t, language }: MonitoringPageProps) {
  const data = t.serviceDetails.monitoring;
  const homePath = localePath(language);

  const [mainTitle, accentTitle = ''] = data.heroTitle
    .split(',')
    .map((part: string) => part.trim());

  const items = (data.items as string[]) || [];
  const benefits = (data.benefits as string[]) || [];
  const techStack = (data.technologies as string[]) || [];
  const processSteps = (data.process?.steps as string[]) || [];
  const pillars = (data.pillars as MonitoringPillar[]) || [];

  const isEs = language === 'es';
  const uiText = isEs
    ? {
        systemStatus: 'Estado del sistema: Activo',
        uptimePerformance: 'Disponibilidad operativa',
        networkLatency: 'Latencia de red',
        securityScans: 'Escaneos de seguridad',
        securityState: 'Activo',
        realtimeAnalytics: 'Analítica en tiempo real',
        capabilitiesLead:
          'Convertimos monitoreo en continuidad operativa: menos incidentes críticos, menor tiempo de respuesta y clientes mejor atendidos.',
        imageZoneTitle: 'Zona para imágenes del servicio',
        mainImageLabel: 'Imagen principal sugerida',
        sideImageLabelA: 'Imagen secundaria 1',
        sideImageLabelB: 'Imagen secundaria 2',
        mainImageHint: 'Equipo revisando el estado completo de la operación en tiempo real.',
        sideImageHintA: 'Panel de alertas claras para actuar antes de una caída.',
        sideImageHintB: 'Ingeniero validando mejoras de rendimiento y estabilidad.',
        imageHelp: 'Aquí puede colocar una imagen horizontal de alto impacto.',
      }
    : {
        systemStatus: 'System status: Live',
        uptimePerformance: 'Operational uptime',
        networkLatency: 'Network latency',
        securityScans: 'Security scans',
        securityState: 'Active',
        realtimeAnalytics: 'Real-time analytics',
        capabilitiesLead:
          'We turn monitoring into business continuity: fewer critical incidents, faster response times, and better customer experience.',
        imageZoneTitle: 'Service image zone',
        mainImageLabel: 'Suggested main image',
        sideImageLabelA: 'Secondary image 1',
        sideImageLabelB: 'Secondary image 2',
        mainImageHint: 'Team reviewing full operational health in real time.',
        sideImageHintA: 'Clear alert dashboard to act before outages.',
        sideImageHintB: 'Engineer validating performance and stability improvements.',
        imageHelp: 'Place a high-impact horizontal image here.',
      };

  return (
    <main id="top" className="min-h-screen bg-white text-slate-900 dark:bg-[#020617] dark:text-slate-100 selection:bg-cyan-500/30">
      <Navigation t={t} language={language} />

      {/* --- HERO SECTION: Ultra Modern --- */}
      <section className="relative overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-32 lg:pt-48">
        {/* Ambient Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-600/10 blur-[120px] rounded-full" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 text-center sm:gap-14 lg:grid-cols-2 lg:gap-16 lg:text-left">
            <div>
              <Link
                href={homePath}
                className="mb-8 mr-4 inline-flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-300"
              >
                ← {isEs ? 'Volver al Inicio' : 'Back to Home'}
              </Link>
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold tracking-widest uppercase mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                {data.badge}
              </div>
              
              <h1 className="mb-8 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-7xl">
                {mainTitle}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-500">
                  {accentTitle}
                </span>
              </h1>
              
              <p className="mb-10 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
                {data.description}
              </p>

              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:justify-start">
                <ContactModalButton
                  t={t}
                  defaultService="monitoring"
                  size="lg"
                  className="w-full rounded-full bg-slate-900 px-6 py-5 text-base transition-transform hover:scale-105 sm:w-auto sm:px-8 sm:py-6 sm:text-lg dark:bg-white dark:text-slate-950"
                >
                  {data.cta} <ArrowRight className="ml-2 h-5 w-5" />
                </ContactModalButton>
                <div className="flex w-full items-center justify-center gap-4 rounded-full border border-slate-200 bg-white/50 px-6 py-3 backdrop-blur-sm sm:w-auto dark:border-slate-800 dark:bg-slate-900/50">
                  <Shield className="h-5 w-5 text-cyan-500" />
                  <span className="text-sm font-medium">{t.hero.secureBadge}</span>
                </div>
              </div>
            </div>

            {/* Visual Dashboard Mockup */}
            <div className="relative">
              <div className="relative rounded-2xl border border-slate-200 bg-slate-50/50 p-3 shadow-2xl backdrop-blur-xl sm:p-4 dark:border-slate-800 dark:bg-slate-900/50">
                <div className="flex items-center justify-between mb-6 border-b border-slate-200 dark:border-slate-800 pb-4">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/40" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/40" />
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-widest opacity-50">{uiText.systemStatus}</div>
                </div>
                
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 p-5 text-white shadow-inner sm:col-span-2 sm:p-6">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-xs opacity-60 mb-1">{uiText.uptimePerformance}</p>
                        <h4 className="text-3xl font-bold">99.998%</h4>
                      </div>
                      <Activity className="h-8 w-8 text-emerald-400" />
                    </div>
                    <div className="mt-4 h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-[98%] bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.5)]" />
                    </div>
                  </div>
                  
                  <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/50">
                    <p className="text-[10px] uppercase font-bold text-slate-400 mb-2">{uiText.networkLatency}</p>
                    <div className="flex items-center gap-2">
                        <Zap className="h-4 w-4 text-cyan-500" />
                        <span className="text-xl font-bold">14ms</span>
                    </div>
                  </div>
                  
                  <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/50">
                    <p className="text-[10px] uppercase font-bold text-slate-400 mb-2">{uiText.securityScans}</p>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                        <span className="text-xl font-bold">{uiText.securityState}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Tech Stack Floating */}
              <div className="absolute -bottom-6 -left-6 hidden md:block px-4 py-2 rounded-lg bg-white dark:bg-slate-800 shadow-xl border border-slate-200 dark:border-slate-700 text-xs font-medium">
                {`⚡ ${uiText.realtimeAnalytics}`}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            <ImageIcon className="h-3.5 w-3.5" />
            {uiText.imageZoneTitle}
          </div>

          <div className="grid gap-5 lg:grid-cols-12">
            <div
              data-image-slot="monitoring-main-image"
              className="relative overflow-hidden rounded-[1.8rem] border border-dashed border-slate-300 bg-gradient-to-br from-white to-slate-100 p-5 sm:p-7 dark:border-slate-700 dark:from-slate-900 dark:to-slate-950 lg:col-span-7"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-cyan-500/15 blur-2xl" />
              <div className="absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-emerald-500/15 blur-2xl" />
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {uiText.mainImageLabel}
              </p>
              <p className="text-base font-semibold text-slate-800 dark:text-slate-100">{uiText.mainImageHint}</p>
              <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">{uiText.imageHelp}</p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
              <div
                data-image-slot="monitoring-side-image-a"
                className="relative overflow-hidden rounded-3xl border border-dashed border-slate-300 bg-white p-5 sm:p-6 dark:border-slate-700 dark:bg-slate-900"
              >
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {uiText.sideImageLabelA}
                </p>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">{uiText.sideImageHintA}</p>
              </div>

              <div
                data-image-slot="monitoring-side-image-b"
                className="relative overflow-hidden rounded-3xl border border-dashed border-slate-300 bg-white p-5 sm:p-6 dark:border-slate-700 dark:bg-slate-900"
              >
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {uiText.sideImageLabelB}
                </p>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">{uiText.sideImageHintB}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- BENTO GRID: Capabilities --- */}
      <section className="bg-slate-50 py-16 sm:py-20 lg:py-24 dark:bg-[#030712]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col justify-between gap-6 sm:mb-14 md:mb-16 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-600 mb-4">{t.labels.coreCapabilities}</h2>
              <h3 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{data.title}</h3>
            </div>
            <p className="text-slate-500 dark:text-slate-400 max-w-md">
              {uiText.capabilitiesLead}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Main Feature Card */}
            <div className="group relative row-span-2 overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 transition-all hover:shadow-2xl md:col-span-2 sm:p-8 dark:border-slate-800 dark:bg-slate-900">
              <div className="relative z-10">
                <Layers className="h-10 w-10 text-cyan-500 mb-6" />
                <h4 className="mb-4 text-xl font-bold sm:text-2xl">{items[0]}</h4>
                <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md">{benefits[0]}</p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {techStack.slice(0, 4).map(tech => (
                        <div key={tech} className="flex items-center gap-2 text-sm font-medium opacity-70">
                            <div className="h-1.5 w-1.5 rounded-full bg-cyan-500" /> {tech}
                        </div>
                    ))}
                </div>
              </div>
              <div className="absolute right-0 bottom-0 opacity-10 group-hover:opacity-20 transition-opacity">
                <Activity size={300} strokeWidth={1} />
              </div>
            </div>

            {/* Small Feature Cards */}
            {items.slice(1, 4).map((item, idx) => (
                <div key={item} className="group rounded-3xl border border-slate-200 bg-white p-6 transition-colors hover:bg-slate-900 hover:text-white dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-white dark:hover:text-slate-900 sm:p-8">
                    <h4 className="text-lg font-bold mb-3">{item}</h4>
                    <p className="text-sm opacity-70 mb-6">{benefits[idx+1] || benefits[0]}</p>
                    <ArrowRight className="h-5 w-5 transform -rotate-45 group-hover:rotate-0 transition-transform" />
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROCESS SECTION: Vertical Streamlined --- */}
      <section className="relative py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="mb-10 text-3xl font-bold sm:mb-12 sm:text-4xl">{data.process?.title}</h2>
              <div className="space-y-12 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-px before:bg-slate-200 dark:before:bg-slate-800">
                {processSteps.map((step, index) => (
                  <div key={step} className="relative pl-12">
                    <div className="absolute left-0 top-1 h-8 w-8 rounded-full bg-white dark:bg-slate-950 border-2 border-cyan-500 flex items-center justify-center z-10">
                        <span className="text-xs font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-cyan-600 mb-1">{data.phaseLabel} 0{index + 1}</h4>
                      <p className="text-base font-medium leading-relaxed text-slate-800 dark:text-slate-200 sm:text-lg">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 p-6 text-white sm:p-8 md:p-12">
              <div className="absolute top-0 right-0 p-8 opacity-20">
                <ServerCog size={120} />
              </div>
              
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 mb-4">{data.operationalExcellenceTitle}</h3>
              <h4 className="mb-10 text-2xl font-bold leading-tight sm:text-3xl">{data.operationalExcellenceHighlight}</h4>

              <div className="grid gap-8">
                {pillars.map((pillar, index) => {
                  const Icon = pillarIcons[index] || FileSearch;
                  return (
                    <div key={pillar.title} className="flex gap-6 group">
                      <div className="flex-shrink-0 h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h5 className="mb-1 text-base font-bold sm:text-lg">{pillar.title}</h5>
                        <p className="text-sm text-slate-400 leading-relaxed">{pillar.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA: Glassmorphism Card --- */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-slate-900 px-6 py-12 text-center sm:rounded-[3rem] sm:px-8 sm:py-16 md:px-16 dark:bg-blue-950">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '24px 24px' }} />
            
            <div className="relative z-10">
                <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-6xl">
                    {data.finalCtaTitle} <span className="text-cyan-400">{data.finalCtaHighlight}</span>
                </h2>
                <p className="mx-auto mb-10 max-w-2xl text-base text-blue-100/70 sm:text-lg">
                    {data.description}
                </p>
                <ContactModalButton
                  t={t}
                  defaultService="monitoring"
                  size="lg"
                  variant="secondary"
                  className="w-full rounded-full bg-white px-8 py-6 text-base font-bold text-slate-950 shadow-xl shadow-cyan-900/20 hover:bg-cyan-50 sm:w-auto sm:px-10 sm:py-7 sm:text-lg"
                >
                  {data.cta} <ArrowRight className="ml-2 h-5 w-5" />
                </ContactModalButton>
            </div>
        </div>
      </section>

      <Footer t={t} locale={language} />
      <WhatsAppButton t={t} />
      <ScrollToTopButton t={t} />
    </main>
  );
}
