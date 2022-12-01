FROM node:alpine

WORKDIR /usr/index

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD npm start