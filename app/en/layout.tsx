import { LanguageProvider } from '@/components/language-provider';

export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider initialLanguage="en">
      {children}
    </LanguageProvider>
  );
}
