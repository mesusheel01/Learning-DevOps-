FROM node:20-alpine

WORKDIR /app


COPY . .

COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "node", "index.js" ]
