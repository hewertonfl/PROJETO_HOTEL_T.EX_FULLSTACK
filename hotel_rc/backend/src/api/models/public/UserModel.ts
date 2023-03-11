let db = require('../../../config/database.js')
const encrypt = require('../../helpers/index.js')

interface data {
    [key: string]: string
}

// Leitura de usuários no database
async function readUsers(): Promise<string> {
    const conn: any = await db.connect()
    const [rows] = await conn.query('SELECT * FROM hotel_recanto.usuario')
    conn.end()
    //console.log(rows)
    return JSON.stringify(rows)
}

// Procura determinado user no banco
async function findUsername(email: string): Promise<null | string> {
    const conn: any = await db.connect()
    try {
        const [rows] = await conn.query(
            'SELECT * FROM hotel_recanto.usuario WHERE email = ?',
            email
        )
        conn.end()
        return JSON.stringify(rows)
    } catch (error) {
        return null
    }
}

// Salva um usuário no banco
async function writeUser(data: any): Promise<void> {
    const conn = await db.connect()
    data.senha = await encrypt.passCrypt(data.senha)

    const values: (string | number)[] = [
        data['nome'],
        data['sobrenome'],
        data['email'],
        data['nivel'],
        data['status'],
        data['senha'],
    ]
    try {
        const [rows] = await conn.query(
            'INSERT INTO hotel_recanto.usuario (nome,sobrenome,email,nivel,status,senha) values(?,?,?,?,?,?)',
            values
        )
        console.log('Dados inseridos com sucesso!')
    } catch (error) {
        console.log(error)
    }

    conn.end()
}

// writeUsers({
//     nome: 'Mario',
//     sobrenome: 'Bros',
//     email: 'mario@bros.com.br',
//     nivel: '0',
//     status: 'ativo',
//     senha: '123',
// })

module.exports = { readUsers, writeUser, findUsername }
