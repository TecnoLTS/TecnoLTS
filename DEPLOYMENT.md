# Deployment Guide - TecnoLTS (Ubuntu Nuevo)

## 1) Preparar servidor Ubuntu

Instalar Docker Engine + Compose Plugin:

```bash
sudo apt-get update
sudo apt-get install -y ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
sudo systemctl enable --now docker
```

Opcional para usar Docker sin `sudo`:

```bash
sudo usermod -aG docker $USER
newgrp docker
```

## 2) Preparar proyecto

```bash
git clone <TU_REPO> tecnolts
cd tecnolts
cp .env.example .env
```

Editar `.env` con datos reales:

- `NEXT_PUBLIC_SITE_URL` (dominio final)
- `GMAIL_USER`
- `GMAIL_APP_PASSWORD`
- `EMAIL_TO`
- `HOST_PORT` (por defecto `3008`)

## 3) Levantar en producción

```bash
docker compose --profile production up -d --build
```

Verificar estado:

```bash
docker compose ps
docker compose logs -f web
curl http://localhost:${HOST_PORT:-3008}/api/health
```

Respuesta esperada:

```json
{"status":"ok","service":"tecnolts", ...}
```

## 4) Operación

Actualizar versión:

```bash
git pull
docker compose --profile production up -d --build
```

Detener:

```bash
docker compose --profile production down
```

## 5) Desarrollo con Docker

```bash
docker compose --profile development up -d --build
docker compose logs -f web-dev
```

## Checklist de salida a producción

- `docker compose --profile production ps` muestra `healthy`.
- `curl /api/health` responde `200`.
- Formulario `/api/contact` envía correo correctamente.
- Dominio apunta al servidor y el puerto publicado está accesible.
- SSL/TLS configurado en reverse proxy (Nginx/Caddy/Traefik) o balanceador.
