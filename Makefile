# Include Environment Variables
include .env

project_start:
	docker compose up -d

project_stop:
	docker compose down

client_setup: 
	docker exec -it -u root ${PROJECT_NAME}-client npx create-expo-app@latest --template

client_start:
	docker exec -it -u root ${PROJECT_NAME}-client npm run start

client_android:
	docker exec -it -u root ${PROJECT_NAME}-client npm run android

client_update:
	docker exec -it -u root ${PROJECT_NAME}-client npm update

client_install:
	docker exec -it -u root ${PROJECT_NAME}-client npm install

client_deploy:
	docker exec -it -u root ${PROJECT_NAME}-client /bin/bash

server_install:
	docker exec -it -u root ${PROJECT_NAME}-server npm install

server_start:
	docker exec -it -u root ${PROJECT_NAME}-server npm run dev

server_deploy:
	docker exec -it -u root ${PROJECT_NAME}-server /bin/bash

server_setup:
	docker exec -it -u root ${PROJECT_NAME}-server nvm install 7
	docker exec -it -u root ${PROJECT_NAME}-server npm install koa
	docker exec -it -u root ${PROJECT_NAME}-server node my-koa-app.js