FROM node:20.12.2-alpine

WORKDIR /app

COPY ./server/package*.json ./

RUN npm install

COPY ./server .

EXPOSE 4000
EXPOSE 4001

CMD ["npm","run","dev"]