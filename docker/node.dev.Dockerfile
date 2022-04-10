FROM node:current-alpine

ENV NODE_ENV "development"

WORKDIR /usr/bin/app

COPY package.json ./
COPY yarn.lock ./
COPY ./tsconfig.json ./tsconfig.json

RUN yarn install

CMD yarn start:dev