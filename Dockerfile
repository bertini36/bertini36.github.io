FROM node:latest

ENV SAPPER_ENV development

WORKDIR code

COPY package.json .

RUN npm install
