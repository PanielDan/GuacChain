# GuacChain

GuacChain is a blockchain proof of concept (PoC) created by West Monroe Partners. This application highlights blockchain's ability to show food provenance through tracking avocados from regional farmer aggregation to purchase at a supermarket or consumption at a restaurant.

## Directory Structure
___

GuacChain is built using a micro service architecture with each individual folder from root representing it's own application. Here is a description of each folder and a link to their respective README.

* [blockchain](./blockchain/README.md) - smart contract that represent the GuacChain DApp
* [user](./user/README.md) - user service that manage user credentialing and wallets

## Dependencies
___

The application requires these tools, libraries, and applications to installed or running with target versions as necessary:

* Node.js (version 8.9.4 or greater)
* Docker
* Ethereum RPC Client (Ganache, Quorum, Geth)
* PostgreSQL

## Running the application locally
___

1. Install all the dependencies listed above
2. Start an instance of ganache
```bash
# Install ganache-cli globally if it is not on the system
npm install -g ganache-cli

# Run ganache in a separate shell window. directory does not matter
ganache-cli
```
2. Build and deploy blockchain contracts

```bash
# Navigate to blockchain directory
cd blockchain

# Install all NPM dependencies
npm install

# Compile smart contracts
npx truffle compile

# Deploy smart contracts to local ganache test rpc instance
npx truffle migrate
```

3. Configure TypeORM configuration files (`.ormconfig`) with DB information in these services

    * user

4. Use Docker to deploy remaining smart contracts (Make sure Docker daemon is running)

```bash
# build and micro services with docker-compose
docker-compose up
```

5. Refer to the `docker-compose.yml` file for each service's port