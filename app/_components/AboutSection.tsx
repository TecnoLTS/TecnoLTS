'use client';

import Image from 'next/image';
import { ShieldCheck, Zap, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { TranslationStructure } from '@/lib/translations';

interface AboutSectionProps {
    t: TranslationStructure;
}

export default function AboutSection({ t }: AboutSectionProps) {
    const f = t.featuresExtended;

    const highlights = [
        {
            icon: ShieldCheck,
            iconClassName: 'text-blue-500',
            title: f.reliabilityTitle,
            description: f.reliabilityDesc,
        },
        {
            icon: Zap,
            iconClassName: 'text-cyan-500',
            title: f.innovationTitle,
            description: f.innovationDesc,
        },
        {
            icon: Users,
            iconClassName: 'text-indigo-500',
            title: f.supportTitle,
            description: f.supportDesc,
        },
    ] as const satisfies ReadonlyArray<{
        icon: LucideIcon;
        iconClassName: string;
        title: string;
        description: string;
    }>;

    return (
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 overflow-hidden relative">
            {/* Decorative blobs */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -ml-32 -mt-32" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -mr-48 -mb-48" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="text-center lg:text-left">
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                            {f.title}
                        </h2>
                        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            {f.description}
                        </p>

                        <div className="grid gap-6 sm:gap-8 text-left">
                            {highlights.map((item, idx) => (
                                <div key={idx} className="flex gap-4 sm:gap-5 group">
                                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center border border-slate-100 dark:border-slate-700 group-hover:scale-110 transition-transform duration-300">
                                        <item.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${item.iconClassName}`} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-1 sm:mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative group lg:mt-0 mt-12">
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-[2.5rem] blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
                        <div className="relative aspect-[4/3] sm:aspect-video lg:aspect-square rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl">
                            <Image
                                src="/images/Nuestra-estrategia-tecnolts.jpg"
                                alt={f.imageAlt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Overlay para coherencia con el diseño oscuro */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
                        </div>

                        {/* Floating info card */}
                        <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 hidden sm:block animate-bounce-slow">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">{f.badgeLabel}</p>
                                    <p className="text-slate-900 dark:text-white font-bold italic">{f.badgeValue}</p>
                                </div>
                            </div>
                            <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                                <div className="h-full w-[94%] bg-green-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
