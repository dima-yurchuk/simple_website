FROM node:16

WORKDIR /usr/src/website_app

COPY package*.json ./
RUN npm install

COPY . .

CMD ["npm", "start"]