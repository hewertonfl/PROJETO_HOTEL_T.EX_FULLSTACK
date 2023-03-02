import Produtos from './Produtos'
import type { Produto } from '../interfaces/Produto'
export default class Bar extends Produtos {
    constructor(
        nome: string,
        valor: number,
        quantidade: number,
        itens: object[]
    ) {
        super(nome, valor, quantidade, itens)
    }
    BarListagem(nome: string, valor: number, quantidade: number): void {
        super.adicionarProdutos(nome, valor, quantidade)
        let bar: Produto = {
            nome: this.nome,
            valor: this.valor,
            quantidade: this.quantidade,
        }
        let item: Object = {
            bar,
        }
        super.listaProdutos(item)
    }
}
