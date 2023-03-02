import Produtos from './Produtos'
import type { Produto } from '../interfaces/Produto'

export default class Frigobar extends Produtos {
    constructor(
        public nome: string,
        public valor: number,
        public quantidade: number,
        public itens: Produto[]
    ) {
        super(nome, valor, quantidade, itens)
    }
    frigobarListagem(nome: string, valor: number, quantidade: number): void {
        super.adicionarProdutos(nome, valor, quantidade)
        let item: Produto | object = {}

        //super.listaProdutos(consumo)
    }
}
