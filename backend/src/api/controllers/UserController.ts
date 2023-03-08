import { Response, Request } from 'express'
const userModel = require('../models/UserModel.js')

async function writeUsersControl(req: Request, res: Response) {
    try {
        const user = req.body
        const users = await userModel.writeUsers(user)
        res.status(201).json(user)
    } catch (error) {
        res.send(400).json(error)
    }
}

module.exports = { writeUsersControl }
