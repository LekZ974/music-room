FROM node:9

WORKDIR /app

RUN yarn global add expo-cli
# RUN exp login --username javamu --password supersecret
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN yarn install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .