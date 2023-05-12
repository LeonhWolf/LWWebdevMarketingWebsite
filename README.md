# Intro

This is the repository for my portfolio website. Feel free to have a look around.

## Docker Commands

### Build the Image

> docker image build . -t image-tag-you-choose --progress=plain

**Path to the Dockerfile:**

_build ./path/to/Dockerfile_

**Enable logging while building the image:**

_--progress=plain_

### Run the Container

> docker container run -d -p host-port:container-port --env-file /path/to/env/file --name name-of-container image-tag

**Run detached (without blocking the CLI):**

_-d_

**Port mapping:**

_-p host-port-container:container-port_

**Read environment variables from .env file into the container**

_--env-file ./path/to/file_

The variables need to be in format: ENV_KEY=env-value
(no quotation marks for the value!)

**Give the container a custom name:**

_--name the-name-you-choose_

### Run Commands in a Running Container

> docker exec -it container-name bash

**Go into the container:**

_-it_

(stands for interactive)

### See the Logs of a Container

> docker container logs container-name
