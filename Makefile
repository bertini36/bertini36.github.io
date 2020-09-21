#!/bin/bash

ifndef T
override T = web
endif

include .env
$(eval export $(shell sed -ne 's/ *#.*$//; /./ s/=.*$$// p' .env))

build:
	docker-compose build ${T}

up:
	docker-compose up -d web

restart:
	docker-compose restart

stop:
	docker-compose stop

down:
	docker-compose down

kill:
	docker-compose kill

ps:
	docker-compose ps

ssh:
	docker-compose run --rm --entrypoint bash ${T}

logs:
	docker-compose logs -f --tail 100 ${T}

clean-all:
	docker-compose kill
	docker-compose rm -v

frontend-deploy:
	docker-compose run --rm --entrypoint sh web -c "export COMMENTS_BASE_URL=${COMMENTS_BASE_URL} && npm run deploy"

backend-deploy:
	docker-compose run --rm --entrypoint /bin/sh serverless -c "cd /code/ && serverless deploy"