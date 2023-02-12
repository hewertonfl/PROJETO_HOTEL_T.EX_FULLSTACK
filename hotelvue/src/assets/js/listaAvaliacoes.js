import Avaliacao from './avaliacao.js'

export default class ListaAvaliacoes extends Avaliacao {
    listaAvaliacoes = []
    constructor() {
        super()
    }
    createList() {
        this.listaAvaliacoes.push(this.readRating())
    }
    readList() {
        return this.listaAvaliacoes
    }
}
