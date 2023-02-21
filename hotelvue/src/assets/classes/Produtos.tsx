export default class Produtos{
    private nome: string;
    private valor: number;
    private quantidade: number;
    itens: Array<object>
    
    constructor(nome: string, valor: number, quantidade: number, itens: Array<object>){
        this.nome = nome
        this.valor = valor
        this.quantidade = quantidade
        this.itens = []
    }

    atribuirNome(nome:string){
        this.nome = nome
    }

    adicionarProdutos(nome: string, valor: number, quantidade: number) {
        this.itens.push({nome: 'Agua', valor: 20, quantidade: 5})
        console.log(typeof this.itens)
    }

    pegarProdutos(){
        return this.itens
    }
}


