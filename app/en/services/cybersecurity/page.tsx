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
      locale="en"
      labels={{
        benefits: "Core Capabilities",
        technologies: "Technologies and Tools",
        process: "Our Process",
        getStarted: "Ready to protect your organization?",
        backToHome: "Back to Home"
      }}
    />
  );
}
