# MERN and Docker boilerplate

## Setup

Install:
- node
- npm
- Docker and Docker Compose

Create a `.env` file in the `/server` folder (see `.env.template`). For local development with docker, you may use `http://localhost:27017` as your `ATLAS_URI`.

## Usage

Build this project:
`$ docker-compose build`

Run this project:
`$ docker-compose up`

See the project up at `http://localhost:3000`!

Install package in client: `docker exec mern-test-client npm install --save <package-name>`

Install package in server: `docker exec mern-test-client npm install --save <package-name>`
