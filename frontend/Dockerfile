FROM node:latest

RUN mkdir  /react

WORKDIR /react

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "start", "--bind=0.0.0.0:3000"]