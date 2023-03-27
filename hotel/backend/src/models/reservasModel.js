const conexao = require('../database/conexao')

const listarReservas = async () => {
    try {
        const conn = await conexao()
        const [rows] = await conn.query('SELECT * FROM reserva')
        conn.end()
        return rows
    } catch (error) {
        return error
    }
}

const listarReserva = async (id) => {
    try {
        const conn = await conexao()
        const [rows] = await conn.query(
            `SELECT * FROM reserva WHERE id_reserva = ${id}`
        )
        conn.end()
        return rows
    } catch (error) {
        return error
    }
}

module.exports = {listarReservas, listarReserva}