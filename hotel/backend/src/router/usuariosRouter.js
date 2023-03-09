const express = require('express')
const router = express.Router()

// Controller
const usuariosController = require('./../controllers/usuariosController')

router.get('/', usuariosController.listarUsuarios)
router.get('/id', usuariosController.listarUsuario)
router.post('/', usuariosController.cadastrarUsuario)

router.post('/login', usuariosController.loginUsuario)
router.post('/logout', )

module.exports = router