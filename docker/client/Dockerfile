FROM node:20.12.2-alpine

WORKDIR /app

COPY ../package*.json ./

CMD ["npm","install"]

COPY ./client .

EXPOSE 3000

CMD ["npm","run","dev"]