FROM node:16-alpine  AS builder
WORKDIR /code
COPY ./frontend .
RUN npm install --legacy-peer-deps && npm run build
RUN ls

FROM node:16-alpine  AS server
COPY --from=builder /code/build /build
WORKDIR /code
COPY ./backend .
RUN mv /build .
RUN npm install

EXPOSE 5000

CMD ["node", "index.js"]