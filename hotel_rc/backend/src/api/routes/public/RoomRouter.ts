import express, { Express, Request, Response, Router } from 'express'

const router: Router = Router()
const roomController = require('../../controllers/public/RoomController.js')

router.get('/rooms', roomController.roomsListControl)

module.exports = router
