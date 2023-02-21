"use strict";
exports.__esModule = true;
var Produtos = /** @class */ (function () {
    function Produtos(nome, valor, quantidade, itens) {
        this.nome = nome;
        this.valor = valor;
        this.quantidade = quantidade;
        this.itens = [];
    }
    Produtos.prototype.atribuirNome = function (nome) {
        this.nome = nome;
    };
    Produtos.prototype.adicionarProdutos = function (nome, valor, quantidade) {
        this.itens.push({ nome: 'Agua', valor: 20, quantidade: 5 });
        console.log(typeof this.itens);
    };
    Produtos.prototype.pegarProdutos = function () {
        return this.itens;
    };
    return Produtos;
}());
exports["default"] = Produtos;
