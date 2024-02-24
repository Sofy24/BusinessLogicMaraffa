FROM node:20-alpine

WORKDIR /app
 
COPY yarn.lock package.json /app/
 
RUN yarn install
 
COPY . /app
 
RUN yarn build
 
EXPOSE ${PORT}
 
CMD ["node","dist/main.js"]
