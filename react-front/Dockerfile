FROM node:latest
RUN mkdir -p /usr/src/react-front
WORKDIR /usr/src/react-front

RUN npm set progress=false && \
npm install -g expo-cli && \
npm install

RUN expo-cli login --username lekz --password itiqiti
CMD [ "expo", "start", "--tunnel", "--send-to","hoa.alexandre@gmail.com"]

EXPOSE 19000
EXPOSE 19001