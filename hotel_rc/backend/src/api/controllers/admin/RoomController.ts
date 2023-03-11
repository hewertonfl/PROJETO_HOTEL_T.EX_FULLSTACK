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

module.exports = { writeRoomControl }
