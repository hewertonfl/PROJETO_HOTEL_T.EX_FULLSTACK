export default class Produtos {
    constructor(nome, valor, quantidade, categoria, itens, lista = []) {
        this.nome = nome;
        this.valor = valor;
        this.quantidade = quantidade;
        this.categoria = categoria;
        this.itens = itens;
        this.lista = lista;
    }
    adicionarProdutos(nome, valor, quantidade, categoria) {
        this.nome = nome;
        this.valor = valor;
        this.quantidade = quantidade;
        this.categoria = categoria;
        this.listaProdutos();
    }
    listaProdutos() {
        this.itens = {
            nome: this.nome,
            valor: this.valor,
            quantidade: this.quantidade,
            categoria: this.categoria,
        };
        this.filtro();
    }
    filtro() {
        let flag = false;
        this.lista.forEach((element, index) => {
            if (element.nome == this.nome &&
                element.categoria == this.categoria) {
                this.lista[index] = this.itens;
                flag = true;
            }
        });
        !flag ? this.lista.push(this.itens) : null;
        console.log(this.lista);
    }
    getItems() {
        return this.lista;
    }
}
