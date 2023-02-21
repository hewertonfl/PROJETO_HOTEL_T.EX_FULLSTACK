"use strict";
exports.__esModule = true;
var Produtos = /** @class */ (function () {
    function Produtos(nome, valor, quantidade) {
        this.nome = nome;
        this.valor = valor;
        this.quantidade = quantidade;
    }
    Object.defineProperty(Produtos.prototype, "getNome", {
        // getters
        get: function () {
            return this.nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produtos.prototype, "getValor", {
        get: function () {
            return this.valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produtos.prototype, "getQuantidade", {
        get: function () {
            return this.quantidade;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produtos.prototype, "setNome", {
        //setters
        set: function (nome) {
            this.nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produtos.prototype, "setValor", {
        set: function (valor) {
            this.valor = valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produtos.prototype, "setQuantidade", {
        set: function (quantidade) {
            this.quantidade = quantidade;
        },
        enumerable: false,
        configurable: true
    });
    // methods
    Produtos.prototype.adicionar = function (produto) {
        this.itens.push(produto);
    };
    Produtos.prototype.listarProdutos = function () {
        return this.itens;
    };
    return Produtos;
}());
exports["default"] = Produtos;
