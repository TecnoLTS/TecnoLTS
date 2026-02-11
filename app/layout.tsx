import './global.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { LanguageProvider } from '@/components/language-provider';

const inter = Inter({ subsets: ['latin'] });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
const defaultLang = 'es';

export const metadata: Metadata = {
  title: 'TecnoLTS - Enterprise IT Solutions & Services',
  description: 'Leading provider of enterprise IT solutions including software development, network infrastructure, and ISO 27001 security audits. Transform your business with innovative technology.',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
    languages: {
      en: '/en',
      es: '/es',
    },
  },
  openGraph: {
    title: 'TecnoLTS - Enterprise IT Solutions & Services',
    description: 'Leading provider of enterprise IT solutions including software development, network infrastructure, and ISO 27001 security audits.',
    type: 'website',
    url: siteUrl,
    siteName: 'TecnoLTS',
    locale: defaultLang === 'es' ? 'es_ES' : 'en_US',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'TecnoLTS - Enterprise IT Solutions & Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TecnoLTS - Enterprise IT Solutions & Services',
    description: 'Leading provider of enterprise IT solutions including software development, network infrastructure, and ISO 27001 security audits.',
    images: ['/og-image.svg'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.svg', type: 'image/svg+xml' },
    ],
  },
  manifest: '/manifest.webmanifest',
  applicationName: 'TecnoLTS',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={defaultLang} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider initialLanguage={defaultLang}>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
