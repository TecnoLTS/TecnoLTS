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
      locale="en"
      labels={{
        benefits: "Core Capabilities",
        technologies: "Technologies and Tools",
        process: "Our Process",
        getStarted: "Ready to get started?",
        backToHome: "Back to Home"
      }}
    />
  );
}
