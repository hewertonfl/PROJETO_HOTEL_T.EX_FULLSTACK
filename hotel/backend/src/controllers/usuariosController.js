const usuariosModel = require('../models/usuariosModel')
const bcrypt = require('bcrypt')
const UUID = require('uuid')
let sessionUser

const listarUsuarios = async (req, res) => {
    try {
        const usuarios = await usuariosModel.listarUsuarios()
        return res.status(200).json(usuarios)
    } catch (error) {
        return error
    }
}

const listarUsuario = async (req, res) => {
    const { id } = req.params
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
        senha: hash,
    }

    try {
        const usuario = await usuariosModel.cadastrarUsuario(dados)
        return res
            .status(201)
            .json({ message: 'Usuário cadastrado com sucesso!' })
    } catch (error) {
        return error
    }
}

const loginUsuario = async (req, res) => {
    const { email, senha } = req.body
    const usuario = await usuariosModel.listarUsuarios(email)
    const user = usuario.find((user) => user.email === email)
    const nome = (user.nome)
    const sobrenome = user.sobrenome
    const nivel = (user.nivel)

    if (!user) {
        return res.status(400).json({ message: 'Usuário não encontrado.' })
    } else {
        //Verificar Status

        try {
            if (await bcrypt.compare(senha, user.senha)) {
                sessionUser = req.session
                sessionUser.userEmail = req.body.email
                sessionUser.userNome = nome
                sessionUser.userSobrenome = sobrenome
                sessionUser.userNivel = nivel
                // redirecionar
                return res.status(200).json({ message: 'Logado com sucesso!', ativo: true, session: sessionUser })
            }
            return res
                .status(400)
                .json({ message: 'Usuário ou senha inválida!' })
        } catch (error) {
            return error
        }
    }
}

const token = async (req, res) => {
    req.session.token = UUID.v4()
    res.send({ id: req.session.token })
    console.log(req.session.token)
}

const session = async (req, res) => {
    if (req.body.session != req.session.token) {
        return res
            .status(500)
            .send({
                message: 'Os dados na sessão não conferem!',
                ativo: false,
            })
    }
    res.send({ message: 'Você já está logado!', ativo: true })
}

const atualizarUsuario = async (req, res) => {
    const {id} = req.params
    const {nome, sobrenome, email, nivel, status, senha} = req.body

    const usuario = await usuariosModel.listarUsuario(id)  
    
    if(!usuario){
        return res.status(400).json({message: 'Usuário não encontrado.'}) 
    }

    if(!nome || !sobrenome || !email || !nivel || !status){
        return res.status(400).json({message: 'Preencha todos os campos.'})        
    }

    // const hash = await bcrypt.hash(senha, 10)

    const dados = {
        nome, 
        sobrenome, 
        email, 
        nivel, 
        status, 
        senha
    }    

    try {
        const [rows] = await usuariosModel.atualizarUsuario(id, dados)
        return res.status(200).json({message: `Dados atualizados com sucesso!`})
    } catch (error) {
        return error
    }
}

const inativarUsuario = async (req, res) => {
    const {id} = req.params

    try {
        const usuario = await usuariosModel.inativarUsuario(id)
        return res.status(200).json({message: "Usuário removido com sucesso."})
    } catch (error) {
        return error
    }
}

module.exports = {
    listarUsuarios,
    listarUsuario,
    cadastrarUsuario,
    loginUsuario,
    token,
    session,
    atualizarUsuario,
    inativarUsuario
}
