export default class Produtos {
    constructor(nome, valor, quantidade, itens) {
        this.nome = nome;
        this.valor = valor;
        this.quantidade = quantidade;
        this.itens = itens;
    }
    adicionarProdutos(nome, valor, quantidade) {
        this.nome = nome;
        this.valor = valor;
        this.quantidade = quantidade;
    }
    listaProdutos(categoria) {
        this.itens = categoria;
    }
}
