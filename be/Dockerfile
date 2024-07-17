# Description: Dockerfile for the backend
FROM node:22-alpine as build

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "node" , "index.js"]