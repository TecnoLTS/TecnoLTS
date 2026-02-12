import { ArrowRight, CheckCircle, LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface ServiceCardProps {
  id: string;
  icon: LucideIcon;
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
  icon: Icon,
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


  return (
    <div id={id} className={`py-20 px-4 sm:px-6 lg:px-8 ${backgroundColor} relative overflow-hidden group/card`}>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`flex flex-col ${isIconLeft ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-start lg:items-center gap-6 ${isIconLeft ? 'lg:gap-20' : 'lg:gap-12'}`}>
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
              className="bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 font-semibold px-8 py-6 rounded-2xl shadow-lg hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.6)] group/btn hover:scale-[1.02] hover:translate-x-1 transition-all duration-500 animate-fade-in-up animation-delay-500 relative overflow-hidden"
              asChild
            >
              <Link href={serviceUrl}>
                <span className="absolute inset-0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></span>
                <span className="flex items-center gap-2 relative z-10">
                  {cta}
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-500" />
                </span>
              </Link>
            </Button>
          </div>

          <div className="hidden lg:block flex-shrink-0 animate-fade-in-up animation-delay-200 perspective-3d">
            <div className="w-56 h-56 cube-3d group-hover/card:animate-cube-rotate">
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
  );
}
