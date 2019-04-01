import 'reflect-metadata';
import { createConnection } from 'typeorm';
import express from 'express';
import bodyParser from 'body-parser';
import { router } from './routes';
import cors from 'cors';
import errorhandler from 'errorhandler';

createConnection().then(connection => {
    // create environment variables
    let isProduction = process.env.NODE_ENV === 'production';

    // create express app
    const app = express();
    app.use(cors());
    app.use(bodyParser.json());

    // register express routes from the routes folder;
    app.use(router);
    
    if (!isProduction) {
        app.use(errorhandler());
    }

    // start express server
    let server = app.listen(process.env.PORT || 3000, () => {
        console.log('Listening on port ' + server.address().port);
    });
}).catch(error => console.log(error));
