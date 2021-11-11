FROM keymetrics/pm2:15-alpine

RUN apk add --no-cache curl git grep unzip

WORKDIR /usr/app
COPY package*.json ./
RUN npm install --silent
COPY . ./

EXPOSE 80

CMD ["pm2-runtime", "start", "ecosystem.config.js"]
