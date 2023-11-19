FROM node:12
WORKDIR /app
COPY package.json .
RUN npm install 
COPY . ./
ENV port 5000
EXPOSE $port
CMD ["npm","run","start"]