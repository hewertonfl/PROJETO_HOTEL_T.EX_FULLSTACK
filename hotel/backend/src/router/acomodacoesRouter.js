const express = require('express')
const router = express.Router()
const uploadImage = require('../middleware/uploadImage')
const acomodacoesController = require('./../controllers/acomodacoesController')

router.get('/', acomodacoesController.listarAcomodacoes)
router.get('/quartos', acomodacoesController.listarQuartos)
router.get('/:id', acomodacoesController.listarAcomodacao)
router.get('/quartos/:id', acomodacoesController.listarQuarto)
router.get('/tipos/:id', acomodacoesController.listarQuartosNumeros)
router.post('/', uploadImage.single('foto'), acomodacoesController.cadastrarAcomodacao)
router.post(
    '/quartos',
    acomodacoesController.cadastrarQuarto
)
router.patch('/:id', acomodacoesController.atualizarAcomodacao)
router.patch('/quartos/:id', acomodacoesController.atualizarQuarto)
router.delete('/:id', acomodacoesController.removerAcomodacao)
router.delete('/quartos/:id', acomodacoesController.removerQuarto)

module.exports = router