import { notFound } from 'next/navigation';
import HomePage from '@/app/_components/HomePage';
import { isLocale, locales } from '@/lib/i18n';
import { translations } from '@/lib/translations';

type PageParams = {
  lang: string;
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LocaleHomePage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  return <HomePage t={translations[lang]} language={lang} />;
}
