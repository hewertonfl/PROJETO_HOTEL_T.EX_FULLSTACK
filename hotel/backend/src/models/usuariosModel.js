const conexao = require('../database/conexao')

const listarUsuarios = async () => {
    try {
        const conn = await conexao()
        const [rows] = await conn.query("SELECT * FROM usuario")
        return rows
    } catch (error) {
        return error
    }
}

const listarUsuario = async (id) => {
    try {
        const conn = await conexao()
        const [rows] = await conn.query(`SELECT * FROM usuario WHERE id = ${id}`)
        return rows
    } catch (error) {
        return error
    }
}

const cadastrarUsuario = async (dados) => {
    try {
        const conn = await conexao()
        const values = [dados.nome, dados.sobrenome, dados.email, dados.nivel, dados.status, dados.senha]
        const [rows] = await conn.query(`INSERT INTO hotel_recanto.usuario (nome, sobrenome, email, nivel, status, senha) VALUES (?,?,?,?,?,?)`, values)
    } catch (error) {
        return error
    }  
}

cadastrarUsuario({nome:'João', sobrenome: 'Dev', email: 'j@d.com', nivel: 2, status: 'ativo', senha: '1234'})

const loginUsuario = async (email) => {
    try {
        const conn = await conexao()
        const values = [email]
        const [rows] = await conn.query(`SELECT * FROM usuario WHERE email=?`, values)
        return rows
    } catch (error) {
        return error
    }  
}
const atualizarUsuario = async (id, {nome, sobrenome, email, nivel, status, senha}) => {
    try {
        const conn = await conexao()
        const values = [nome, sobrenome, email, nivel, status, senha]
        return await conn.query(`UPDATE usuario SET nome=?, sobrenome=?, email=?, nivel=?, status=?, senha=? WHERE id = ${id}`, values)
    } catch (error) {
        return error
    }
}

const inativarUsuario = async (id) => {
    try {
        const conn = await conexao()
        const status = 'inativo'
        return await conn.query(`UPDATE usuario SET status=? WHERE id = ${id}`, status)
    } catch (error) {
        return error
    }
}

module.exports = {
    listarUsuarios,
    listarUsuario,
    cadastrarUsuario,
    loginUsuario,
    inativarUsuario,
    atualizarUsuario
}