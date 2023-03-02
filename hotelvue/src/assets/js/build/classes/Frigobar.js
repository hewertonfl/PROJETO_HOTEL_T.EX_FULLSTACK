import Produtos from './Produtos';
export default class Frigobar extends Produtos {
    constructor(nome, valor, quantidade, itens, consumo = {}) {
        super(nome, valor, quantidade, itens);
        this.nome = nome;
        this.valor = valor;
        this.quantidade = quantidade;
        this.itens = itens;
        this.consumo = consumo;
    }
    frigobarListagem(nome, valor, quantidade) {
        super.adicionarProdutos(nome, valor, quantidade);
        let categoria = {
            frigobar: {
                nome: this.nome,
                valor: this.valor,
                quantidade: this.quantidade,
            },
        };
        Object.assign(this.consumo, categoria);
        console.log(this.consumo);
        //super.listaProdutos(consumo)
    }
}
