FROM node:18
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN echo "build sucesss"
CMD ["node","index.js"]