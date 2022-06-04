# nchan with openresty learning

## Docker image build

```code
cd images 
docker build -t dalongrong/openresty:1.21.4.1-alpine .
docker build -t dalongrong/openresty:1.21.4.1-alpine-fat -f Dockerfile-alpine-fat .
```

## nchan testing 


* starting service

```code
docker-compose up -d
```

* do some test

> use `websocat`

```code
sub message:

websocat ws://localhost/redis_sub/demoapp

pub message:

curl --location --request POST 'localhost/redis_pub/demoapp' \
--header 'Content-Type: application/json' \
--data-raw '{
    name:"dalong"
}'
```