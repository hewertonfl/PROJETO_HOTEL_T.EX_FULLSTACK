export default class Produto{
    public id: number
    public data: Date
    public item: string
    public local: string
    public quantidade: number
    public preco: number

    constructor(id:number, data: Date, item: string, local: string, quantidade: number){
        this.id = id
        this.data = data
        this.item = item
        this.local = local
        this.quantidade = quantidade
        this.preco = Math.round(Math.random() * 20)
    }
}