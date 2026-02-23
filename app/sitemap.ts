import type { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const lastModified = new Date();
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
  const defaultLanguagePath = '/';

  const rootEntry: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          es: `${siteUrl}/`,
          'es-EC': `${siteUrl}/`,
          'es-419': `${siteUrl}/`,
          en: `${siteUrl}/en`,
          'en-US': `${siteUrl}/en`,
          'x-default': `${siteUrl}${defaultLanguagePath}`,
        },
      },
    },
  ];

  const homeEntries: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/en`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          es: `${siteUrl}/`,
          'es-EC': `${siteUrl}/`,
          'es-419': `${siteUrl}/`,
          en: `${siteUrl}/en`,
          'en-US': `${siteUrl}/en`,
          'x-default': `${siteUrl}${defaultLanguagePath}`,
        },
      },
    },
  ];

  const servicesIndexEntries: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/services`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
      alternates: {
        languages: {
          es: `${siteUrl}/services`,
          'es-EC': `${siteUrl}/services`,
          'es-419': `${siteUrl}/services`,
          en: `${siteUrl}/en/services`,
          'en-US': `${siteUrl}/en/services`,
          'x-default': `${siteUrl}/services`,
        },
      },
    },
    {
      url: `${siteUrl}/en/services`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
      alternates: {
        languages: {
          es: `${siteUrl}/services`,
          'es-EC': `${siteUrl}/services`,
          'es-419': `${siteUrl}/services`,
          en: `${siteUrl}/en/services`,
          'en-US': `${siteUrl}/en/services`,
          'x-default': `${siteUrl}/services`,
        },
      },
    },
  ];

  const serviceEntries: MetadataRoute.Sitemap = services.flatMap((service) => [
    {
      url: `${siteUrl}/services/${service}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: {
          es: `${siteUrl}/services/${service}`,
          'es-EC': `${siteUrl}/services/${service}`,
          'es-419': `${siteUrl}/services/${service}`,
          en: `${siteUrl}/en/services/${service}`,
          'en-US': `${siteUrl}/en/services/${service}`,
          'x-default': `${siteUrl}/services/${service}`,
        },
      },
    },
    {
      url: `${siteUrl}/en/services/${service}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: {
          es: `${siteUrl}/services/${service}`,
          'es-EC': `${siteUrl}/services/${service}`,
          'es-419': `${siteUrl}/services/${service}`,
          en: `${siteUrl}/en/services/${service}`,
          'en-US': `${siteUrl}/en/services/${service}`,
          'x-default': `${siteUrl}/services/${service}`,
        },
      },
    },
  ]);

  return [...rootEntry, ...homeEntries, ...servicesIndexEntries, ...serviceEntries];
}
