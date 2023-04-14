<template>
    <form
        class="formulario"
        method="POST"
        @submit.prevent="atualizarQuarto(this.quartoID)"
    >
        <label for="numero">Número:</label>
        <input type="text" id="numero" v-model="numero" disabled />

        <label for="tipo">Tipo:</label>
        <select v-model="tipo" @change="filtrarTipos(tipo)">
            <option v-for="acomodacao in acomodacoes" :key="acomodacao.id" :value="acomodacao.tipo">
                {{ acomodacao.tipo }}
            </option>
        </select>

        <label for="preco">Preço:</label>
        <input type="text" id="preco" v-model="preco" disabled />

        <label for="status">Status:</label>
        <select v-model="status" id="status">
            <option value="livre">Livre</option>
            <option value="ocupado">Ocupado</option>
        </select>

        <button>Editar Quarto</button>
    </form>
</template>

<script>
import axios from 'axios'
export default {
    name: 'EditarAcomodacaoView',
    data() {
        return {
            quartoID: null,
            quartos: null,
            numero: null,
            preco: null,
            status: null,
            //*Acomodação
            idAcomodacao: null,
            acomodacoes: null,
            quartoPreco: null,
            tipo: null,
        }
    },
    methods: {
        async identificarQuarto(id) {
            axios
                .get(`/api/acomodacoes/quartos/${id}`)
                .then((response) => {
                    this.numero = response.data[0].numero
                    this.preco = this.formatarMoeda(
                        parseFloat(response.data[0].preco)
                    )
                    this.status = response.data[0].status
                    this.tipo = response.data[0].tipo
                })
                .catch((error) => error)
        },
        async atualizarQuarto(id) {
            const dados = {
                idAcomodacao: this.idAcomodacao,
                status: this.status,
            }
            axios
                .patch(`/api/acomodacoes/quartos/${id}`, dados)
                .then((response) => console.log(response))
                .catch((error) => error)

            this.$router.push('/admin/acomodacoes')
        },
        filtrarTipos(tipoAcomodacao) {
            const [...acomodacoesArray] = this.acomodacoes
            const filtro = acomodacoesArray.filter(
                (tipo) => tipo.tipo == tipoAcomodacao
            )
            const quarto = filtro
            this.preco = quarto[0].preco
            this.idAcomodacao = quarto[0].id_acomodacao
            console.log(this.idAcomodacao);
            },
        formatarMoeda(valor) {
            const moeda = valor.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            })
            return moeda
        },
    },
    mounted() {
        this.quartoID = this.$route.params.id
        this.identificarQuarto(this.$route.params.id)
        axios
            .get('/api/acomodacoes')
            .then((response) => (this.acomodacoes = response.data))
    },
}
</script>

<style scoped>
.formulario {
    width: 50%;
    margin: 0 auto;
    margin: 3% auto 0 auto;
    padding: 20px;
    background: #063f57;
    border-radius: 10px;
}
.formulario p {
    color: #a35700;
    font-weight: bold;
    line-height: 50px;
    font-size: 1.5rem;
    text-align: right;
    margin-right: 10px;
    cursor: pointer;
}
.formulario h2 {
    color: #ffffff;
    text-align: center;
}
.formulario label {
    width: 100%;
    display: block;
    color: #ffffff;
    margin: 5px 0;
}
.formulario input,
.formulario select,
textarea {
    width: 100%;
    height: 40px;
    font-size: 1rem;
    padding-left: 10px;
}
textarea {
    height: 60px;
}
.formulario button {
    font-size: 1rem;
    padding: 10px 30px;
    background: #a35700;
    color: #ffffff;
    border: none;
    margin-top: 10px;
}
</style>
