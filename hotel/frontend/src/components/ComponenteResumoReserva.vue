<template>
    <div>
        <h2>Resumo da Reserva</h2>
        <div class="resumo-box">
            <ul>
                <li>
                    Apartamento:
                    <span>{{ $store.getters.bookingData.acomodacao }}</span>
                </li>
                <div>
                    <li>
                        Check-in:
                        <span>{{
                            formatDates($store.getters.bookingData.checkin)
                        }}</span>
                    </li>
                    <li>
                        Check-out:
                        <span>{{
                            formatDates($store.getters.bookingData.checkout)
                        }}</span>
                    </li>
                    <li>
                        Nº de pessoas:
                        <span>{{ $store.getters.bookingData.qtdpessoas }}</span>
                    </li>
                    <li>
                        Noites:
                        <span>{{ $store.getters.bookingData.noites }}</span>
                    </li>
                </div>
                <li>
                    Serviços:
                    <ul>
                        <li
                            v-for="servico in $store.state.dadosReserva
                                .servicos"
                            :key="servico.nome"
                        >
                            <span>
                                ✅ {{ servico.nome }} -
                                {{ this.moeda(servico.preco) }}</span
                            >
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <CompServicos />
        <div>
            <details class="detalhesCupom" v-if="this.temCupom == false">
                <summary>Aplique seu cupom de desconto</summary>
                <h4>Seu cupom é: {{ cupomAleatorio }}</h4>
                <input
                    type="text"
                    v-model="cupom"
                    placeholder="Digite o código"
                />
            </details>
            <p>Valor total: {{ moeda(this.totalGeral()) }}</p>
        </div>
        <button
            @click="cadastrarReserva"
            class="display-f"
            type="button"
            id="botao__confirmar__reserva"
        >
            Confirmar reserva
        </button>
    </div>
</template>

