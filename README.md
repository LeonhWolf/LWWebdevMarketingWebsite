# Intro

This is the repository for my portfolio website. Feel free to have a look around.

## Docker Commands

### Build the Image

>`docker image build . -t image-tag-you-choose --progress=plain`

Path to the Dockerfile:

`build ./path/to/Dockerfile`

Enable logging while building the image:

`--progress=plain`

### Run the Container

>`docker container run -d -p host-port:container-port --env-file /path/to/env/file --name name-of-container image-tag`

Run detached (without blocking the CLI):

`-d`

Port mapping:

`-p host-port-container:container-port`

Read environment variables from .env file into the container

`--env-file ./path/to/file`

_(the variables need to be in format: ENV_KEY=env-value, so no quotation marks for the value)_

Give the container a custom name:

`--name the-name-you-choose`

### Run Commands in a Running Container

>`docker exec -it container-name bash`

Go into the container:

`-it`

_(stands for interactive)_

### See the Logs of a Container

>`docker container logs container-name`
