'use client';

import ServiceDetailPage from '@/app/_components/ServiceDetailPage';
import { useLanguage } from '@/components/language-provider';

export default function SoftwarePage() {
  const { t } = useLanguage();
  const service = t.serviceDetails.software;
  
  return (
    <ServiceDetailPage
      title={service.title}
      description={service.description}
      detailedDescription={service.detailedDescription}
      iconName="Code"
      gradient="bg-gradient-to-br from-blue-500 to-blue-700"
      items={service.items}
      benefits={service.benefits}
      technologies={service.technologies}
      process={service.process}
      cta={service.cta}
      checkColor="text-blue-500"
      locale="en"
      labels={{
        benefits: "Core Capabilities",
        technologies: "Technologies and Tools",
        process: "Our Process",
        getStarted: "Ready to start your project?",
        backToHome: "Back to Home"
      }}
    />
  );
}
