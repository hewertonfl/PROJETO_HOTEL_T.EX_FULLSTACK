import { Response, Request } from 'express'
const userModel = require('../../models/admin/UserModel.js')

//Controle de acesso de exibição de usuários
async function readUsersControl(req: Request, res: Response): Promise<void> {
    try {
        const users = await userModel.readUsers()
        res.status(200).json(users)
        console.log('Leitura de usuários feita com sucesso')
    } catch (error) {
        console.log('Sem usuário no database')
        res.status(404).send({ message: 'Sem usuário no database' })
    }
}

// Controle de acesso de inativação de usuários
async function deactiveUserControl(req: Request, res: Response): Promise<void> {
    const { id } = req.params
    try {
        const users = await userModel.deactiveUser(id)
        res.status(200).send({ message: 'Usuário inativado com sucesso' })
        console.log('Leitura de usuários feita com sucesso')
    } catch (error) {
        console.log('Sem usuário no database')
        res.status(404).send({ message: 'Sem usuário no database' })
    }
}

// Controle de update dos users
async function userUpdateControl(req: Request, res: Response) {
    const { id } = req.params
    const dados = req.body

    try {
        await userModel.userUpdate(id, dados)
        res.status(200).json({ message: `Usuário atualizado com sucesso!` })
        console.log(`Usuário atualizado com sucesso!`)
    } catch (error) {
        res.status(400).send({ message: 'Operação invalida' })
        console.log('Operação invalida')
    }
}

module.exports = {
    deactiveUserControl,
    readUsersControl,
    userUpdateControl,
}
