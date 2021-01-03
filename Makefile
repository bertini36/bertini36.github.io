all: build

include .env
$(eval export $(shell sed -ne 's/ *#.*$//; /./ s/=.*$$// p' .env))

.PHONY: build
build:
	@echo "📦 Building app"
	@docker-compose build --no-cache web

up:
	@echo "🛫 Serving app"
	docker-compose up web

down:
	@echo "🔌 Disconnecting"
	@docker-compose down

restart:
	@echo "↩️ Restarting"
	@docker-compose restart

connect:
	@echo "🔞 Connecting to container"
	@docker-compose run --rm --entrypoint bash

log:
	@echo "📋 Showing logs"
	@docker-compose logs -f --tail 100 web

test:
	@echo "🏃‍ Running tests"
	@docker-compose run --rm --entrypoint sh web -c "npm run test"

deploy:
	@echo "🚀 Let's deploy!!!"
	@docker-compose run --rm --entrypoint sh web -c "export COMMENTS_URL=${COMMENTS_URL} && npm run deploy"
