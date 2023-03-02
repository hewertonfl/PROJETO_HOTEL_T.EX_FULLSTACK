export default class StorageProdutos {
    constructor(lista, dadosLista, storage) {
        this.lista = lista;
        this.dadosLista = dadosLista;
        this.storage = storage;
    }
    setStorage(lista) {
        this.storage = [];
        let ls = localStorage.getItem('consumo');
        if (ls) {
            this.storage = JSON.parse(ls);
            this.storage.push(lista);
        }
        else {
            this.storage.push(lista);
        }
        localStorage.setItem('consumo', JSON.stringify(this.storage));
    }
    getStorage() {
        let ls = localStorage.getItem('consumo');
        ls ? (this.dadosLista = JSON.parse(ls)) : (this.dadosLista = []);
        return this.dadosLista;
    }
}
