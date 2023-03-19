import { Response, Request } from 'express'
const roomModel = require('../../models/public/RoomModel.js')

async function roomsListControl(req: Request, res: Response) {
    try {
        const acomodacoes = await roomModel.roomsList()
        res.status(200).json(acomodacoes)
    } catch (error) {
        res.status(400).send({ message: error })
    }
}

module.exports = { roomsListControl }
