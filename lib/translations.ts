export const translations = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      contact: "Contact",
      getStarted: "Get Started"
    },
    hero: {
      title: "Enterprise IT Solutions for the Modern Business",
      description: "Transform your business with cutting-edge technology solutions. From custom software development to comprehensive security audits, we deliver excellence at every level.",
      ctaPrimary: "Start Your Project",
      ctaSecondary: "View Services"
    },
    services: {
      title: "Our Core Services",
      subtitle: "Comprehensive IT solutions tailored to your business needs",
      software: {
        title: "Software Development",
        description: "Custom applications built with cutting-edge technologies. Scalable, secure, and tailored to your needs.",
        items: [
          "Web & Mobile Apps",
          "Cloud-Native Architecture",
          "API Integration"
        ]
      },
      network: {
        title: "Network Solutions",
        description: "Enterprise infrastructure designed for reliability, performance, and security.",
        items: [
          "Network Design",
          "Security & Firewall",
          "24/7 Monitoring"
        ]
      },
      iso: {
        title: "ISO 27001 Audits",
        description: "Comprehensive security audits and compliance services for certification.",
        items: [
          "Gap Analysis",
          "Implementation Support",
          "Certification Prep"
        ]
      }
    },
    features: {
      title: "Why Choose TecnoLTS?",
      subtitle: "Industry-leading expertise backed by proven results",
      fastDelivery: {
        title: "Fast Delivery",
        description: "Agile methodology for rapid development and deployment cycles"
      },
      secure: {
        title: "Secure Solutions",
        description: "Enterprise-grade security standards for all our technology solutions"
      },
      expert: {
        title: "Expert Team",
        description: "Certified professionals with deep industry expertise and experience"
      },
      proven: {
        title: "Proven Results",
        description: "500+ successful projects delivered across multiple industries"
      }
    },
    cta: {
      title: "Ready to Transform Your Business?",
      description: "Let's discuss how our IT solutions can help you achieve your goals. Schedule a free consultation with our experts today.",
      button: "Schedule Consultation"
    },
    footer: {
      description: "Leading provider of enterprise IT solutions. We deliver innovation, security, and reliability in every project.",
      services: "Services",
      company: "Company",
      legal: "Legal",
      about: "About Us",
      careers: "Careers",
      blog: "Blog",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      contact: "Contact",
      rights: "All rights reserved."
    }
  },
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      about: "Nosotros",
      contact: "Contacto",
      getStarted: "Comenzar"
    },
    hero: {
      title: "Soluciones IT Empresariales para Negocios Modernos",
      description: "Transforma tu negocio con soluciones tecnológicas de vanguardia. Desde desarrollo de software personalizado hasta auditorías de seguridad integrales, brindamos excelencia en cada nivel.",
      ctaPrimary: "Iniciar Tu Proyecto",
      ctaSecondary: "Ver Servicios"
    },
    services: {
      title: "Nuestros Servicios Principales",
      subtitle: "Soluciones IT integrales adaptadas a las necesidades de tu negocio",
      software: {
        title: "Desarrollo de Software",
        description: "Aplicaciones personalizadas construidas con tecnologías de vanguardia. Escalables, seguras y adaptadas a tus necesidades.",
        items: [
          "Aplicaciones Web y Móviles",
          "Arquitectura Cloud-Native",
          "Integración de APIs"
        ]
      },
      network: {
        title: "Soluciones de Redes",
        description: "Infraestructura empresarial diseñada para confiabilidad, rendimiento y seguridad.",
        items: [
          "Diseño de Redes",
          "Seguridad y Firewall",
          "Monitoreo 24/7"
        ]
      },
      iso: {
        title: "Auditorías ISO 27001",
        description: "Auditorías de seguridad integrales y servicios de cumplimiento para certificación.",
        items: [
          "Análisis de Brechas",
          "Soporte de Implementación",
          "Preparación para Certificación"
        ]
      }
    },
    features: {
      title: "¿Por Qué Elegir TecnoLTS?",
      subtitle: "Experiencia líder en la industria respaldada por resultados comprobados",
      fastDelivery: {
        title: "Entrega Rápida",
        description: "Metodología ágil para ciclos rápidos de desarrollo e implementación"
      },
      secure: {
        title: "Soluciones Seguras",
        description: "Estándares de seguridad de nivel empresarial para todas nuestras soluciones tecnológicas"
      },
      expert: {
        title: "Equipo Experto",
        description: "Profesionales certificados con profunda experiencia y conocimiento de la industria"
      },
      proven: {
        title: "Resultados Comprobados",
        description: "Más de 500 proyectos exitosos entregados en múltiples industrias"
      }
    },
    cta: {
      title: "¿Listo para Transformar Tu Negocio?",
      description: "Hablemos sobre cómo nuestras soluciones IT pueden ayudarte a alcanzar tus objetivos. Agenda una consulta gratuita con nuestros expertos hoy.",
      button: "Agendar Consulta"
    },
    footer: {
      description: "Proveedor líder de soluciones IT empresariales. Entregamos innovación, seguridad y confiabilidad en cada proyecto.",
      services: "Servicios",
      company: "Empresa",
      legal: "Legal",
      about: "Nosotros",
      careers: "Carreras",
      blog: "Blog",
      privacy: "Política de Privacidad",
      terms: "Términos de Servicio",
      contact: "Contacto",
      rights: "Todos los derechos reservados."
    }
  }
} as const;

export type Language = keyof typeof translations;
