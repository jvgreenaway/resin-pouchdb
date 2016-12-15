# FROM resin/raspberrypi3-alpine-node
FROM orbitbox/orbit-os-node:latest

WORKDIR /usr/src/app

COPY package.json package.json

RUN JOBS=MAX npm install --production --unsafe-perm && npm cache clean && rm -rf /tmp/*

COPY . ./

CMD ["npm", "start"]
