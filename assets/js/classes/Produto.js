export default class Produto {
    id;
    data;
    item;
    local;
    quantidade;
    preco;
    constructor(id, data, item, local, quantidade) {
        this.id = id;
        this.data = data;
        this.item = item;
        this.local = local;
        this.quantidade = quantidade;
        this.preco = Math.round(Math.random() * 20);
    }
}
