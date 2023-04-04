const reservasModel = require('./../models/reservasModel')

const listarReservas = async (req, res) => {
    try {
        const reservas = await reservasModel.listarReservas()

        return res.status(200).json(reservas)
    } catch (error) {
        return res.status(400).send({ message: 'Erro ao listar reservas' })
    }
}

const listarReserva = async (req, res) => {
    const { id } = req.params
    try {
        const reserva = await reservasModel.listarReserva(id)
        return res.status(200).json(reserva)
        return rows
    } catch (error) {
        return res.status(400).send({ message: 'Erro ao listar reserva' })
    }
}

const atualizarReserva = async (req, res) => {
    const { id } = req.params
    const {
        checkin,
        checkout,
        qtdpessoas,
        total,
        totaldesconto,
        confirmacao,
        idAcomodacao
    } = req.body
    console.log(req.body);

    // if (
    //     !checkin ||
    //     !checkout ||
    //     !qtdpessoas ||
    //     !total ||
    //     !totaldesconto ||
    //     !confirmacao ||
    //     idAcomodacao ||
    //     tipo
    // ) {
    //     return res.status(400).json({ message: 'Preencha todos os campos.' })
    // }

    const dados = {
        checkin,
        checkout,
        qtdpessoas,
        total,
        totaldesconto,
        confirmacao,
        idAcomodacao,
    }

    try {
        const [rows] = await reservasModel.atualizarReserva(id, dados)
        return res
            .status(200)
            .json({ message: `Reserva atualizada com sucesso!` })
    } catch (error) {
        return error
    }
}

module.exports = { listarReservas, listarReserva, atualizarReserva }
