import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const lastModified = new Date();
  const languages = ['en', 'es'];
  const services = [
    'software',
    'monitoring',
    'cybersecurity',
    'network',
    'iso-27001',
    'backups',
    'licensing',
    'disaster-recovery',
    'datacenter',
  ];

  const homeEntries: MetadataRoute.Sitemap = languages.map((lang) => ({
    url: `${siteUrl}/${lang}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 1,
  }));

  const serviceEntries: MetadataRoute.Sitemap = languages.flatMap((lang) =>
    services.map((service) => ({
      url: `${siteUrl}/${lang}/services/${service}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    }))
  );

  return [...homeEntries, ...serviceEntries];
}
