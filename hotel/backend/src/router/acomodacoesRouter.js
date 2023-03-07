const express = require('express')
const router = express.Router()

const acomodacoesController = require('./../controllers/acomodacoesController')

router.get('/', acomodacoesController.listarAcomodacoes)
router.get('/:id', acomodacoesController.listarAcomodacao)
router.post('/', acomodacoesController.cadastrarAcomodacao)
router.patch('/:id', acomodacoesController.atualizarAcomodacao)
router.delete('/:id', acomodacoesController.removerAcomodacao)

module.exports = router