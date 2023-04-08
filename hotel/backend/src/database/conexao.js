require('dotenv').config({ path: `${__dirname}/.env` })

async function conexao() {
    const mysql = require('mysql2/promise')

    const conn = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
    })

    global.connection = conn
    return connection
}

module.exports = conexao
