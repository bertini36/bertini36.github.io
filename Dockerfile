FROM node:latest

WORKDIR code

COPY package.json .

RUN npm install
