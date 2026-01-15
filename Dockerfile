FROM node:20-alpine

WORKDIR /app

# Install dependencies
RUN apk add --no-cache libc6-compat

# Control de ambiente (development | production)
ARG APP_ENV=production
ENV APP_ENV=${APP_ENV}
ENV NODE_ENV=${APP_ENV}

# Instala dependencias
COPY package*.json ./
RUN NODE_ENV=development npm install --include=dev

# Copia el código de la app
COPY . .

# Build de producción de Next (omitido en dev)
RUN if [ "$APP_ENV" = "production" ]; then \
      npm run build && \
      npm prune --production; \
    else \
      echo "Skip build in development"; \
    fi

EXPOSE 3000

CMD ["sh", "-c", "if [ \"$APP_ENV\" = \"development\" ]; then npm run dev -- --hostname 0.0.0.0 --port 3000; else npm run start -- --hostname 0.0.0.0 --port 3000; fi"]
