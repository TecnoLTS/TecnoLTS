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

Por defecto en Docker desarrollo publica en `http://localhost:3009` (`DEV_PORT` configurable en `.env`).

## SSL con gateway (local vs produccion)

Desde `gateway`:

1. Local/desarrollo (certificado autofirmado):

```bash
./scripts/setup-ssl-local.sh
```

2. Produccion (Let's Encrypt + auto-renovacion):

```bash
./scripts/setup-ssl-production.sh
```

Y para `tecnolts` usa:

- Desarrollo:

```bash
docker compose --profile development up -d --build
```

- Produccion:

```bash
docker compose --profile production up -d --build
```

Guia completa para Ubuntu nuevo: `DEPLOYMENT.md`.

## Estructura relevante

- `app/` rutas App Router
- `app/_components/` componentes principales de UI
- `lib/translations.ts` contenido i18n
- `components/language-provider.tsx` contexto de idioma
- `app/api/contact/route.ts` endpoint de contacto





Uso recomendado:

Desarrollo
cd /home/admincenter/contenedores/gateway
./scripts/setup-ssl-local.sh

cd /home/admincenter/contenedores/tecnolts
docker compose --profile development up -d --build
Producción
cd /home/admincenter/contenedores/gateway
CERTBOT_EMAIL=tu-correo@dominio.com ./scripts/setup-ssl-production.sh

cd /home/admincenter/contenedores/tecnolts
docker compose --profile production up -d --build


