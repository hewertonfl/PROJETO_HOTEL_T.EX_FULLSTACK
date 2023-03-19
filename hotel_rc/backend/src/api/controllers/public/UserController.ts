import { Response, Request } from 'express'
const userModel = require('../../models/public/UserModel.js')
const validations = require('../../validations/index.js')

// Controle de acesso do salvamento de usuários
async function writeUserControl(req: Request, res: Response): Promise<void> {
    try {
        const user = req.body
        await userModel.writeUser(user)
        res.status(201).json(user)
    } catch (error) {
        res.status(400).send({ message: 'Algo deu errado' })
    }
}

// Controle de acesso do login de usuários
async function loginControl(req: Request, res: Response): Promise<void> {
    const user = req.body.user
    const pass = req.body.pass
    const valid = await validations.auth(user, pass)

    if (valid === 1) {
        res.status(200).json({
            message: 'Logado com sucesso',
        })
    } else if (valid === 2) {
        res.status(403).send({
            message: 'Usuário ou senha invalidos',
        })
    } else {
        res.status(404).send({
            message: 'Usuário não existe na base de dados',
        })
    }
}

module.exports = {
    writeUserControl,
    loginControl,
}
