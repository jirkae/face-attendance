FROM node:11-alpine

WORKDIR /app

RUN apk add --update alpine-sdk && apk --no-cache add g++ gcc libgcc libstdc++ linux-headers make python python-dev git 
#&& apk --no-cache add libc6-compat

COPY package.json /app
RUN npm i face-api.js @tensorflow/tfjs-node

COPY . /app

CMD node index.js
EXPOSE 8081