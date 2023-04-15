<template>
    <form class="formulario" method="POST">
        <label for="nome">Nome:</label>
        <input
            class="pesquisa-nome"
            type="text"
            v-model="nome"
            name="nome"
            id="nome-cliente"
            placeholder="Nome"
        />
        <label for="sobrenome">Sobrenome:</label>
        <input
            class="pesquisa-sobrenome"
            type="text"
            v-model="sobrenome"
            name="sobrenome"
            id="sobrenome-cliente"
            placeholder="Sobrenome"
        />
        <div v-if="!this.usuario.length">
            <button
                type="button"
                @click.prevent="filtrarNome(this.nome, this.sobrenome)"
            >
                Pesquisar
            </button>
        </div>

        <div v-if="this.usuario.length">
            <label for="tipo">Tipo:</label>
            <select
                v-model="idAcomodacao"
                @change="filtrarNumero(idAcomodacao)"
            >
                <option
                    v-for="acomodacao in acomodacoes"
                    :key="acomodacao.id"
                    :value="acomodacao.id_acomodacao"
                >
                    {{ acomodacao.tipo }}
                </option>
            </select>
            <label for="numero">Número do quarto:</label>
            <select v-model="idQuarto">
                <option value="" selected disabled>
                    Quarto atual: {{ numero }}
                </option>
                <option
                    v-if="this.numerosQuartos == 0"
                    value=""
                    selected
                    disabled
                >
                    Tipo de acomodação sem quarto vago
                </option>
                <option
                    v-else
                    v-for="quarto in numerosQuartos"
                    :key="quarto.id"
                    :value="quarto.id_quarto"
                >
                    {{ quarto.numero }}
                </option>
            </select>

            <label for="tipo">Serviços adicionais:</label>
        <div class="servicos">
            <div>
        <input class='checkbox' type="checkbox" value='Spa' v-model="servicosAdicionados" > Spa
            </div>
            <div>
        <input class='checkbox' type="checkbox" value='Trilha Ecológica' v-model="servicosAdicionados" > Trilha Ecológica
            </div>
            <div>
        <input class='checkbox' type="checkbox" value='Passeio de Barco' v-model="servicosAdicionados" > Passeio de barco
            </div>
            <div>
        <input class='checkbox' type="checkbox" value='Passeio Entre Ilhas ' v-model="servicosAdicionados" > Passeio entre ilhas
            </div>
            <div>
        <input class='checkbox' type="checkbox" value='Café da Manhã no Quarto' v-model="servicosAdicionados" > Café da manhã no quarto
            </div>
        </div>

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

            <label for="totaldesconto">Total de Desconto (%):</label>
            <input type="text" id="totaldesconto" v-model="desconto" />

            <label for="total">Total:</label>
            <input type="text" id="total" v-model="total" disabled required />
            <label for="total">Total com desconto:</label>
            <input
                type="text"
                id="total"
                v-model="totaldesconto"
                disabled
                required
            />
            <button @click.prevent="this.cadastrarReserva()">Salvar Reserva</button>
        </div>
    </form>
</template>

<script>
import axios from 'axios'

