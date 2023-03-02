export interface Produto {
    [key: string]: any
    itens?: object
    adicionarProdutos?: (
        nome: string,
        valor: number,
        quantidade: number
    ) => void
    listaProdutos?: (categoria: object) => void
    frigobarListagem?: (nome: string, valor: number, quantidade: number) => void
    barListagem?: (nome: string, valor: number, quantidade: number) => void
    cestaListagem?: (nome: string, valor: number, quantidade: number) => void
}
