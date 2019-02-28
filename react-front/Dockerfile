FROM node:9

WORKDIR /app

EXPOSE 19000
EXPOSE 19001
EXPOSE 19002

RUN yarn global add expo-cli
# Prepare install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
#COPY package*.json ./
#COPY yarn.lock ./
#
#RUN yarn install
## If you are building your code for production
## RUN yarn install --only=production
#
## Bundle app source
##COPY . .