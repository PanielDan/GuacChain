const router = require('express').Router();
const UserModel = require('../models/User.js');

let userModel = new UserModel();

router.get('/:email', async (req, res) => {
	
});

router.post('/create', async (req, res) => {
	let email = req.body.email;
	let account = await userModel.generateAccount();

	console.log(account);
	res.status(200);
	res.json(account);
});

module.exports = router;