const usuariosModel = require('./../models/usuariosModel')
const bcrypt = require('bcrypt')

const listarUsuarios = async (req, res) => {
    try {
        const usuarios = await usuariosModel.listarUsuarios()
        return res.status(200).json(usuarios)
    } catch (error) {
        return error
    }
}

const listarUsuario = async (req, res) => {
    const {id} = req.params

    try {
        const usuario = await usuariosModel.listarUsuario(id)
        return res.status(200).json(usuario)
    } catch (error) {
        return error
    }
}

const cadastrarUsuario = async (req, res) => {
    const {nome, sobrenome, email, nivel, status, senha} = req.body

    if(!nome || !sobrenome || !email || !nivel || !status || !senha){
        return res.status(400).json({message: 'Preencha todos os campos.'})        
    }

    const hash = await bcrypt.hash(senha, 10)

    const dados = {
        nome, 
        sobrenome, 
        email, 
        nivel, 
        status, 
        senha: hash
    }

    try {
        const usuario = await usuariosModel.cadastrarUsuario(dados)
        return res.status(201).json({message: 'Usuário cadastrado com sucesso!'})
    } catch (error) {
        return error
    }
}

const loginUsuario = async (req, res) => {
    const {email, senha} = req.body
    const usuario = await usuariosModel.listarUsuarios(email)

    if(!email || !senha){
        return res.status(400).json({message: 'Preencha email e senha.'})
    }

    verificar = usuario.find(usuario => usuario.email === email)

    if(!verificar){
        return res.status(400).json({message: 'Usuário não encontrado.'})
    }

    // // Verificar Status

    try {
        if(await bcrypt.compare(senha, verificar.senha)){
            // redirecionar
            return res.status(200).json({message:'Logado com sucesso!'})
        }
        return res.status(400).json({message: 'Usuário inválido!'})
    } catch (error) {
        return error
    }
}

module.exports = {
    listarUsuarios,
    listarUsuario,
    cadastrarUsuario,
    loginUsuario
}