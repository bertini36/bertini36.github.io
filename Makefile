#!/bin/bash

ifndef TARGET
override TARGET = django-app
endif

ifndef UID
override UID = 1001
endif

DOCKER_COMPOSE = docker-compose --project-name blog

# General commands

build:
	$(DOCKER_COMPOSE) build

up:
	$(DOCKER_COMPOSE) up -d

down:
	$(DOCKER_COMPOSE) down

restart:
	$(DOCKER_COMPOSE) restart

kill:
	$(DOCKER_COMPOSE) kill

stop:
	$(DOCKER_COMPOSE) stop

ps:
	$(DOCKER_COMPOSE) ps

rm:
	$(DOCKER_COMPOSE) rm

ssh:
	$(DOCKER_COMPOSE) run --entrypoint bash ${TARGET}

log:
	$(DOCKER_COMPOSE) logs -f --tail 100 ${TARGET}

clean:
	$(DOCKER_COMPOSE) down -v --rmi all --remove-orphans

run_tests:
	$(DOCKER_COMPOSE) run --user=${UID} --rm --entrypoint pytest tests-runner --cov-report term --cov=blog/blog/
	$(DOCKER_COMPOSE) run --user=${UID} --rm --entrypoint rm  tests-runner -rf .pytest_cache/

# Django commands

shell:
	$(DOCKER_COMPOSE) run --user=${UID} --rm --entrypoint python django-app manage.py shell_plus

showmigrations:
	$(DOCKER_COMPOSE) run --user=${UID} --rm --entrypoint python django-app manage.py showmigrations

makemigrations:
	$(DOCKER_COMPOSE) run --user=${UID} --rm --entrypoint python django-app manage.py makemigrations

migrate:
	$(DOCKER_COMPOSE) run --user=${UID} --rm --entrypoint python django-app manage.py migrate

collectstatic:
	$(DOCKER_COMPOSE) run --user=${UID} --rm --entrypoint python django-app manage.py collectstatic --noinput

createsuperuser:
	$(DOCKER_COMPOSE) run --user=${UID} --rm --entrypoint python django-app manage.py createsuperuser

dbshell:
	$(DOCKER_COMPOSE) run --user=${UID} --rm --entrypoint python django-app manage.py dbshell

loadbackup:
	$(DOCKER_COMPOSE) run --user=${UID} --rm --entrypoint python django-app manage.py load_backup

# Node commands

npminstall:
	$(DOCKER_COMPOSE) run --rm --entrypoint npm svelte-app install ${args}

svbuild:
	$(DOCKER_COMPOSE) run --user=${UID} --rm --entrypoint npm svelte-app run build
