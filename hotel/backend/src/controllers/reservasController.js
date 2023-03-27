const reservasModel = require('./../models/reservasModel')

const listarReservas = async (req, res) => {
    try {
        const reservas = await reservasModel.listarReservas()
        return res.status(200).json(reservas)
    } catch (error) {
        return res.status(400).send({message: 'Erro ao listar reservas'})
    }
}


const listarReserva = async (req, res) => {
    const { id } = req.params
    try {
        const reserva = await reservasModel.listarReserva(id)
        return res.status(200).json(reserva)
        return rows
    } catch (error) {
        return res.status(400).send({message: 'Erro ao listar reserva'})
    }
}



module.exports = { listarReservas, listarReserva }