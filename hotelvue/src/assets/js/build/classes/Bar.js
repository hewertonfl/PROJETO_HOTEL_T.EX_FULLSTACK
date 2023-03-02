import Produtos from './Produtos';
export default class Bar extends Produtos {
    constructor(nome, valor, quantidade, itens) {
        super(nome, valor, quantidade, itens);
    }
    BarListagem(nome, valor, quantidade) {
        super.adicionarProdutos(nome, valor, quantidade);
        let bar = {
            nome: this.nome,
            valor: this.valor,
            quantidade: this.quantidade,
        };
        let item = {
            bar,
        };
        super.listaProdutos(item);
    }
}
