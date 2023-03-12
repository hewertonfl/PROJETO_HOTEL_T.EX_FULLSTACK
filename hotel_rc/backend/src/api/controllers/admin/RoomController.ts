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

// Controle de acesso de upload de imagens das acomodações
async function uploadImageControl(req: Request, res: Response): Promise<void> {
    const imagem = req.file?.filename
    if (!imagem) {
        res.status(404).send({ message: 'Imagem não encontrada' })
    } else {
        res.status(200).send({ message: 'Imagem enviada com sucesso' })
    }
}

module.exports = { writeRoomControl, uploadImageControl }
