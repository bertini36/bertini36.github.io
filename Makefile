#!/bin/bash

ifndef T
override T = web
endif

ifndef UID
override UID = 1001
endif

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
	docker-compose run --rm --entrypoint sh web -c "export SAPPER_ENV=production && npm run deploy"

backend-deploy:
	docker-compose run --rm --entrypoint /bin/sh serverless -c "cd /code/ && serverless deploy"