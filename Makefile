#!make
include .env

build:
	@docker-compose build --force

install-expo:
	@docker-compose run --rm react yarn install

install-api:
	@docker-compose run --rm api yarn install

install: install-expo install-api

start-dev:
	@docker-compose up -d

stop-dev:
	@docker-compose stop

expo:
	@docker-compose run react bash -c "expo login --username ${USERNAME} --password ${PASSWORD} && yarn start --tunnel"

.PHONY: build install-expo install-api install start-dev stop-dev expo