import { Response, Request } from 'express'
const userModel = require('../models/UserModel.js')
const validations = require('../validations/index.js')

async function writeUsersControl(req: Request, res: Response) {
    try {
        const user = req.body
        const users = await userModel.writeUsers(user)
        res.status(201).json(user)
    } catch (error) {
        res.send(400).json(error)
    }
}

async function loginControl(req: Request, res: Response) {
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

module.exports = { writeUsersControl, loginControl }
