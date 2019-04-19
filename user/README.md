# GuacChain - User Service

This directory contains a containerized micro service for managing user credentials, information, and wallets.

## Directory Structure
___

GuacChain is built using a micro service architecture with each individual folder from root representing it's own application. Here is a description of each folder

* **src**
    * _app.ts_ - entry point for express server
    * controller - business logic for the routes
    * entity - data models for the ORM
    * migration - DB migration scripts
    * providers - providers that interact with external services and libraries
    * routes - API routes
* **lib** - constants and other required files
* **build** - typescript compilation directory

## NPM Dependencies
___

These dependencies are assumed you have installed the required dependencies listed in the [README.md](../README.md) at the root directory. Here are the key node package required by the application along with required versions if they are significant.

* TypeScript
* TypeORM
* Express
* ESLint

Command to install dependencies:

```bash
npm install
```

## Configure TypeORM
___

Here are the steps needed to configure TypeORM such that it connects to an Postgres database instance:

1. Make a copy of `.ormconfig.example.json` and rename it to `.ormconfig.json`.
2. Fill these fields in the json file
    * host
    * port _(if different from default)_
    * username
    * password
    * database

## Running the service
___

Run the service with this to make sure relative filepaths are correct:

```bash
npm start
```

## Configuring Node Environment Variables
___

TBD Danny needs to do some research on the process.ENV variablee configuration. 

## Dockerization
___

There is a `Dockerfile` at the root of the directory such that the service will auto compile with `docker-compose` and deploy into a container. This helps orchestrate the development environment. For Docker best practices, checkout the [BEST-PRACTICES.md](../BEST-PRACTICES.md) file at the root of the directory