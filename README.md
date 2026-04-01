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

## Comandos exactos

Desarrollo:

```bash
cd /home/admincenter/contenedores/tecnolts
./scripts/deploy-development.sh
```

Produccion:

```bash
cd /home/admincenter/contenedores/tecnolts
./scripts/deploy-production.sh
```

## Regla simple
- Cambio persistente por archivo:
  - `.env.development` para desarrollo.
  - `.env` o `.env.production` para produccion.
- Cambio por comando:
  - `./scripts/deploy-development.sh`
  - `./scripts/deploy-production.sh`
- `COMPOSE_PROFILES` debe coincidir con `APP_ENV`.
- Los scripts usan `--remove-orphans`, asi que al cambiar de ambiente retiran el contenedor del perfil opuesto.

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

Si no existe `.env.development`, el script lo crea desde `.env.development.example`.

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

`certbot` no debe arrancarse con `docker compose up` normal. Solo se usa con los scripts de SSL/Let's Encrypt en produccion.

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
- SEO/negocio local: `NEXT_PUBLIC_CONTACT_*`, `NEXT_PUBLIC_GOOGLE_MAPS_URL`, `NEXT_PUBLIC_GOOGLE_BUSINESS_PROFILE_URL`
- Perfiles sociales (entity consistency): `NEXT_PUBLIC_LINKEDIN_URL`, `NEXT_PUBLIC_FACEBOOK_URL`, `NEXT_PUBLIC_INSTAGRAM_URL`, `NEXT_PUBLIC_X_URL`, `NEXT_PUBLIC_TIKTOK_URL`, `NEXT_PUBLIC_YOUTUBE_URL`
- Verificacion buscadores: `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, `NEXT_PUBLIC_YANDEX_VERIFICATION`, `NEXT_PUBLIC_YAHOO_VERIFICATION`
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM`
- `EMAIL_TO`
- Compatibilidad Gmail: `GMAIL_USER`, `GMAIL_APP_PASSWORD`
- Rate limit distribuido (opcional): `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`

## Produccion en Ubuntu nuevo

Sigue la guia completa en `DEPLOYMENT.md`.





Workspace completo en /home/admincenter/contenedores:

cd /home/admincenter/contenedores
./scripts/deploy-workspace.sh development
./scripts/deploy-workspace.sh production
paramascotasec:

cd /home/admincenter/contenedores/paramascotasec
./scripts/deploy-development.sh
./scripts/deploy-production.sh
paramascotasec-backend:

cd /home/admincenter/contenedores/paramascotasec-backend
./scripts/deploy-development.sh
./scripts/deploy-production.sh
RUN_COMPOSER_INSTALL=1 RUN_DB_BOOTSTRAP=1 ./scripts/deploy-development.sh
RUN_COMPOSER_INSTALL=1 RUN_DB_BOOTSTRAP=1 ./scripts/deploy-production.sh
tecnolts:

cd /home/admincenter/contenedores/tecnolts
./scripts/deploy-development.sh
./scripts/deploy-production.sh
gateway:

cd /home/admincenter/contenedores/gateway
./scripts/setup-ssl-local.sh
./scripts/deploy-gateway-production.sh
./scripts/renew-letsencrypt.sh


---------------------------------------------------------------------------------------------------------------------------
Lista nueva de despliegues

Workspace completo

cd /home/admincenter/contenedores
./scripts/deploy-workspace.sh development
./scripts/deploy-workspace.sh production
paramascotasec

cd /home/admincenter/contenedores/paramascotasec
./scripts/deploy-development.sh
./scripts/deploy-production.sh
paramascotasec-backend

cd /home/admincenter/contenedores/paramascotasec-backend
./scripts/deploy-development.sh
./scripts/deploy-production.sh
Si necesitas instalar dependencias PHP y preparar base de datos:

cd /home/admincenter/contenedores/paramascotasec-backend
RUN_COMPOSER_INSTALL=1 RUN_DB_SETUP=1 ./scripts/deploy-development.sh
RUN_COMPOSER_INSTALL=1 RUN_DB_SETUP=1 ./scripts/deploy-production.sh
paramascostas-DB

cd /home/admincenter/contenedores/paramascostas-DB
./scripts/deploy.sh development
./scripts/deploy.sh production
tecnolts

cd /home/admincenter/contenedores/tecnolts
./scripts/deploy-development.sh
./scripts/deploy-production.sh
gateway

cd /home/admincenter/contenedores/gateway
./scripts/setup-ssl-local.sh
./scripts/deploy-gateway-production.sh
./scripts/renew-letsencrypt.sh
Facturador

cd /home/admincenter/contenedores/Facturador
./scripts/deploy.sh