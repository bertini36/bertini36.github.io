#!/bin/bash

ifndef T
override T = web
endif

ifndef UID
override UID = 1001
endif

build:
	docker-compose build --no-cache ${T}

up:
	docker-compose up -d

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
