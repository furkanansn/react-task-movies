# Movie FA

Movie FA is a React app for movies collection application.

## Live Demo

The live demo of the Movie FA React app can be accessed [here](https://movie-fa-plku.onrender.com). Please note that the backend is hosted on Render's free plan. If there has been no request for a while, the backend may enter a sleeping state. In such cases, the first request may experience a delay of 15-20 seconds as the backend wakes up. Please be patient during this initial wait. If the page doesn't load within 20 seconds, consider refreshing your browser.

> Note: If the page does not load within 20 seconds, please refresh your browser to wake up the backend.


## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Development](#development)
  - [Available Scripts](#available-scripts)
  - [Environment Variables](#environment-variables)
- [Deployment](#deployment)
  - [Staging](#staging)
  - [Production](#production)
- [Docker](#docker)
  - [Building Docker Images](#building-docker-images)
  - [Docker Compose](#docker-compose)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (version 14 or later)
- Yarn
- Docker (optional, for containerization)

### Installation

Clone the repository:

```bash
git clone https://github.com/furkanansn/react-task-movies.git
cd react-task-movies
```

Install dependencies:

```bash
yarn install
```

# Development

Available Scripts
In the project directory, you can run:

- yarn start:staging: Run the app in staging mode.
- yarn start:production: Run the app in production mode.
- yarn build:staging: Build the app for staging.
- yarn build:production: Build the app for production.
- yarn test: Run tests.
- yarn eject: Eject from Create React App configuration.
  Environment Variables
- REACT_APP_ENV: Set this variable to either staging or production when running or building the app.

# Deployment

Staging

To deploy the app in staging mode, run:

```bash
yarn build:staging
```

Production

To deploy the app in production mode, run:

```bash
yarn build:production
```

# Docker

Building Docker Images

Build the Docker image for staging:

```bash
docker build -t movie-fa:staging -f Dockerfile.staging .
```

Build the Docker image for production:

```bash
docker build -t movie-fa:production -f Dockerfile.production .
```

# Docker Compose

Staging Docker Compose:

```bash
docker-compose -f docker-compose.staging.yml up
```

Production Docker Compose:

```bash
docker-compose -f docker-compose.production.yml up
```

# Testing

Run tests with:

```bash
yarn test
```
