FROM node:9
ARG USR=user

#Does all the things we need to do as root
RUN apt-get update && \
  apt-get install sudo && \
  useradd -ms /bin/bash $USR && \
  usermod -aG sudo $USR && \
  echo "$USR ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers && \
  mkdir /app && \
  chown -R $USR:$USR /app/ && \
  npm install -g expo-cli

USER $USR:$USR
WORKDIR /app
ADD . /app/.

CMD ["yarn", "start"]