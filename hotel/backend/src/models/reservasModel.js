const conexao = require('../database/conexao')
const formatarData = require ('../helpers/index')

const listarReservas = async () => {
    try {
        const conn = await conexao()
        const [rows] = await conn.query('SELECT * FROM reserva')
        conn.end()
        // rows.data = formatarData.formatarData(rows.data)
        console.log(rows[0])
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
        rows.data = formatarData.formatarData(rows.data)
        console.log(rows.data);
        return rows
    } catch (error) {
        return error
    }
}

module.exports = {listarReservas, listarReserva}