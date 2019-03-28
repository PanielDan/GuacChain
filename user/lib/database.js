const pgp = require('pg-promise');

const db = pgp({
    host: creds.host,
    port: creds.port,
    database: "dev",
    user: creds.user,
    password: creds.password
});

class PostgresDB {
    constructor (credentials) {
        
    }
}