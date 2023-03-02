import Frigobar from './Frigobar'

export default class StorageProdutos {
    lista: object
    dadosLista: string[]
    storage: Array<object>
    constructor(lista: [], dadosLista: [], storage: []) {
        this.lista = lista
        this.dadosLista = dadosLista
        this.storage = storage
    }
    setStorage(lista: object) {
        this.storage = []
        let ls: string | null = localStorage.getItem('consumo')
        if (ls) {
            this.storage = JSON.parse(ls)
            this.storage.push(lista)
        } else {
            this.storage.push(lista)
        }
        localStorage.setItem('consumo', JSON.stringify(this.storage))
    }
    getStorage() {
        let ls: string | null = localStorage.getItem('consumo')
        ls ? (this.dadosLista = JSON.parse(ls)) : (this.dadosLista = [])
        return this.dadosLista
    }
    // filter(lista: object){
    //     Object.keys(lista).forEach(element =>{
    //         switch (element){
    //             case 'frigobar':

    //         }
    //     })
    // }
}
