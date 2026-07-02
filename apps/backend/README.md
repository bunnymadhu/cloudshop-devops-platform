# CloudShop Backend API

## Overview

The Backend API provides the core business logic for the CloudShop platform.

## Tech Stack

- Node.js
- Express
- Docker

## Endpoints

| Endpoint | Description |
|----------|-------------|
| / | Service Information |
| /health | Health Check |

## Run Locally

```bash
npm install
npm start
```

## Docker

Build

```bash
docker build -t cloudshop-backend:v1 .
```

Run

```bash
docker run -d \
-p 3001:3001 \
--name backend-api \
cloudshop-backend:v1
```
