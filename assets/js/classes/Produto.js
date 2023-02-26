export default class Produto {
    id;
    data;
    item;
    local;
    quantidade;
    constructor(id, data, item, local, quantidade) {
        this.id = id;
        this.data = data;
        this.item = item;
        this.local = local;
        this.quantidade = quantidade;
    }
    get getId() {
        return this.id;
    }
    get getData() {
        return this.data;
    }
    get getItem() {
        return this.item;
    }
    get getLocal() {
        return this.local;
    }
    get getQuantidade() {
        return this.quantidade;
    }
}
