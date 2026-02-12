'use client';

import { LucideIcon, Code, Shield, Network, Lock, Layers, Server, Zap, HardDrive } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import ScrollToTopButton from './ScrollToTopButton';
import Link from 'next/link';
import { useLanguage } from '@/components/language-provider';

// Map icon names to components
const iconMap: Record<string, LucideIcon> = {
  Code,
  Shield,
  Network,
  Lock,
  Layers,
  Server,
  Zap,
  HardDrive
};

interface ServiceDetailPageProps {
  title: string;
  description: string;
  iconName: string; // Changed from icon component to icon name
  gradient: string;
  items: readonly string[];
  detailedDescription?: string;
  benefits?: readonly string[];
  technologies?: readonly string[];
  process?: {
    readonly title: string;
    readonly steps: readonly string[];
  };
  cta: string;
  checkColor?: string;
  locale: string;
  labels: {
    benefits?: string;
    technologies?: string;
    process?: string;
    getStarted?: string;
    backToHome?: string;
  };
}

export default function ServiceDetailPage({
  title,
  description,
  iconName,
  gradient,
  items,
  detailedDescription,
  benefits,
  technologies,
  process,
  cta,
  checkColor = 'text-emerald-500',
  locale,
  labels
}: ServiceDetailPageProps) {
  const Icon = iconMap[iconName] || Code; // Fallback to Code if icon not found
  const { t } = useLanguage();
  
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
      </div>

      <Navigation />

      {/* Hero Section */}
      <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Link 
            href={`/${locale}`}
            className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-8">
            ← {labels.backToHome || 'Volver al Inicio'}
          </Link>

          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12 group/card">
            <div className="flex-1 w-full">
              <div className="flex items-start gap-4 mb-6">
                <div className="lg:hidden flex-shrink-0 animate-fade-in perspective-3d">
                  <div className="w-16 h-16 cube-3d animate-cube-rotate">
                    {/* Front face */}
                    <div className={`cube-face cube-face-front-sm ${gradient} rounded-sm`}>
                      <Icon className="w-8 h-8 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
                    </div>
                    {/* Back face */}
                    <div className={`cube-face cube-face-back-sm ${gradient} rounded-sm`}>
                      <Icon className="w-8 h-8 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
                    </div>
                    {/* Right face */}
                    <div className={`cube-face cube-face-right-sm ${gradient} rounded-sm`}>
                      <Icon className="w-8 h-8 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
                    </div>
                    {/* Left face */}
                    <div className={`cube-face cube-face-left-sm ${gradient} rounded-sm`}>
                      <Icon className="w-8 h-8 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
                    </div>
                    {/* Top face */}
                    <div className={`cube-face cube-face-top-sm ${gradient} rounded-sm`}>
                      <Icon className="w-8 h-8 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
                    </div>
                    {/* Bottom face */}
                    <div className={`cube-face cube-face-bottom-sm ${gradient} rounded-sm`}>
                      <Icon className="w-8 h-8 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
                    </div>
                  </div>
                </div>
                <div className="flex-1 animate-fade-in-up">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight heading-safe text-gray-900 dark:text-white">
                    {title}
                  </h1>
                </div>
              </div>

              <p className="mb-8 text-lg leading-relaxed text-gray-900 dark:text-gray-300 animate-fade-in-up animation-delay-100">
                {description}
              </p>

              {detailedDescription && (
                <p className="text-base lg:text-lg text-gray-600 dark:text-gray-400 mb-8 animate-fade-in-up animation-delay-200">
                  {detailedDescription}
                </p>
              )}

              <Button 
                className="bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 font-semibold px-8 py-6 rounded-2xl shadow-lg hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.6)] group/btn hover:scale-[1.02] transition-all duration-500 animate-fade-in-up animation-delay-300"
                asChild
              >
                <a href="#contact">
                  <span className="flex items-center gap-2">
                    {cta}
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-500" />
                  </span>
                </a>
              </Button>
            </div>

            <div className="hidden lg:block flex-shrink-0 animate-fade-in-up animation-delay-200 perspective-3d">
              <div className="w-56 h-56 cube-3d lg:group-hover/card:animate-cube-rotate">
                {/* Front face */}
                <div className={`cube-face cube-face-front ${gradient} rounded-lg`}>
                  <Icon className="w-28 h-28 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
                </div>
                {/* Back face */}
                <div className={`cube-face cube-face-back ${gradient} rounded-lg`}>
                  <Icon className="w-28 h-28 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
                </div>
                {/* Right face */}
                <div className={`cube-face cube-face-right ${gradient} rounded-lg`}>
                  <Icon className="w-28 h-28 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
                </div>
                {/* Left face */}
                <div className={`cube-face cube-face-left ${gradient} rounded-lg`}>
                  <Icon className="w-28 h-28 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
                </div>
                {/* Top face */}
                <div className={`cube-face cube-face-top ${gradient} rounded-lg`}>
                  <Icon className="w-28 h-28 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
                </div>
                {/* Bottom face */}
                <div className={`cube-face cube-face-bottom ${gradient} rounded-lg`}>
                  <Icon className="w-28 h-28 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Capabilities Section */}
      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-800 dark:text-gray-400">
              {labels.benefits || 'Capacidades Clave'}
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 animate-fade-in-up group/item hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CheckCircle className={`w-6 h-6 ${checkColor} flex-shrink-0 mt-1 group-hover/item:scale-110 transition-all duration-500`} />
                <span className="font-medium text-gray-900 dark:text-gray-100 text-lg">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      {benefits && benefits.length > 0 && (
        <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-cyan-950/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
              {labels.benefits || 'Beneficios'}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-12 h-12 ${gradient} rounded-lg flex items-center justify-center mb-4`}>
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-900 dark:text-gray-100 font-medium">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Technologies Section */}
      {technologies && technologies.length > 0 && (
        <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
              {labels.technologies || 'Tecnologías'}
            </h2>
            
            <div className="flex flex-wrap gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className={`px-6 py-3 ${gradient} rounded-full text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Process Section */}
      {process && (
        <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-cyan-950/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
              {process.title}
            </h2>
            
            <div className="space-y-6">
              {process.steps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-6 p-6 rounded-2xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-12 h-12 flex-shrink-0 ${gradient} rounded-full flex items-center justify-center text-white font-bold text-xl`}>
                    {index + 1}
                  </div>
                  <p className="text-lg text-gray-900 dark:text-gray-100 pt-2">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div id="contact" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-cyan-600 dark:from-blue-700 dark:to-cyan-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
            {labels.getStarted || '¿Listo para comenzar?'}
          </h2>
          
          <p className="text-lg lg:text-xl text-blue-100 mb-8">
            {cta}
          </p>

          <Button 
            className="bg-white hover:bg-gray-100 text-blue-600 font-semibold px-8 py-6 rounded-2xl shadow-lg hover:shadow-xl group/btn hover:scale-105 transition-all duration-500"
            asChild
          >
            <a href="https://wa.me/593992910848?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20más%20información%20sobre%20sus%20servicios">
              <span className="flex items-center gap-2">
                {labels.getStarted || 'Comenzar Ahora'}
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-500" />
              </span>
            </a>
          </Button>
        </div>
      </div>

      <Footer t={t} />
      <WhatsAppButton t={t} />
      <ScrollToTopButton />
    </main>
  );
}
