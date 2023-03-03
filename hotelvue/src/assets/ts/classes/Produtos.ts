import type { Produto } from '../interfaces/Produto'
export default class Produtos implements Produto {
    nome: string
    valor: number
    quantidade: number
    categoria: string
    itens: object
    lista: any[]

    constructor(
        nome: string,
        valor: number,
        quantidade: number,
        categoria: string,
        itens: object,
        lista: any[] = []
    ) {
        this.nome = nome
        this.valor = valor
        this.quantidade = quantidade
        this.categoria = categoria
        this.itens = itens
        this.lista = lista
    }

    adicionarProdutos(
        nome: string,
        valor: number,
        quantidade: number,
        categoria: string
    ): void {
        this.nome = nome
        this.valor = valor
        this.quantidade = quantidade
        this.categoria = categoria
        this.listaProdutos()
    }

    listaProdutos(): void {
        this.itens = {
            nome: this.nome,
            valor: this.valor,
            quantidade: this.quantidade,
            categoria: this.categoria,
        }
        this.filtro()
    }
    filtro(): void {
        let flag = false
        this.lista.forEach((element, index) => {
            if (
                element.nome == this.nome &&
                element.categoria == this.categoria
            ) {
                this.lista[index] = this.itens
                flag = true
            }
        })
        !flag ? this.lista.push(this.itens) : null
        console.log(this.lista)
    }
    getItems(): any[] {
        return this.lista
    }
}
