import HomePage from '@/app/_components/HomePage';
import { translations } from '@/lib/translations';

export default function RootPage() {
  return <HomePage t={translations.es} language="es" />;
}
