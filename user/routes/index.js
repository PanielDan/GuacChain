
const router = require('express').Router();

router.use('/account', require('./account.js'));

module.exports = router;