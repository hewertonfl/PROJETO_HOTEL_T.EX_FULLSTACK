import express, { Express, Request, Response, Router } from 'express'

const router: Router = Router()
const roomController = require('../../controllers/admin/RoomController.js')

// router.get('/user', (req: Request, res: Response) => {
//     res.writeHead(200, { 'Content-type': 'application/json;charset=utf8' })
// })
router.post('/room/insert', roomController.writeRoomControl)
//router.post('/login', roomController.loginControl)

module.exports = router
