# Acacia Camp Deployment Guide

This guide outlines the steps required to deploy the Acacia Camp website to various environments.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Environment Setup](#environment-setup)
- [Deployment Options](#deployment-options)
  - [Local Development](#local-development)
  - [Production Deployment](#production-deployment)
  - [Docker Deployment](#docker-deployment)
  - [Continuous Integration/Deployment](#continuous-integrationdeployment)
- [Database Configuration](#database-configuration)
- [Environment Variables](#environment-variables)
- [Static Assets](#static-assets)
- [Performance Optimization](#performance-optimization)
- [Security Considerations](#security-considerations)
- [Monitoring and Logging](#monitoring-and-logging)
- [Troubleshooting](#troubleshooting)

## Prerequisites

Before deploying the Acacia Camp website, ensure you have the following:

- Node.js 16.x or higher
- MySQL 8.0 or higher
- npm or yarn package manager
- Git (for version control)
- A domain name (for production deployment)
- SSL certificate (for production deployment)

## Environment Setup

The application supports multiple environments:

- **Development**: For local development
- **Staging**: For testing in a production-like environment
- **Production**: For the live website

Create environment-specific configuration files:

```
.env.development
.env.staging
.env.production
```

## Deployment Options

### Local Development

To run the application locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/acacia-camp.git
   cd acacia-camp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the database:
   ```bash
   npm run db:setup
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:8080`.

### Production Deployment

#### Option 1: Traditional Hosting

1. Build the application:
   ```bash
   npm run build
   ```

2. Transfer the build files to your server using FTP, SCP, or other methods.

3. Configure your web server (Nginx, Apache) to serve the static files and proxy API requests.

#### Option 2: Platform as a Service (PaaS)

##### Deploying to Vercel

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy the application:
   ```bash
   vercel
   ```

3. For production deployment:
   ```bash
   vercel --prod
   ```

##### Deploying to Netlify

1. Create a `netlify.toml` file in the project root:
   ```toml
   [build]
     command = "npm run build"
     publish = "dist"
   
   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

2. Deploy via Netlify CLI or connect your GitHub repository.

### Docker Deployment

1. Create a `Dockerfile` in the project root:
   ```dockerfile
   FROM node:16-alpine as builder
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci
   COPY . .
   RUN npm run build

   FROM nginx:alpine
   COPY --from=builder /app/dist /usr/share/nginx/html
   COPY nginx.conf /etc/nginx/conf.d/default.conf
   EXPOSE 80
   CMD ["nginx", "-g", "daemon off;"]
   ```

2. Create a `docker-compose.yml` file:
   ```yaml
   version: '3'
   services:
     app:
       build: .
       ports:
         - "80:80"
       depends_on:
         - db
     db:
       image: mysql:8.0
       environment:
         - MYSQL_ROOT_PASSWORD=rootpassword
         - MYSQL_DATABASE=acaciacamp
         - MYSQL_USER=acaciauser
         - MYSQL_PASSWORD=acaciapassword
       volumes:
         - mysql_data:/var/lib/mysql
   volumes:
     mysql_data:
   ```

3. Build and run the Docker containers:
   ```bash
   docker-compose up -d
   ```

### Continuous Integration/Deployment

#### GitHub Actions

Create a `.github/workflows/deploy.yml` file:

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '16'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to server
        uses: easingthemes/ssh-deploy@main
        env:
          SSH_PRIVATE_KEY: ${{ secrets.SSH_PRIVATE_KEY }}
          ARGS: "-rltgoDzvO"
          SOURCE: "dist/"
          REMOTE_HOST: ${{ secrets.REMOTE_HOST }}
          REMOTE_USER: ${{ secrets.REMOTE_USER }}
          TARGET: ${{ secrets.REMOTE_TARGET }}
```

## Database Configuration

### Setting Up MySQL

1. Create the database and user:
   ```sql
   CREATE DATABASE acaciacamp;
   CREATE USER 'acaciauser'@'localhost' IDENTIFIED BY 'password';
   GRANT ALL PRIVILEGES ON acaciacamp.* TO 'acaciauser'@'localhost';
   FLUSH PRIVILEGES;
   ```

2. Import the database schema:
   ```bash
   mysql -u acaciauser -p acaciacamp < database/schema.sql
   ```

## Environment Variables

The application requires the following environment variables:

```
# App settings
NODE_ENV=production
PORT=8080
PUBLIC_URL=https://your-domain.com

# Database settings
DB_HOST=localhost
DB_PORT=3306
DB_NAME=acaciacamp
DB_USER=acaciauser
DB_PASSWORD=yourpassword

# Authentication
JWT_SECRET=your-jwt-secret
JWT_EXPIRES_IN=1d

# Third-party services
MAIL_HOST=smtp.example.com
MAIL_PORT=587
MAIL_USER=user@example.com
MAIL_PASSWORD=mailpassword
```

Create a `.env.production` file with these variables for production deployment.

## Static Assets

Optimize and manage static assets:

1. Images should be optimized before deployment (use tools like ImageOptim).
2. Consider using a CDN for static assets in production.
3. Configure caching headers for static assets.

## Performance Optimization

1. Enable compression:
   
   For Nginx:
   ```nginx
   gzip on;
   gzip_comp_level 5;
   gzip_min_length 256;
   gzip_proxied any;
   gzip_vary on;
   gzip_types
     application/javascript
     application/json
     application/xml
     text/css
     text/javascript
     text/plain
     text/xml;
   ```

2. Set appropriate cache headers:
   ```nginx
   location ~* \.(js|css|png|jpg|jpeg|gif|ico)$ {
     expires 30d;
     add_header Cache-Control "public, no-transform";
   }
   ```

## Security Considerations

1. Set up HTTPS:
   - Obtain an SSL certificate (Let's Encrypt is free)
   - Configure your web server to use HTTPS

2. Configure security headers:
   ```nginx
   add_header X-Frame-Options "SAMEORIGIN";
   add_header X-XSS-Protection "1; mode=block";
   add_header X-Content-Type-Options "nosniff";
   add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';";
   add_header Referrer-Policy "no-referrer-when-downgrade";
   ```

3. Rate limiting to prevent abuse:
   ```nginx
   limit_req_zone $binary_remote_addr zone=api:10m rate=10r/s;
   
   location /api/ {
     limit_req zone=api burst=20 nodelay;
     proxy_pass http://localhost:8080;
   }
   ```

## Monitoring and Logging

1. Application Logging:
   - Configure Winston or another Node.js logging library
   - Send logs to a central logging service (ELK Stack, Loggly, etc.)

2. Performance Monitoring:
   - Set up New Relic, Datadog, or another APM tool
   - Monitor server resources (CPU, memory, disk space)

3. Uptime Monitoring:
   - Configure Uptime Robot, Pingdom, or similar service
   - Set up alerts for downtime

## Troubleshooting

Common deployment issues and solutions:

1. **Application won't start**:
   - Check environment variables
   - Verify database connection
   - Check port availability

2. **Database connection issues**:
   - Verify database credentials
   - Check network connectivity
   - Ensure proper access permissions

3. **API errors**:
   - Check server logs
   - Verify API endpoints
   - Test with tools like Postman

4. **Static assets not loading**:
   - Check file paths
   - Verify web server configuration
   - Clear browser cache 