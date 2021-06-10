FROM node as builder

WORKDIR /app

COPY . .

RUN npm i && npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/dist/carDealerClient .

ENTRYPOINT ["nginx", "-g", "daemon off;"]