const acomodacoesModel = require('./../models/acomodacoesModel')

const listarAcomodacoes = async (req, res) => {
    try {
        const acomodacoes = await acomodacoesModel.listarAcomodacoes()
        res.status(200).json(acomodacoes)
    } catch (error) {
        res.send(400).json(error)
    }
}

const listarQuartos = async (req, res) => {
    try {
        const quartos = await acomodacoesModel.listarQuartos()
        res.status(200).json(quartos)
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

const listarQuarto = async (req, res) => {
    const { id } = req.params

    try {
        const quarto = await acomodacoesModel.listarQuarto(id)
        res.status(200).json(quarto)
    } catch (error) {
        res.send(400).json(error)
    }
}

const listarQuartosNumeros = async (req, res) => {
    const { id } = req.params

    try {
        const quartos = await acomodacoesModel.listarQuartosNumeros(id)
        res.status(200).json(quartos)
    } catch (error) {
        res.send(400).json(error)
    }
}

const cadastrarAcomodacao = async (req, res) => {
    const {numero, tipo, descricao, preco, status} = req.body
    // const imagem = req.file.filename 

    if(!numero || !tipo || !descricao || !preco || !status){
        return res.status(400).json({message: 'Preencha todos os campos.'})        
    }

    // if(!req.file){
    //     return res.status(400).json({message: 'Imagem não selecionada.'})
    // }

    const dados = {
        numero,
        tipo, 
        descricao, 
        preco, 
        // imagem,
        status
    }

    try {
        const conn = await acomodacoesModel.cadastrarAcomodacao(dados)
        res.status(201).json({message: 'Acomodação cadastrada com sucesso!'})
    } catch (error) {
        return error
    }
}

const cadastrarQuarto = async (req, res) => {
    const { numero, status, id_acomodacao } = req.body

    if (!numero || !status || !id_acomodacao) {
        return res.status(400).json({ message: 'Preencha todos os campos.' })
    }

    const dados = {
        numero,
        status,
        id_acomodacao
    }
    // const numeroUnico = dados.find((numero) => numero.numero === numero)

    try {
        const conn = await acomodacoesModel.cadastrarQuarto(dados)
        if(!(conn == 409)){
        res.status(201).json({ message: 'Quarto cadastrado com sucesso!' })
        } else {
            return res.status(409).json({ message: 'Quarto já cadastrado!' })
        }
    } catch (error) {
        return res.status(400).json({message: error})
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

const atualizarQuarto = async (req, res) => {
    const { id } = req.params
    const quarto = await acomodacoesModel.listarQuarto(id)
    const dados = req.body

    const obj = {
        numero: dados.numero ? dados.numero : quarto[0].numero,
        idAcomodacao: dados.idAcomodacao ? dados.idAcomodacao : quarto[0].id_acomodacao,
        status: dados.status ? dados.status : quarto[0].status,
    }
    try {
        const rows = await acomodacoesModel.atualizarQuarto(id, obj)
        return res.status(200).json({ message: `Item atualizado com sucesso!` })
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

const removerQuarto = (req, res) => {
    const { id } = req.params
    try {
        const rows = acomodacoesModel.removerQuarto(id)
        return res
            .status(200)
            .json({ message: `Quarto removido com sucesso!` })
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
    atualizarQuarto,
    removerAcomodacao,
    removerQuarto,
}