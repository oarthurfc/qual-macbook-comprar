FROM node:18 AS base
WORKDIR /app
COPY package*.json ./

# Development target
FROM base AS development
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev:docker"]

# Builder target
FROM base AS builder
RUN npm ci --only=production
COPY . .
RUN npm run build

# Production target
FROM node:18-slim AS production
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
EXPOSE 3000
CMD ["npm", "start"]