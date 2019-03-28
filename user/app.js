const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const errorhandler = require('errorhandler');

let isProduction = process.env.NODE_ENV === 'production';

let app = express();

app.use(cors());
app.use(bodyParser.json());

if (!isProduction) {
	app.use(errorhandler());
}

// Routes
app.use(require('./routes'));

// Development error handler will print stacktrace
if (!isProduction) {
	app.use((err, req, res, next) => {
		console.log(err.stack);
	
		res.status(err.status || 500);

		res.json({
			'errors': {
				message: err.message,
				error: err
			}
		});
	});
} 
// Production error handler
else {
	app.use((err, req, res, next) => {
		res.status(err.status || 500);
		res.json({
			'errors': {
				message: err.message,
				error: err
			}
		});
	  });
}

// setup server
let server = app.listen(process.env.PORT || 3000, () => {
	console.log('Listening on port ' + server.address().port);
});