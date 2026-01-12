# TechCorp - Corporate IT Services Landing Page

A cutting-edge, modern landing page for corporate IT services built with Next.js 15, featuring a trendy **Bento Grid** layout inspired by 2024-2025 design trends.

## Design Highlights

This landing page features the latest design trends:
- **Bento Grid Layout**: Asymmetric grid design that's trending in 2025
- **Bold Gradients**: Multi-color gradients (blue-cyan-teal) with vibrant accents
- **Glassmorphism Effects**: Frosted glass effects with backdrop blur
- **Gradient Text**: Eye-catching gradient text for headlines
- **Modern Color Palette**: Blue, cyan, teal, emerald, and orange gradients
- **Interactive Cards**: Hover effects with shadows and transitions
- **Pattern Overlays**: Subtle SVG patterns for texture

## Features

- **Modern Bento Grid Design**: Trendy asymmetric layout inspired by top 2025 designs
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Rich Visual Hierarchy**: Multiple card sizes and styles for engaging presentation
- **Performance Optimized**: Built with Next.js 15 App Router for optimal performance
- **Docker Ready**: Easy deployment with Docker and Docker Compose

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Runtime**: React 19
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Docker & Docker Compose

## Getting Started

### Development

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

Build the application:
```bash
npm run build
npm start
```

## Docker Deployment

### Using Docker Compose (Recommended)

1. Build and run the container:
```bash
docker-compose up -d
```

2. The application will be available at [http://localhost:3000](http://localhost:3000)

3. Stop the container:
```bash
docker-compose down
```

### Using Docker directly

1. Build the image:
```bash
docker build -t techcorp-landing .
```

2. Run the container:
```bash
docker run -p 3000:3000 techcorp-landing
```

## Project Structure

```
.
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Landing page
│   └── globals.css        # Global styles
├── components/            # React components
│   └── ui/               # shadcn/ui components
├── lib/                  # Utility functions
├── public/               # Static assets
├── Dockerfile            # Docker configuration
├── docker-compose.yml    # Docker Compose configuration
└── next.config.js        # Next.js configuration
```

## Customization

### Branding

Edit the following in `app/page.tsx`:
- Company name: Replace "TechCorp" with your company name
- Logo: Update the logo section in the navigation
- Contact information: Update email and phone in the footer

### Colors

The design uses a modern gradient-based color scheme:
- **Primary Gradient**: `from-blue-600 to-cyan-600`
- **Hero Gradient**: `from-gray-900 via-blue-800 to-cyan-700`
- **Accent Colors**: Emerald (`emerald-500`), Teal (`teal-600`), Orange (`orange-500`)
- **Background**: `from-slate-50 via-blue-50 to-cyan-50`

To customize, search for gradient classes in `app/page.tsx`:
- `bg-gradient-to-br` - Background gradients
- `bg-gradient-to-r` - Text gradients with `bg-clip-text text-transparent`
- Update color values throughout the Bento Grid cards

### Content

All content is in `app/page.tsx`. The page structure includes:
- **Hero Section**: Large gradient headlines with CTAs
- **Bento Grid**: 6 interactive cards showcasing services and stats
  - Software Development (large 2x2 card)
  - Network Solutions (wide card)
  - ISO 27001 (compact card)
  - Stats card with metrics
  - "Why Choose Us" dark card with 4 benefits
- **About Section**: 3-column feature cards
- **CTA Section**: Gradient background with pattern overlay
- **Footer**: Modern dark footer with social links

## Deployment

### Production Checklist

- [ ] Update company name and branding
- [ ] Replace placeholder contact information
- [ ] Configure environment variables
- [ ] Set up custom domain
- [ ] Configure SSL/TLS certificates
- [ ] Set up monitoring and analytics
- [ ] Configure backup strategy

### Environment Variables

Create a `.env.local` file for environment-specific configuration:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_CONTACT_EMAIL=info@yourdomain.com
```

## License

This project is proprietary and confidential.

## Support

For support, email support@techcorp.com or contact your development team.
