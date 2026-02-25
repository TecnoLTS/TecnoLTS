import type { Language, TranslationStructure } from './translations';
import { localePath } from './i18n';

export const BRAND_NAME = 'TecnoLTS';
export const BRAND_ALIASES = ['Tecno LTS', 'TencoLTS', 'tecnolts'] as const;

const FALLBACK_SITE_URL = 'http://localhost:3000';
const FALLBACK_CONTACT_EMAIL = 'info@tecnolts.com';
const FALLBACK_CONTACT_PHONE = '+593 96 368 2212';
const FALLBACK_WHATSAPP_MESSAGE = 'Hola, me gustaría obtener más información sobre sus servicios';
const FALLBACK_CONTACT_LOCALITY = 'Quito';
const FALLBACK_CONTACT_REGION = 'Pichincha';
const FALLBACK_CONTACT_COUNTRY_CODE = 'EC';
const FALLBACK_CONTACT_COUNTRY_NAME = 'Ecuador';
const FALLBACK_CONTACT_STREET_ADDRESS = '';
const FALLBACK_CONTACT_POSTAL_CODE = '';
const FALLBACK_CONTACT_LATITUDE = '';
const FALLBACK_CONTACT_LONGITUDE = '';
const FALLBACK_GOOGLE_MAPS_URL = '';
const FALLBACK_GOOGLE_BUSINESS_PROFILE_URL = '';
const SOCIAL_PROFILE_ENV_KEYS = [
  'NEXT_PUBLIC_LINKEDIN_URL',
  'NEXT_PUBLIC_FACEBOOK_URL',
  'NEXT_PUBLIC_INSTAGRAM_URL',
  'NEXT_PUBLIC_X_URL',
  'NEXT_PUBLIC_TIKTOK_URL',
  'NEXT_PUBLIC_YOUTUBE_URL',
] as const;

export type ServiceDefinition = {
  sectionId: string;
  slug: string;
  title: string;
  description: string;
};

function removeTrailingSlash(value: string) {
  return value.replace(/\/+$/, '');
}

function getTrimmedEnvValue(envKey: string, fallback = '') {
  return (process.env[envKey] || fallback).trim();
}

export function getSiteUrl() {
  return removeTrailingSlash(process.env.NEXT_PUBLIC_SITE_URL || FALLBACK_SITE_URL);
}

export function getAbsoluteUrl(path: string) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${getSiteUrl()}${normalizedPath}`;
}

export function getContactEmail() {
  return process.env.NEXT_PUBLIC_CONTACT_EMAIL || FALLBACK_CONTACT_EMAIL;
}

export function getContactPhone() {
  return process.env.NEXT_PUBLIC_CONTACT_PHONE || FALLBACK_CONTACT_PHONE;
}

export function getWhatsAppHref() {
  const phone = (process.env.NEXT_PUBLIC_WHATSAPP_PHONE || getContactPhone()).replace(/[^\d]/g, '');
  const message = encodeURIComponent(process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || FALLBACK_WHATSAPP_MESSAGE);
  return `https://wa.me/${phone}?text=${message}`;
}

export function getContactLocality() {
  return process.env.NEXT_PUBLIC_CONTACT_LOCALITY || FALLBACK_CONTACT_LOCALITY;
}

export function getContactRegion() {
  return process.env.NEXT_PUBLIC_CONTACT_REGION || FALLBACK_CONTACT_REGION;
}

export function getContactCountryCode() {
  return process.env.NEXT_PUBLIC_CONTACT_COUNTRY_CODE || FALLBACK_CONTACT_COUNTRY_CODE;
}

export function getContactCountryName() {
  return process.env.NEXT_PUBLIC_CONTACT_COUNTRY_NAME || FALLBACK_CONTACT_COUNTRY_NAME;
}

export function getContactStreetAddress() {
  return getTrimmedEnvValue('NEXT_PUBLIC_CONTACT_STREET_ADDRESS', FALLBACK_CONTACT_STREET_ADDRESS);
}

export function getContactPostalCode() {
  return getTrimmedEnvValue('NEXT_PUBLIC_CONTACT_POSTAL_CODE', FALLBACK_CONTACT_POSTAL_CODE);
}

function getContactLatitudeRaw() {
  return getTrimmedEnvValue('NEXT_PUBLIC_CONTACT_LATITUDE', FALLBACK_CONTACT_LATITUDE);
}

function getContactLongitudeRaw() {
  return getTrimmedEnvValue('NEXT_PUBLIC_CONTACT_LONGITUDE', FALLBACK_CONTACT_LONGITUDE);
}

