const express = require('express');
const cors = require('cors');
const Web3 = require('web3');

let web3;
let app;

app.post('/updateBatch', (req, res) => {
	let batchID = req.query.batch;
	let role = req.query.role;
});

app.get('/generateBatch', (req, res) => {

	let 

	// res.status(500).json({
	// 	batchID
	// });
})

async function initialize(){
	app = express();
	app.use(cors());

	web3 = new Web3(new Web3.providers.HttpProvider(network))
}

initialize().then(retVal => {
	app.listen(3000);
})