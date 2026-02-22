import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'TecnoLTS',
    short_name: 'TecnoLTS',
    description:
      'Soluciones y servicios IT empresariales: desarrollo de software, redes, monitoreo, ciberseguridad e ISO 27001.',
    start_url: '/es',
    display: 'standalone',
    lang: 'es',
    background_color: '#f8fafc',
    theme_color: '#1d4ed8',
    icons: [
      {
        src: '/favicon-v2.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/apple-touch-icon-v2.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
