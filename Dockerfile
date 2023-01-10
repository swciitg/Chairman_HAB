FROM node:16-alpine  AS builder
WORKDIR /code
COPY ./frontend .
RUN npm install --legacy-peer-deps && REACT_APP_BASEAPIURL=https://swc2.iitg.ac.in/chairman_hab/api npm run build

FROM node:16-alpine  AS server
COPY --from=builder /code/build /build
WORKDIR /code
COPY ./backend .
RUN mv /build . \
    && npm install

EXPOSE 5000

CMD ["node", "index.js"]