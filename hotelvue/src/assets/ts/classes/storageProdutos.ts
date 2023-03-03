export default class StorageProdutos {
    lista: any[]
    constructor(lista: []) {
        this.lista = lista
    }
    setStorage(lista: any[]): void {
        localStorage.setItem('consumo', JSON.stringify(lista))
    }
    getStorage() {
        let ls: string | null = localStorage.getItem('consumo')
        ls ? (ls = JSON.parse(ls)) : null
        return ls
    }
}
