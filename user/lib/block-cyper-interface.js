const fetch = require('node-fetch');

class BlockCyperInterface {

	constructor(){
		this.token = _getToken();
	}

	async generateWallet() {
		let response = await fetch(`https://api.blockcypher.com/v1/eth/main/addrs?token=${this.token}`, {
			method: 'POST'
		});

		return await response.json();
	}
}

module.exports = BlockCyperInterface;

//Private helper functions

async function _getToken() {
	return new Promise((resolve, reject) => {
		fs.readFile('./block-cypher-token.txt', 'utf8', (err, data) => {
			if (err) reject(err);
			else resolve(data);
		});
	});
}