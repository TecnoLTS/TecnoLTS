'use client';

import ServiceDetailPage from '@/app/_components/ServiceDetailPage';
import { useLanguage } from '@/components/language-provider';

export default function LicensingPage() {
  const { t } = useLanguage();
  const service = t.serviceDetails.licensing;
  
  return (
    <ServiceDetailPage
      title={service.title}
      description={service.description}
      detailedDescription={service.detailedDescription}
      iconName="Server"
      gradient="bg-gradient-to-br from-indigo-500 to-purple-600"
      items={service.items}
      benefits={service.benefits}
      technologies={service.technologies}
      process={service.process}
      cta={service.cta}
      checkColor="text-indigo-500"
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
