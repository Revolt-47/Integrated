FROM node:current-alpine
WORKDIR /server

COPY package*.json ./
RUN npm install

EXPOSE 3001

COPY . .
CMD ["node","server.js"]