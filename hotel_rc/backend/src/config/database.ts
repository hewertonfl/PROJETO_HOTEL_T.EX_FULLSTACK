require('dotenv').config({ path: `${__dirname}/.env` })
//console.log(process.env.DB_HOST)

// Configura a conexão
async function connect() {
    const mysql = require('mysql2/promise')
    try {
        const conn = await mysql.createConnection({
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        })
        console.log('MySQL conectado')
        return conn
    } catch (error) {}

    // global.connection = conn
}

module.exports = { connect }
