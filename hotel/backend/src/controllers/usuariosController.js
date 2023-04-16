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
    const { nome, sobrenome, email, nivel, status, senha } = req.body

    if (!nome || !sobrenome || !email || !nivel || !status || !senha) {
        return res.status(400).json({ message: 'Preencha todos os campos.' })
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
    const nome = user.nome
    const sobrenome = user.sobrenome
    const nivel = user.nivel
    const id = user.id_usuario
    const status = user.status

    if (!user) {
        return res.status(400).json({ message: 'Usuário não encontrado.' })
    }
        if (status == "inativo") {
        return res.status(400).json({ message: 'Usuário bloqueado. Entre em contato com a central: (71) 3365-0000.' })
    } else {
        //Verificar Status

        try {
            if (await bcrypt.compare(senha, user.senha)) {
                sessionUser = req.session
                sessionUser.userEmail = req.body.email
                sessionUser.userNome = nome
                sessionUser.userSobrenome = sobrenome
                sessionUser.userNivel = nivel
                sessionUser.userID = id
                // redirecionar
                return res
                    .status(200)
                    .json({
                        message: 'Logado com sucesso!',
                        ativo: true,
                        session: sessionUser,
                    })
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
        return res.status(500).send({
            message: 'Os dados na sessão não conferem!',
            ativo: false,
        })
    }
    res.send({ message: 'Você já está logado!', ativo: true })
}

const atualizarUsuario = async (req, res) => {
    const { id } = req.params
    const { nome, sobrenome, email, nivel, status, senha } = req.body
    const dados = req.body
    const usuario = await usuariosModel.listarUsuario(id)

    if (!usuario) {
        return res.status(400).json({ message: 'Usuário não encontrado.' })
    }
    if (!nome || !sobrenome || !email || !nivel || !status) {
        return res.status(400).json({ message: 'Preencha todos os campos.' })
    }
    
    if(senha){
    var hash = await bcrypt.hash(senha, 10)
    }

    const obj = {
        nome: dados.nome ? dados.nome : usuario[0].nome,
        sobrenome: dados.sobrenome ? dados.sobrenome : usuario[0].sobrenome,
        email: dados.email ? dados.email : usuario[0].email,
        nivel: dados.nivel ? dados.nivel : usuario[0].nivel,
        status: dados.status ? dados.status : usuario[0].status,
        senha: hash ? hash : usuario[0].senha,
    }
    try {
        const rows = usuariosModel.atualizarUsuario(id, obj)
        return res
            .status(200)
            .send({ message: `Dados atualizados com sucesso!` })
    } catch (error) {
        return error
    }
}

const inativarUsuario = async (req, res) => {
    const { id } = req.params

    try {
        const usuario = await usuariosModel.inativarUsuario(id)
        return res
            .status(200)
            .json({ message: 'Usuário removido com sucesso.' })
    } catch (error) {
        return error
    }
}
// const pesquisarUsuario = async (req, res) => {
//     const {nome, sobrenome} = req.params
//     console.log(req.params);
//     console.log(nome,sobrenome);
//     try {
//         const usuario = await usuariosModel.pesquisarUsuario(nome,sobrenome)
//         return res
//             .status(201)
//             .json({ message: 'Usuário cadastrado.' })
//     } catch (error) {
//         return res.status(404).json({ message: "Usuário não cadastrado!"})
//     }
// }

module.exports = {
    listarUsuarios,
    listarUsuario,
    cadastrarUsuario,
    loginUsuario,
    token,
    session,
    atualizarUsuario,
    inativarUsuario,
    // pesquisarUsuario,
}
