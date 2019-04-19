# GuacChain - Smart Contracts

This directory contains the smart contracts written in Solidity that make up the GuacChain DApp.

## Directory Structure
___

GuacChain is built using a micro service architecture with each individual folder from root representing it's own application. Here is a description of each folder

* **contracts** - code for smart contracts
* **migrations** - migration scripts used by truffle
* **test** - contract unit test cases

## NPM Dependencies
___

These dependencies are assumed you have installed the required dependencies listed in the [README.md](../README.md) at the root directory. Here are the key node package required by the application along with required versions if they are significant.

* Truffle (5.0 or Greater)
* Express

Command to install dependencies:

```bash
npm install
```

## Contract Service
___

`app.js` is a small express server with an API endpoint that will serve the contract ABI and address for a given Ethereum network id. Truffle will record deployment information for the contract regarding the network id. However if there is no given network id, then Ganache will randomly generate. In order to utilize this service, start ganache with this command:

```bash
# The network id can be any arbitrary number during development
ganache-cli -i <network_id>
```

To run the service run this command
```bash
npm start
```

### Dockerization
___

There is a `Dockerfile` at the root of the directory such that the service will auto compile with `docker-compose` and deploy into a container. This helps orchestrate the development environment. For Docker best practices, checkout the [BEST-PRACTICES.md](../BEST-PRACTICES.md) file at the root of the directory