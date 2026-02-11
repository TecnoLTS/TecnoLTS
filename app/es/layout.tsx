import { LanguageProvider } from '@/components/language-provider';

export default function EsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider initialLanguage="es">
      {children}
    </LanguageProvider>
  );
}
