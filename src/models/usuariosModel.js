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
        const [rows] = await conn.query(`INSERT INTO usuario (nome, sobrenome, email, nivel, status, senha) VALUES (?,?,?,?,?,?)`, values)
    } catch (error) {
        return error
    }  
}

// const loginUsuario = async (email) => {
//     try {
//         const conn = await conexao()
//         const [rows] = await conn.query(`SELECT * FROM usuario WHERE email = ${email}`)
//         return rows
//     } catch (error) {
//         return error
//     }  
// }

module.exports = {
    listarUsuarios,
    listarUsuario,
    cadastrarUsuario
}