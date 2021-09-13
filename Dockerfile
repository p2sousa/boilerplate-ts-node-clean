FROM node:14.17.0-alpine3.13

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn

COPY . .

RUN yarn build

CMD [ "node", "./dist/cmd/main.js"]
