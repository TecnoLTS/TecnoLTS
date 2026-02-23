#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
APP_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"
cd "${APP_DIR}"

if ! command -v docker >/dev/null 2>&1; then
  echo "docker no esta instalado"
  exit 1
fi

if ! docker compose version >/dev/null 2>&1; then
  echo "docker compose no esta disponible"
  exit 1
fi

if ! docker network inspect edge >/dev/null 2>&1; then
  docker network create edge >/dev/null
fi

if [[ ! -f .env ]]; then
  cp .env.example .env
  echo "Se creo .env desde .env.example. Ajusta valores antes de exponer a internet."
fi

NO_CACHE_BUILD="${NO_CACHE_BUILD:-1}"
PULL_BASE_IMAGES="${PULL_BASE_IMAGES:-1}"
PRUNE_BUILD_CACHE="${PRUNE_BUILD_CACHE:-0}"

BUILD_FLAGS=()
if [[ "${NO_CACHE_BUILD}" == "1" ]]; then
  BUILD_FLAGS+=(--no-cache)
fi
if [[ "${PULL_BASE_IMAGES}" == "1" ]]; then
  BUILD_FLAGS+=(--pull)
fi

if [[ "${PRUNE_BUILD_CACHE}" == "1" ]]; then
  echo "Limpiando cache de build de Docker..."
  docker builder prune -af >/dev/null || true
fi

echo "Construyendo imagen de produccion (flags: ${BUILD_FLAGS[*]:-(none)})..."
docker compose --profile production build "${BUILD_FLAGS[@]}" web

echo "Recreando contenedor de produccion..."
docker compose --profile production up -d --force-recreate --remove-orphans web
docker image prune -f >/dev/null || true

echo "Estado de contenedores:"
docker compose --profile production ps

echo "Healthcheck local:"
HOST_PORT_VALUE="$(grep -E '^HOST_PORT=' .env | tail -n 1 | cut -d= -f2- | tr -d '"' || true)"
HOST_PORT_VALUE="${HOST_PORT_VALUE:-3008}"
WEB_CONTAINER_ID="$(docker compose --profile production ps -q web)"
if [[ -z "${WEB_CONTAINER_ID}" ]]; then
  echo "No se pudo obtener el contenedor del servicio web"
  exit 1
fi

MAX_ATTEMPTS=24
SLEEP_SECONDS=5

for ((attempt=1; attempt<=MAX_ATTEMPTS; attempt++)); do
  HEALTH_STATUS="$(docker inspect --format '{{if .State.Health}}{{.State.Health.Status}}{{else}}{{.State.Status}}{{end}}' "${WEB_CONTAINER_ID}" 2>/dev/null || echo "unknown")"
  echo "Intento ${attempt}/${MAX_ATTEMPTS}: estado=${HEALTH_STATUS}"

  if command -v curl >/dev/null 2>&1; then
    if curl -fsS "http://127.0.0.1:${HOST_PORT_VALUE}/api/health" >/dev/null 2>&1; then
      echo "Healthcheck HTTP OK en puerto ${HOST_PORT_VALUE}"
      echo "Deploy de produccion completado"
      exit 0
    fi
  elif [[ "${HEALTH_STATUS}" == "healthy" || "${HEALTH_STATUS}" == "running" ]]; then
    echo "curl no esta instalado; validacion basada en estado del contenedor (${HEALTH_STATUS})"
    echo "Deploy de produccion completado"
    exit 0
  fi

  sleep "${SLEEP_SECONDS}"
done

echo "No se pudo validar /api/health en puerto ${HOST_PORT_VALUE} despues de $((MAX_ATTEMPTS * SLEEP_SECONDS))s."
docker compose --profile production logs --tail=120 web || true
exit 1
