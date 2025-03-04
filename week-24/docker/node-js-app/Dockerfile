FROM node:20-alpine

WORKDIR /app


COPY . .

RUN npm install

# Then copy the rest of the application
COPY . .

EXPOSE 3000

CMD [ "node", "index.js" ]
