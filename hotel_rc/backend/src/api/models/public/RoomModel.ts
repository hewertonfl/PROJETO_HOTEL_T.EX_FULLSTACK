import { Response, Request } from 'express'
let db = require('../../../config/database.js')

async function roomsList() {
    try {
        const conn: any = await db.connect()
        const [rows] = await conn.query('SELECT * FROM acomodacao')
        console.log('Leitura de acomodações feitas com sucesso!')
        return rows
    } catch (error) {
        console.log(error)
        return error
    }
}

module.exports = { roomsList }
