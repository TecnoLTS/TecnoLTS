/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { 
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
  },
  output: 'standalone',
};

module.exports = nextConfig;
