FROM node:lts-alpine3.10

RUN mkdir -p /app

WORKDIR /app
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN npm ci --no-optional
