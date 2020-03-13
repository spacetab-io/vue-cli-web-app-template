IMAGE = {{name}}
VERSION = latest
STAGE = dev

assemble:
	npm install && STAGE=$(BUILD_ENV) npm run build

image:
	docker build -t $(IMAGE):$(VERSION) --build-arg STAGE=$(STAGE) .

run:
	docker run \
		--rm -it --init --name {{name}} -p 8080:8080 \
		-e STAGE=$(STAGE) \
		$(IMAGE):$(VERSION)
