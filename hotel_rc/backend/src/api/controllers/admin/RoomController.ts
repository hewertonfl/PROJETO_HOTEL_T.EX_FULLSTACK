import { Response, Request } from 'express'
const roomModel = require('../../models/admin/RoomModel.js')

// Controle de acesso de salvamento de dados dos quartos
async function writeRoomControl(req: Request, res: Response): Promise<void> {
    try {
        const data = req.body
        const save = await roomModel.writeRoom(data)
        res.status(201).json(data)
    } catch (error) {
        res.send(400).json(error)
    }
}
// Controle de seleção dos quartos
async function roomSelectByIdControl(req: Request, res: Response) {
    const { id } = req.params
    console.log(id)

    try {
        const acomodacao = await roomModel.roomSelectById(id)
        res.status(200).json(acomodacao)
    } catch (error) {
        res.status(400).send({ message: 'Quarto não encontrado' })
    }
}

// Controle de update dos quartos
async function roomUpdateControl(req: Request, res: Response) {
    const { id } = req.params
    const dados = req.body

    try {
        await roomModel.roomUpdate(id, dados)
        res.status(200).json({ message: `Quarto atualizado com sucesso!` })
    } catch (error) {
        res.status(400).send({ message: 'Operação invalida' })
    }
}

// Controle de acesso de upload de imagens das acomodações
async function uploadImageControl(req: Request, res: Response): Promise<void> {
    const imagem = req.file?.filename
    if (!imagem) {
        res.status(404).send({ message: 'Imagem não encontrada' })
    } else {
        res.status(200).send({
            message: 'Imagem enviada com sucesso',
            image: imagem,
        })
    }
}

async function roomDeleteControl(req: Request, res: Response): Promise<void> {
    const { id } = req.params

    try {
        await roomModel.roomRemove(id)
        res.status(200).json({ message: `Acomodação removida com sucesso!` })
    } catch (error) {
        res.status(400).send({ message: 'Quarto não encontrado' })
        console.log(error)
    }
}

module.exports = {
    writeRoomControl,
    uploadImageControl,
    roomSelectByIdControl,
    roomUpdateControl,
    roomDeleteControl,
}
