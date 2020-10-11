FROM node:latest

ENV COMMENTS_URL http://127.0.0.1:5000/comments/

WORKDIR code

COPY package.json .

RUN npm install
