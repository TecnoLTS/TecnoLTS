import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'TecnoLTS',
    short_name: 'TecnoLTS',
    description:
      'Soluciones y servicios IT empresariales: desarrollo de software, redes, monitoreo, ciberseguridad e ISO 27001.',
    start_url: '/',
    display: 'standalone',
    lang: 'es',
    background_color: '#f8fafc',
    theme_color: '#1d4ed8',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
