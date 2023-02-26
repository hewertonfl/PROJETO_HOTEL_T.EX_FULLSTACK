export default class LocalStorage {
    static adicionarLocalStorage(produtos) {
        localStorage.setItem('produtos', JSON.stringify(produtos));
    }
    static buscarLocalStorage() {
        const dados = localStorage.getItem('produtos') ? JSON.parse(localStorage.getItem('produtos')) : [];
        return dados;
    }
}
