import express, { Express, Request, Response, Router } from 'express'

const router: Router = Router()
const userController = require('./../controllers/UserController.js')

// router.get('/user', (req: Request, res: Response) => {
//     res.writeHead(200, { 'Content-type': 'application/json;charset=utf8' })
// })
router.post('/insert', userController.writeUsersControl)
router.post('/login', userController.loginControl)

module.exports = router
