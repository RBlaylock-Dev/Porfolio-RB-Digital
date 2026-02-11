.PHONY: dev build start lint test clean install

# Development
dev:
	npm run dev

# Installation
install:
	npm install --legacy-peer-deps

# Build and Production
build:
	npm run build

start:
	npm run start

# Quality
lint:
	npm run lint

# Cleanup
clean:
	rm -rf .next node_modules package-lock.json

# Docker
docker-dev:
	docker compose up --build

docker-stop:
	docker compose down
