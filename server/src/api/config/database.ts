require('dotenv').config({ path: `${__dirname}/../../.env` })
// console.log(process.env.DB_PASSWORD)

// Configura a conexão
async function connect() {
    const mysql = require('mysql2/promise')
    const conn = await mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    })
    console.log('MySQL conectado')
    // global.connection = conn
    return conn
}

async function showtables() {
    const conn = await connect()
    const [rows] = await conn.query('SHOW TABLES')
    console.log(rows)
    return JSON.stringify(rows)
}

console.log('entrou')
//showtables()

module.exports = { connect, showtables }
