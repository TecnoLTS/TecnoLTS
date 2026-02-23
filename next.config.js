/** @type {import('next').NextConfig} */
const isDevelopment = process.env.NODE_ENV === 'development' || process.env.APP_ENV === 'development';

function toOriginHostname(value) {
  const trimmed = value.trim();
  if (!trimmed) return '';

  const normalized = /^https?:\/\//i.test(trimmed) ? trimmed : `http://${trimmed}`;
  try {
    return new URL(normalized).hostname.toLowerCase();
  } catch {
    return trimmed
      .replace(/^https?:\/\//i, '')
      .split('/')[0]
      .replace(/:\d+$/, '')
      .toLowerCase();
  }
}

const allowedDevOrigins = Array.from(
  new Set(
    (process.env.NEXT_ALLOWED_DEV_ORIGINS || 'localhost,127.0.0.1,192.168.100.229')
      .split(',')
      .map(toOriginHostname)
      .filter(Boolean)
  )
);

const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  ...(isDevelopment ? { allowedDevOrigins } : {}),
  output: 'standalone',
};

module.exports = nextConfig;
