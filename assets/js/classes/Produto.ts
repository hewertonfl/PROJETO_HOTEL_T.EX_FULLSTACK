export default class Produto{
    public id: number
    public data: Date
    public item: string
    public local: string
    public quantidade: number

    constructor(id:number, data: Date, item: string, local: string, quantidade: number){
        this.id = id
        this.data = data
        this.item = item
        this.local = local
        this.quantidade = quantidade
    }

    get getId(){
        return this.id
    }    

    get getData(){
        return this.data
    }

    get getItem(){
        return this.item
    }
    
    get getLocal(){
        return this.local
    }  
    
    get getQuantidade(){
        return this.quantidade
    }     
}