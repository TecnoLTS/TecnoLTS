import './global.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { LanguageProvider } from '@/components/language-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TecnoLTS - Enterprise IT Solutions & Services',
  description: 'Leading provider of enterprise IT solutions including software development, network infrastructure, and ISO 27001 security audits. Transform your business with innovative technology.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    title: 'TecnoLTS - Enterprise IT Solutions & Services',
    description: 'Leading provider of enterprise IT solutions including software development, network infrastructure, and ISO 27001 security audits.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TecnoLTS - Enterprise IT Solutions & Services',
    description: 'Leading provider of enterprise IT solutions including software development, network infrastructure, and ISO 27001 security audits.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
