FROM node:10
WORKDIR /rpapp
COPY package.json /rpapp
RUN npm install
COPY . /rpapp
CMD node rpapp.js
EXPOSE 3000