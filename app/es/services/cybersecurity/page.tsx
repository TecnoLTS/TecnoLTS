'use client';

import ServiceDetailPage from '@/app/_components/ServiceDetailPage';
import { useLanguage } from '@/components/language-provider';

export default function CybersecurityPage() {
  const { t } = useLanguage();
  const service = t.serviceDetails.cybersecurity;
  
  return (
    <ServiceDetailPage
      title={service.title}
      description={service.description}
      detailedDescription={service.detailedDescription}
      iconName="Shield"
      gradient="bg-gradient-to-br from-cyan-500 to-blue-600"
      items={service.items}
      benefits={service.benefits}
      technologies={service.technologies}
      process={service.process}
      cta={service.cta}
      checkColor="text-cyan-500"
      locale="es"
      labels={{
        benefits: "Capacidades Clave",
        technologies: "Tecnologías y Herramientas",
        process: "Nuestro Proceso",
        getStarted: "¿Listo para proteger tu organización?",
        backToHome: "Volver al Inicio"
      }}
    />
  );
}
