import '../global.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TecnoLTS - Portafolio',
  robots: { index: false, follow: false },
};

export default function PortafolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-slate-50 text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
