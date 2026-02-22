import type { MetadataRoute } from 'next';
import { locales } from '@/lib/i18n';
import { getSiteUrl } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const lastModified = new Date();
  const languages = locales;
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
  const defaultLanguagePath = '/es';

  const rootEntry: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          es: `${siteUrl}/es`,
          'es-EC': `${siteUrl}/es`,
          'es-419': `${siteUrl}/es`,
          en: `${siteUrl}/en`,
          'en-US': `${siteUrl}/en`,
          'x-default': `${siteUrl}${defaultLanguagePath}`,
        },
      },
    },
  ];

  const homeEntries: MetadataRoute.Sitemap = languages.map((lang) => {
    return {
      url: `${siteUrl}/${lang}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          es: `${siteUrl}/es`,
          'es-EC': `${siteUrl}/es`,
          'es-419': `${siteUrl}/es`,
          en: `${siteUrl}/en`,
          'en-US': `${siteUrl}/en`,
          'x-default': `${siteUrl}${defaultLanguagePath}`,
        },
      },
    };
  });

  const serviceEntries: MetadataRoute.Sitemap = languages.flatMap((lang) =>
    services.map((service) => {
      return {
        url: `${siteUrl}/${lang}/services/${service}`,
        lastModified,
        changeFrequency: 'weekly',
        priority: 0.9,
        alternates: {
          languages: {
            es: `${siteUrl}/es/services/${service}`,
            'es-EC': `${siteUrl}/es/services/${service}`,
            'es-419': `${siteUrl}/es/services/${service}`,
            en: `${siteUrl}/en/services/${service}`,
            'en-US': `${siteUrl}/en/services/${service}`,
            'x-default': `${siteUrl}${defaultLanguagePath}/services/${service}`,
          },
        },
      };
    })
  );

  return [...rootEntry, ...homeEntries, ...serviceEntries];
}
