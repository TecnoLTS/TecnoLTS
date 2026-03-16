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

ENV_FILE=".env.development"
if [[ ! -f "${ENV_FILE}" ]]; then
  if [[ -f .env.development.example ]]; then
    cp .env.development.example "${ENV_FILE}"
    echo "Se creo ${ENV_FILE} desde .env.development.example."
  elif [[ -f .env ]]; then
    ENV_FILE=".env"
  else
    cp .env.example .env
    ENV_FILE=".env"
    echo "Se creo .env desde .env.example."
  fi
fi

echo "Levantando TecnoLTS en desarrollo usando ${ENV_FILE}..."
docker compose --env-file "${ENV_FILE}" --profile development up -d --build --remove-orphans

docker compose --env-file "${ENV_FILE}" --profile development ps

echo "Deploy de desarrollo completado"
