FROM node:22-alpine

WORKDIR /app

COPY app.js /app/
COPY package.json /app/

RUN npm install

EXPOSE 8000

CMD ["node", "app.js"]