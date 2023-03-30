const express = require('express')
const router = express.Router()

// Controller
const reservasController = require('../controllers/reservasController.js')

router.get('/', reservasController.listarReservas)
router.get('/:id', reservasController.listarReserva)
router.patch('/:id', reservasController.atualizarReserva)


module.exports = router