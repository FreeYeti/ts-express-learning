FROM freeyeti/dev-in-docker:node-16-yarn-2 AS builder

RUN mkdir /test-backend
WORKDIR /test-backend
COPY . .

RUN yarn --frozen-lockfile
RUN yarn build

# remove development dependencies
RUN npm prune --production

FROM node:16-alpine AS node

RUN mkdir /app
WORKDIR /app

COPY --from=builder /test-backend/build ./build
COPY --from=builder /test-backend/node_modules ./node_modules

FROM alpine:3.15.0

RUN mkdir /app
WORKDIR /app

COPY --from=node /app /app
COPY --from=node /usr/local/bin/node /usr/local/bin/
COPY --from=node /usr/lib/ /usr/lib/

EXPOSE 3000
CMD ["node", "./build/server.js"]
