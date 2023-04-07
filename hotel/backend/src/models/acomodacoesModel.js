const conexao = require('./../database/conexao')

const listarAcomodacoes = async () => {
    try {
        const conn = await conexao()
        const [rows] = await conn.query('SELECT * FROM acomodacao')
        conn.end()
        return rows
    } catch (error) {
        return error
    }
}

const listarQuartos = async () => {
    try {
        const conn = await conexao()
        const [rows] = await conn.query(
            'SELECT q.id_quarto, q.numero, q.status, a.tipo, a.preco FROM hotel_recanto.quarto q INNER JOIN acomodacao a ON q.id_acomodacao = a.id_acomodacao ORDER BY q.numero asc'
        )
        conn.end()
        return rows
    } catch (error) {
        return error
    }
}

const listarAcomodacao = async (id) => {
    try {
        const conn = await conexao()
        const [rows] = await conn.query(
            `SELECT * FROM acomodacao WHERE id_acomodacao = ${id}`
        )
        conn.end()
        return rows
    } catch (error) {
        return error
    }
}

const listarQuarto = async (id) => {
    try {
        const conn = await conexao()
        const [rows] = await conn.query(
            `SELECT q.id_quarto, q.numero, q.status, a.tipo, a.preco FROM hotel_recanto.quarto q INNER JOIN acomodacao a ON q.id_acomodacao = a.id_acomodacao WHERE id_quarto = ${id}`
        )
        conn.end()
        return rows
    } catch (error) {
        return error
    }
}

const cadastrarAcomodacao = async (dados) => {
    try {
        const conn = await conexao()
        const values = [
            dados.numero,
            dados.tipo,
            dados.descricao,
            dados.preco,
            dados.imagem,
            dados.status,
        ]
        const [rows] = await conn.query(
            'INSERT INTO acomodacao (numero, tipo, descricao, preco, imagem, status) VALUES (?,?,?,?,?,?)',
            values
        )
        conn.end()
    } catch (error) {
        return error
    }
}

const listarQuartosNumeros = async (id) => {
    try {
        const conn = await conexao()
        const [rows] = await conn.query(
            `SELECT q.id_quarto, q.numero, q.status, a.preco FROM hotel_recanto.quarto q INNER JOIN acomodacao a ON q.id_acomodacao = a.id_acomodacao WHERE q.status= 'livre' and a.id_acomodacao = ${id}`
        )
        conn.end()
        return rows
    } catch (error) {
        return error
    }
}

const cadastrarQuarto = async (dados) => {
    try {
        const conn = await conexao()
        const values = [dados.numero, dados.status, dados.id_acomodacao]
        const [rows] = await conn.query(
            'INSERT INTO quarto (numero, status, id_acomodacao) VALUES (?,?,?)',
            values
        )
        conn.end()
    } catch (error) {
        console.log(error)
        return 409
    }
}

const atualizarAcomodacao = async (
    id,
    { numero, tipo, descricao, preco, imagem, status }
) => {
    try {
        const conn = await conexao()
        const values = [numero, tipo, descricao, preco, imagem, status]
        return await conn.query(
            `UPDATE acomodacao SET numero=?, tipo=?, descricao=?, preco=?, imagem=?, status=? WHERE id_acomodacao = ${id}`,
            values
        )
    } catch (error) {
        return error
    }
}

const removerAcomodacao = async (id) => {
    try {
        const conn = await conexao()
        return await conn.query(
            `DELETE FROM acomodacao WHERE id_acomodacao = ${id}`
        )
    } catch (error) {
        return error
    }
}

module.exports = {
    listarAcomodacoes,
    listarQuartos,
    listarAcomodacao,
    listarQuarto,
    listarQuartosNumeros,
    cadastrarAcomodacao,
    cadastrarQuarto,
    atualizarAcomodacao,
    removerAcomodacao,
}
