import { Response, Request } from 'express'
const readUsers = require('../models/public/UserModel.js')
const decrypt = require('../helpers/index.js')

async function auth(username: string, password: string): Promise<number> {
    const row: any = await readUsers.findUsername(username)
    const [objRow] = JSON.parse(row)
    let status: number = 0

    if (!objRow) {
        console.log('Usuário não existe na base de dados')
        return status
    }
    if (
        username == objRow.email &&
        (await decrypt.passDecrypt(password, objRow.senha))
    ) {
        console.log('Logado com sucesso!')
        status = 1
        return status
    }
    console.log('Usuário ou senha invalidos')
    status = 2
    return status
}

module.exports = { auth }
