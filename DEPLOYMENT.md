# Deployment Guide

This guide will help you deploy your TechCorp landing page.

## Quick Start with Docker

The fastest way to get your site running in production:

### 1. Prerequisites

- Docker installed on your system
- Docker Compose installed (comes with Docker Desktop)

### 2. Deploy with Docker Compose

```bash
# Build and start the container
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the container
docker-compose down
```

Your site will be available at `http://localhost:3000`

### 3. Production Configuration

For production, you should:

1. **Set environment variables** - Create a `.env.production` file:
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_CONTACT_EMAIL=info@yourdomain.com
```

2. **Update docker-compose.yml** for production:
```yaml
version: '3.8'

services:
  web:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - NEXT_PUBLIC_SITE_URL=https://yourdomain.com
    restart: always
```

## Manual Docker Build

If you prefer to build and run Docker manually:

```bash
# Build the image
docker build -t techcorp-landing:latest .

# Run the container
docker run -d \
  -p 3000:3000 \
  --name techcorp-web \
  --restart unless-stopped \
  techcorp-landing:latest

# View logs
docker logs -f techcorp-web

# Stop and remove
docker stop techcorp-web
docker rm techcorp-web
```

## Deployment to Cloud Providers

### Deploy to AWS ECS

1. Push your image to Amazon ECR:
```bash
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin YOUR_ACCOUNT.dkr.ecr.us-east-1.amazonaws.com
docker tag techcorp-landing:latest YOUR_ACCOUNT.dkr.ecr.us-east-1.amazonaws.com/techcorp:latest
docker push YOUR_ACCOUNT.dkr.ecr.us-east-1.amazonaws.com/techcorp:latest
```

2. Create an ECS task definition using your image
3. Create an ECS service with an Application Load Balancer

### Deploy to Google Cloud Run

```bash
# Build and push to Google Container Registry
gcloud builds submit --tag gcr.io/YOUR_PROJECT_ID/techcorp

# Deploy to Cloud Run
gcloud run deploy techcorp \
  --image gcr.io/YOUR_PROJECT_ID/techcorp \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

### Deploy to Azure Container Instances

```bash
# Build and push to Azure Container Registry
az acr build --registry YOUR_REGISTRY --image techcorp:latest .

# Deploy to Container Instances
az container create \
  --resource-group YOUR_RESOURCE_GROUP \
  --name techcorp-web \
  --image YOUR_REGISTRY.azurecr.io/techcorp:latest \
  --dns-name-label techcorp \
  --ports 3000
```

## Deploy to Vercel (Alternative)

If you prefer not to use Docker:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Deploy to Netlify (Alternative)

1. Install Netlify CLI:
```bash
npm i -g netlify-cli
```

2. Deploy:
```bash
netlify deploy --prod
```

## Performance Optimization

For production, consider:

1. **CDN**: Use a CDN like Cloudflare or AWS CloudFront
2. **Compression**: Enable gzip/brotli compression in your reverse proxy
3. **Caching**: Set appropriate cache headers
4. **SSL/TLS**: Always use HTTPS in production
5. **Monitoring**: Set up monitoring with tools like DataDog, New Relic, or CloudWatch

## Nginx Reverse Proxy (Optional)

If you want to put Nginx in front of your Docker container:

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

## Health Checks

Add a health check endpoint by creating `app/api/health/route.ts`:

```typescript
export async function GET() {
  return Response.json({ status: 'ok' });
}
```

Then configure your load balancer to check `/api/health`

## Backup and Recovery

The site is statically generated, so backups are simple:
- Keep your source code in Git
- Store environment variables securely
- Document any custom configurations

## Support

For deployment issues, check:
- Docker logs: `docker logs YOUR_CONTAINER_NAME`
- Next.js build output
- Browser console for client-side errors
