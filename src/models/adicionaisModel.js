const conexao = require('../database/conexao')

console.log(conexao)

const listarAdicionais = async () => {
    try {
        const conn = await conexao()
        const [rows] = await conn.query("SELECT * FROM adicionais")
        return rows
    } catch (error) {
        return error
    }
}

const listarAdicional = async (id) => {
    try {
        const conn = await conexao()
        const [rows] = await conn.query(`SELECT * FROM adicionais WHERE id = ${id}`)
        return rows
    } catch (error) {
        return error
    }
}

const cadastrarAdicionais = async (dados) => {
    try {
        const conn = await conexao()
        const values = [dados.item, dados.descricao, dados.valor, dados.imagem]
        const [rows] = await conn.query("INSERT INTO adicionais (item, descricao, valor, imagem) VALUES (?,?,?,?)", values)
    } catch (error) {
        return error
    }
}

const atualizarAdicional = async (id, {item, descricao, valor, imagem}) => {
    try {
        const conn = await conexao()
        const values = [item, descricao, valor, imagem]
        return await conn.query(`UPDATE adicionais SET item=?, descricao=?, valor=?, imagem=? WHERE id = ${id}`, values)
    } catch (error) {
        return error
    }
}

const removerAdicional = async (id) => {
    try {
        const conn = await conexao()
        return await conn.query(`DELETE FROM adicionais WHERE id = ${id}`)
    } catch (error) {
        return error
    }
}

module.exports = {
    listarAdicionais,
    cadastrarAdicionais,
    listarAdicional,
    removerAdicional,
    atualizarAdicional
}