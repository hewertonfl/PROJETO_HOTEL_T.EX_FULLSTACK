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
    const reserva = await reservasModel.listarReserva(id)
    const dados1 = JSON.stringify(req.body)
    const dados = JSON.parse(dados1)
    
    // if (
    //     !checkin ||
    //     !checkout ||
    //     !qtdpessoas ||
    //     !total ||
    //     !data ||
    //     !idQuarto ||
    //     !idUsuario
    // ) {
    //     return res.status(400).json({ message: 'Preencha todos os campos.' })
    // }

    try {
        const obj = {
            checkin: dados.checkin ? dados.checkin : reserva[0].checkin,
            checkout: dados.checkout ? dados.checkout : reserva[0].checkout,
            qtdpessoas: dados.qtdpessoas
                ? dados.qtdpessoas
                : reserva[0].qtdpessoas,
            total: dados.total ? dados.total : reserva[0].total,
            totaldesconto: dados.totaldesconto,
            data: dados.data ? dados.data : reserva[0].data,
            dataconfirmacao: dados.dataconfirmacao
                ? dados.dataconfirmacao
                : reserva[0].dataconfirmacao,
            confirmacao: dados.confirmacao
                ? dados.confirmacao
                : reserva[0].confirmacao,
            idUsuario: dados.idUsuario
                ? dados.idUsuario
                : reserva[0].id_usuario,
            idQuarto: dados.idQuarto ? dados.idQuarto : reserva[0].id_quarto,
            idQuartoAnterior: dados.idQuartoAnterior
                ? dados.idQuartoAnterior
                : reserva[0].id_quarto
        }
        console.log(obj)
        let [rows] = await reservasModel.atualizarReserva(id, obj)
        return res.status(200)
            .json({ message: `Reserva atualizada com sucesso!` })
    } catch (error) {
        return error
    }
}

const inativarReserva = async (req, res) => {
    const { id } = req.params

    try {
        const reserva = await reservasModel.inativarReserva(id)
        return res
            .status(200)
            .json({ message: 'Reserva cancelada com sucesso.' })
    } catch (error) {
        return error
    }
}

const arquivarReserva = async (req, res) => {
    const { id } = req.params

    try {
        const reserva = await reservasModel.arquivarReserva(id)
        return res
            .status(200)
            .json({ message: 'Reserva arquivada com sucesso.' })
    } catch (error) {
        return error
    }
}

module.exports = {
    listarReservas,
    listarReserva,
    atualizarReserva,
    inativarReserva,
    arquivarReserva,
}
