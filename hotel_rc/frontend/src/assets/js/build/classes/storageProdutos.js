export default class StorageProdutos {
    constructor(lista) {
        this.lista = lista;
    }
    setStorage(lista) {
        localStorage.setItem('consumo', JSON.stringify(lista));
    }
    getStorage() {
        let ls = localStorage.getItem('consumo');
        ls ? (ls = JSON.parse(ls)) : null;
        return ls;
    }
}
