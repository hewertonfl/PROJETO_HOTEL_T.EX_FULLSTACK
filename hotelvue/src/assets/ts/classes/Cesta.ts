import Produtos from './Produtos'
import type { Produto } from '../interfaces/Produto'
export default class Cesta extends Produtos {
    constructor(
        nome: string,
        valor: number,
        quantidade: number,
        itens: Produto[]
    ) {
        super(nome, valor, quantidade, itens)
    }
    cestaListagem(nome: string, valor: number, quantidade: number): void {
        super.adicionarProdutos(nome, valor, quantidade)
        let cesta: Produto = {
            nome: this.nome,
            valor: this.valor,
            quantidade: this.quantidade,
        }
        let item: Object = {
            cesta,
        }
        super.listaProdutos(item)
    }
}
