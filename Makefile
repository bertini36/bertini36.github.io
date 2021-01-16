all: build

include .env
$(eval export $(shell sed -ne 's/ *#.*$//; /./ s/=.*$$// p' .env))

service = web

.PHONY: build
build:  ## 👷 Build app
	@echo "📦 Building app"
	@docker-compose build --no-cache $(service)

up: ## 🛫 Run app
	@echo "🛫 Serving app"
	docker-compose up $(service)

down: ## 🔌 Shut down app deleting containers
	@echo "🔌 Disconnecting"
	@docker-compose down $(service)

kill: ## 🗡️ Kill containers
	@echo "🗡️ Killing"
	@docker-compose kill $(service)

restart: ## ↩️ Restart
	@echo "↩️ Restarting"
	@docker-compose restart $(service)

clean: ## 🧹 Delete containers and their volumes
	@echo "🧹 Cleaning"
	@docker-compose down -v --remove-orphans

connect: ## 🔞 Connect to container
	@echo "🔞 Connecting to container"
	@docker-compose run $(service) --rm --entrypoint bash

log: ## 📋 Show container logs
	@echo "📋 Showing logs"
	@docker-compose logs -f --tail 100 $(service)

test: ## 🏃 Run tests
	@echo "🏃‍ Running tests"
	@docker-compose run --rm --entrypoint sh web -c "npm run test"

deploy: ## 🚀 Deploy
	@echo "🚀 Let's deploy!!!"
	@docker-compose run --rm --entrypoint sh web -c "export COMMENTS_URL=${COMMENTS_URL} && npm run deploy"

help: ## 📖 Show make targets
	@echo "📖 Help"
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {sub("\\\\n",sprintf("\n%22c"," "), $$2);printf " \033[36m%-20s\033[0m  %s\n", $$1, $$2}' $(MAKEFILE_LIST)
