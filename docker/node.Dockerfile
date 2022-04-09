FROM node:current-alpine

ENV NODE_ENV = "production"

WORKDIR /usr/bin/app

COPY package.json ./
COPY yarn.lock ./
COPY ./build ./build

RUN yarn install --production

CMD yarn start