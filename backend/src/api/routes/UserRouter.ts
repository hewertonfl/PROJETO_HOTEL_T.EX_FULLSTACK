import express, { Express, Request, Response, Router } from 'express'

const router: Router = Router()
const userController = require('./../controllers/UserController.js')
const userModel = require('./../models/UserModel.js')

// router.get('/user', (req: Request, res: Response) => {
//     res.writeHead(200, { 'Content-type': 'application/json;charset=utf8' })
// })
router.post('/insert', userController.writeUsersControl)

module.exports = router
