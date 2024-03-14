FROM node:18-alpine
WORKDIR /usr/src/app
COPY . ./
COPY package.json ./
RUN npm install --legacy-peer-deps
CMD ["npm", "start"]


