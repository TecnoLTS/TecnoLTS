'use client';

import ServiceDetailPage from '@/app/_components/ServiceDetailPage';
import { useLanguage } from '@/components/language-provider';

export default function DataCenterPage() {
  const { t } = useLanguage();
  const service = t.serviceDetails.dataCenter;
  
  return (
    <ServiceDetailPage
      title={service.title}
      description={service.description}
      detailedDescription={service.detailedDescription}
      iconName="HardDrive"
      gradient="bg-gradient-to-br from-teal-500 to-cyan-600"
      items={service.items}
      benefits={service.benefits}
      technologies={service.technologies}
      process={service.process}
      cta={service.cta}
      checkColor="text-teal-500"
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
