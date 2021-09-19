# Name and Shame

Welcome to Name and Shame, a website where you can review and read others' reviews of other companies! The purpose of Name and Shame is to bring awareness to unethical corporate practices and hold business accountable.

## Table of Contents

1. [Features](#features)
2. [Setup](#setup)
3. [Usage](#usage)
4. [Technologies](#technologies)
5. [Contributors](#contributors)

## Features

### Implemented

On the home page, you are greeted with a home page where you can search for a company or start writing a review right away!

![Alt text](/assets/home.png?raw=true "Home page")

You can create a new company to write reviews for, or write a review for an existing company! You can rate a company's unethical level (0 being a very ethical company and 5 being very evil) and put tags highlighting the company's major points.

![Alt text](/assets/form.png?raw=true "Writing a review")

You can also see all reviews written for a company. See the average unethical rating of a company summed up from all reviews and the major tags associated with them!

![Alt text](/assets/company-page.png?raw=true "Company reviews page")

### Planned
- Search companies by industry and receive a list of companies sorted by unethical ratings
- Show latest reviews on front page
- Sort reviews by popularity/date
- Allow upvotes on reviews
- Sort company tags by frequency and counts associated with them


## Setup

Install:
- Docker and Docker Compose

Create a `.env` file in the `/server` folder (see `.env.template`). For local development with docker, you may use `mongodb://mongo:27017/name-and-shame-db` as your `ATLAS_URI`.

## Usage

Build this project:
`$ docker-compose build`

Run this project:
`$ docker-compose up`

See the project up at `http://localhost:3000`!

Install package in client: `$ docker exec name-and-shame-client npm install --save <package-name>`

Install package in server: `$ docker exec name-and-shame-server npm install --save <package-name>`

## Technologies
- MongoDB
- Express
- React
- Node
- Docker
- Notion (for our [API doc](https://trusted-pest-44b.notion.site/Hack-The-North-475cb91ea73e44c693ad4bb2e898de5d))

## Contributors
- [Kate Huang](https://github.com/katejh)
- [Evan Liu](https://github.com/Evanyl)
- [Prayus Shrestha](https://github.com/PrayusShrestha)
- [Aileen Zhang](https://github.com/aileenrzhang)
