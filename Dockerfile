FROM node:14.16.0-alpine

WORKDIR /app

RUN apk update && \
    npm install && \
    npm install -g npm && \
    npm install -g @vue/cli