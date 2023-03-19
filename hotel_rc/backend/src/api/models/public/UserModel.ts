let db = require('../../../config/database.js')
const encrypt = require('../../helpers/index.js')

interface data {
    [key: string]: string | number
}

// Salva um usuário no banco
async function writeUser(data: data): Promise<void | unknown> {
    try {
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
        const [rows] = await conn.query(
            'INSERT INTO hotel_recanto.usuario (nome,sobrenome,email,nivel,status,senha) values(?,?,?,?,?,?)',
            values
        )
        conn.end()
        console.log('Dados inseridos com sucesso!')
    } catch (error) {
        console.log(error)
        return error
    }
}
module.exports = { writeUser }