export default {
    name: 'EditarReservaView',
    data() {
        return {
            reservaID: null,
            //* Reserva
            checkin: null,
            checkout: null,
            qtdpessoas: null,
            total: null,
            desconto: null,
            totalcomdesconto: null,
            noites: null,
            servicos: null, 
            idQuarto: null,
            idQuartoAnterior: null,
            servicosAdicionados: [],

            totaldesconto: null,

            //*Quarto
            quartoPreco: null,
            quartos: null,
            quartosFiltrados: null,
            numerosQuartos: null,

            status: null,
            numero: null,

            //*Acomodações
            acomodacoes: null,
            idAcomodacao: null,

            preco: null,

            //*Usuário
            idUsuario: null,
            usuarios: null,
            usuario: [],
            nome: null,
            sobrenome: null,
        }
    },
    methods: {
        async cadastrarReserva() {
            const dados = {
                checkin: this.checkin,
                checkout: this.checkout,
                qtdpessoas: parseInt(this.qtdpessoas),
                total: this.total,
                totaldesconto: this.desconto,
                totalcomdesconto: this.totalcomdesconto,
                data: new Date().toISOString(),
                noites: this.noites,
                confirmacao: "confirmado",
                servicos: JSON.stringify(this.atualizarServicos()),
                idUsuario: this.usuario[0].id_usuario,
                idQuarto: this.idQuarto,
            }
            axios
                .post(`/api/reservas`, dados)
                .then((response) => console.log(response))
                .catch((error) => error)

            this.$router.push('/admin/reservas')
        },
        filtrarNome(nome, sobrenome) {
            const [...usuariosArray] = this.usuarios

            const filtro = usuariosArray.filter(
                (usuario) =>
                    usuario.nome == nome && usuario.sobrenome == sobrenome
            )
            if (filtro.length) {
                return (this.usuario = filtro)
            } else {
                return alert('Usuário não cadastrado!')
            }
        },
        filtrarNumero(id_acomodacao) {
            axios
                .get(`/api/acomodacoes/tipos/${id_acomodacao}`)
                .then((response) => {
                    this.numerosQuartos = response.data
                    // this.total = this.calcularTotal(parseFloat(response.data[0].preco),this.qtdpessoas)
                })
                .catch((error) => error)
        },
        async calcularTotal(idQuarto, totalPessoas, checkin, checkout) {
            // let quarto = null
            await axios
            .get(`/api/acomodacoes/quartos/${idQuarto}`)
            .then((response) => (this.quartoPreco = parseFloat(response.data[0].preco)))
            const dataCheckin = new Date(checkin)
            const dataCheckout = new Date(checkout)
            const milissegundos = dataCheckout - dataCheckin
            const diferencaDias = milissegundos/(1000*60*60*24)
            this.noites = diferencaDias
            if(totalPessoas <2) {
                const preco = this.quartoPreco*diferencaDias
                this.quartoPreco = preco
            }
            if(totalPessoas > 1) {
            const preco = this.quartoPreco
            this.quartoPreco = (preco + ((preco * 0.05)*totalPessoas))*diferencaDias 
            }
            const preco = this.quartoPreco + this.totalServicos()
            this.totalcomdesconto = this.calcularDesconto(preco, this.desconto) //para banco de dados
            this.totaldesconto = this.formatarMoeda(this.calcularDesconto(preco, this.desconto))
            this.total = preco
            this.totaltela = this.formatarMoeda(preco)
        },
        calcularDesconto(total, desconto) {
            const calculo = total * (1 - desconto / 100)
            return calculo
        },
        totalServicos() {
            const servicos = this.atualizarServicos()
            let totalServicos = 0
            console.log(totalServicos);
            for (let total of servicos) {
                totalServicos += total.preco
            }
            return totalServicos
        },
        atualizarServicos() {
            const servicos = this.servicosAdicionados.map((item) => {return {nome:item, preco: 100}})
            return servicos
        },
        // async filtrarNome(nome,sobrenome) {
        //     axios
        //     .get(`/api/usuarios/pesquisar/${nome}/${sobrenome}`)
        //     .then((response) => {
        //         this.usuario = response.data
        //         this.idUsuario = response.data[0].id_usuario
        //     }).catch((error) => {error, this.usuario = null})
        // },
        formatarData(data) {
            let formatarData = data.split('T')
            return formatarData[0]
        },
        formatarMoeda(valor) {
            const moeda = valor.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            })
            return moeda
        },
    },
    updated() {
        console.log(this.idQuarto)
        this.calcularTotal(this.idQuarto,this.qtdpessoas, this.checkin, this.checkout)
    },
    mounted() {
        axios
            .get('/api/acomodacoes')
            .then((response) => (this.acomodacoes = response.data))
        axios
            .get('/api/acomodacoes/quartos')
            .then((response) => (this.quartos = response.data))
        axios
            .get('/api/usuarios')
            .then((response) => (this.usuarios = response.data))
    },
}
</script>

<style scoped>
option[default] {
    display: none;
}
.servicos {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    color: white;
    flex-direction: column;
}
.formulario .checkbox{
    flex-direction: column;
    height: 10px;
    width: 25px;
}
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
