FROM node:20.12.2-alpine

WORKDIR /app

COPY ../package*.json ./

CMD ["npm","install"]

COPY ./server .

EXPOSE 4000

CMD ["npm","run","dev"]