# Deployment Guide - TecnoLTS (Ubuntu Nuevo)

Esta guia deja el sitio listo en un servidor Ubuntu limpio usando Docker.

## 1) Requisitos del servidor

Opcion recomendada (automatizada desde este proyecto):

```bash
cd /opt/website/tecnolts
./scripts/bootstrap-ubuntu.sh production
```

Opcion manual: instalar Docker Engine + Compose Plugin:

```bash
cd /opt/website/gateway
sudo ./scripts/install-docker-ubuntu.sh
```

Opcional (evitar `sudo`):

```bash
sudo usermod -aG docker $USER
newgrp docker
```

## 2) Clonar repositorio y preparar variables

```bash
cd /opt
git clone <TU_REPO> website
```

### 2.1 Gateway (SSL + reverse proxy)

```bash
cd /opt/website/gateway
cp .env.example .env
```

Editar `/opt/website/gateway/.env`:

- `CERTBOT_EMAIL=tu-correo@dominio.com`
- `CERTBOT_DOMAINS=paramascotasec.com,www.paramascotasec.com,tecnolts.com,www.tecnolts.com,autorepuestoscore.com,www.autorepuestoscore.com`
- `CERTBOT_STAGING=0` (usa `1` para pruebas de emision)

### 2.2 App TecnoLTS

```bash
cd /opt/website/tecnolts
cp .env.example .env
```

Editar `/opt/website/tecnolts/.env`:

- `NEXT_PUBLIC_SITE_URL=https://tecnolts.com`
- SMTP (`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM`)
- `EMAIL_TO=destino@dominio.com`
- (opcional) rate-limit distribuido: `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`
- (opcional) `HOST_PORT=3008`

## 3) Desplegar en produccion

### 3.1 Levantar gateway y certificados

```bash
cd /opt/website/gateway
./scripts/deploy-gateway-production.sh
```

Este script:

- crea red Docker `edge` si no existe,
- emite/renueva certificados Let's Encrypt,
- sincroniza certificados a `certs/local-cert.*`,
- recarga Nginx y programa renovacion por cron.

### 3.2 Levantar app

```bash
cd /opt/website/tecnolts
./scripts/deploy-production.sh
```

Este script:

- valida Docker,
- crea red `edge` si falta,
- levanta `web` en perfil `production`,
- verifica `/api/health` local.

### 3.3 Solo TecnoLTS (sin gateway)

Si en el servidor nuevo solo vas a levantar esta app (sin Nginx externo):

```bash
cd /opt/website/tecnolts
./scripts/bootstrap-ubuntu.sh production
curl -f http://127.0.0.1:${HOST_PORT:-3008}/api/health
```

## 4) Verificaciones post-deploy

```bash
cd /opt/website/gateway
docker compose ps
docker compose logs --tail=100 gateway

cd /opt/website/tecnolts
docker compose --profile production ps
docker compose logs --tail=100 web
curl -f https://tecnolts.com/api/health
```

Despliegue unificado (gateway + app) en un paso:

```bash
cd /opt/website/gateway
./scripts/deploy-full-stack.sh
```

Checklist:

- DNS de `tecnolts.com` y `www.tecnolts.com` apunta al servidor.
- Puertos `80` y `443` abiertos en firewall.
- `/api/health` responde 200.
- Formulario de contacto envia correo correctamente.

## 5) Actualizacion de version

```bash
cd /opt/website
git pull

cd /opt/website/gateway
./scripts/deploy-gateway-production.sh

cd /opt/website/tecnolts
./scripts/deploy-production.sh
```

## 6) Rollback rapido

```bash
cd /opt/website
git log --oneline -n 5
git checkout <commit_anterior>

cd /opt/website/gateway
./scripts/deploy-gateway-production.sh

cd /opt/website/tecnolts
./scripts/deploy-production.sh
```

## 7) Desarrollo local con Docker

```bash
cd /opt/website/tecnolts
./scripts/deploy-development.sh
```

Para SSL autofirmado en desarrollo:

```bash
cd /opt/website/gateway
./scripts/setup-ssl-local.sh
```
