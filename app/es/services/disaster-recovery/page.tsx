'use client';

import ServiceDetailPage from '@/app/_components/ServiceDetailPage';
import { useLanguage } from '@/components/language-provider';

export default function DisasterRecoveryPage() {
  const { t } = useLanguage();
  const service = t.serviceDetails.disasterRecovery;
  
  return (
    <ServiceDetailPage
      title={service.title}
      description={service.description}
      detailedDescription={service.detailedDescription}
      iconName="Zap"
      gradient="bg-gradient-to-br from-rose-500 to-pink-600"
      items={service.items}
      benefits={service.benefits}
      technologies={service.technologies}
      process={service.process}
      cta={service.cta}
      checkColor="text-rose-500"
      locale="es"
      labels={{
        benefits: "Capacidades Clave",
        technologies: "Tecnologías y Herramientas",
        process: "Nuestro Proceso",
        getStarted: "¿Listo para comenzar?",
        backToHome: "Volver al Inicio"
      }}
    />
  );
}
