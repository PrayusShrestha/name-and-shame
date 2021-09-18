FROM node:alpine
RUN mkdir -p /usr/app
RUN chown node:node /usr/app
USER node
WORKDIR /usr/app

# add `/web/node_modules/.bin` to $PATH
ENV PATH /web/node_modules/.bin:$PATH

# install app dependencies
COPY --chown=node:node package.json /usr/app/

RUN npm install

COPY --chown=node:node . /usr/app/

EXPOSE 3000

RUN npm config set unsafe-perm true

# start app
CMD ["npm", "start"]
