import express, { Router } from 'express'

const router: Router = Router()
const userController = require('../../controllers/admin/UserController.js')

router.patch('/inativeuser/:id', userController.deactiveUserControl)
router.patch('/userupdate/:id', userController.userUpdateControl)
router.get('/userslist', userController.readUsersControl)

module.exports = router
