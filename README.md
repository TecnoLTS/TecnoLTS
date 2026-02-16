# TecnoLTS - Corporate IT Services Website

Landing corporativo bilingue (ES/EN) para servicios IT empresariales, construido con Next.js App Router.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui
- Nodemailer (formulario de contacto)

## Funcionalidades clave

- Rutas por idioma: `/es` y `/en`
- Home con secciones de servicios y paginas de detalle
- Pagina dedicada de Monitoreo y Observabilidad reutilizada por ambos idiomas
- Formulario de contacto con validacion en cliente y backend
- Protecciones anti-spam basicas (honeypot + rate limiting por IP)
- SEO tecnico: `robots`, `sitemap`, `manifest`, Open Graph y Twitter cards
- Docker listo para desarrollo y produccion

## Desarrollo local

1. Instalar dependencias:

```bash
npm install
```

2. Configurar variables de entorno (copiar `.env.example` a `.env.local`).

3. Ejecutar en desarrollo:

```bash
npm run dev
```

4. Abrir `http://localhost:3000`.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run typecheck
```

## Variables de entorno

Revisar `.env.example`. Variables principales:

- `NEXT_PUBLIC_SITE_URL`
- `GMAIL_USER`
- `GMAIL_APP_PASSWORD`
- `EMAIL_TO`

## Docker

1. Copia variables de entorno:

```bash
cp .env.example .env
```

2. Produccion:

```bash
docker compose --profile production up -d --build
```

3. Verificacion:

```bash
docker compose ps
curl http://localhost:${HOST_PORT:-3008}/api/health
```

4. Desarrollo:

```bash
docker compose --profile development up -d --build
```

Guia completa para Ubuntu nuevo: `DEPLOYMENT.md`.

## Estructura relevante

- `app/` rutas App Router
- `app/_components/` componentes principales de UI
- `lib/translations.ts` contenido i18n
- `components/language-provider.tsx` contexto de idioma
- `app/api/contact/route.ts` endpoint de contacto
