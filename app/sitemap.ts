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
          en: `${siteUrl}/en`,
          'x-default': `${siteUrl}${defaultLanguagePath}`,
        },
      },
    },
  ];

  const homeEntries: MetadataRoute.Sitemap = languages.map((lang) => {
    const alternateLang = lang === 'es' ? 'en' : 'es';
    return {
      url: `${siteUrl}/${lang}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          [lang]: `${siteUrl}/${lang}`,
          [alternateLang]: `${siteUrl}/${alternateLang}`,
          'x-default': `${siteUrl}${defaultLanguagePath}`,
        },
      },
    };
  });

  const serviceEntries: MetadataRoute.Sitemap = languages.flatMap((lang) =>
    services.map((service) => {
      const alternateLang = lang === 'es' ? 'en' : 'es';
      return {
        url: `${siteUrl}/${lang}/services/${service}`,
        lastModified,
        changeFrequency: 'weekly',
        priority: 0.9,
        alternates: {
          languages: {
            [lang]: `${siteUrl}/${lang}/services/${service}`,
            [alternateLang]: `${siteUrl}/${alternateLang}/services/${service}`,
            'x-default': `${siteUrl}${defaultLanguagePath}/services/${service}`,
          },
        },
      };
    })
  );

  return [...rootEntry, ...homeEntries, ...serviceEntries];
}
