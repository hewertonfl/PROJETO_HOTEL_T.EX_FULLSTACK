const conexao = require('./../database/conexao')

const listarAcomodacoes = async () => {
    try {
        const conn = await conexao()
        const [rows] = await conn.query("SELECT * FROM acomodacao")
        return rows
    } catch (error) {
        return error
    }
}

const listarAcomodacao = async (id) => {
    try {
        const conn = await conexao()
        const [rows] = await conn.query(`SELECT * FROM acomodacao WHERE id = ${id}`)
        return rows
    } catch (error) {
        return error
    }
}

const cadastrarAcomodacao = async (dados) => {
    try {
        const conn = await conexao()
        const values = [dados.numero, dados.tipo, dados.descricao, dados.preco, dados.imagem, dados.status]
        const [rows] = await conn.query("INSERT INTO acomodacao (numero, tipo, descricao, preco, imagem, status) VALUES (?,?,?,?,?,?)", values)
    } catch (error) {
        return error
    }
}

const atualizarAcomodacao = async (id, {numero, tipo, descricao, preco, imagem, status}) => {
    try {
        const conn = await conexao()
        const values = [numero, tipo, descricao, preco, imagem, status]
        return await conn.query(`UPDATE acomodacao SET numero=?, tipo=?, descricao=?, preco=?, imagem=?, status=? WHERE id = ${id}`, values)
    } catch (error) {
        return error
    }
}

const removerAcomodacao = async (id) => {
    try {
        const conn = await conexao()
        return await conn.query(`DELETE FROM acomodacao WHERE id = ${id}`)
    } catch (error) {
        return error
    }
}

module.exports = {
    listarAcomodacoes,
    listarAcomodacao, 
    cadastrarAcomodacao,
    atualizarAcomodacao,
    removerAcomodacao
}

