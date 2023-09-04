FROM node:17-alpine AS builder

WORKDIR /app
COPY ./package.json .
COPY . .
RUN npm install --legacy-peer-deps
# RUN npm run build
CMD npm start
