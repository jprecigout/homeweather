### STAGE 1: Build ###
FROM node:10.19.0 AS build
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build --prod

### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY --from=build /usr/src/app/dist/homeweather-ui /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
