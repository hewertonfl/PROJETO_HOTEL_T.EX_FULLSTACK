import Avaliacao from './avaliacao.js'

export default class StorageAvaliacoes extends Avaliacao {
    storage = []
    lista
    dadosLista
    constructor(lista) {
        super()
        this.lista = lista
    }
    setStorage(lista) {
        if (localStorage.getItem('avaliacoes')) {
            this.storage = JSON.parse(localStorage.getItem('avaliacoes'))
            this.storage.push(lista)
        } else {
            this.storage.push(lista)
        }
        localStorage.setItem('avaliacoes', JSON.stringify(this.storage))
    }
    getStorage() {
        JSON.parse(localStorage.getItem('avaliacoes'))
            ? (this.dadosLista = JSON.parse(localStorage.getItem('avaliacoes')))
            : (this.dadosLista = [])
        return this.dadosLista
    }
}
