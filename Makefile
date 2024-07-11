# Include Environment Variables
include .env

project_start:
	docker compose up -d

project_stop:
	docker compose down