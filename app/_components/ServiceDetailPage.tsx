import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Code,
  HardDrive,
  Layers,
  Lock,
  Network,
  Radar,
  Server,
  Shield,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import Navigation from '@/app/_components/Navigation';
import Footer from '@/app/_components/Footer';
import ScrollToTopButton from '@/app/_components/ScrollToTopButton';
import WhatsAppButton from '@/app/_components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { localePath } from '@/lib/i18n';
import type { TranslationStructure } from '@/lib/translations';

type IconName =
  | 'Code'
  | 'Radar'
  | 'Network'
  | 'Lock'
  | 'Shield'
  | 'Layers'
  | 'Server'
  | 'Zap'
  | 'HardDrive';

type ServiceDetailPageProps = {
  title: string;
  description: string;
  detailedDescription: string;
  iconName: IconName;
  gradient: string;
  items: readonly string[];
  benefits: readonly string[];
  technologies: readonly string[];
  process: {
    title: string;
    steps: readonly string[];
  };
  cta: string;
  checkColor: string;
  locale: string;
  t: TranslationStructure;
  labels: {
    benefits: string;
    technologies: string;
    process: string;
    getStarted: string;
  };
};

const iconMap: Record<IconName, LucideIcon> = {
  Code,
  Radar,
  Network,
  Lock,
  Shield,
  Layers,
  Server,
  Zap,
  HardDrive,
};

export default function ServiceDetailPage({
  title,
  description,
  detailedDescription,
  iconName,
  gradient,
  items,
  benefits,
  technologies,
  process,
  cta,
  checkColor,
  locale,
  t,
  labels,
}: ServiceDetailPageProps) {
  const safeLocale = locale === 'en' ? 'en' : 'es';
  const Icon = iconMap[iconName];
  const homePath = localePath(safeLocale);
  const servicesPath = localePath(safeLocale, '/services');
  const contactHref = `${homePath}#contact`;

  return (
    <main
      id="top"
      className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-slate-100 text-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-slate-100"
    >
      <Navigation t={t} language={safeLocale} />

      <section className="mx-auto max-w-7xl px-4 pb-10 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pt-36">
        <nav className="mb-6 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Link href={homePath} className="hover:text-cyan-600 dark:hover:text-cyan-300">
            {safeLocale === 'es' ? 'Inicio' : 'Home'}
          </Link>
          <span>/</span>
          <Link href={servicesPath} className="hover:text-cyan-600 dark:hover:text-cyan-300">
            {safeLocale === 'es' ? 'Servicios' : 'Services'}
          </Link>
          <span>/</span>
          <span className="font-medium text-slate-700 dark:text-slate-200">{title}</span>
        </nav>

        <div className="grid items-center gap-8 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-xl backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80 lg:grid-cols-[1fr_auto] lg:p-10">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              {title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              {description}
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {detailedDescription}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="bg-cyan-600 text-white hover:bg-cyan-700">
                <Link href={contactHref} className="inline-flex items-center gap-2">
                  {cta}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href={servicesPath}>{safeLocale === 'es' ? 'Ver más servicios' : 'See more services'}</Link>
              </Button>
            </div>
          </div>

          <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-3xl shadow-lg sm:h-36 sm:w-36 lg:mx-0">
            <div className={`flex h-full w-full items-center justify-center rounded-3xl ${gradient}`}>
              <Icon className="h-12 w-12 text-white sm:h-14 sm:w-14" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-8 sm:px-6 lg:grid-cols-2 lg:px-8">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            {safeLocale === 'es' ? 'Servicios incluidos' : 'Included Services'}
          </h2>
          <ul className="mt-5 space-y-3">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className={`mt-0.5 h-5 w-5 flex-shrink-0 ${checkColor}`} aria-hidden="true" />
                <span className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">{labels.benefits}</h2>
          <ul className="mt-5 space-y-3">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className={`mt-0.5 h-5 w-5 flex-shrink-0 ${checkColor}`} aria-hidden="true" />
                <span className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">{benefit}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">{labels.technologies}</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {technologies.map((technology, index) => (
              <span
                key={index}
                className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-800 dark:border-cyan-900/80 dark:bg-cyan-950/40 dark:text-cyan-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </article>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">{labels.process}</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{process.title}</p>
          <ol className="mt-5 space-y-3">
            {process.steps.map((step, index) => (
              <li key={index} className="flex gap-3">
                <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-cyan-600 px-2 text-xs font-bold text-white">
                  {index + 1}
                </span>
                <span className="pt-0.5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{step}</span>
              </li>
            ))}
          </ol>
        </article>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-cyan-200 bg-gradient-to-r from-cyan-600 to-blue-700 p-8 text-white shadow-xl dark:border-cyan-900/60">
          <h2 className="text-2xl font-bold sm:text-3xl">{labels.getStarted}</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-cyan-50 sm:text-base">
            {safeLocale === 'es'
              ? 'Conversemos sobre su proyecto y diseñemos una solución técnica alineada a sus objetivos.'
              : 'Let us discuss your project and design a technical solution aligned with your goals.'}
          </p>
          <div className="mt-6">
            <Button asChild className="bg-white text-slate-900 hover:bg-slate-100">
              <Link href={contactHref} className="inline-flex items-center gap-2">
                {cta}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer t={t} locale={safeLocale} />
      <WhatsAppButton t={t} />
      <ScrollToTopButton t={t} />
    </main>
  );
}