export function getContactGeoCoordinates() {
  const latitudeRaw = getContactLatitudeRaw();
  const longitudeRaw = getContactLongitudeRaw();

  if (latitudeRaw === '' || longitudeRaw === '') {
    return null;
  }

  const latitude = Number.parseFloat(latitudeRaw);
  const longitude = Number.parseFloat(longitudeRaw);

  if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) {
    return null;
  }

  return { latitude, longitude };
}

export function getGoogleMapsUrl() {
  const value = getTrimmedEnvValue('NEXT_PUBLIC_GOOGLE_MAPS_URL', FALLBACK_GOOGLE_MAPS_URL);
  return isValidAbsoluteHttpUrl(value) ? value : '';
}

export function getGoogleBusinessProfileUrl() {
  const value = getTrimmedEnvValue(
    'NEXT_PUBLIC_GOOGLE_BUSINESS_PROFILE_URL',
    FALLBACK_GOOGLE_BUSINESS_PROFILE_URL
  );
  return isValidAbsoluteHttpUrl(value) ? value : '';
}

export function normalizePhoneForStructuredData(rawPhone: string) {
  const digitsOnly = rawPhone.replace(/[^\d]/g, '');
  if (!digitsOnly) {
    return '';
  }
  return `+${digitsOnly}`;
}

function isValidAbsoluteHttpUrl(value: string) {
  try {
    const parsed = new URL(value);
    return parsed.protocol === 'https:' || parsed.protocol === 'http:';
  } catch {
    return false;
  }
}

export function getSocialProfiles() {
  return SOCIAL_PROFILE_ENV_KEYS.map((envKey) => process.env[envKey] || '')
    .map((value) => value.trim())
    .filter((value, index, list) => value !== '' && list.indexOf(value) === index)
    .filter(isValidAbsoluteHttpUrl);
}

export function getFacebookUrl() {
  const value = getTrimmedEnvValue('NEXT_PUBLIC_FACEBOOK_URL', '');
  return isValidAbsoluteHttpUrl(value) ? value : '';
}

export function getInstagramUrl() {
  const value = getTrimmedEnvValue('NEXT_PUBLIC_INSTAGRAM_URL', '');
  return isValidAbsoluteHttpUrl(value) ? value : '';
}

export function getXUrl() {
  const value = getTrimmedEnvValue('NEXT_PUBLIC_X_URL', '');
  return isValidAbsoluteHttpUrl(value) ? value : '';
}

export function getTikTokUrl() {
  const value = getTrimmedEnvValue('NEXT_PUBLIC_TIKTOK_URL', '');
  return isValidAbsoluteHttpUrl(value) ? value : '';
}

export function getLinkedInUrl() {
  const value = getTrimmedEnvValue('NEXT_PUBLIC_LINKEDIN_URL', '');
  return isValidAbsoluteHttpUrl(value) ? value : '';
}

export function getYouTubeUrl() {
  const value = getTrimmedEnvValue('NEXT_PUBLIC_YOUTUBE_URL', '');
  return isValidAbsoluteHttpUrl(value) ? value : '';
}

export function getServiceDefinitions(t: TranslationStructure): ServiceDefinition[] {
  return [
    {
      sectionId: 'software',
      slug: 'software',
      title: t.services.software.title,
      description: t.services.software.description,
    },
    {
      sectionId: 'monitoring',
      slug: 'monitoring',
      title: t.services.monitoring.title,
      description: t.services.monitoring.description,
    },
    {
      sectionId: 'cybersecurity',
      slug: 'cybersecurity',
      title: t.services.cybersecurity.title,
      description: t.services.cybersecurity.description,
    },
    {
      sectionId: 'network',
      slug: 'network',
      title: t.services.network.title,
      description: t.services.network.description,
    },
    {
      sectionId: 'iso',
      slug: 'iso-27001',
      title: t.services.iso.title,
      description: t.services.iso.description,
    },
    {
      sectionId: 'backups',
      slug: 'backups',
      title: t.services.backups.title,
      description: t.services.backups.description,
    },
    {
      sectionId: 'licensing',
      slug: 'licensing',
      title: t.services.licensing.title,
      description: t.services.licensing.description,
    },
    {
      sectionId: 'disaster-recovery',
      slug: 'disaster-recovery',
      title: t.services.disasterRecovery.title,
      description: t.services.disasterRecovery.description,
    },
    {
      sectionId: 'datacenter',
      slug: 'datacenter',
      title: t.services.dataCenter.title,
      description: t.services.dataCenter.description,
    },
  ];
}

export function getLocalizedServiceUrls(t: TranslationStructure, language: Language) {
  return getServiceDefinitions(t).map((service) => ({
    ...service,
    url: getAbsoluteUrl(localePath(language, `/services/${service.slug}`)),
  }));
}
