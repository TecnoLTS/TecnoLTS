'use client';

import Link from 'next/link';
import {
  Activity,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Code,
  HardDrive,
  ImageIcon,
  Layers,
  Lock,
  LucideIcon,
  Network,
  Radar,
  Server,
  Shield,
  Sparkles,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from './Navigation';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import ScrollToTopButton from './ScrollToTopButton';
import { useLanguage } from '@/components/language-provider';

const iconMap: Record<string, LucideIcon> = {
  Code,
  Shield,
  Network,
  Lock,
  Layers,
  Server,
  Zap,
  HardDrive,
};

type ThemeMetric = {
  es: string;
  en: string;
  valueEs: string;
  valueEn: string;
  width: string;
  barClass: string;
};

type ThemeKpi = {
  valueEs: string;
  valueEn: string;
  es: string;
  en: string;
};

type ImageText = {
  es: string;
  en: string;
};

type ServiceImageIdeas = {
  main: ImageText;
  sideA: ImageText;
  sideB: ImageText;
};

type ServiceTheme = {
  badge: {
    es: string;
    en: string;
  };
  panel: {
    titleEs: string;
    titleEn: string;
    subtitleEs: string;
    subtitleEn: string;
  };
  lead: {
    es: string;
    en: string;
  };
  impactTitle: {
    es: string;
    en: string;
  };
  finalSubtitle: {
    es: string;
    en: string;
  };
  stackLabel: {
    es: string;
    en: string;
  };
  metrics: {
    a: ThemeMetric;
    b: ThemeMetric;
  };
  kpis: [ThemeKpi, ThemeKpi, ThemeKpi];
  focusIcons: [LucideIcon, LucideIcon, LucideIcon];
  palette: {
    heroGlowClass: string;
    badgeClass: string;
    chipClass: string;
    focusIconWrapClass: string;
    ctaClass: string;
    checkClass: string;
    stepClass: string;
    panelDark: boolean;
  };
  swapHero?: boolean;
};

const serviceThemes: Record<string, ServiceTheme> = {
  Code: {
    badge: {
      es: 'DESARROLLO DE SOFTWARE',
      en: 'SOFTWARE ENGINEERING',
    },
    panel: {
      titleEs: 'Entrega continua de valor',
      titleEn: 'Continuous value delivery',
      subtitleEs: 'Producto estable, escalable y listo para crecer',
      subtitleEn: 'Stable, scalable product ready to grow',
    },
    lead: {
      es: 'Diseñamos software a medida para acelerar ventas, optimizar procesos y reducir fricción operativa desde el primer sprint.',
      en: 'We build custom software to accelerate sales, optimize operations, and remove friction from day one.',
    },
    impactTitle: {
      es: 'Impacto directo en su operación digital',
      en: 'Direct impact on your digital operation',
    },
    finalSubtitle: {
      es: 'Le entregamos una propuesta técnica y comercial con fases, hitos y costos claros para iniciar rápido.',
      en: 'We deliver a technical and commercial proposal with clear phases, milestones, and costs to start fast.',
    },
    stackLabel: {
      es: 'Herramientas que usamos',
      en: 'Tools we use',
    },
    metrics: {
      a: {
        es: 'Velocidad de entrega',
        en: 'Delivery speed',
        valueEs: 'Cada 2 semanas',
        valueEn: 'Every 2 weeks',
        width: 'w-[90%]',
        barClass: 'from-sky-400 to-blue-500',
      },
      b: {
        es: 'Calidad en despliegues',
        en: 'Deployment quality',
        valueEs: 'Revisión completa',
        valueEn: 'Fully reviewed',
        width: 'w-[94%]',
        barClass: 'from-cyan-400 to-indigo-500',
      },
    },
    kpis: [
      { valueEs: '4 a 8 semanas', valueEn: '4 to 8 weeks', es: 'Primera versión funcional', en: 'First working version' },
      { valueEs: 'Entrega continua', valueEn: 'Continuous delivery', es: 'Publicaciones frecuentes', en: 'Frequent releases' },
      { valueEs: 'Acompañamiento diario', valueEn: 'Daily support', es: 'Soporte después del lanzamiento', en: 'Post-launch support' },
    ],
    focusIcons: [Activity, BarChart3, Radar],
    palette: {
      heroGlowClass:
        'bg-[radial-gradient(circle_at_14%_0%,rgba(14,165,233,0.2),transparent_34%),radial-gradient(circle_at_86%_10%,rgba(59,130,246,0.16),transparent_36%)]',
      badgeClass: 'border-sky-400/45 bg-sky-500/10 text-sky-700 dark:text-sky-300',
      chipClass: 'border-sky-200 bg-sky-50 text-sky-800 dark:border-sky-800 dark:bg-sky-900/25 dark:text-sky-200',
      focusIconWrapClass: 'bg-sky-100 text-sky-700 dark:bg-sky-900/35 dark:text-sky-300',
      ctaClass: 'bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-600',
      checkClass: 'text-sky-500',
      stepClass: 'border-sky-200 bg-sky-50 text-sky-700 dark:border-sky-800 dark:bg-sky-900/25 dark:text-sky-300',
      panelDark: true,
    },
  },
  Shield: {
    badge: {
      es: 'CIBERSEGURIDAD EMPRESARIAL',
      en: 'ENTERPRISE CYBERSECURITY',
    },
    panel: {
      titleEs: 'Postura de seguridad activa',
      titleEn: 'Active security posture',
      subtitleEs: 'Protección continua contra amenazas reales',
      subtitleEn: 'Continuous protection against real threats',
    },
    lead: {
      es: 'Blindamos su negocio con capas de protección, monitoreo continuo y respuesta inmediata ante incidentes críticos.',
      en: 'We protect your business with layered defense, continuous monitoring, and fast incident response.',
    },
    impactTitle: {
      es: 'Resultados que reducen el riesgo empresarial',
      en: 'Outcomes that reduce business risk',
    },
    finalSubtitle: {
      es: 'Le mostramos un plan de protección con acciones priorizadas para reducir exposición y reforzar cumplimiento.',
      en: 'We provide a protection roadmap with prioritized actions to reduce exposure and strengthen compliance.',
    },
    stackLabel: {
      es: 'Herramientas y controles',
      en: 'Tools and controls',
    },
    metrics: {
      a: {
        es: 'Cobertura de amenazas',
        en: 'Threat coverage',
        valueEs: 'Todo el día',
        valueEn: 'All day',
        width: 'w-[91%]',
        barClass: 'from-rose-400 to-red-500',
      },
      b: {
        es: 'Tiempo de respuesta',
        en: 'Response time',
        valueEs: 'Menos de 30 min',
        valueEn: 'Under 30 min',
        width: 'w-[86%]',
        barClass: 'from-orange-400 to-rose-500',
      },
    },
    kpis: [
      { valueEs: 'Vigilancia continua', valueEn: 'Continuous watch', es: 'Monitoreo permanente', en: 'Permanent monitoring' },
      { valueEs: 'Riesgo reducido', valueEn: 'Lower risk', es: 'Menos exposición a ataques', en: 'Less attack exposure' },
      { valueEs: 'Cumplimiento claro', valueEn: 'Clear compliance', es: 'Alineado a buenas prácticas', en: 'Aligned with best practices' },
    ],
    focusIcons: [Shield, Activity, Radar],
    palette: {
      heroGlowClass:
        'bg-[radial-gradient(circle_at_16%_0%,rgba(244,63,94,0.18),transparent_34%),radial-gradient(circle_at_84%_12%,rgba(251,146,60,0.14),transparent_36%)]',
      badgeClass: 'border-rose-400/45 bg-rose-500/10 text-rose-700 dark:text-rose-300',
      chipClass: 'border-rose-200 bg-rose-50 text-rose-800 dark:border-rose-800 dark:bg-rose-900/25 dark:text-rose-200',
      focusIconWrapClass: 'bg-rose-100 text-rose-700 dark:bg-rose-900/35 dark:text-rose-300',
      ctaClass: 'bg-gradient-to-r from-rose-500 via-red-500 to-orange-500',
      checkClass: 'text-rose-500',
      stepClass: 'border-rose-200 bg-rose-50 text-rose-700 dark:border-rose-800 dark:bg-rose-900/25 dark:text-rose-300',
      panelDark: true,
    },
  },
  Network: {
    badge: {
      es: 'INFRAESTRUCTURA DE RED',
      en: 'NETWORK INFRASTRUCTURE',
    },
    panel: {
      titleEs: 'Conectividad de alto desempeño',
      titleEn: 'High-performance connectivity',
      subtitleEs: 'Red estable para operación y crecimiento',
      subtitleEn: 'Reliable network for operations and growth',
    },
    lead: {
      es: 'Diseñamos redes robustas y seguras para que sus equipos trabajen sin interrupciones, con baja latencia y máxima disponibilidad.',
      en: 'We design robust and secure networks so your teams can operate without interruption, with low latency and high availability.',
    },
    impactTitle: {
      es: 'Conectividad que impulsa productividad',
      en: 'Connectivity that drives productivity',
    },
    finalSubtitle: {
      es: 'Reciba una propuesta de red con arquitectura, seguridad, escalabilidad y plan de implementación.',
      en: 'Get a network proposal with architecture, security, scalability, and implementation plan.',
    },
    stackLabel: {
      es: 'Herramientas de conectividad',
      en: 'Connectivity tools',
    },
    metrics: {
      a: {
        es: 'Disponibilidad de red',
        en: 'Network uptime',
        valueEs: '99.9%',
        valueEn: '99.9%',
        width: 'w-[95%]',
        barClass: 'from-cyan-400 to-teal-500',
      },
      b: {
        es: 'Latencia optimizada',
        en: 'Latency optimized',
        valueEs: 'Menos de 1 segundo',
        valueEn: 'Under 1 second',
        width: 'w-[89%]',
        barClass: 'from-teal-400 to-emerald-500',
      },
    },
    kpis: [
      { valueEs: 'Rutas inteligentes', valueEn: 'Smart routes', es: 'Conexión optimizada', en: 'Optimized connection' },
      { valueEs: 'Supervisión constante', valueEn: 'Constant supervision', es: 'Atención continua', en: 'Continuous care' },
      { valueEs: 'Servicio estable', valueEn: 'Stable service', es: 'Compromiso de desempeño', en: 'Performance commitment' },
    ],
    focusIcons: [Network, Activity, BarChart3],
    palette: {
      heroGlowClass:
        'bg-[radial-gradient(circle_at_12%_0%,rgba(20,184,166,0.2),transparent_34%),radial-gradient(circle_at_88%_12%,rgba(34,211,238,0.14),transparent_36%)]',
      badgeClass: 'border-teal-400/45 bg-teal-500/10 text-teal-700 dark:text-teal-300',
      chipClass: 'border-teal-200 bg-teal-50 text-teal-800 dark:border-teal-800 dark:bg-teal-900/25 dark:text-teal-200',
      focusIconWrapClass: 'bg-teal-100 text-teal-700 dark:bg-teal-900/35 dark:text-teal-300',
      ctaClass: 'bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500',
      checkClass: 'text-teal-500',
      stepClass: 'border-teal-200 bg-teal-50 text-teal-700 dark:border-teal-800 dark:bg-teal-900/25 dark:text-teal-300',
      panelDark: false,
    },
    swapHero: true,
  },
  Lock: {
    badge: {
      es: 'CUMPLIMIENTO ISO 27001',
      en: 'ISO 27001 COMPLIANCE',
    },
    panel: {
      titleEs: 'Gobernanza y cumplimiento',
      titleEn: 'Governance and compliance',
      subtitleEs: 'Confianza para clientes y auditorías',
      subtitleEn: 'Trust for clients and audits',
    },
    lead: {
      es: 'Convertimos requisitos ISO 27001 en procesos claros y auditables para proteger información y fortalecer su reputación.',
      en: 'We turn ISO 27001 requirements into clear and auditable processes that protect information and strengthen reputation.',
    },
    impactTitle: {
      es: 'Cumplimiento que abre nuevas oportunidades',
      en: 'Compliance that unlocks new opportunities',
    },
    finalSubtitle: {
      es: 'Definimos su hoja de ruta de certificación con brechas, plan de trabajo y evidencias de control.',
      en: 'We define your certification roadmap with gap analysis, execution plan, and control evidence.',
    },
    stackLabel: {
      es: 'Guías y controles',
      en: 'Guidelines and controls',
    },
    metrics: {
      a: {
        es: 'Madurez de controles',
        en: 'Control maturity',
        valueEs: 'Plan de 3 meses',
        valueEn: '3-month plan',
        width: 'w-[84%]',
        barClass: 'from-emerald-400 to-lime-500',
      },
      b: {
        es: 'Preparación de auditoría',
        en: 'Audit readiness',
        valueEs: 'Listo para revisión',
        valueEn: 'Ready for review',
        width: 'w-[90%]',
        barClass: 'from-lime-400 to-green-500',
      },
    },
    kpis: [
      { valueEs: 'Gestión ordenada', valueEn: 'Organized management', es: 'Sistema de seguridad documentado', en: 'Documented security system' },
      { valueEs: 'Evidencia clara', valueEn: 'Clear evidence', es: 'Registro completo de controles', en: 'Complete control records' },
      { valueEs: 'Más confianza', valueEn: 'More trust', es: 'Mejor imagen ante clientes', en: 'Better client trust' },
    ],
    focusIcons: [Lock, CheckCircle2, Radar],
    palette: {
      heroGlowClass:
        'bg-[radial-gradient(circle_at_16%_0%,rgba(34,197,94,0.2),transparent_34%),radial-gradient(circle_at_84%_10%,rgba(132,204,22,0.14),transparent_36%)]',
      badgeClass: 'border-emerald-400/45 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300',
      chipClass: 'border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-800 dark:bg-emerald-900/25 dark:text-emerald-200',
      focusIconWrapClass: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/35 dark:text-emerald-300',
      ctaClass: 'bg-gradient-to-r from-emerald-500 via-green-500 to-lime-500',
      checkClass: 'text-emerald-500',
      stepClass: 'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-900/25 dark:text-emerald-300',
      panelDark: false,
    },
  },
  Layers: {
    badge: {
      es: 'PROTECCION DE DATOS',
      en: 'DATA PROTECTION',
    },
    panel: {
      titleEs: 'Respaldo y recuperación',
      titleEn: 'Backup and recovery',
      subtitleEs: 'Datos disponibles incluso ante ataques',
      subtitleEn: 'Data available even during attacks',
    },
    lead: {
      es: 'Aseguramos su información crítica con respaldos inmutables y planes de recuperación rápida para eliminar riesgo operativo.',
      en: 'We secure critical information with immutable backups and fast recovery plans to eliminate operational risk.',
    },
    impactTitle: {
      es: 'Continuidad de negocio basada en datos seguros',
      en: 'Business continuity through protected data',
    },
    finalSubtitle: {
      es: 'Le proponemos una estrategia de respaldos con políticas, retención y pruebas de restauración programadas.',
      en: 'We provide a backup strategy with policies, retention rules, and scheduled restore tests.',
    },
    stackLabel: {
      es: 'Herramientas de respaldo',
      en: 'Backup tools',
    },
    metrics: {
      a: {
        es: 'Resiliencia de respaldos',
        en: 'Backup resilience',
        valueEs: '3 copias seguras',
        valueEn: '3 secure copies',
        width: 'w-[92%]',
        barClass: 'from-amber-400 to-orange-500',
      },
      b: {
        es: 'Tiempo de recuperación',
        en: 'Recovery time',
        valueEs: 'Recuperación en horas',
        valueEn: 'Recovery within hours',
        width: 'w-[87%]',
        barClass: 'from-orange-400 to-yellow-500',
      },
    },
    kpis: [
      { valueEs: 'Tres copias', valueEn: 'Three copies', es: 'Estrategia de respaldo recomendada', en: 'Recommended backup strategy' },
      { valueEs: 'Datos protegidos', valueEn: 'Protected data', es: 'Riesgo mínimo de pérdida', en: 'Minimal data loss risk' },
      { valueEs: 'Regreso rápido', valueEn: 'Quick return', es: 'Operación recuperada con rapidez', en: 'Operations restored quickly' },
    ],
    focusIcons: [Layers, Activity, CheckCircle2],
    palette: {
      heroGlowClass:
        'bg-[radial-gradient(circle_at_14%_0%,rgba(251,146,60,0.2),transparent_34%),radial-gradient(circle_at_84%_10%,rgba(250,204,21,0.16),transparent_36%)]',
      badgeClass: 'border-orange-400/45 bg-orange-500/10 text-orange-700 dark:text-orange-300',
      chipClass: 'border-orange-200 bg-orange-50 text-orange-800 dark:border-orange-800 dark:bg-orange-900/25 dark:text-orange-200',
      focusIconWrapClass: 'bg-orange-100 text-orange-700 dark:bg-orange-900/35 dark:text-orange-300',
      ctaClass: 'bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500',
      checkClass: 'text-orange-500',
      stepClass: 'border-orange-200 bg-orange-50 text-orange-700 dark:border-orange-800 dark:bg-orange-900/25 dark:text-orange-300',
      panelDark: true,
    },
  },
  Server: {
    badge: {
      es: 'LICENCIAMIENTO Y CONTROL',
      en: 'LICENSING AND CONTROL',
    },
    panel: {
      titleEs: 'Optimización de costos',
      titleEn: 'Cost optimization',
      subtitleEs: 'Cumplimiento legal con presupuesto eficiente',
      subtitleEn: 'Legal compliance with efficient budget',
    },
    lead: {
      es: 'Gestionamos su licenciamiento para evitar sanciones, reducir sobrecostos y mejorar el retorno de su inversión en software.',
      en: 'We manage licensing to prevent penalties, reduce overspending, and improve ROI on software investments.',
    },
    impactTitle: {
      es: 'Ahorro y cumplimiento en una sola estrategia',
      en: 'Savings and compliance in one strategy',
    },
    finalSubtitle: {
      es: 'Analizamos su parque de licencias y entregamos un plan claro de optimización y gobernanza.',
      en: 'We assess your license estate and deliver a clear optimization and governance plan.',
    },
    stackLabel: {
      es: 'Herramientas y proveedores',
      en: 'Tools and vendors',
    },
    metrics: {
      a: {
        es: 'Reducción de gasto',
        en: 'Cost reduction',
        valueEs: 'Ahorro de 10-30%',
        valueEn: 'Savings of 10-30%',
        width: 'w-[88%]',
        barClass: 'from-indigo-400 to-blue-500',
      },
      b: {
        es: 'Nivel de cumplimiento',
        en: 'Compliance level',
        valueEs: 'Listo para revisión',
        valueEn: 'Ready for review',
        width: 'w-[93%]',
        barClass: 'from-blue-400 to-cyan-500',
      },
    },
    kpis: [
      { valueEs: 'Inventario claro', valueEn: 'Clear inventory', es: 'Control del software adquirido', en: 'Purchased software control' },
      { valueEs: 'Sin sorpresas', valueEn: 'No surprises', es: 'Preparado para revisión externa', en: 'Ready for external review' },
      { valueEs: 'Gasto optimizado', valueEn: 'Optimized spending', es: 'Uso eficiente del presupuesto', en: 'Efficient budget use' },
    ],
    focusIcons: [Server, BarChart3, CheckCircle2],
    palette: {
      heroGlowClass:
        'bg-[radial-gradient(circle_at_12%_0%,rgba(99,102,241,0.2),transparent_34%),radial-gradient(circle_at_88%_10%,rgba(59,130,246,0.14),transparent_36%)]',
      badgeClass: 'border-indigo-400/45 bg-indigo-500/10 text-indigo-700 dark:text-indigo-300',
      chipClass: 'border-indigo-200 bg-indigo-50 text-indigo-800 dark:border-indigo-800 dark:bg-indigo-900/25 dark:text-indigo-200',
      focusIconWrapClass: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/35 dark:text-indigo-300',
      ctaClass: 'bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500',
      checkClass: 'text-indigo-500',
      stepClass: 'border-indigo-200 bg-indigo-50 text-indigo-700 dark:border-indigo-800 dark:bg-indigo-900/25 dark:text-indigo-300',
      panelDark: false,
    },
    swapHero: true,
  },
  Zap: {
    badge: {
      es: 'CONTINUIDAD CRÍTICA',
      en: 'CRITICAL CONTINUITY',
    },
    panel: {
      titleEs: 'Recuperación ante desastres',
      titleEn: 'Disaster recovery readiness',
      subtitleEs: 'Operación disponible incluso en emergencias',
      subtitleEn: 'Operations available even in emergencies',
    },
    lead: {
      es: 'Preparamos su empresa para responder a fallas graves con mínima interrupción y sin perder información crítica.',
      en: 'We prepare your business to recover from critical failures with minimal interruption and no critical data loss.',
    },
    impactTitle: {
      es: 'Resiliencia real para escenarios extremos',
      en: 'Real resilience for extreme scenarios',
    },
    finalSubtitle: {
      es: 'Construimos su plan de recuperación con objetivos claros y simulacros para garantizar continuidad.',
      en: 'We build your recovery plan with clear goals and regular drills to ensure continuity.',
    },
    stackLabel: {
      es: 'Herramientas de recuperación',
      en: 'Recovery tools',
    },
    metrics: {
      a: {
        es: 'Tiempo de recuperación',
        en: 'Recovery time',
        valueEs: 'Menos de 30 min',
        valueEn: 'Under 30 min',
        width: 'w-[90%]',
        barClass: 'from-red-400 to-orange-500',
      },
      b: {
        es: 'Pérdida de datos',
        en: 'Data loss',
        valueEs: 'Menos de 15 min',
        valueEn: 'Under 15 min',
        width: 'w-[92%]',
        barClass: 'from-orange-400 to-amber-500',
      },
    },
    kpis: [
      { valueEs: 'Recuperación rápida', valueEn: 'Fast recovery', es: 'Retorno rápido del servicio', en: 'Fast service return' },
      { valueEs: 'Datos a salvo', valueEn: 'Data kept safe', es: 'Pérdida mínima de información', en: 'Minimal data loss' },
      { valueEs: 'Plan probado', valueEn: 'Tested plan', es: 'Simulacros periódicos', en: 'Regular drills' },
    ],
    focusIcons: [Zap, Activity, Radar],
    palette: {
      heroGlowClass:
        'bg-[radial-gradient(circle_at_12%_0%,rgba(248,113,113,0.2),transparent_34%),radial-gradient(circle_at_88%_12%,rgba(251,146,60,0.16),transparent_36%)]',
      badgeClass: 'border-red-400/45 bg-red-500/10 text-red-700 dark:text-red-300',
      chipClass: 'border-red-200 bg-red-50 text-red-800 dark:border-red-800 dark:bg-red-900/25 dark:text-red-200',
      focusIconWrapClass: 'bg-red-100 text-red-700 dark:bg-red-900/35 dark:text-red-300',
      ctaClass: 'bg-gradient-to-r from-red-500 via-orange-500 to-amber-500',
      checkClass: 'text-red-500',
      stepClass: 'border-red-200 bg-red-50 text-red-700 dark:border-red-800 dark:bg-red-900/25 dark:text-red-300',
      panelDark: true,
    },
  },
  HardDrive: {
    badge: {
      es: 'DATA CENTER E INFRAESTRUCTURA',
      en: 'DATA CENTER INFRASTRUCTURE',
    },
    panel: {
      titleEs: 'Ingeniería física optimizada',
      titleEn: 'Optimized physical engineering',
      subtitleEs: 'Orden, energía y enfriamiento para escalar',
      subtitleEn: 'Order, power, and cooling ready to scale',
    },
    lead: {
      es: 'Organizamos su infraestructura física para mejorar eficiencia energética, mantenimiento y capacidad de crecimiento.',
      en: 'We organize your physical infrastructure to improve energy efficiency, maintenance, and scalability.',
    },
    impactTitle: {
      es: 'Infraestructura física lista para alta demanda',
      en: 'Physical infrastructure ready for high demand',
    },
    finalSubtitle: {
      es: 'Diseñamos una hoja de ruta de data center con estandarización, seguridad física y orden operativo.',
      en: 'We design a data center roadmap with standardization, physical security, and operational order.',
    },
    stackLabel: {
      es: 'Elementos de infraestructura física',
      en: 'Physical infrastructure elements',
    },
    metrics: {
      a: {
        es: 'Eficiencia del espacio',
        en: 'Space efficiency',
        valueEs: 'Espacio mejor aprovechado',
        valueEn: 'Better use of space',
        width: 'w-[89%]',
        barClass: 'from-cyan-400 to-sky-500',
      },
      b: {
        es: 'Confiabilidad eléctrica',
        en: 'Power reliability',
        valueEs: 'Respaldo eléctrico',
        valueEn: 'Power backup',
        width: 'w-[94%]',
        barClass: 'from-sky-400 to-blue-500',
      },
    },
    kpis: [
      { valueEs: 'Operación estable', valueEn: 'Stable operation', es: 'Funcionamiento continuo', en: 'Continuous operation' },
      { valueEs: 'Menor consumo', valueEn: 'Lower consumption', es: 'Mejor eficiencia energética', en: 'Better energy efficiency' },
      { valueEs: 'Crecimiento ordenado', valueEn: 'Structured growth', es: 'Infraestructura preparada para expandirse', en: 'Infrastructure ready to expand' },
    ],
    focusIcons: [HardDrive, Activity, Network],
    palette: {
      heroGlowClass:
        'bg-[radial-gradient(circle_at_14%_0%,rgba(6,182,212,0.18),transparent_34%),radial-gradient(circle_at_86%_10%,rgba(56,189,248,0.14),transparent_36%)]',
      badgeClass: 'border-cyan-400/45 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300',
      chipClass: 'border-cyan-200 bg-cyan-50 text-cyan-800 dark:border-cyan-800 dark:bg-cyan-900/25 dark:text-cyan-200',
      focusIconWrapClass: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/35 dark:text-cyan-300',
      ctaClass: 'bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500',
      checkClass: 'text-cyan-500',
      stepClass: 'border-cyan-200 bg-cyan-50 text-cyan-700 dark:border-cyan-800 dark:bg-cyan-900/25 dark:text-cyan-300',
      panelDark: false,
    },
    swapHero: true,
  },
};

const fallbackTheme = serviceThemes.Code;
const serviceIncludes: Record<string, { es: string[]; en: string[] }> = {
  Code: {
    es: ['Paneles de avance del proyecto', 'Publicaciones frecuentes', 'Soporte continuo'],
    en: ['Project progress dashboards', 'Frequent releases', 'Ongoing support'],
  },
  Shield: {
    es: ['Vigilancia de riesgos', 'Alertas prioritarias', 'Plan de respuesta'],
    en: ['Risk monitoring', 'Prioritized alerts', 'Response plan'],
  },
  Network: {
    es: ['Conexión estable entre sedes', 'Control de caídas', 'Mejor experiencia de navegación'],
    en: ['Stable branch connectivity', 'Outage control', 'Better browsing experience'],
  },
  Lock: {
    es: ['Diagnóstico de brechas', 'Plan de cumplimiento', 'Evidencias para auditoría'],
    en: ['Gap assessment', 'Compliance roadmap', 'Audit evidence'],
  },
  Layers: {
    es: ['Copias automáticas', 'Protección ante borrados', 'Recuperación guiada'],
    en: ['Automatic backups', 'Protection against deletions', 'Guided recovery'],
  },
  Server: {
    es: ['Inventario de licencias', 'Control de gastos', 'Cumplimiento legal'],
    en: ['License inventory', 'Cost control', 'Legal compliance'],
  },
  Zap: {
    es: ['Plan de contingencia', 'Pruebas periódicas', 'Recuperación rápida'],
    en: ['Contingency plan', 'Regular drills', 'Fast recovery'],
  },
  HardDrive: {
    es: ['Orden de infraestructura', 'Mejor uso de energía', 'Capacidad para crecer'],
    en: ['Infrastructure order', 'Better energy use', 'Room to scale'],
  },
};

const serviceImageIdeas: Record<string, ServiceImageIdeas> = {
  Code: {
    main: {
      es: 'Equipo creando una aplicación empresarial en una pantalla moderna.',
      en: 'Team building a business application on a modern screen.',
    },
    sideA: {
      es: 'Vista de interfaz limpia de una app web en producción.',
      en: 'Clean interface view of a production web app.',
    },
    sideB: {
      es: 'Reunión de planificación de producto con clientes.',
      en: 'Product planning meeting with clients.',
    },
  },
  Shield: {
    main: {
      es: 'Centro de seguridad monitoreando eventos en tiempo real.',
      en: 'Security center monitoring events in real time.',
    },
    sideA: {
      es: 'Especialista revisando alertas y bloqueando amenazas.',
      en: 'Specialist reviewing alerts and blocking threats.',
    },
    sideB: {
      es: 'Equipo aplicando políticas de protección de datos.',
      en: 'Team applying data protection policies.',
    },
  },
  Network: {
    main: {
      es: 'Infraestructura de red empresarial con cableado organizado.',
      en: 'Enterprise network infrastructure with organized cabling.',
    },
    sideA: {
      es: 'Ingeniero configurando conectividad entre sedes.',
      en: 'Engineer configuring branch-to-branch connectivity.',
    },
    sideB: {
      es: 'Tablero mostrando estabilidad y velocidad de la red.',
      en: 'Dashboard showing network stability and speed.',
    },
  },
  Lock: {
    main: {
      es: 'Auditoría de seguridad con documentación y controles visibles.',
      en: 'Security audit with visible documentation and controls.',
    },
    sideA: {
      es: 'Equipo validando políticas y evidencias de cumplimiento.',
      en: 'Team validating policies and compliance evidence.',
    },
    sideB: {
      es: 'Revisión ejecutiva de riesgos y mejoras de seguridad.',
      en: 'Executive review of risks and security improvements.',
    },
  },
  Layers: {
    main: {
      es: 'Sistema de respaldos con copias protegidas en la nube y local.',
      en: 'Backup system with protected cloud and local copies.',
    },
    sideA: {
      es: 'Proceso de recuperación de información en marcha.',
      en: 'Data recovery process in progress.',
    },
    sideB: {
      es: 'Panel de estado de copias y restauraciones.',
      en: 'Dashboard for backups and restore status.',
    },
  },
  Server: {
    main: {
      es: 'Gestión centralizada de licencias y costos de software.',
      en: 'Centralized software licensing and cost management.',
    },
    sideA: {
      es: 'Reporte de uso real frente a contratos adquiridos.',
      en: 'Real usage report versus purchased contracts.',
    },
    sideB: {
      es: 'Revisión de cumplimiento legal de plataformas.',
      en: 'Legal compliance review across platforms.',
    },
  },
  Zap: {
    main: {
      es: 'Plan de contingencia activado para mantener la operación.',
      en: 'Contingency plan activated to keep operations running.',
    },
    sideA: {
      es: 'Equipo ejecutando simulacro de recuperación.',
      en: 'Team running a recovery drill.',
    },
    sideB: {
      es: 'Servicios críticos restaurados en minutos.',
      en: 'Critical services restored in minutes.',
    },
  },
  HardDrive: {
    main: {
      es: 'Sala de servidores ordenada con infraestructura profesional.',
      en: 'Well-organized server room with professional infrastructure.',
    },
    sideA: {
      es: 'Diseño físico con flujo de aire y energía optimizados.',
      en: 'Physical design with optimized airflow and power.',
    },
    sideB: {
      es: 'Equipo técnico realizando mantenimiento preventivo.',
      en: 'Technical team performing preventive maintenance.',
    },
  },
};

interface ServiceDetailPageProps {
  title: string;
  description: string;
  iconName: string;
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
  checkColor,
  locale,
  labels,
}: ServiceDetailPageProps) {
  const { t } = useLanguage();
  const Icon = iconMap[iconName] || Code;
  const theme = serviceThemes[iconName] || fallbackTheme;
  const isEs = locale === 'es';

  const benefitList = benefits || [];
  const processSteps = process?.steps || [];

  const focusCards = items.slice(0, 3).map((item, index) => {
    const FocusIcon = theme.focusIcons[index] || Activity;
    return {
      title: item,
      desc: benefitList[index] || description,
      Icon: FocusIcon,
    };
  });

  const ui = {
    badge: isEs ? theme.badge.es : theme.badge.en,
    panelTitle: isEs ? theme.panel.titleEs : theme.panel.titleEn,
    panelSubtitle: isEs ? theme.panel.subtitleEs : theme.panel.subtitleEn,
    metricALabel: isEs ? theme.metrics.a.es : theme.metrics.a.en,
    metricBLabel: isEs ? theme.metrics.b.es : theme.metrics.b.en,
    stackLabel: isEs ? theme.stackLabel.es : theme.stackLabel.en,
    processLabel: labels.process || (isEs ? 'Nuestro proceso' : 'Our process'),
    capabilitiesLead: isEs ? theme.lead.es : theme.lead.en,
    impactTitle: isEs ? theme.impactTitle.es : theme.impactTitle.en,
    finalTitle: labels.getStarted || (isEs ? '¿Listo para comenzar?' : 'Ready to get started?'),
    finalSubtitle: isEs ? theme.finalSubtitle.es : theme.finalSubtitle.en,
    finalButton: isEs ? 'Quiero mi propuesta' : 'Request proposal',
    metricsNote: isEs
      ? 'Indicadores de referencia definidos en la fase de diagnóstico.'
      : 'Reference indicators defined during the discovery phase.',
  };

  const checkClass = checkColor || theme.palette.checkClass;
  const panelIsDark = theme.palette.panelDark;
  const includes = serviceIncludes[iconName] || serviceIncludes.Code;
  const stackItems = ((technologies && technologies.length > 0 ? technologies : isEs ? includes.es : includes.en) as string[]).slice(0, 10);
  const imageIdeas = serviceImageIdeas[iconName] || serviceImageIdeas.Code;

  const whatsAppHref = `https://wa.me/593992910848?text=${encodeURIComponent(
    isEs
      ? `Hola, me interesa el servicio de ${title}. Quiero una propuesta comercial.`
      : `Hi, I am interested in the ${title} service. I would like a commercial proposal.`
  )}`;

  return (
    <main className="min-h-screen bg-[#f4f8fc] text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Navigation />

      <section className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8 lg:pt-36">
        <div className={`pointer-events-none absolute inset-0 ${theme.palette.heroGlowClass}`} />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
          <div className={`lg:col-span-7 ${theme.swapHero ? 'lg:order-2' : ''}`}>
            <Link
              href={`/${locale}`}
              className="mb-6 inline-flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-300"
            >
              ← {labels.backToHome || (isEs ? 'Volver al inicio' : 'Back to home')}
            </Link>

            <div className={`mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider ${theme.palette.badgeClass}`}>
              <Sparkles className="h-3.5 w-3.5" />
              {ui.badge}
            </div>

            <h1 className="mb-5 text-4xl font-black leading-[0.94] tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
              {title}
            </h1>

            <p className="mb-4 max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
              {description}
            </p>

            {detailedDescription ? (
              <p className="mb-8 max-w-3xl text-sm leading-relaxed text-slate-500 dark:text-slate-400 sm:text-base">
                {detailedDescription}
              </p>
            ) : null}

            <div className="mb-8 flex flex-wrap items-center gap-3">
              <Button
                asChild
                size="lg"
                className="w-full justify-center bg-slate-900 text-sm font-semibold text-white hover:bg-slate-800 sm:w-auto sm:text-base dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
              >
                <a href="#contact">
                  {cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>

              <span className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/90 px-3 py-1.5 text-xs font-medium text-slate-600 sm:w-auto dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300">
                <span className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-white ${gradient}`}>
                  <Icon className="h-3.5 w-3.5" />
                </span>
                {ui.panelSubtitle}
              </span>
            </div>

            <p className="max-w-3xl text-sm leading-relaxed text-slate-500 dark:text-slate-400">{ui.capabilitiesLead}</p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {theme.kpis.map((kpi) => (
                <div
                  key={`${kpi.valueEs}-${kpi.es}`}
                  className={`rounded-2xl border px-4 py-3 ${theme.palette.chipClass}`}
                >
                  <p className="text-base font-black">{isEs ? kpi.valueEs : kpi.valueEn}</p>
                  <p className="text-xs">{isEs ? kpi.es : kpi.en}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`lg:col-span-5 ${theme.swapHero ? 'lg:order-1' : ''}`}>
            <div
              className={`rounded-[1.8rem] border p-6 shadow-[0_35px_90px_-55px_rgba(15,23,42,0.95)] sm:p-7 ${
                panelIsDark
                  ? 'border-slate-800 bg-slate-950 text-slate-100'
                  : 'border-slate-200 bg-white/95 text-slate-900 dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-100'
              }`}
            >
              <div
                className={`mb-4 flex items-center gap-2 border-b pb-3 text-sm font-semibold ${
                  panelIsDark
                    ? 'border-slate-800 text-cyan-200'
                    : 'border-slate-200 text-slate-700 dark:border-slate-700 dark:text-slate-200'
                }`}
              >
                <Icon className="h-4 w-4" />
                {ui.panelTitle}
              </div>

              <p className={`mb-5 text-2xl font-black leading-tight ${panelIsDark ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                {ui.panelSubtitle}
              </p>

              <div className="space-y-4 text-sm">
                <div>
                  <div className={`mb-2 flex items-center justify-between ${panelIsDark ? 'text-slate-200' : 'text-slate-700 dark:text-slate-300'}`}>
                    <span>{ui.metricALabel}</span>
                    <span className={`font-semibold ${panelIsDark ? 'text-emerald-300' : 'text-slate-900 dark:text-white'}`}>
                      {isEs ? theme.metrics.a.valueEs : theme.metrics.a.valueEn}
                    </span>
                  </div>
                  <div className={`h-2 rounded-full ${panelIsDark ? 'bg-slate-700' : 'bg-slate-200 dark:bg-slate-700'}`}>
                    <div className={`h-full ${theme.metrics.a.width} rounded-full bg-gradient-to-r ${theme.metrics.a.barClass}`} />
                  </div>
                </div>

                <div>
                  <div className={`mb-2 flex items-center justify-between ${panelIsDark ? 'text-slate-200' : 'text-slate-700 dark:text-slate-300'}`}>
                    <span>{ui.metricBLabel}</span>
                    <span className={`font-semibold ${panelIsDark ? 'text-cyan-300' : 'text-slate-900 dark:text-white'}`}>
                      {isEs ? theme.metrics.b.valueEs : theme.metrics.b.valueEn}
                    </span>
                  </div>
                  <div className={`h-2 rounded-full ${panelIsDark ? 'bg-slate-700' : 'bg-slate-200 dark:bg-slate-700'}`}>
                    <div className={`h-full ${theme.metrics.b.width} rounded-full bg-gradient-to-r ${theme.metrics.b.barClass}`} />
                  </div>
                </div>
              </div>

              <p className={`mt-3 text-[11px] leading-relaxed ${panelIsDark ? 'text-slate-400' : 'text-slate-500 dark:text-slate-400'}`}>
                {ui.metricsNote}
              </p>

              <div className={`mt-5 border-t pt-4 ${panelIsDark ? 'border-slate-800' : 'border-slate-200 dark:border-slate-700'}`}>
                <p className={`text-[11px] font-semibold uppercase tracking-wider ${panelIsDark ? 'text-cyan-300/85' : 'text-slate-500 dark:text-slate-400'}`}>
                  {ui.stackLabel}
                </p>
                <p className={`mt-1 text-sm ${panelIsDark ? 'text-slate-300' : 'text-slate-600 dark:text-slate-300'}`}>
                  {stackItems.join(' • ')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-6 sm:px-6 sm:pb-10 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            <ImageIcon className="h-3.5 w-3.5" />
            {isEs ? 'Zona para imágenes del servicio' : 'Service image zone'}
          </div>

          <div className="grid gap-5 lg:grid-cols-12">
            <div
              data-image-slot="service-main-image"
              className="relative overflow-hidden rounded-[1.8rem] border border-dashed border-slate-300 bg-gradient-to-br from-white to-slate-100 p-7 dark:border-slate-700 dark:from-slate-900 dark:to-slate-950 lg:col-span-7"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-cyan-500/15 blur-2xl" />
              <div className="absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-emerald-500/15 blur-2xl" />
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {isEs ? 'Imagen principal sugerida' : 'Suggested main image'}
              </p>
              <p className="text-base font-semibold text-slate-800 dark:text-slate-100">{isEs ? imageIdeas.main.es : imageIdeas.main.en}</p>
              <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
                {isEs ? 'Aquí puede colocar una foto horizontal de alto impacto.' : 'Place a high-impact horizontal image here.'}
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
              <div
                data-image-slot="service-side-image-a"
                className="relative overflow-hidden rounded-3xl border border-dashed border-slate-300 bg-white p-6 dark:border-slate-700 dark:bg-slate-900"
              >
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {isEs ? 'Imagen secundaria 1' : 'Secondary image 1'}
                </p>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">{isEs ? imageIdeas.sideA.es : imageIdeas.sideA.en}</p>
              </div>

              <div
                data-image-slot="service-side-image-b"
                className="relative overflow-hidden rounded-3xl border border-dashed border-slate-300 bg-white p-6 dark:border-slate-700 dark:bg-slate-900"
              >
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {isEs ? 'Imagen secundaria 2' : 'Secondary image 2'}
                </p>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">{isEs ? imageIdeas.sideB.es : imageIdeas.sideB.en}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200/80 bg-white px-4 py-14 dark:border-slate-800 dark:bg-slate-900 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {labels.benefits || (isEs ? 'Capacidades clave' : 'Core capabilities')}
            </p>
            <h2 className="text-3xl font-black leading-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
              {ui.impactTitle}
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {focusCards.map(({ title: cardTitle, desc, Icon: FocusIcon }) => (
              <div
                key={cardTitle}
                className="rounded-3xl border border-slate-200 bg-white/92 p-5 shadow-lg shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900/85"
              >
                <div className={`mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full ${theme.palette.focusIconWrapClass}`}>
                  <FocusIcon className="h-4 w-4" />
                </div>
                <p className="mb-1 text-sm font-semibold text-slate-800 dark:text-slate-100">{cardTitle}</p>
                <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">{desc}</p>
              </div>
            ))}
          </div>

          {items.length > 3 ? (
            <div className="mt-8 overflow-hidden rounded-[1.6rem] border border-slate-200 dark:border-slate-800">
              {items.slice(3, 6).map((item, index) => (
                <div
                  key={item}
                  className="grid gap-3 border-b border-slate-200 bg-white px-5 py-4 dark:border-slate-800 dark:bg-slate-900 sm:grid-cols-[1.2fr_1fr] sm:gap-6 sm:px-6"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${checkClass}`} />
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-100 sm:text-base">{item}</p>
                  </div>
                  <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400 sm:text-sm">
                    {benefitList[index + 3] || benefitList[0] || description}
                  </p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      {process ? (
        <section className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl rounded-[1.8rem] border border-slate-200 bg-white p-7 shadow-lg shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900 sm:p-10">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-5">
                <h2 className="mb-5 text-3xl font-black leading-tight sm:text-4xl">{ui.processLabel}</h2>
                <div className="space-y-6">
                  {processSteps.map((step, index) => (
                    <div key={step} className="flex gap-4">
                      <span
                        className={`inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-semibold ${theme.palette.stepClass}`}
                      >
                        {index + 1}
                      </span>
                      <p className="pt-1 text-sm leading-relaxed text-slate-700 dark:text-slate-200 sm:text-base">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7">
                <h3 className="mb-5 text-2xl font-black text-slate-900 dark:text-white">{title}</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {benefitList.slice(0, 4).map((benefit) => (
                    <div key={benefit} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 dark:border-slate-800 dark:bg-slate-950/60">
                      <p className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-200">
                        <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${checkClass}`} />
                        <span>{benefit}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section id="contact" className="px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
        <div className={`mx-auto max-w-5xl rounded-[2rem] p-8 text-center text-white shadow-[0_30px_80px_-40px_rgba(13,148,136,0.9)] sm:p-10 lg:p-12 ${theme.palette.ctaClass}`}>
          <h2 className="mb-4 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {ui.finalTitle}
          </h2>
          <p className="mx-auto mb-7 max-w-2xl text-white/90">{ui.finalSubtitle}</p>

          <Button asChild size="lg" className="w-full bg-white font-semibold text-slate-900 hover:bg-slate-100 sm:w-auto">
            <a href={whatsAppHref}>
              {ui.finalButton}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      <Footer t={t} />
      <WhatsAppButton t={t} />
      <ScrollToTopButton />
    </main>
  );
}
