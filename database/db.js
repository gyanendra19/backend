const Pool = require('pg').Pool;


const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'ticket',
    password: 'gunjan19',
    port: 5432
})

module.exports = pool;