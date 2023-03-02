//import type { Produto } from '../interfaces/Produto'
import type { Produto } from '../interfaces/Produto'
export default class Produtos implements Produto {
    nome: string
    valor: number
    quantidade: number
    itens: object

    constructor(
        nome: string,
        valor: number,
        quantidade: number,
        itens: object
    ) {
        this.nome = nome
        this.valor = valor
        this.quantidade = quantidade
        this.itens = itens
    }

    adicionarProdutos(nome: string, valor: number, quantidade: number): void {
        this.nome = nome
        this.valor = valor
        this.quantidade = quantidade
    }

    listaProdutos(categoria: object): void {
        this.itens = categoria
    }
}
