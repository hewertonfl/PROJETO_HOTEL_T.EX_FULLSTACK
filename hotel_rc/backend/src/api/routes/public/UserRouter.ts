import express, { Express, Request, Response, Router } from 'express'

const router: Router = Router()
const userController = require('../../controllers/public/UserController.js')

router.post('/insert', userController.writeUserControl)
router.post('/login', userController.loginControl)

module.exports = router
