import { Response, Request } from 'express'
let db = require('../../../config/database.js')

// Salva os dados do quarto
async function writeRoom(data: any) {
    const conn: any = await db.connect()
    const values: (string | number)[] = [
        data['numero'],
        data['tipo'],
        data['descricao'],
        data['preco'],
        data['imagem'],
        data['status'],
    ]
    try {
        const [rows] = await conn.query(
            'INSERT INTO hotel_recanto.acomodacao (numero,tipo,descricao,preco,imagem,status) values(?,?,?,?,?,?)',
            values
        )
        console.log('Dados inseridos com sucesso!')
    } catch (error) {
        console.log(error)
        return null
    }
    conn.end()
}

module.exports = { writeRoom }
