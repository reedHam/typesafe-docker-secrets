FROM ubuntu:bionic

RUN apt update && apt -y upgrade \
    && apt install -y curl

RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash -

RUN apt install -y nodejs

ENV NODE_ENV=production

WORKDIR /usr/bin/app

COPY package.json ./

RUN npm install --production

COPY ./src /usr/bin/app/src
COPY ./.env /usr/bin/app/.env

CMD npm run start