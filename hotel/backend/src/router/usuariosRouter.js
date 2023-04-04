const express = require('express')
const router = express.Router()

// Controller
const usuariosController = require('../controllers/usuariosController')

router.get('/', usuariosController.listarUsuarios)
router.get('/:id', usuariosController.listarUsuario)
router.post('/', usuariosController.cadastrarUsuario)
router.patch('/:id', usuariosController.atualizarUsuario)
router.delete('/:id', usuariosController.inativarUsuario)

router.post('/login', usuariosController.loginUsuario)

router.get('/token', usuariosController.token)
router.post('/session', usuariosController.session)
router.post('/logout', )

module.exports = router