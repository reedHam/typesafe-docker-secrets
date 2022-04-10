FROM node:current-alpine

ENV NODE_ENV "production"

WORKDIR /usr/bin/app

COPY package.json ./
COPY yarn.lock ./
COPY ./build ./src
RUN yarn install --production

CMD node src/main.js