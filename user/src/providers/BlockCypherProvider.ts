import fetch from 'node-fetch';
import fs from 'fs';

export class BlockCypherProvider {

    private _token: string;

    constructor(){
    	this._getToken().then(token => {
    		this._token = token;
    	});
    }

    private async _getToken(): Promise<string> {
    	return new Promise((resolve, reject) => {
    		fs.readFile('./lib/block-cypher-token.txt', 'utf8', (err, data) => {
    			if (err) reject(err);
    			else resolve(data);
    		});
    	});
    }

    public async generateWallet() {
    	let response = await fetch(`https://api.blockcypher.com/v1/eth/main/addrs?token=${this._token}`, {
    		method: 'POST'
    	});

    	return await response.json();
    }
}