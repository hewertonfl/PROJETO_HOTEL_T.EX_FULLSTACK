const express = require('express')
const router = express.Router()

// Controller
const reservasController = require('../controllers/reservasController.js')

router.get('/', reservasController.listarReservas)
router.get('/:id', reservasController.listarReserva)
router.patch('/:id', reservasController.atualizarReserva)
router.patch('/arquivar/:id', reservasController.arquivarReserva)
router.delete('/:id', reservasController.inativarReserva)


module.exports = router