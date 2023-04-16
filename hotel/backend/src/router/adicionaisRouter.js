const express = require('express')
const router = express.Router()

// Controller
const adicionaisController = require('../controllers/adicionaisController')

router.get('/', adicionaisController.listarAdicionais)
router.get('/:id', adicionaisController.listarAdicional)
router.post('/', adicionaisController.cadastrarAdicionais)
router.patch('/:id', adicionaisController.atualizarAdicional)
router.delete('/:id', adicionaisController.removerAdicional)

module.exports = router