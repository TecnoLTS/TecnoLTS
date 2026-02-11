import { ArrowRight, CheckCircle, LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
  checkColor = 'text-emerald-500'
}: ServiceCardProps) {
  const isIconLeft = iconPosition === 'left';
  const isDarkBg = backgroundColor.includes('slate-900') || backgroundColor.includes('slate-950');

  return (
    <div id={id} className={`py-20 px-4 sm:px-6 lg:px-8 ${backgroundColor} relative overflow-hidden`}>
      {isDarkBg && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10 animate-gradient-shift"></div>
      )}
      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`flex flex-col ${isIconLeft ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-start lg:items-center gap-6 lg:gap-12`}>
          <div className="flex-1 w-full">
            <div className="flex items-start gap-4 mb-6">
              <div className="lg:hidden flex-shrink-0">
                <div className={`w-16 h-16 ${gradient} rounded-2xl shadow-lg flex items-center justify-center`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight heading-safe ${isDarkBg ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                  {title}
                </h2>
              </div>
            </div>

            <p className={`mb-8 text-lg leading-relaxed ${isDarkBg ? 'text-gray-300' : 'text-gray-600 dark:text-gray-400'}`}>
              {description}
            </p>

            <div className="mb-6">
              <span className={`text-xs font-bold uppercase tracking-wider ${isDarkBg ? 'text-gray-400' : 'text-gray-500 dark:text-gray-400'}`}>
                {coreCapabilitiesLabel}
              </span>
            </div>

            <ul className="space-y-4 mb-8">
              {items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className={`w-5 h-5 ${checkColor} flex-shrink-0 mt-1`} />
                  <span className={`font-medium ${isDarkBg ? 'text-gray-200' : 'text-gray-700 dark:text-gray-300'}`}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <Button className="bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 font-semibold px-8 py-6 rounded-2xl shadow-lg group/btn">
              <span className="flex items-center gap-2">
                {cta}
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>

          <div className="hidden lg:block flex-shrink-0">
            <div className={`w-64 h-64 ${gradient} rounded-3xl shadow-2xl flex items-center justify-center`}>
              <Icon className="w-32 h-32 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
