const acomodacoesModel = require('./../models/acomodacoesModel')

const listarAcomodacoes = async (req, res) => {
    try {
        const acomodacoes = await acomodacoesModel.listarAcomodacoes()
        res.status(200).json(acomodacoes)
    } catch (error) {
        res.send(400).json(error)
    }
}

const listarAcomodacao = async (req, res) => {
    const {id} = req.params

    try {
        const acomodacao = await acomodacoesModel.listarAcomodacao(id)
        res.status(200).json(acomodacao)
    } catch (error) {
        res.send(400).json(error)
    }
}

const cadastrarAcomodacao = async (req, res) => {
    const {numero, tipo, descricao, preco, status} = req.body
    const imagem = req.file.filename 

    if(!numero || !tipo || !descricao || !preco || !status){
        return res.status(400).json({message: 'Preencha todos os campos.'})        
    }

    if(!req.file){
        return res.status(400).json({message: 'Imagem não selecionada.'})
    }

    const dados = {
        numero,
        tipo, 
        descricao, 
        preco, 
        imagem,
        status
    }

    try {
        const conn = await acomodacoesModel.cadastrarAcomodacao(dados)
        res.status(201).json({message: 'Acomodação cadastrada com sucesso!'})
    } catch (error) {
        return error
    }
}

const atualizarAcomodacao = async (req, res) => {
    const {id} = req.params
    const acomodacao = await acomodacoesModel.listarAcomodacao(id)
    const dados = req.body

    const obj = {
        numero: dados.numero ? dados.numero : acomodacao[0].numero,
        tipo: dados.tipo ? dados.tipo : acomodacao[0].tipo,
        descricao: dados.descricao ? dados.descricao : acomodacao[0].descricao,
        preco: dados.preco ? dados.preco : acomodacao[0].preco,
        imagem: dados.imagem ? dados.imagem : acomodacao[0].imagem,
        status: dados.status ? dados.status : acomodacao[0].status,
    }

    try {
        const [rows] = await acomodacoesModel.atualizarAcomodacao(id, obj)
        return res.status(200).json({message: `Item atualizado com sucesso!`})
    } catch (error) {
        return error
    }
}

const removerAcomodacao = async (req, res) => {
    const {id} = req.params

    try {
        const [rows] = await acomodacoesModel.removerAcomodacao(id)
        return res.status(200).json({message: `Acomodação removida com sucesso!`})
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