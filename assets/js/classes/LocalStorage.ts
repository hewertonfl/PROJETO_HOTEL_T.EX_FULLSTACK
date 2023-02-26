import Produto from "./Produto";

export default class LocalStorage{
    static adicionarLocalStorage(produtos: Produto[]){
        localStorage.setItem('produtos', JSON.stringify(produtos))
    }

    static buscarLocalStorage(): Produto[]{
        const dados = localStorage.getItem('produtos') ? JSON.parse(localStorage.getItem('produtos')!) : []
        return dados
    }    
}