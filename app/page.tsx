"use client"

import { ArrowRight, Code, Shield, Network, CheckCircle, Zap, Lock, Layers, Users, TrendingUp, Award, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { LanguageToggle } from '@/components/language-toggle';
import { useLanguage } from '@/components/language-provider';

export default function Home() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-slate-700/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 rounded-xl" />
                <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">TecnoLTS</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <a href="#services" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium">{t.nav.services}</a>
              <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium">{t.nav.about}</a>
              <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium">{t.nav.contact}</a>
              <div className="flex items-center gap-2 ml-2">
                <ThemeToggle />
                <LanguageToggle />
              </div>
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg shadow-blue-500/30">
                {t.nav.getStarted}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20 border border-blue-500/20 dark:border-blue-400/30 rounded-full text-blue-600 dark:text-cyan-400 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Enterprise IT Solutions
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-cyan-700 dark:from-white dark:via-cyan-300 dark:to-blue-400 bg-clip-text text-transparent">
                  {t.hero.title}
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {t.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-lg shadow-xl shadow-blue-500/30">
                  {t.hero.ctaPrimary}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg border-2 hover:bg-gray-50 dark:hover:bg-slate-800 dark:border-slate-600 dark:text-gray-200">
                  {t.hero.ctaSecondary}
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200 dark:border-slate-700">
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-1">500+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-1">98%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-1">10+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years</div>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 shadow-2xl shadow-blue-500/30 border border-slate-700">
                {/* Terminal/Code Editor Window */}
                <div className="relative bg-slate-950 rounded-xl overflow-hidden border border-slate-700/50">
                  {/* Window Header */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-slate-700/50">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="flex-1 text-center text-slate-400 text-xs font-mono">
                      app.tsx
                    </div>
                  </div>

                  {/* Code Content */}
                  <div className="p-6 font-mono text-sm space-y-2 min-h-[400px]">
                    <div className="flex gap-3">
                      <span className="text-slate-600">1</span>
                      <span className="text-purple-400">function</span>
                      <span className="text-yellow-300">chooseTechPartner</span>
                      <span className="text-slate-400">(</span>
                      <span className="text-orange-300">project</span>
                      <span className="text-slate-400">)</span>
                      <span className="text-yellow-300">{'{'}</span>
                    </div>
                    <div className="flex gap-3 pl-6">
                      <span className="text-slate-600">2</span>
                      <span className="text-purple-400">if</span>
                      <span className="text-slate-400">(</span>
                      <span className="text-orange-300">project</span>
                      <span className="text-slate-400">.</span>
                      <span className="text-cyan-300">complexity</span>
                      <span className="text-pink-400">{' > '}</span>
                      <span className="text-orange-300">50</span>
                      <span className="text-slate-400">)</span>
                      <span className="text-yellow-300">{'{'}</span>
                    </div>
                    <div className="flex gap-3 pl-12">
                      <span className="text-slate-600">3</span>
                      <span className="text-purple-400">return</span>
                      <span className="text-emerald-300">"TecnoLTS"</span>
                      <span className="text-slate-400">;</span>
                    </div>
                    <div className="flex gap-3 pl-6">
                      <span className="text-slate-600">4</span>
                      <span className="text-yellow-300">{'}'}</span>
                      <span className="text-purple-400">else</span>
                      <span className="text-yellow-300">{'{'}</span>
                    </div>
                    <div className="flex gap-3 pl-12">
                      <span className="text-slate-600">5</span>
                      <span className="text-purple-400">return</span>
                      <span className="text-emerald-300">"TecnoLTS"</span>
                      <span className="text-slate-400">;</span>
                      <span className="text-slate-600 ml-2">// siempre!</span>
                    </div>
                    <div className="flex gap-3 pl-6">
                      <span className="text-slate-600">6</span>
                      <span className="text-yellow-300">{'}'}</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-slate-600">7</span>
                      <span className="text-yellow-300">{'}'}</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-slate-600">8</span>
                      <span className="text-slate-500"></span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-slate-600">9</span>
                      <span className="text-slate-500">// Evaluando tu proyecto...</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-slate-600">10</span>
                      <span className="text-purple-400">const</span>
                      <span className="text-blue-300">partner</span>
                      <span className="text-slate-400">=</span>
                      <span className="text-yellow-300">chooseTechPartner</span>
                      <span className="text-slate-400">(</span>
                      <span className="text-cyan-300">yourProject</span>
                      <span className="text-slate-400">);</span>
                    </div>

                    {/* Success Output */}
                    <div className="pt-4 space-y-1 border-t border-slate-800 mt-4">
                      <div className="flex gap-2 items-center">
                        <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span className="text-emerald-400 text-xs">Análisis completado</span>
                      </div>
                      <div className="flex gap-2 items-center">
                        <TrendingUp className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-cyan-400 text-xs">Resultado: "TecnoLTS"</span>
                      </div>
                      <div className="flex gap-2 items-center pt-2">
                        <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span className="text-emerald-400 text-xs">Tu mejor opción siempre</span>
                      </div>
                    </div>

                    {/* Blinking cursor */}
                    <div className="flex gap-3 pt-2">
                      <span className="text-slate-600">11</span>
                      <span className="w-2 h-5 bg-cyan-400 animate-pulse inline-block"></span>
                    </div>
                  </div>
                </div>

                {/* Floating Badges */}
                <div className="absolute -top-4 -right-4 bg-emerald-500 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg animate-bounce">
                  100% Uptime
                </div>
                <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    Secure
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Dark */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              {t.services.title}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Software Development */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shrink-0">
                <Code className="w-8 h-8 text-white flex-shrink-0" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t.services.software.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {t.services.software.description}
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span>{t.services.software.items[0]}</span>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span>{t.services.software.items[1]}</span>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span>{t.services.software.items[2]}</span>
                </li>
              </ul>
            </div>

            {/* Network Solutions */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shrink-0">
                <Network className="w-8 h-8 text-white flex-shrink-0" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t.services.network.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {t.services.network.description}
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0" />
                  <span>{t.services.network.items[0]}</span>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0" />
                  <span>{t.services.network.items[1]}</span>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0" />
                  <span>{t.services.network.items[2]}</span>
                </li>
              </ul>
            </div>

            {/* ISO 27001 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shrink-0">
                <Shield className="w-8 h-8 text-white flex-shrink-0" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t.services.iso.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {t.services.iso.description}
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span>{t.services.iso.items[0]}</span>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span>{t.services.iso.items[1]}</span>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span>{t.services.iso.items[2]}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Light */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              {t.features.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t.features.subtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform shrink-0">
                <Zap className="w-10 h-10 text-blue-600 dark:text-blue-400 flex-shrink-0" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{t.features.fastDelivery.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t.features.fastDelivery.description}
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-100 to-teal-100 dark:from-cyan-900/30 dark:to-teal-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform shrink-0">
                <Lock className="w-10 h-10 text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{t.features.secure.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t.features.secure.description}
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform shrink-0">
                <Users className="w-10 h-10 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{t.features.expert.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t.features.expert.description}
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-pink-100 dark:from-orange-900/30 dark:to-pink-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform shrink-0">
                <Award className="w-10 h-10 text-orange-600 dark:text-orange-400 flex-shrink-0" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{t.features.proven.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t.features.proven.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAgMi4yMS0xLjc5IDQtNCA0cy00LTEuNzktNC00IDEuNzktNCA0LTQgNCAxLjc5IDQgNHptMCAxMmMwIDIuMjEtMS43OSA0LTQgNHMtNC0xLjc5LTQtNCAxLjc5LTQgNC00IDQgMS43OSA0IDR6bTAgMTJjMCAyLjIxLTEuNzkgNC00IDRzLTQtMS43OS00LTQgMS43OS00IDQtNCA0IDEuNzkgNCA0eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Let's Build Something Amazing
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            {t.cta.title}
          </h2>
          <p className="text-xl text-blue-50 mb-10 max-w-2xl mx-auto">
            {t.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg shadow-xl">
              {t.cta.button}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm">
              View Portfolio
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/20">
            <div>
              <div className="text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-blue-100 text-sm">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">98%</div>
              <div className="text-blue-100 text-sm">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">50+</div>
              <div className="text-blue-100 text-sm">Team Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-blue-100 text-sm">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 rounded-xl" />
                <span className="text-2xl font-bold text-white">TecnoLTS</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {t.footer.description}
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors border border-white/10">
                  <span className="text-white">f</span>
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors border border-white/10">
                  <span className="text-white">𝕏</span>
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors border border-white/10">
                  <span className="text-white">in</span>
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-white mb-4">{t.footer.services}</h3>
              <ul className="space-y-3">
                <li><a href="#services" className="hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {t.services.software.title}
                </a></li>
                <li><a href="#services" className="hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {t.services.network.title}
                </a></li>
                <li><a href="#services" className="hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {t.services.iso.title}
                </a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-white mb-4">{t.footer.company}</h3>
              <ul className="space-y-3">
                <li><a href="#about" className="hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {t.footer.about}
                </a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {t.footer.careers}
                </a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {t.footer.blog}
                </a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-white mb-4">{t.footer.contact}</h3>
              <ul className="space-y-3">
                <li className="text-gray-400 flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">✉</span>
                  <span>info@techcorp.com</span>
                </li>
                <li className="text-gray-400 flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">☎</span>
                  <span>+1 (555) 123-4567</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; 2024 TecnoLTS. {t.footer.rights}
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">{t.footer.privacy}</a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">{t.footer.terms}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
