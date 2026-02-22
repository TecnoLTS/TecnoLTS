import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  items: readonly string[];
  cta: string;
  coreCapabilitiesLabel: string;
  gradient: string;
  backgroundColor?: string;
  iconPosition?: 'left' | 'right';
  checkColor?: string;
  locale?: string;
}

export default function ServiceCard({
  id,
  title,
  description,
  items,
  cta,
  coreCapabilitiesLabel,
  gradient,
  backgroundColor = 'bg-white dark:bg-slate-800',
  iconPosition = 'right',
  checkColor = 'text-emerald-500',
  locale = 'es'
}: ServiceCardProps) {
  const isIconLeft = iconPosition === 'left';

  // Map service IDs to route paths
  const serviceRoutes: Record<string, string> = {
    'software': 'software',
    'monitoring': 'monitoring',
    'cybersecurity': 'cybersecurity',
    'network': 'network',
    'iso': 'iso-27001',
    'backups': 'backups',
    'licensing': 'licensing',
    'disaster-recovery': 'disaster-recovery',
    'datacenter': 'datacenter'
  };

  const servicePath = serviceRoutes[id] || id;
  const serviceUrl = `/${locale}/services/${servicePath}`;
  const descriptiveCta = `${cta}: ${title}`;


  return (
    <div id={id} className={`deferred-section scroll-mt-24 py-20 px-4 sm:px-6 lg:px-8 ${backgroundColor} relative overflow-visible group/card`}>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`flex flex-col ${isIconLeft ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-start lg:items-center gap-6 ${isIconLeft ? 'lg:gap-20' : 'lg:gap-12'}`}>
          <div className="flex-1 w-full">
            <div className="flex items-start gap-4 mb-6">
              <div className="lg:hidden relative z-10 flex-shrink-0 animate-fade-in perspective-3d overflow-visible">
                <div className="w-16 h-16 cube-3d cube-3d-mobile animate-cube-rotate motion-reduce:animate-none">
                    {/* Front face */}
                    <div className={`cube-face cube-face-front-sm ${gradient} rounded-sm`}>
                      <ServiceCubeIcon id={id} className="w-8 h-8 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
                    </div>
                    {/* Back face */}
                    <div className={`cube-face cube-face-back-sm cube-face-surface cube-face-surface-back ${gradient}`}>
                      <ServiceCubeIcon id={id} className="w-8 h-8 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
                    </div>
                    {/* Right face */}
                    <div className={`cube-face cube-face-right-sm cube-face-surface cube-face-surface-side ${gradient}`}>
                      <ServiceCubeIcon id={id} className="w-8 h-8 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
                    </div>
                    {/* Left face */}
                    <div className={`cube-face cube-face-left-sm cube-face-surface cube-face-surface-side ${gradient}`}>
                      <ServiceCubeIcon id={id} className="w-8 h-8 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
                    </div>
                    {/* Top face */}
                    <div className={`cube-face cube-face-top-sm cube-face-surface cube-face-surface-top ${gradient}`}>
                      <ServiceCubeIcon id={id} className="w-8 h-8 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
                    </div>
                    {/* Bottom face */}
                    <div className={`cube-face cube-face-bottom-sm cube-face-surface cube-face-surface-bottom ${gradient}`}>
                      <ServiceCubeIcon id={id} className="w-8 h-8 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
                    </div>
                </div>
              </div>
              <div className="flex-1 animate-fade-in-up">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight heading-safe text-gray-900 dark:text-white">
                  {title}
                </h2>
              </div>
            </div>

            <p className="mb-8 text-lg leading-relaxed text-gray-900 dark:text-gray-300 animate-fade-in-up animation-delay-100">
              {description}
            </p>

            <div className="mb-6 animate-fade-in-up animation-delay-200">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-800 dark:text-gray-400">
                {coreCapabilitiesLabel}
              </span>
            </div>

            <ul className="space-y-4 mb-8">
              {items.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 animate-fade-in-up group/item cursor-default"
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                >
                  <CheckCircle className={`w-5 h-5 ${checkColor} flex-shrink-0 mt-1 group-hover/item:scale-110 transition-all duration-500`} />
                  <span className="font-medium text-gray-900 dark:text-gray-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <Button 
              className="w-full sm:w-auto max-w-full h-auto whitespace-normal bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 font-semibold px-4 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.6)] group/btn hover:scale-[1.02] hover:translate-x-1 transition-all duration-500 animate-fade-in-up animation-delay-500 relative overflow-hidden"
              asChild
            >
              <a href={serviceUrl} aria-label={descriptiveCta} className="w-full">
                <span className="absolute inset-0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></span>
                <span className="relative z-10 flex items-center justify-center gap-2 text-center leading-tight sm:leading-normal">
                  <span className="sm:hidden">{cta}</span>
                  <span className="hidden break-words sm:inline">{descriptiveCta}</span>
                  <ArrowRight className="h-4 w-4 flex-shrink-0 transition-transform duration-500 group-hover/btn:translate-x-1 sm:h-5 sm:w-5" />
                </span>
              </a>
            </Button>
          </div>

          <div className="hidden lg:block relative z-10 flex-shrink-0 animate-fade-in-up animation-delay-200 perspective-3d overflow-visible">
            <div className="w-56 h-56 cube-3d cube-3d-desktop group-hover/card:animate-cube-rotate motion-reduce:animate-none">
                {/* Front face */}
                <div className={`cube-face cube-face-front ${gradient} rounded-lg`}>
                  <ServiceCubeIcon id={id} className="w-28 h-28 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
                </div>
                {/* Back face */}
                <div className={`cube-face cube-face-back cube-face-surface cube-face-surface-back ${gradient}`}>
                  <ServiceCubeIcon id={id} className="w-28 h-28 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
                </div>
                {/* Right face */}
                <div className={`cube-face cube-face-right cube-face-surface cube-face-surface-side ${gradient}`}>
                  <ServiceCubeIcon id={id} className="w-28 h-28 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
                </div>
                {/* Left face */}
                <div className={`cube-face cube-face-left cube-face-surface cube-face-surface-side ${gradient}`}>
                  <ServiceCubeIcon id={id} className="w-28 h-28 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
                </div>
                {/* Top face */}
                <div className={`cube-face cube-face-top cube-face-surface cube-face-surface-top ${gradient}`}>
                  <ServiceCubeIcon id={id} className="w-28 h-28 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
                </div>
                {/* Bottom face */}
                <div className={`cube-face cube-face-bottom cube-face-surface cube-face-surface-bottom ${gradient}`}>
                  <ServiceCubeIcon id={id} className="w-28 h-28 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceCubeIcon({ id, className }: { id: string; className: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <use href={`#service-icon-${id}`} />
    </svg>
  );
}
