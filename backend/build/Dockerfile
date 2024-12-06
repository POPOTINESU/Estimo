FROM node:23.3.0-bullseye-slim

WORKDIR /usr/src/app/nest

COPY ./nest/package*.json /usr/src/app/

RUN yarn install

COPY . /user/src/app/

EXPOSE 3001

CMD ["yarn", "start:dev"]
