import express, { Express, Request, Response, Router } from 'express'

const router: Router = Router()
const userController = require('../../controllers/public/UserController.js')

// router.get('/user', (req: Request, res: Response) => {
//     res.writeHead(200, { 'Content-type': 'application/json;charset=utf8' })
// })
router.post('/insert', userController.writeUserControl)
router.post('/login', userController.loginControl)

module.exports = router
