const adicionaisModel = require('./../models/adicionaisModel')

const listarAdicionais = async (req, res) => {
    try {
        const adicionais = await adicionaisModel.listarAdicionais()
        return res.status(200).json(adicionais)
    } catch (error) {
        return res.status(400).json(error)
    }
}

const listarAdicional = async (req, res) => {
    const {id} = req.params

    // Validar se existe adicional

    try {
        const adicional = await adicionaisModel.listarAdicional(id)
        return res.status(200).json(adicional)
    } catch (error) {
        return res.status(400).json(error)
    }
}

const cadastrarAdicionais = async (req, res) => {
    const {item, descricao, valor, imagem} = req.body

    // Validar se existe adicional

    const dados = {
        item,
        descricao,
        valor,
        imagem
    }

    try {
        const adicionais = await adicionaisModel.cadastrarAdicionais(dados)
        return res.status(201).json({message: "Dados inseridos com sucesso!"})
    } catch (error) {
        return res.status(400).json(error)
    }
}

const atualizarAdicional = async (req, res) => {
    const {id} = req.params
    const adicional = await adicionaisModel.listarAdicional(id)
    const dados = req.body
    
    const obj = {
        item: dados.item ? dados.item : adicional[0].item,
        descricao: dados.descricao ? dados.descricao : adicional[0].descricao,
        valor: dados.valor ? dados.valor : adicional[0].valor,
        imagem: dados.imagem ? dados.imagem : adicional[0].imagem,
    }

    try {
        const [rows] = await adicionaisModel.atualizarAdicional(id, obj)
        return res.status(200).json({message: `Item atualizado com sucesso!`})
    } catch (error) {
        return error
    }
}

const removerAdicional = async (req, res) => {
    const {id} = req.params

    try {
        const [rows] = await adicionaisModel.removerAdicional(id)
        return res.status(200).json({message: `Item removido com sucesso!`})
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