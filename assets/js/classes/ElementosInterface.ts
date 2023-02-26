import Produto from './Produto.js'
import LocalStorage from './LocalStorage.js'

export default class ElementosInterface{



    static listarProdutos(produtos: Produto[], tag: HTMLElement){
        const listar = produtos.map(produto => {
            return `
            <div class='itensConsumidos'>
                <p>🔸Item: ${produto.item.replaceAll('_', ' ')} | 🔸Local: ${produto.local} | 🔸Quantidade: ${produto.quantidade}</p>
                <span class='excluir' data-id=${produto.id}>🗑️</span>
            </div>
            `
        })
        tag.innerHTML = listar && listar.join(' ')
    }

    static removerItem(tag: HTMLElement, produtos: Produto[]){
        tag.addEventListener('click', (e) => {
            console.log(e.target)
            if(e.target.classList.contains('excluir')){
                e.target.parentElement.remove()
            }
            let itemID = e.target.dataset.id
            console.log(itemID)
            const filtro = produtos.filter(item => item.id !== Number(itemID))         
            LocalStorage.adicionarLocalStorage(filtro)
        })
    }
}