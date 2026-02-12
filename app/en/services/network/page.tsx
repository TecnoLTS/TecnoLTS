'use client';

import ServiceDetailPage from '@/app/_components/ServiceDetailPage';
import { useLanguage } from '@/components/language-provider';

export default function NetworkPage() {
  const { t } = useLanguage();
  const service = t.serviceDetails.network;
  
  return (
    <ServiceDetailPage
      title={service.title}
      description={service.description}
      detailedDescription={service.detailedDescription}
      iconName="Network"
      gradient="bg-gradient-to-br from-purple-500 to-indigo-600"
      items={service.items}
      benefits={service.benefits}
      technologies={service.technologies}
      process={service.process}
      cta={service.cta}
      checkColor="text-purple-500"
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
