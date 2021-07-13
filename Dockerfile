FROM ubuntu:latest
RUN apt-get update && apt-get install -y nodejs
WORKDIR /usr/app
RUN apt-get install -y npm

COPY package-lock.json .
COPY package.json .

RUN npm install
COPY app.js .