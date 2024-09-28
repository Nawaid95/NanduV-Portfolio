FROM node:22-alpine

# set working directory
WORKDIR /nanduv-portfolio

# add `/app/node_modules/.bin` to $PATH
ENV PATH /nanduv-portfolio/node_modules/.bin:$PATH

# install app dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install --silent

# copy source code
COPY . .