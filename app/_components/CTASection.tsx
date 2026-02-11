import { Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { translations } from '@/lib/translations';

type TranslationStructure = typeof translations.en;

interface CTASectionProps {
  t: TranslationStructure;
}

export default function CTASection({ t }: CTASectionProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAgMi4yMS0xLjc5IDQtNCA0cy00LTEuNzktNC00IDEuNzktNC00IDQgNCAxLjc5IDQgNHptMCAxMmMwIDIuMjEtMS43OSA0LTQgNHMtNC0xLjc5LTQtNCAxLjc5LTQgNC00IDQgMS43OSA0IDR6bTAgMTJjMCAyLjIxLTEuNzkgNC00IDRzLTQtMS43OS00LTQgMS43OS00IDQtNCA0IDEuNzkgNCA0eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium mb-6">
          <Sparkles className="w-4 h-4" />
          {t.cta.badge}
        </div>
        <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6 heading-safe">
          {t.cta.title}
        </h2>
        <p className="text-xl text-blue-50 mb-10 max-w-2xl mx-auto">
          {t.cta.description}
        </p>
        <div className="flex justify-center mb-12">
          <a href="#contact-form">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg shadow-xl">
              {t.cta.button}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12 border-t border-white/20">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all">
            <div className="text-2xl font-bold text-white mb-2">{t.cta.stats.projects.value}</div>
            <div className="text-blue-100 text-sm">{t.cta.stats.projects.label}</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all">
            <div className="text-2xl font-bold text-white mb-2">{t.cta.stats.solutions.value}</div>
            <div className="text-blue-100 text-sm">{t.cta.stats.solutions.label}</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all">
            <div className="text-2xl font-bold text-white mb-2">{t.cta.stats.support.value}</div>
            <div className="text-blue-100 text-sm">{t.cta.stats.support.label}</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all">
            <div className="text-2xl font-bold text-white mb-2">{t.cta.stats.quality.value}</div>
            <div className="text-blue-100 text-sm">{t.cta.stats.quality.label}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
