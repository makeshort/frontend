docker-build:
	docker build -t makeshort-frontend .

docker-run: docker-build
	docker run -p 8081:3000 -d makeshort-frontend