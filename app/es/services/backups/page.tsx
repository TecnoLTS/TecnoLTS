'use client';

import ServiceDetailPage from '@/app/_components/ServiceDetailPage';
import { useLanguage } from '@/components/language-provider';

export default function BackupsPage() {
  const { t } = useLanguage();
  const service = t.serviceDetails.backups;
  
  return (
    <ServiceDetailPage
      title={service.title}
      description={service.description}
      detailedDescription={service.detailedDescription}
      iconName="Layers"
      gradient="bg-gradient-to-br from-orange-500 to-red-600"
      items={service.items}
      benefits={service.benefits}
      technologies={service.technologies}
      process={service.process}
      cta={service.cta}
      checkColor="text-orange-500"
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
