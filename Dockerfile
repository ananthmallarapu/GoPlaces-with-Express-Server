FROM node:boron

# Create app directory
WORKDIR /app

RUN mkdir GoPlaces
RUN mkdir ExpressAssinment
# Install app dependencies
COPY GoPlaces/package.json ./GoPlaces/package.json

RUN cd GoPlaces; npm install

COPY ExpressAssinment/package.json ./ExpressAssinment/package.json
RUN cd ExpressAssinment; npm install

# For npm@5 or later, copy package-lock.json as well
# COPY package.json package-lock.json ./
COPY . .



# Bundle app source
RUN cd GoPlaces; npm run build
RUN npm install; npm cache clean


EXPOSE 3000
