FROM node:16

MAINTAINER Leonhard Wolf

# Copy repository data to container.
WORKDIR /usr/src/app
COPY . .

# Build the web-client.
WORKDIR /usr/src/app/web-client
RUN npm install && npm run build

# Move the web-client files to the web-server's public folder.
RUN mv ./build ../web-server/public

EXPOSE 5500

# Install the web-server dependencies.
WORKDIR /usr/src/app/web-server
RUN npm install

CMD npm run prod