<script>
import axios from 'axios'
import CompServicos from './CompServicos.vue'
//import axios from 'axios'
export default {
    name: 'ComponenteResumoReserva',
    cupomAleatorio: '',
    components: {
        CompServicos,
    },
    data() {
        return {
            cupom: '',
            temCupom: false,
            checkout: this.$store.getters.bookingData.checkout,
            acomodacoes: null,
            tipoAcomodacao: null,
            idQuarto: null,
            precoComDesconto: null,
            cupomTemp: null,
        }
    },
    methods: {
        geraCupom() {
            this.cupomAleatorio = Math.random().toString(36).substring(2, 10)
            this.cupomTemp = this.cupomAleatorio
        },
        salvar(chave, valor) {
            localStorage.setItem(chave, JSON.stringify(valor))
        },
        obterDados(chave) {
            const dados = localStorage.getItem(chave)
                ? JSON.parse(localStorage.getItem(chave))
                : null

            return dados
        },

        totalServicos() {
            const servicos = this.$store.getters.bookingData.servicos
            let totalServicos = 0
            for (let total of servicos) {
                totalServicos += total.preco
            }
            return totalServicos
        },
        async cadastrarReserva() {
            if (!localStorage.getItem('token')) {
                alert('Para fazer a reserva é necessario estar logado!')
                return
            }
            if (!this.$store.getters.bookingData.checkin) {
                alert('Selecione a data de checkin')
                return
            }
            if (!this.$store.getters.bookingData.checkout) {
                alert('Selecione a data de checkout')
                return
            }
            if (this.$store.getters.bookingData.noites < 0) {
                alert('Selecione a data de checkin anterior a de checkout')
                return
            }
            if (!this.$store.getters.bookingData.qtdpessoas) {
                alert('Selecione o número de pessoas')
                return
            }
            if (!this.$store.getters.bookingData.acomodacao) {
                alert('Selecione o quarto')
                return
            }

            // const roomPrice = this.$store.getters.bookingData.quartoPreco
            this.$store.commit('storeValorTotal', this.total().toFixed(2))
            this.valorTotal = this.total()

            if (this.temCupom == false) {
                if (this.cupom === '') {
                    const respostaCupom = confirm('Quer usar o cupom agora?')
                    if (respostaCupom) {
                        return
                    }
                } else {
                    if (
                        this.cupomTemp.length &&
                        this.cupomTemp !== this.cupom
                    ) {
                        alert('Cupom inválido! Tente outro.')
                        return
                    }
                    if (this.cupomTemp === this.cupom) {
                        this.salvar('cupom', this.cupom)
                        this.$store.commit('storeCupomDesconto', this.cupom)
                        this.precoComDesconto = (this.valorTotal * 0.9).toFixed(
                            2
                        )
                        this.temCupom = true
                    }
                }
            }

            if (!this.$store.getters.bookingData.servicos.length) {
                const resposta = confirm(
                    'Deseja adicionar algum serviço especial?'
                )
                if (resposta) {
                    return
                }
            }

            // this.$store.commit(
            //     'storeCupomDesconto',
            //     String(Math.random()).slice(2)
            // )

            const reservas = []

            // const local = this.obterDados('reserva')
            //     ? this.obterDados('reserva')
            //     : ''

            reservas.push({
                ...this.$store.getters.bookingData,
                noites: this.$store.getters.bookingData.noites,
                idUsuario: JSON.parse(localStorage.getItem('token')).userID,
                idQuarto: this.idQuarto,
                totalcomdesconto: this.precoComDesconto,
                data: new Date().toISOString(),
            })
            let data = reservas[0]
            data.servicos = JSON.stringify(data.servicos)
            //console.log(typeof data.servicos)
            this.saveBookingDB(data)
            //this.salvar('reserva', reservas)

            this.limpar()
            
            
        },
        total() {
            let adultos
            if (this.$store.getters.bookingData.qtdpessoas == 1) {
                adultos = 0
            } else {
                adultos =
                    Number(this.$store.getters.bookingData.qtdpessoas) *
                        0.05
            }
            const totalReserva =
                (this.totalServicos() +
                   Number(this.$store.getters.bookingData.quartoPreco) + ((Number(this.$store.getters.bookingData.quartoPreco) * adultos)*
                        this.$store.getters.bookingData.noites) )
            return totalReserva ? totalReserva : 0
        },
        totalGeral() {
            if (this.precoComDesconto) {
                return this.precoComDesconto
            } else {
                return this.total()
            }
        },
        async carregarAcomodacoes() {
            await axios
                .get('/api/acomodacoes')
                .then((response) => console.log(response.data))
                .catch((erro) => console.log(erro))
        },
        filtrarIdAcomodacao(tipoAcomodacao) {
            axios
                .get('/api/acomodacoes')
                .then((response) => {
                    console.log(response.data)
                    const [...acomodacoesArray] = response.data
                    const filtro = acomodacoesArray.filter(
                        (tipo) => tipo.tipo == tipoAcomodacao
                    )
                    const acomodacao = filtro
                    console.log(acomodacao[0].id_acomodacao)
                    axios
                        .get(
                            `/api/acomodacoes/tipos/${acomodacao[0].id_acomodacao}`
                        )
                        .then((response) => {
                            console.log(response.data[0].id_quarto)
                            return (this.idQuarto = response.data[0].id_quarto)
                        })
                        .catch((error) => error)
                })
                .catch((erro) => console.log(erro))
        },
        // filtrarNumero(id_acomodacao) {

        // },
        limpar() {
            const bookingData = {
                checkin: '',
                checkout: '',
                adultos: '',
                acomodacao: '',
                noites: '',
                servicos: [],
                cupomDesconto: '',
                valorTotal: '',
            }
            this.$store.commit('storeBookingData', bookingData)
        },
        moeda(valor) {
            return valor.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            })
        },
        formatDates: function (value) {
            if (value) {
                let data = new Date(value)
                var dia = ('0' + (data.getDate() + 1)).slice(-2)
                var mes = ('0' + (data.getMonth() + 1)).slice(-2)
                var ano = data.getFullYear()
                data = dia + '/' + mes + '/' + ano
                return data
            }
        },
        async saveBookingDB(data) {
            await axios.post('/api/reservas', data).then((response) => {
                console.log(response);
                alert('Reserva realizada com sucesso!')
                this.$router.push('/minhasreservas')
            }).catch((erro) => alert(erro.response.data.message))
        },
    },
    updated() {
        console.log(this.$store.getters.bookingData.acomodacao)
        if (this.$store.getters.bookingData.acomodacao) {
            this.filtrarIdAcomodacao(this.$store.getters.bookingData.acomodacao)
        }
    },
    created() {
        if (!localStorage.getItem('cupom')) {
            this.geraCupom()
        } else {
            this.temCupom = true
        }
        this.carregarAcomodacoes()
        console.log(this.acomodacoes)
    },
    watch: {
        checkout(vl) {
            this.noites()
            console.log(vl)
        },
    },
    mounted() {
        // if (localStorage.getItem('cardContent')) {
        //     const cardContent = localStorage.getItem('cardContent')
        //     const cardContentparse = JSON.parse(cardContent)
        //     console.log(cardContentparse[0].title);
        //     this.tipoAcomodacao = cardContentparse[0].title
        //     if (this.tipoAcomodacao) {
        //         this.filtrarIdAcomodacao(this.tipoAcomodacao)
        //     }
        // }
    },
}
</script>

<style scoped>
details {
    margin-top: 35px;
}
details input {
    margin-top: 10px;
    font-size: 1.1rem;
}
</style>
