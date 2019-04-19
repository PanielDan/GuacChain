const express = require('express');
const cors = require('cors');
const fs = require('fs');

let app = express();
app.use(cors());

async function getContractJSON(contractName) {
    return new Promise((resolve, reject) => {
        fs.readFile(`./build/contracts/${contractName}.json`, 'utf8', (err, data) => {
            if (err) reject(err);
            else resolve(JSON.parse(data));
        });
    });
}

/*
    API sends back the contract ABI and address given the networkID
*/
app.get('/:networkID/:contract', async (req, res) => {
    let contract = req.params.contract;
    let networkID = req.params.networkID;

    try {
        let json = await getContractJSON(contract);
        
        res.status(200);
        res.json({
            abi: json.abi,
            address: json.networks[networkID.toString()].address
        });
    } catch(err) {
        res.status(500);
        res.json({ error: err });
    }
});

app.listen(3000);