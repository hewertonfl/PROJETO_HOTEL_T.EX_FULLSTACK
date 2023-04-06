<template>
    <form
        class="formulario"
        method="POST"
        @submit.prevent="this.cadastrarAcomodacao"
        enctype="multipart/form-data"
    >
        <label for="numero">Número:</label>
        <input
            type="text"
            id="numero"
            placeholder="Digite o número da acomodação"
            v-model="numero"
            required
        />

        <label for="tipo">Tipo:</label>
        <select v-model="idAcomodacao">
            <option
                v-for="acomodacao in acomodacoes"
                :key="acomodacao.id"
                :value="acomodacao.id_acomodacao"
            >
                {{ acomodacao.tipo }}
            </option>
        </select>

        <label for="status">Status:</label>
        <select v-model="status" id="status">
            <option value="Livre">Livre</option>
            <option value="Ocupado">Ocupado</option>
        </select>

        <button>Cadastrar Acomodação</button>
    </form>
</template>

<script>
import axios from 'axios'

export default {
    name: 'CadastrarAcomodacaoView',
    data() {
        return {
            acomodacoes: null,
            numero: null,
            status: null,
            idAcomodacao: null,
        }
    },
    methods: {
        cadastrarAcomodacao() {
            const dados = {
                numero: this.numero,
                status: this.status,
                id_acomodacao: this.idAcomodacao,
            }

            axios
                .post('http://localhost:3000/api/acomodacoes/quartos', dados, {
                    withCredentials: true,
                })
                .then((response) => console.log(response))
                .catch((error) => { alert(error.response.data.message), this.$router.push('/admin/cadastrar-acomodacao')})

            this.$router.push('/admin/acomodacoes')
        },
    },
    mounted() {
        axios.get('/api/acomodacoes').then((response) => {
            (this.acomodacoes = response.data)
        })
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
