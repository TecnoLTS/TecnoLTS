#!/usr/bin/env bash
set -euo pipefail

MODE="${1:-production}"
if [[ "${MODE}" != "production" && "${MODE}" != "development" ]]; then
  echo "Uso: $0 [production|development]"
  exit 1
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
APP_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"
cd "${APP_DIR}"

if [[ "$(id -u)" -ne 0 ]]; then
  SUDO="sudo"
else
  SUDO=""
fi

if ! command -v apt-get >/dev/null 2>&1; then
  echo "Este script esta pensado para Ubuntu/Debian (apt-get)."
  exit 1
fi

if ! command -v docker >/dev/null 2>&1; then
  echo "Instalando Docker Engine y Compose Plugin..."
  ${SUDO} apt-get update -y
  ${SUDO} apt-get install -y ca-certificates curl gnupg
  ${SUDO} install -m 0755 -d /etc/apt/keyrings
  curl -fsSL https://download.docker.com/linux/ubuntu/gpg | ${SUDO} gpg --dearmor -o /etc/apt/keyrings/docker.gpg
  ${SUDO} chmod a+r /etc/apt/keyrings/docker.gpg

  . /etc/os-release
  echo \
    "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu ${VERSION_CODENAME} stable" \
    | ${SUDO} tee /etc/apt/sources.list.d/docker.list >/dev/null

  ${SUDO} apt-get update -y
  ${SUDO} apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
  ${SUDO} systemctl enable --now docker
fi

RUN_WITH_SUDO=""
if ! docker info >/dev/null 2>&1; then
  if ${SUDO} docker info >/dev/null 2>&1; then
    RUN_WITH_SUDO="${SUDO}"
  else
    echo "Docker instalado, pero no se pudo acceder al daemon."
    echo "Si no eres root, agrega tu usuario al grupo docker y vuelve a entrar:"
    echo "  sudo usermod -aG docker \$USER"
    exit 1
  fi
fi

if [[ ! -f .env ]]; then
  cp .env.example .env
  echo "Se creo .env desde .env.example. Revisa valores antes de usar en internet."
fi

if [[ "${MODE}" == "production" ]]; then
  ${RUN_WITH_SUDO} ./scripts/deploy-production.sh
else
  ${RUN_WITH_SUDO} ./scripts/deploy-development.sh
fi
