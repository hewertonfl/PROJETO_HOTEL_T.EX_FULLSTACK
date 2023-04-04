<template>
    <form
        class="formulario"
        method="POST"
        @submit.prevent="atualizarReserva(this.reservaID)"
    >
        <label for="usuario" class='usuario'>Cliente: <span>{{nome }} {{sobrenome}}</span></label>
        <label for="tipo">Tipo:</label>
            <select v-model="tipo" id="tipo">
                <option value="Suíte Luxuosa">Suíte Luxuosa</option>
                <option value="Suíte com Varanda">Suíte com Varanda</option>
                <option value="Quarto Superior">Quarto Superior</option>
                <option value="Quarto Deluxe">Quarto Deluxe</option>
                <option value="Quarto Executivo">Quarto Executivo</option>
                <option value="Quarto Família">Quarto Família</option>
                <option value="Quarto Adaptado para Deficientes">Quarto Adaptado para Deficientes</option>
                <option value="Quarto com Vista para o Mar">Quarto com Vista para o Mar</option>
                <option value="Quarto Econômico">Quarto Econômico</option>
            </select>   
        <label for="numero">Número do quarto:</label>
        <input type="text" id="numero" v-model="numero" required />

        <label for="checkin">Check-in:</label>
        <input type="date" id="checkin" v-model="checkin" required />

        <label for="checkout">Check-out:</label>
        <input type="date" id="checkout" v-model="checkout" required />

        <label for="qtdpessoas">Quantidade de Pessoas:</label>
        <select v-model="qtdpessoas" id="qtdpessoas">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>

        <label for="total">Total (R$):</label>
        <input type="text" id="total" v-model="total" required />

        <label for="totaldesconto">Total de Desconto (%):</label>
        <input
            type="text"
            id="totaldesconto"
            v-model="desconto"
            required
        /> 

        <label for="confirmacao">Confirmação:</label>
        <select v-model="confirmacao" id="confirmacao">
            <option value="confirmado">Confirmado</option>
            <option value="aguardando">Aguardando confirmação</option>
            <option value="cancelado">Cancelado</option>
        </select>             
        <button @click="this.atualizar">Editar Reserva</button>
    </form>
</template>

<script>
import axios from 'axios'

export default {
    name: 'EditarReservaView',
    data() {
        return {
            reservaID: null,
            checkin: null,
            checkout: null,
            qtdpessoas: null,
            total: null,
            desconto: null,
            totaldesconto: null,
            data: null,
            confirmacao: null,
            idAcomodacao: null,
            //*Acomodações
            acomodacoes: null,
            tipo: null,
            numero: null,
            //*Usuário
            nome: null,
            sobrenome: null
        }
    },
    methods: {
        async identificarReserva(id) {
            axios
                .get(`/api/reservas/${id}`)
                .then((response) => {
                    this.checkin = this.formatarData(response.data[0].checkin)
                    this.checkout = this.formatarData(response.data[0].checkout)
                    this.qtdpessoas = response.data[0].qtdpessoas
                    this.total = (parseFloat(response.data[0].total))
                    this.desconto = response.data[0].totaldesconto
                    this.data = response.data[0].data
                    this.confirmacao = response.data[0].confirmacao
                    this.idAcomodacao = response.data[0].id_acomodacao
                    this.tipo = response.data[0].tipo
                    this.numero = response.data[0].numero
                    this.nome = response.data[0].nome
                    this.sobrenome = response.data[0].sobrenome
                })
                .catch((error) => error)
        },
        atualizarReserva(id) {
            const dados = {
                checkin: this.checkin,
                checkout: this.checkout,
                qtdpessoas: this.qtdpessoas,
                total: this.total,
                totaldesconto: this.totaldesconto,
                data: this.data,
                confirmacao: this.confirmacao,
                tipo: this.tipo
            }
            axios
                .patch(`/api/reservas/${id}`, dados)
                .then((response) => console.log(response))
                .catch((error) => error)

            this.$router.push('/admin/reservas')
        },
        formatarData(data) {
            let formatarData = data.split('T')
            return formatarData[0]
        },
         formatarMoeda(valor) {
            const moeda = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
            return moeda
        },
    },

    mounted() {
        this.reservaID = this.$route.params.id
        this.identificarReserva(this.$route.params.id)
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
.formulario select {
    width: 100%;
    height: 40px;
    font-size: 1rem;
    padding-left: 10px;
}
.formulario button {
    font-size: 1rem;
    padding: 10px 30px;
    background: #a35700;
    color: #ffffff;
    border: none;
    margin-top: 10px;
}
.usuario {
    font-weight: bold;
    font-size: 1.2rem;
}
</style>
