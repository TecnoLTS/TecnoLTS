"use client"

import { ArrowRight, Code, Shield, Network, CheckCircle, Zap, Lock, Layers, Users, TrendingUp, Award, Sparkles, Server, MessageCircle, ChevronDown, HardDrive, FileCheck, ArrowUp, MapPin, Phone, Mail, Clock, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { LanguageToggle } from '@/components/language-toggle';
import ContactForm from "@/components/contact-form";
import Image from 'next/image';
import { useLanguage } from '@/components/language-provider';

export default function HomePage() {
  const { t } = useLanguage();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const orgName = 'TecnoLTS';
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: orgName,
    url: siteUrl,
    logo: `${siteUrl}/og-image.svg`,
    description: t.seo.organizationDescription,
    sameAs: [],
  };

  return (
    <main id="top" className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      {/* Floating Particles Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-slate-700/50 z-50 animate-slide-in-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 rounded-xl" />
                <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">TecnoLTS</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <div className="relative group">
                <button className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium py-2">
                  {t.nav.services}
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-gray-200 dark:border-slate-700 overflow-hidden backdrop-blur-lg">
                    <div className="p-2 space-y-1">
                      <a href="#software" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 dark:hover:from-blue-900/30 dark:hover:to-cyan-900/30 transition-all duration-200 group/item">
                        <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center group-hover/item:bg-blue-500 transition-colors">
                          <Code className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover/item:text-white" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">{t.services.software.title}</span>
                      </a>
                      <a href="#network" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 dark:hover:from-blue-900/30 dark:hover:to-cyan-900/30 transition-all duration-200 group/item">
                        <div className="w-8 h-8 rounded-lg bg-cyan-100 dark:bg-cyan-900/50 flex items-center justify-center group-hover/item:bg-cyan-500 transition-colors">
                          <Network className="w-4 h-4 text-cyan-600 dark:text-cyan-400 group-hover/item:text-white" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">{t.services.network.title}</span>
                      </a>
                      <a href="#iso" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 dark:hover:from-blue-900/30 dark:hover:to-cyan-900/30 transition-all duration-200 group/item">
                        <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center group-hover/item:bg-purple-500 transition-colors">
                          <Lock className="w-4 h-4 text-purple-600 dark:text-purple-400 group-hover/item:text-white" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">{t.services.iso.title}</span>
                      </a>
                      <a href="#cybersecurity" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 dark:hover:from-blue-900/30 dark:hover:to-cyan-900/30 transition-all duration-200 group/item">
                        <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center group-hover/item:bg-emerald-500 transition-colors">
                          <Shield className="w-4 h-4 text-emerald-600 dark:text-emerald-400 group-hover/item:text-white" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">{t.services.cybersecurity.title}</span>
                      </a>
                      <a href="#backups" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 dark:hover:from-blue-900/30 dark:hover:to-cyan-900/30 transition-all duration-200 group/item">
                        <div className="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center group-hover/item:bg-orange-500 transition-colors">
                          <Layers className="w-4 h-4 text-orange-600 dark:text-orange-400 group-hover/item:text-white" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">{t.services.backups.title}</span>
                      </a>
                      <a href="#licensing" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 dark:hover:from-blue-900/30 dark:hover:to-cyan-900/30 transition-all duration-200 group/item">
                        <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center group-hover/item:bg-indigo-500 transition-colors">
                          <FileCheck className="w-4 h-4 text-indigo-600 dark:text-indigo-400 group-hover/item:text-white" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">{t.services.licensing.title}</span>
                      </a>
                      <a href="#disaster-recovery" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 dark:hover:from-blue-900/30 dark:hover:to-cyan-900/30 transition-all duration-200 group/item">
                        <div className="w-8 h-8 rounded-lg bg-rose-100 dark:bg-rose-900/50 flex items-center justify-center group-hover/item:bg-rose-500 transition-colors">
                          <Zap className="w-4 h-4 text-rose-600 dark:text-rose-400 group-hover/item:text-white" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">{t.services.disasterRecovery.title}</span>
                      </a>
                      <a href="#datacenter" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 dark:hover:from-blue-900/30 dark:hover:to-cyan-900/30 transition-all duration-200 group/item">
                        <div className="w-8 h-8 rounded-lg bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center group-hover/item:bg-teal-500 transition-colors">
                          <HardDrive className="w-4 h-4 text-teal-600 dark:text-teal-400 group-hover/item:text-white" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">{t.services.dataCenter.title}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium">{t.nav.about}</a>
              <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium">{t.nav.contact}</a>
              <div className="flex items-center gap-2 ml-2">
                <ThemeToggle />
                <LanguageToggle />
              </div>
              <Button asChild className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 shadow-lg transition-all duration-300 magnetic hover-lift">
                <a href="#contact">
                  {t.nav.getStarted}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="scroll-reveal">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20 border border-blue-500/20 dark:border-blue-400/30 rounded-full text-blue-600 dark:text-cyan-400 text-sm font-medium mb-6 animate-bounce-in">
                <Sparkles className="w-4 h-4 animate-rotate-bounce" />
                {t.hero.badge}
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-text-reveal heading-safe">
                <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-cyan-700 dark:from-white dark:via-cyan-300 dark:to-blue-400 bg-clip-text text-transparent">
                  {t.hero.title}
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {t.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-lg shadow-xl shadow-blue-500/30 magnetic hover-lift animate-pulse-glow">
                  <a href="#contact">
                    {t.hero.ctaPrimary}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200 dark:border-slate-700">
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-1">{t.hero.stats.experience.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{t.hero.stats.experience.label}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-1">{t.hero.stats.quality.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{t.hero.stats.quality.label}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-1">{t.hero.stats.technologies.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{t.hero.stats.technologies.label}</div>
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
                      <span className="text-slate-600 ml-2">{t.code.commentAlways}</span>
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
                      <span className="text-slate-500">{t.code.commentEvaluating}</span>
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
                        <span className="text-emerald-400 text-xs">{t.code.analysisCompleted}</span>
                      </div>
                      <div className="flex gap-2 items-center">
                        <TrendingUp className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-cyan-400 text-xs">{t.code.result}</span>
                      </div>
                      <div className="flex gap-2 items-center pt-2">
                        <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span className="text-emerald-400 text-xs">{t.code.bestOption}</span>
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
                  {t.hero.uptimeBadge}
                </div>
                <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    {t.hero.secureBadge}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Dedicated Areas */}
      <section id="services" className="bg-white dark:bg-slate-900">
        
        {/* Software Development */}
        <div id="software" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-float-slow"></div>
          </div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 scroll-reveal">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight animate-text-reveal heading-safe">
                  {t.services.software.title}
                </h2>
                
                <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
                  {t.services.software.description}
                </p>

                <div className="mb-6">
                  <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{t.labels.coreCapabilities}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {t.services.software.items[0]}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {t.services.software.items[1]}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {t.services.software.items[2]}
                    </span>
                  </li>
                </ul>

                <Button className="bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 font-semibold px-8 py-6 rounded-2xl shadow-lg group/btn transition-all duration-300 magnetic hover-lift">
                  <span className="flex items-center gap-2">
                    {t.services.software.cta}
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </div>

              <div className="flex-shrink-0 scroll-reveal">
                <div className="w-48 h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl shadow-2xl flex items-center justify-center transform hover:scale-105 transition-transform duration-300 hover-lift magnetic">
                  <Code className="w-24 h-24 lg:w-32 lg:h-32 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cybersecurity & Defense */}
        <div id="cybersecurity" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
          {/* Animated background gradient */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-float-slow"></div>
          </div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              {/* Content */}
              <div className="flex-1 scroll-reveal">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight animate-text-reveal heading-safe">
                  {t.services.cybersecurity.title}
                </h2>
                
                <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
                  {t.services.cybersecurity.description || "In an era of sophisticated threats, we provide an impenetrable shield for your enterprise. Our approach combines proactive threat hunting with autonomous defensive architectures."}
                </p>

                <div className="mb-6">
                  <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{t.labels.coreCapabilities}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {t.services.cybersecurity.items[0] || "Zero-Trust Architecture"}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {t.services.cybersecurity.items[1] || "AI-Driven Threat Detection"}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {t.services.cybersecurity.items[2] || "Advanced Pen-Testing"}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      Incident Response 24/7
                    </span>
                  </li>
                </ul>

                <Button className="bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 font-semibold px-8 py-6 rounded-2xl shadow-lg group/btn transition-all duration-300 magnetic hover-lift">
                  <span className="flex items-center gap-2">
                    {t.services.cybersecurity.cta}
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </div>

              {/* Icon/Visual */}
              <div className="flex-shrink-0 scroll-reveal">
                <div className="w-48 h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl shadow-2xl flex items-center justify-center transform hover:scale-105 transition-transform duration-300 hover-lift magnetic">
                  <Shield className="w-24 h-24 lg:w-32 lg:h-32 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Network Solutions */}
        <div id="network" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-float"></div>
          </div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 scroll-reveal">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight animate-text-reveal heading-safe">
                  {t.services.network.title}
                </h2>
                
                <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
                  {t.services.network.description}
                </p>

                <div className="mb-6">
                  <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{t.labels.coreCapabilities}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {t.services.network.items[0]}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {t.services.network.items[1]}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {t.services.network.items[2]}
                    </span>
                  </li>
                </ul>

                <Button className="bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 font-semibold px-8 py-6 rounded-2xl shadow-lg group/btn transition-all duration-300 magnetic hover-lift">
                  <span className="flex items-center gap-2">
                    {t.services.network.cta}
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </div>

              <div className="flex-shrink-0 scroll-reveal">
                <div className="w-48 h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-3xl shadow-2xl flex items-center justify-center transform hover:scale-105 transition-transform duration-300 hover-lift magnetic">
                  <Network className="w-24 h-24 lg:w-32 lg:h-32 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ISO 27001 */}
        <div id="iso" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-float-slow"></div>
          </div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="flex-1 scroll-reveal">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight animate-text-reveal heading-safe">
                  {t.services.iso.title}
                </h2>
                
                <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
                  {t.services.iso.description}
                </p>

                <div className="mb-6">
                  <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{t.labels.coreCapabilities}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {t.services.iso.items[0]}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {t.services.iso.items[1]}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {t.services.iso.items[2]}
                    </span>
                  </li>
                </ul>

                <Button className="bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 font-semibold px-8 py-6 rounded-2xl shadow-lg group/btn transition-all duration-300 magnetic hover-lift">
                  <span className="flex items-center gap-2">
                    {t.services.iso.cta}
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </div>

              <div className="flex-shrink-0 scroll-reveal">
                <div className="w-48 h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-purple-500 to-purple-700 rounded-3xl shadow-2xl flex items-center justify-center transform hover:scale-105 transition-transform duration-300 hover-lift magnetic">
                  <Lock className="w-24 h-24 lg:w-32 lg:h-32 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Backup Management */}
        <div id="backups" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-900 dark:to-slate-800">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight heading-safe">
                  {t.services.backups.title}
                </h2>
                
                <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
                  {t.services.backups.description}
                </p>

                <div className="mb-6">
                  <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{t.labels.coreCapabilities}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {t.services.backups.items[0]}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {t.services.backups.items[1]}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {t.services.backups.items[2]}
                    </span>
                  </li>
                </ul>

                <Button className="bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 font-semibold px-8 py-6 rounded-2xl shadow-lg group/btn transition-all duration-300 magnetic hover-lift">
                  <span className="flex items-center gap-2">
                    {t.services.backups.cta}
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </div>

              <div className="flex-shrink-0 scroll-reveal">
                <div className="w-48 h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl shadow-2xl flex items-center justify-center transform hover:scale-105 transition-transform duration-300 hover-lift magnetic">
                  <Layers className="w-24 h-24 lg:w-32 lg:h-32 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Software Licensing */}
        <div id="licensing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl animate-float"></div>
          </div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="flex-1 scroll-reveal">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight animate-text-reveal heading-safe">
                  {t.services.licensing.title}
                </h2>
                
                <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
                  {t.services.licensing.description}
                </p>

                <div className="mb-6">
                  <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{t.labels.coreCapabilities}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {t.services.licensing.items[0]}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {t.services.licensing.items[1]}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {t.services.licensing.items[2]}
                    </span>
                  </li>
                </ul>

                <Button className="bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 font-semibold px-8 py-6 rounded-2xl shadow-lg group/btn transition-all duration-300 magnetic hover-lift">
                  <span className="flex items-center gap-2">
                    {t.services.licensing.cta}
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </div>

              <div className="flex-shrink-0 scroll-reveal">
                <div className="w-48 h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-3xl shadow-2xl flex items-center justify-center transform hover:scale-105 transition-transform duration-300 hover-lift magnetic">
                  <FileCheck className="w-24 h-24 lg:w-32 lg:h-32 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disaster Recovery */}
        <div id="disaster-recovery" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-rose-50 to-orange-50 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-rose-500/30 rounded-full blur-3xl animate-float-slow"></div>
          </div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 scroll-reveal">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight animate-text-reveal heading-safe">
                  {t.services.disasterRecovery.title}
                </h2>
                
                <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
                  {t.services.disasterRecovery.description}
                </p>

                <div className="mb-6">
                  <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{t.labels.coreCapabilities}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {t.services.disasterRecovery.items[0]}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {t.services.disasterRecovery.items[1]}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {t.services.disasterRecovery.items[2]}
                    </span>
                  </li>
                </ul>

                <Button className="bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 font-semibold px-8 py-6 rounded-2xl shadow-lg group/btn transition-all duration-300 magnetic hover-lift">
                  <span className="flex items-center gap-2">
                    {t.services.disasterRecovery.cta}
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </div>

              <div className="flex-shrink-0 scroll-reveal">
                <div className="w-48 h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-rose-500 to-orange-600 rounded-3xl shadow-2xl flex items-center justify-center transform hover:scale-105 transition-transform duration-300 hover-lift magnetic">
                  <Zap className="w-24 h-24 lg:w-32 lg:h-32 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Data Center Design & Organization */}
        <div id="datacenter" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-teal-500/30 rounded-full blur-3xl animate-float"></div>
          </div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="flex-1 scroll-reveal">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight animate-text-reveal heading-safe">
                  {t.services.dataCenter.title}
                </h2>
                
                <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
                  {t.services.dataCenter.description}
                </p>

                <div className="mb-6">
                  <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{t.labels.coreCapabilities}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {t.services.dataCenter.items[0]}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {t.services.dataCenter.items[1]}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {t.services.dataCenter.items[2]}
                    </span>
                  </li>
                </ul>

                <Button className="bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 font-semibold px-8 py-6 rounded-2xl shadow-lg group/btn transition-all duration-300 magnetic hover-lift">
                  <span className="flex items-center gap-2">
                    {t.services.dataCenter.cta}
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </div>

              <div className="flex-shrink-0 scroll-reveal">
                <div className="w-48 h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-3xl shadow-2xl flex items-center justify-center transform hover:scale-105 transition-transform duration-300 hover-lift magnetic">
                  <Server className="w-24 h-24 lg:w-32 lg:h-32 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Grid Section - Rediseñado con estructura container/row */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        {/* Container */}
        <div className="max-w-7xl mx-auto">
          {/* Row */}
          <div className="flex flex-wrap -mx-4 lg:items-end">
            {/* Columna izquierda: col-xl-6 col-lg-6 order-lg-1 order-2 */}
            <div className="w-full lg:w-1/2 xl:w-1/2 px-4 order-2 lg:order-1">
              <div className="relative">
                {/* Imagen */}
                <div className="rounded-3xl overflow-hidden ">
                  <img
                    src="/pexels-photo-3184292.jpeg"
                    alt="Business Professional"
                    className="w-full h-full object-cover min-h-[600px] lg:min-h-[750px]"
                  />
                </div>

                {/* Box-area con pseudo-elementos decorativos */}
                <div className="box-area absolute bottom-0 left-0 w-full max-w-[241px] bg-white dark:bg-slate-900 rounded-tr-[12px] pt-[15px] pr-[15px] pb-0 pl-0">
                  {/* Pseudo-elemento :before (esquina superior izquierda) */}
                  <div className="absolute left-0 w-[13px] h-[13px] -top-[13px] box-area-corner-before" />
                  
                  {/* Pseudo-elemento :after (esquina inferior derecha) */}
                  <div className="absolute right-[-13px] bottom-0 w-[13px] h-[13px] box-area-corner-after" />
                  
                  {/* Contenido interior - caja blanca */}
                  <div className="bg-white dark:bg-slate-800 rounded-tl-[12px] rounded-tr-[12px] rounded-br-[12px] rounded-bl-[12px]  p-6 shadow-lg min-h-[226px] flex flex-col justify-between">
                    <div>
                      <span className="text-cyan-600 dark:text-cyan-400 font-semibold text-sm mb-3 block">{t.heroGrid.experiences.label}</span>
                      <div className="text-6xl font-bold text-gray-900 dark:text-white mb-2 leading-none">{t.heroGrid.experiences.value}</div>
                    </div>
                    <h6 className="text-gray-600 dark:text-gray-300 text-sm font-normal leading-tight">
                      {t.heroGrid.experiences.text}
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna derecha: col-xl-6 col-lg-6 order-lg-2 order-1 */}
            <div className="w-full lg:w-1/2 xl:w-1/2 px-4 order-1 lg:order-2 mb-8 lg:mb-0">
              <div className="flex flex-col gap-8">
                {/* Sección superior: Texto principal */}
                <div className="flex flex-col justify-center">
                  <div className="mb-6">
                    <span className="inline-flex items-center px-3 py-1.5 bg-cyan-100 text-cyan-700 text-xs font-bold rounded-md uppercase tracking-wide">
                      <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <rect x="3" y="3" width="18" height="18" rx="4" />
                      </svg>
                      {t.heroGrid.badge}
                    </span>
                  </div>

                  <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 text-gray-900 dark:text-white leading-tight heading-safe">
                    {t.heroGrid.title}<br />
                    {t.heroGrid.titleLine2}<br />
                    {t.heroGrid.titleLine3} <span className="text-cyan-600 dark:text-cyan-400">{t.heroGrid.titleHighlight}.</span>
                  </h2>
                </div>

                {/* Sección inferior: Testimonio y Video lado a lado */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Testimonio */}
                  <div className="bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-500 dark:from-blue-700 dark:via-cyan-700 dark:to-teal-600 rounded-3xl p-8 flex flex-col justify-between shadow-xl text-white relative overflow-hidden min-h-[280px]">
                    <div>
                      <div className="flex items-center gap-0.5 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 fill-current text-yellow-300" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-base mb-6 leading-relaxed text-white">
                        {t.heroGrid.testimonial.text}
                      </p>
                    </div>

                    <div className="flex items-end justify-between relative z-10">
                      <div>
                        <h6 className="font-bold text-lg mb-0.5 text-white">{t.heroGrid.testimonial.author}</h6>
                        <span className="text-blue-100 text-sm">{t.heroGrid.testimonial.role}</span>
                      </div>
                      <svg className="w-12 h-12 text-white/20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                      </svg>
                    </div>
                  </div>

                  <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-xl relative min-h-[280px]">
                    <img
                      src="/pexels-photo-3184611.jpeg"
                      alt="Thumbnail"
                      className="w-full h-full object-cover"
                    />

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
            <a href="#contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg shadow-xl">
                {t.cta.button}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>

          {/* Value Propositions - Enfoque en proyectos recientes */}
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

      {/* Trusted By Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white dark:bg-slate-800 rounded-3xl py-12 px-8 shadow-2xl">
            <p className="text-gray-500 dark:text-gray-400 text-xs font-medium mb-12 tracking-[0.2em] uppercase text-center">
              {t.cta.trustedBy}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {/* Logo Paramascotas */}
              <a 
                href="https://www.paramascotasecc.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative block transition-all duration-300 hover:scale-110"
              >
                <div className="relative h-24 flex items-center justify-center">
                  <Image 
                    src="/logos/paramascotas.png" 
                    alt="Paramascotas" 
                    width={1000} 
                    height={500} 
                    quality={100}
                    priority
                    className="object-contain max-w-full max-h-full transition-all duration-300"
                  />
                </div>
              </a>
              {/* Logo Autorespuestos Core */}
              <a 
                href="https://www.autorespuestoscore.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative block transition-all duration-300 hover:scale-110"
              >
                <div className="relative h-24 flex items-center justify-center">
                  <Image 
                    src="/logos/autorespuestoscore.png" 
                    alt="Autorespuestos Core" 
                    width={600} 
                    height={200} 
                    quality={100}
                    priority
                    className="object-contain max-w-full max-h-full transition-all duration-300"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 items-stretch">
            {/* Left Column - Contact Info + Map */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3 heading-safe">
                  {t.contact.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {t.contact.subtitle} {t.contact.subtitleLine2}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{t.contact.info.location}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{t.contact.info.locationValue}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{t.contact.info.phone}</h3>
                      <p className="text-gray-600 dark:text-gray-400">+593 99 291 0848</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{t.contact.info.email}</h3>
                      <p className="text-gray-600 dark:text-gray-400">info@tecnolts.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{t.contact.info.schedule}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{t.contact.info.scheduleValue}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-slate-700 flex-1 min-h-[320px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255168.17123728427!2d-78.52495258749998!3d-0.1806532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a4002427c9f%3A0x44b991e158ef5572!2sQuito%2C%20Ecuador!5e0!3m2!1ses!2sec!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                ></iframe>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <div className="fixed bottom-6 right-6 z-50 transition-all duration-300">
        <a
          href="#top"
          className="relative bg-gradient-to-br from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
          aria-label={t.ui.scrollTopAria}
        >
          <ArrowUp className="w-5 h-5 relative z-10" />
          <span className="absolute right-full mr-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-xl border border-gray-700">
            {t.ui.scrollTopText}
          </span>
        </a>
      </div>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-28 right-6 z-50">
        <a
          href="https://wa.me/593992910848?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20más%20información%20sobre%20sus%20servicios"
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white p-5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
          aria-label={t.ui.whatsAppAria}
        >
          <div className="absolute inset-0 rounded-full bg-green-400/40 animate-ping"></div>
          <svg 
            className="w-8 h-8 relative z-10" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          <span className="absolute right-full mr-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-xl border border-gray-700">
            {t.ui.whatsAppText}
          </span>
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 rounded-xl" />
                <span className="text-2xl font-bold text-white">TecnoLTS</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed text-sm">
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
              <ul className="space-y-2.5">
                <li><a href="#software" className="text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">{t.services.software.title}</span>
                </a></li>
                <li><a href="#network" className="text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">{t.services.network.title}</span>
                </a></li>
                <li><a href="#cybersecurity" className="text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">{t.services.cybersecurity.title}</span>
                </a></li>
                <li><a href="#iso" className="text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">{t.services.iso.title}</span>
                </a></li>
                <li><a href="#backups" className="text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">{t.services.backups.title}</span>
                </a></li>
                <li><a href="#licensing" className="text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">{t.services.licensing.title}</span>
                </a></li>
                <li><a href="#disaster-recovery" className="text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">{t.services.disasterRecovery.title}</span>
                </a></li>
                <li><a href="#datacenter" className="text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">{t.services.dataCenter.title}</span>
                </a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-white mb-4">{t.footer.company}</h3>
              <ul className="space-y-2.5">
                <li><a href="#about" className="text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">{t.footer.about}</span>
                </a></li>
                <li><a href="#" className="text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">{t.footer.careers}</span>
                </a></li>
                <li><a href="#" className="text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">{t.footer.blog}</span>
                </a></li>
                <li><a href="#" className="text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">{t.footer.privacy}</span>
                </a></li>
                <li><a href="#" className="text-sm hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:translate-x-1 transition-transform">{t.footer.terms}</span>
                </a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-white mb-4">{t.footer.contact}</h3>
              <ul className="space-y-4">
                <li className="text-gray-400 flex items-start gap-3 text-sm">
                  <span className="text-cyan-400 mt-0.5 text-base">✉</span>
                  <div>
                    <p className="text-white font-medium mb-1">{t.footer.contactEmailLabel}</p>
                    <a href="mailto:info@tecnotls.com" className="hover:text-cyan-400 transition-colors">info@tecnotls.com</a>
                  </div>
                </li>
                <li className="text-gray-400 flex items-start gap-3 text-sm">
                  <span className="text-cyan-400 mt-0.5 text-base">☎</span>
                  <div>
                    <p className="text-white font-medium mb-1">{t.footer.contactPhoneLabel}</p>
                    <a href="tel:+15551234567" className="hover:text-cyan-400 transition-colors">+1 (555) 123-4567</a>
                  </div>
                </li>
                <li className="text-gray-400 flex items-start gap-3 text-sm">
                  <span className="text-cyan-400 mt-0.5 text-base">📍</span>
                  <div>
                    <p className="text-white font-medium mb-1">{t.footer.contactLocationLabel}</p>
                    <span>{t.contact.info.locationValue}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; 2026 TecnoLTS. {t.footer.rights}
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
