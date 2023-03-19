import { Response, Request } from 'express'
let db = require('../../../config/database.js')
const encrypt = require('../../helpers/index.js')

// Leitura de usuários no database
async function readUsers(): Promise<string> {
    const conn: any = await db.connect()
    const [rows] = await conn.query('SELECT * FROM hotel_recanto.usuario')
    conn.end()
    return rows
}

// Procura determinado user no banco
async function findUsername(id: number): Promise<any> {
    const conn: any = await db.connect()
    try {
        const [rows] = await conn.query(
            'SELECT * FROM hotel_recanto.usuario WHERE id_usuario = ?',
            id
        )
        conn.end()
        return rows
    } catch (error) {
        console.log(error)
        return error
    }
}

// Procura determinado user no banco
async function findUsernameByEmail(email: string): Promise<any> {
    const conn: any = await db.connect()
    try {
        const [rows] = await conn.query(
            'SELECT * FROM hotel_recanto.usuario WHERE email = ?',
            email
        )
        conn.end()
        return rows
    } catch (error) {
        console.log(error)
        return error
    }
}

// Inativa um user no banco
async function deactiveUser(id: number): Promise<void | unknown> {
    const conn: any = await db.connect()
    let dados: Array<String | Number>
    const [user] = await findUsername(id)
    user.status == 'Inativo'
        ? (dados = ['Ativo', id])
        : (dados = ['Inativo', id])
    try {
        await conn.query(
            'UPDATE hotel_recanto.usuario SET status = ? WHERE id_usuario = ?',
            dados
        )
        conn.end()
    } catch (error) {
        console.log(error)
        return error
    }
}

// Update usuário
async function userUpdate(id: number, data: data) {
    const conn: any = await db.connect()
    data['senha'] = await encrypt.passCrypt(data['senha'])
    try {
        const values = [
            data.nome,
            data.sobrenome,
            data.email,
            data.nivel,
            data.senha,
            data.status,
        ]
        await conn.query(
            `UPDATE hotel_recanto.usuario SET nome=?, sobrenome=?, email=?, nivel=?, senha=?, status=? WHERE id_usuario = ${id}`,
            values
        )
        conn.end()
        console.log('Usuário atualizada com sucesso!')
    } catch (error) {
        console.log(error)
        return error
    }
}

module.exports = {
    findUsername,
    deactiveUser,
    readUsers,
    userUpdate,
    findUsernameByEmail,
}
