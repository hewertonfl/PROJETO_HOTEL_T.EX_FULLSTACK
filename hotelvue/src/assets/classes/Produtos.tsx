export default class Produtos{
    private nome: string;
    private valor: number;
    private quantidade: number;
    itens: Array<object>
    
    constructor(nome: string, valor: number, quantidade: number){
        this.nome = nome
        this.valor = valor
        this.quantidade = quantidade
    }

    // getters
    get getNome(){
        return this.nome
    }

    get getValor(){
        return this.valor
    }
    
    get getQuantidade(){
        return this.quantidade
    }      

    //setters
    set setNome(nome:string){
        this.nome = nome
    }

    set setValor(valor:number){
        this.valor = valor
    }
    
    set setQuantidade(quantidade:number){
        this.quantidade = quantidade
    }    

    // methods
    adicionar(produto: Produtos) {
        this.itens.push(produto)
    }

    listarProdutos(){
        return this.itens
    }
}


