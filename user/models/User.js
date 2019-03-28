const pgp = require('pg-promise');
const creds = require('../lib/credentials.json');
const BlockCyperInterface = require('../lib/block-cyper-interface.js');

class UserModel {
	constructor() {
		this.db = pgp({
			host: creds.host,
			port: creds.port,
			database: "dev",
			user: creds.user,
			password: creds.password
		});

		this.blockCypherInterface = new BlockCyperInterface();
	}

	async createAccount(email) {
		let ethWallet = await this.blockCypherInterface.generateWallet();
    
		try {
			await this.db.query('INSERT INTO users VALUES ($1, $2, $3)', [email, ethWallet.wallet, ethWallet.private_key]);
		} catch (err) {
			throw new Error(err);
		}
	}

}

module.exports = UserModel;