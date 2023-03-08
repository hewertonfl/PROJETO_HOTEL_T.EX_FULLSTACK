const db = require('../config/database')

interface data {
    [key: string]: string
}

async function readUsers() {
    const conn = await db.connect()
    const [rows] = await conn.query('SELECT * FROM hotel_recanto.usuario')
    console.log(rows)
    return JSON.stringify(rows)
}

async function writeUsers(data: any) {
    const conn = await db.connect()
    const values: (string | number)[] = [
        data['nome'],
        data['sobrenome'],
        data['email'],
        data['nivel'],
        data['status'],
        data['senha'],
    ]
    const [rows] = await conn.query(
        'INSERT INTO hotel_recanto.usuario (nome,sobrenome,email,nivel,status,senha) values(?,?,?,?,?,?)',
        values
    )
    console.log('Dados inseridos com sucesso!')
}

// writeUsers({
//     nome: 'Mario',
//     sobrenome: 'Bros',
//     email: 'mairo@bros.com.br',
//     nivel: '0',
//     status: 'ativo',
//     senha: '123',
// })

module.exports = { readUsers, writeUsers }
