# TecnoLTS

Landing corporativo bilingue construido con Next.js.

## Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Nodemailer para contacto

## Scripts de aplicacion

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run typecheck
```

## Despliegue

### Desarrollo

```bash
cd /home/admincenter/contenedores/tecnolts
./scripts/deploy-development.sh
```

### Produccion

```bash
cd /home/admincenter/contenedores/tecnolts
./scripts/deploy-production.sh
```

## Modelo de entornos

### Desarrollo

Por defecto usa:

```bash
FRONTEND_DEV_RUNTIME=hot
FRONTEND_DEV_BUNDLER=webpack
```

Eso significa:

- corre con `next dev`,
- tiene hot reload real,
- y usa `webpack` por defecto para priorizar estabilidad en este entorno.

Si quieres probar un runtime mas parecido a produccion, cambia en `.env.development`:

```bash
FRONTEND_DEV_RUNTIME=stable
```

y redepliega:

```bash
cd /home/admincenter/contenedores/tecnolts
./scripts/deploy-development.sh
```

### Produccion

Produccion siempre corre con build optimizado y runtime estable.

## Archivos de entorno

- desarrollo: `.env.development`
- produccion: `.env` o `.env.production`

Si no existe `.env.development`, el script intenta crearlo desde:

- `.env.development.example`
- o `.env.example`

## Variables relevantes

- `APP_ENV`
- `COMPOSE_PROFILES`
- `FRONTEND_DEV_RUNTIME`
- `NEXT_PUBLIC_SITE_URL`
- `HOST_PORT`
- `DEV_PORT`
- `EMAIL_TO`
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`

## Operacion

Estado:

```bash
cd /home/admincenter/contenedores/tecnolts
docker compose ps
```

Logs de desarrollo:

```bash
cd /home/admincenter/contenedores/tecnolts
docker compose logs -f web-dev
```

Logs de produccion:

```bash
cd /home/admincenter/contenedores/tecnolts
docker compose logs -f web
```

Verificacion de salud:

```bash
curl http://localhost:3009/api/health
```

## Nota de arquitectura

Este proyecto esta alineado con `paramascotasec`:

- desarrollo con hot reload por defecto,
- modo estable como opcion,
- perfiles Docker separados,
- y cambio de ambiente siempre mediante script.
