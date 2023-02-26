// Classes
import Produto from './classes/Produto.js'
import ElementoInterface from './classes/ElementosInterface.js'
import LocalStorage from './classes/LocalStorage.js'

// Elementos Formulario
const item = document.getElementById('itens')
const local = document.getElementById('local')
const quantidade = document.getElementById('quantidade')

// Elementos HTML
const lista = document.getElementById('itensAdicionados')
const formulario = document.getElementById('formulario')

// Elementos Gerais
let itensConsumidos = LocalStorage.buscarLocalStorage()

formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    const id = Number(String(Math.random()).slice(2))
    const data = new Date()

    if(item.value === 'Selecione um item'){
        alert('Selecione um item.')
        return
    }

    if(local.value === 'Local do consumo'){
        alert('Selecione o local do consumo.')
        return
    }    

    if(quantidade.value <= 0){
        alert('Adicione uma quantidade.')
        return
    }      

    const consumo = new Produto(id, data, item.value, local.value, +quantidade.value)
    itensConsumidos.push(consumo)

    ElementoInterface.listarProdutos(itensConsumidos, lista)   
    
    LocalStorage.adicionarLocalStorage(itensConsumidos)
    
    item.value = 'Selecione um item', local.value = 'Local do consumo', quantidade.value = ''
})

window.addEventListener('DOMContentLoaded', () => {
    ElementoInterface.listarProdutos(itensConsumidos, lista)
})

ElementoInterface.removerItem(lista, itensConsumidos)

