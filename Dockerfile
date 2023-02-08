FROM docker.io/node:14-alpine3.17 as ohjelmistoija-runtime

WORKDIR /var/app

COPY package.json ./
COPY package-lock.json ./
COPY tsconfig.json ./

COPY public/ public/
COPY src/ src/

RUN npm ci


FROM docker.io/node:14-alpine3.17 as ohjelmistoija-dev
WORKDIR /var/app

COPY --from=ohjelmistoija-runtime /var/app /var/app
ENTRYPOINT ["npm", "run-script", "start"]