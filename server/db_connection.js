// Template to connect to the db, you need only change the value
const Pool = require('pg').Pool;
const pool = new Pool({
    user:"your_user",
    password:"your_password",
    host:"localhost",
    port:"5432",
    database:"your_database",
})
module.exports = pool;