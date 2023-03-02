import Produtos from './Produtos';
export default class Cesta extends Produtos {
    constructor(nome, valor, quantidade, itens) {
        super(nome, valor, quantidade, itens);
    }
    cestaListagem(nome, valor, quantidade) {
        super.adicionarProdutos(nome, valor, quantidade);
        let cesta = {
            nome: this.nome,
            valor: this.valor,
            quantidade: this.quantidade,
        };
        let item = {
            cesta,
        };
        super.listaProdutos(item);
    }
}
