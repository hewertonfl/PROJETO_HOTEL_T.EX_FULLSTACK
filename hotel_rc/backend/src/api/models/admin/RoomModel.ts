import { Response, Request } from 'express'
let db = require('../../../config/database.js')

interface data {
    [key: string]: string
}

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

// Retorna dados do quarto por id
async function roomSelectById(id: number): Promise<any> {
    try {
        const conn: any = await db.connect()
        const [rows] = await conn.query(
            `SELECT * FROM hotel_recanto.acomodacao WHERE id_acomodacao = ${id}`
        )
        //console.log(rows)
        console.log('Leitura de acomodação por id feita com sucesso!')
        conn.end()
        return rows
    } catch (error) {
        console.log(error)
        return error
    }
}

// Atualiza Quartos
async function roomUpdate(id: number, data: data) {
    try {
        let [img] = await roomSelectById(id)
        const path = img.imagem.replace(
            'http://localhost:3000',
            `${__dirname}/../../uploads`
        )
        deleteImage(path)
    } catch (error) {
        console.log(error)
        return error
    }

    try {
        const conn: any = await db.connect()
        const values = [
            data.numero,
            data.tipo,
            data.descricao,
            data.preco,
            data.imagem,
            data.status,
        ]
        await conn.query(
            `UPDATE hotel_recanto.acomodacao SET numero=?, tipo=?, descricao=?, preco=?, imagem=?, status=? WHERE id_acomodacao = ${id}`,
            values
        )
        conn.end()
        console.log('Acomodação atualizada com sucesso!')
    } catch (error) {
        console.log(error)
        return error
    }
}

// Remove quartos
async function roomRemove(id: number) {
    let [img] = await roomSelectById(id)
    const path = img.imagem.replace(
        'http://localhost:3000',
        `${__dirname}/../../uploads`
    )
    deleteImage(path)
    const conn: any = await db.connect()
    try {
        await conn.query(
            `DELETE FROM hotel_recanto.acomodacao WHERE id_acomodacao = ${id}`
        )
        conn.end()
        console.log('Acomodação deletada com sucesso!')
    } catch (error) {
        console.log(error)
        return error
    }
}
// deleta imagens
function deleteImage(path: string) {
    const fs = require('fs')
    try {
        fs.unlinkSync(path)
        console.log('File removed:', path)
    } catch (err) {
        console.log(err)
    }
}

module.exports = { writeRoom, roomSelectById, roomUpdate, roomRemove }
