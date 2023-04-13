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
    try {
        let rows = reservasModel.atualizarReserva(id, obj)
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

const cadastrarReserva = async (req, res) => {
    const dados = req.body
    console.log(dados);

    const obj = {
        checkin: dados.checkin,
        checkout: dados.checkout,
        qtdpessoas: dados.qtdpessoas,
        total: dados.total,
        totalcomdesconto: dados.totalcomdesconto ? dados.totalcomdesconto : dados.total,
        cupomDesconto: dados.cupomDesconto,
        totaldesconto: dados.cupomDesconto ? 10 : dados.totaldesconto,
        noites: dados.noites,
        servicos: dados.servicos,
        confirmacao: dados.confirmacao,
        data: dados.data,
        idUsuario: dados.idUsuario,
        idQuarto: dados.idQuarto,
    }

    try {
        const reserva = await reservasModel.cadastrarReserva(obj)
        res.status(201).json({ obj })
    } catch (error) {
        console.log(error)
        return error
    }
}

const myBookings = async (req, res) => {
    const { id } = req.params
    try {
        const reservas = await reservasModel.myBookings(id)
        res.status(200).json(reservas)
    } catch (error) {
        res.status(400).send({ message: 'Erro ao listar as reservas' })
    }
}
// const deleteMyBookings = async (req, res) => {
//     const { codigo } = req.params
//     try {
//         await reservasModel.deleteMyBookings(codigo)
//         res.status(200).send({ message: 'Deletado com sucesso!' })
//     } catch (error) {
//         res.status(400).send({ message: 'Erro ao deletar reserva' })
//     }
// }

module.exports = {
    listarReservas,
    listarReserva,
    atualizarReserva,
    inativarReserva,
    arquivarReserva,
    cadastrarReserva,
    myBookings,
    // deleteMyBookings,
}
