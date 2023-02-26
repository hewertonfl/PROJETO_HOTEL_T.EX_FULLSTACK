import LocalStorage from './LocalStorage.js';
export default class ElementosInterface {
    static listarProdutos(produtos, tag) {
        const listar = produtos.map(produto => {
            return `
            <div class='itensConsumidos'>
                <p>🔸Item: ${produto.item.replaceAll('_', ' ')} | 🔸Local: ${produto.local} | 🔸Quantidade: ${produto.quantidade} | 🔸Preço: ${produto.preco}</p>
                <span class='excluir' id=${produto.id}>🗑️</span>
            </div>
            `;
        });
        tag.innerHTML = listar && listar.join(' ');
    }
    static removerItem(tag, produtos) {
        tag.addEventListener('click', (e) => {
            const target = e.target;
            if (target.classList.contains('excluir')) {
                target.parentElement.remove();
            }
            let itemID = target.id;
            const filtro = produtos.filter(item => item.id !== Number(itemID));
            LocalStorage.adicionarLocalStorage(filtro);
        });
    }
}
