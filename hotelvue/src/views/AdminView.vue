<template>
    <main class="container">
        <h2>🔸Checklist dos itens consumidos no quarto🔸</h2>
        <section>
            <h3>Frigobar</h3>
            <table>
                <tr v-for="item in frigobar" :key="item.nome">
                    <td>{{ item.nome }}:</td>
                    <td>
                        <input
                            type="number"
                            :id="item.nome"
                            v-model="item.var"
                            placeholder="Quantidade"
                            min="0"
                            @change="
                                produtos.adicionarProdutos(
                                    item.nome,
                                    10 * Number(item.var),
                                    Number(item.var),
                                    'Frigobar'
                                )
                            "
                        />
                    </td>
                    <td>Preço: R${{ item.var? 10 * Number(item.var): 0 }},00</td>
                </tr>
            </table>
        </section>
        <section>
            <h3>Cesta</h3>
            <table>
                <tr v-for="item in cesta" :key="item">
                    <td>{{ item.nome }}:</td>
                    <td>
                        <input
                            type="number"
                            :id="item.nome"
                            v-model="item.var"
                            placeholder="Quantidade"
                            min="0"
                            @change="
                                produtos.adicionarProdutos(
                                    item.nome,
                                    10 * Number(item.var),
                                    Number(item.var),
                                    'cesta'
                                )
                            "
                        />
                    </td>
                    <td>Preço: R${{ item.var? item.var = 10 * Number(item.var): item.var = 0 }},00</td>
                </tr>
            </table>
        </section>
        <section>
            <h3>Bar</h3>
            <table>
                <tr v-for="item in bar" :key="item">
                    <td><th>{{ item.nome }}:</th></td>
                    <td>
                        <input
                            type="number"
                            :id="item.nome"
                            v-model="item.var"
                            placeholder="Quantidade"
                            min="0"
                            @change="
                                produtos.adicionarProdutos(
                                    item.nome,
                                    priceCalc(10,item.var),
                                    Number(item.var),
                                    'bar'
                                )
                            "
                        />
                    </td>
                    <td>Preço: R${{ item.var? item.var = 10 * Number(item.var): 0  }},00</td>
                </tr>
            </table>
        </section>
        <button @click="storageProdutos.setStorage(produtos.getItems())">
            Cadastrar
        </button>
    </main>
</template>

<script>
import Produtos from '@/assets/js/build/classes/Produtos.js'
import StorageProdutos from '@/assets/js/build/classes/storageProdutos.js'

export default {
    name: 'AdminView',
    data() {
        return {
            fAgua: 0,
            fCerveja: 0,
            fRefrigerante: 0,

            cChocolate: null,
            cBatata: null,
            cAmendoim: null,

            bCafe: null,
            bPaoQueijo: null,
            bAgua: null,
            bLanche: null,
            bAlmoco: null,
            bCerveja: null,
            bRefrigerante: null,

            frigobar: [
                { nome: 'Água', var: 'fAgua' },
                { nome: 'Cerveja', var: 'fCerveja' },
                { nome: 'Refrigerante', var: 'fRefrigerante' },
            ],
            cesta: [
                { nome: 'Barra de Chocolate', var: 'cChocolate' },
                { nome: 'Batata Chips', var: 'cBatata' },
                { nome: 'Amendoim', var: 'cAmendoim' },
            ],
            bar: [
                { nome: 'Café', var: 'bCafe' },
                { nome: 'Pão de queijo', var: 'bPaoQueijo' },
                { nome: 'Água', var: 'bAgua' },
                { nome: 'Lanche', var: 'bLanche' },
                { nome: 'Almoço', var: 'bAlmoco' },
                { nome: 'Cerveja', var: 'bCerveja' },
                { nome: 'Refrigerante', var: 'bRefrigerante' },
            ],
        }
    },
    mounted() {
        this.produtos = new Produtos()
        this.storageProdutos = new StorageProdutos()
        this.fAgua = 0
    },
    methods: {
        priceCalc(price, qtd) {
            console.log(qtd)
            if (qtd) {
                return price * qtd
            }
            return 0
        },
    },
}
</script>

<style scoped>
.container h2 {
    text-align: center;
    margin-top: 30px;
}
section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
}
section h3 {
    margin: 20px 0 50px;
    border-bottom: 5px solid #a35700;
}
section div > div {
    width: 300px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
}
section div > div input {
    width: 100px;
}
.container button {
    display: block;
    margin: 35px auto 35px;
    padding: 10px 35px;
    background: #063f57;
    color: #ffffff;
    border-color: #063f57;
    font-size: 1.1rem;
}
table td {
    padding: 0.75rem;
    width: 33.33%;
}
table {
    width: 50%;
    margin-bottom: 1rem;
    background-color: transparent;
    border-collapse: collapse;
}
</style>
