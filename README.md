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

- Rutas por idioma: español en `/` e inglés en `/en` (App Router dinámico: `app/[lang]`)
- Rutas de servicios: español en `/services/{slug}` e inglés en `/en/services/{slug}`
- Formulario de contacto con validacion en cliente y backend
- Protecciones anti-spam basicas (honeypot + rate limiting por IP)
- SEO tecnico: `robots`, `sitemap`, `manifest`, Open Graph y Twitter cards
- Docker listo para desarrollo y produccion

## Scripts de aplicacion

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run typecheck
```

## Despliegue de TecnoLTS

### Ubuntu nuevo (automatizado)

Un solo comando para preparar Docker + desplegar:

```bash
cd /opt/website/tecnolts
./scripts/bootstrap-ubuntu.sh production
```

Para desarrollo:

```bash
cd /opt/website/tecnolts
./scripts/bootstrap-ubuntu.sh development
```

### Desarrollo local (Docker)

Usa este modo para trabajar localmente con hot reload.

```bash
cd /opt/website/tecnolts
npm run deploy:dev
```

Comando equivalente:

```bash
cd /opt/website/tecnolts
./scripts/deploy-development.sh
```

### Produccion (Docker)

Usa este modo para entorno productivo (build optimizado + healthcheck).

```bash
cd /opt/website/tecnolts
npm run deploy:prod
```

Comando equivalente:

```bash
cd /opt/website/tecnolts
./scripts/deploy-production.sh
```

### Verificacion rapida

```bash
cd /opt/website/tecnolts
docker compose --profile production ps
curl http://localhost:${HOST_PORT:-3008}/api/health
```

## Comandos por proyecto

### Proyecto `gateway` (`/opt/website/gateway`)

Desarrollo (SSL local autofirmado):

```bash
cd /opt/website/gateway
./scripts/setup-ssl-local.sh
```

Produccion (Let's Encrypt + renovacion automatica):

```bash
cd /opt/website/gateway
./scripts/deploy-gateway-production.sh
```

### Proyecto `tecnolts` (`/opt/website/tecnolts`)

Desarrollo (Docker profile `development`):

```bash
cd /opt/website/tecnolts
./scripts/deploy-development.sh
```

Produccion (Docker profile `production`):

```bash
cd /opt/website/tecnolts
./scripts/deploy-production.sh
```

### Full stack (gateway + tecnolts)

Produccion completa en un comando:

```bash
cd /opt/website/gateway
./scripts/deploy-full-stack.sh
```

## Variables de entorno

Revisar `.env.example`. Variables principales:

- `NEXT_PUBLIC_SITE_URL`
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM`
- `EMAIL_TO`
- Compatibilidad Gmail: `GMAIL_USER`, `GMAIL_APP_PASSWORD`
- Rate limit distribuido (opcional): `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`

## Produccion en Ubuntu nuevo

Sigue la guia completa en `DEPLOYMENT.md`.
