const conexao = require('../database/conexao')
const formatarData = require('../helpers/index')

const listarReservas = async () => {
    try {
        const conn = await conexao()
        const [rows] = await conn.query(
            'SELECT r.id_reserva, r.checkin, r.checkout, r.confirmacao, r.data, r.dataconfirmacao, r.qtdpessoas, r.total, r.totaldesconto , u.nome, u.sobrenome, a.tipo, a.preco, a.status, a.numero FROM hotel_recanto.reserva r INNER JOIN usuario u ON r.id_usuario = u.id_usuario INNER JOIN acomodacao a ON r.id_acomodacao = a.id_acomodacao'
        )
        conn.end()
        return rows
    } catch (error) {
        return error
    }
}

const listarReserva = async (id) => {
    try {
        const conn = await conexao()
        // const [rows] = await conn.query(
        //     `SELECT * FROM reserva WHERE id_reserva = ${id}`
        // )
        const [rows] = await conn.query(
            `SELECT r.id_reserva, r.checkin, r.checkout, r.confirmacao, r.data, r.dataconfirmacao, r.qtdpessoas, r.total, r.totaldesconto , u.nome, u.sobrenome, a.tipo, a.preco, a.status, a.numero FROM hotel_recanto.reserva r INNER JOIN usuario u ON r.id_usuario = u.id_usuario INNER JOIN acomodacao a ON r.id_acomodacao = a.id_acomodacao WHERE id_reserva = ${id}`
        )
        conn.end()
        return rows
    } catch (error) {
        return error
    }
}

const atualizarReserva = async (
    id,
    {
        checkin,
        checkout,
        qtdpessoas,
        total,
        totaldesconto,
        confirmacao,
        idAcomodacao,
    }
) => {
    try {
        const conn = await conexao()
        const values = [
            checkin,
            checkout,
            qtdpessoas,
            total,
            totaldesconto,
            confirmacao,
            idAcomodacao,
        ]
        await conn.query(
            `UPDATE reserva SET checkin=?, checkout=?, qtdpessoas=?, total=? totaldesconto=?, confirmacao=?, id_acomodacao=? WHERE id_reserva = ${id}`,
            values
        )
        conn.end()
    } catch (error) {
        return error
    }
}

module.exports = { listarReservas, listarReserva, atualizarReserva }
