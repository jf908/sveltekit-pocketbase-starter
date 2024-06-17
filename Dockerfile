FROM node:18-alpine AS builder
WORKDIR /build
COPY ./ ./
RUN npx pnpm install && npm run build && npm run hooks:build

FROM alpine:latest

ARG PB_VERSION=0.22.13

RUN apk add --no-cache \
    unzip \
    ca-certificates

ADD https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_amd64.zip /tmp/pb.zip
RUN unzip /tmp/pb.zip -d /pb/

COPY ./pb_migrations /pb/pb_migrations

COPY --from=builder /build/pb_public /pb/pb_public
COPY --from=builder /build/pb_hooks /pb/pb_hooks

EXPOSE 8080

CMD ["/pb/pocketbase", "serve", "--http=0.0.0.0:8080"]
