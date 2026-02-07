import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'TecnoLTS',
    short_name: 'TecnoLTS',
    description:
      'Enterprise IT solutions including software development, network infrastructure, and ISO 27001 security audits.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f8fafc',
    theme_color: '#1d4ed8',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/apple-touch-icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
