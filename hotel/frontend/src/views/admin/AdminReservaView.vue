<template>
    <main class="container-contato">
        <div class="titulo-form-contato header">
            <h2>Reservas</h2>
            <router-link :to="{ path: '/admin/cadastrar-reserva' }" class="button">Cadastrar Reserva</router-link>
        </div>

        <div class="box-reservas">
            <div class='cada-box' v-for="reserva in reservas" :key="reserva.id">
                    <div class='destaque1'>
                        <span>Hóspede:</span>
                        {{ reserva.nome }} {{ reserva.sobrenome }}<br>
                        <span>Número do quarto:</span>
                        {{ reserva.numero }}
                    </div>
                    <div>
                <ul>
                    <li>
                        <span>Quarto:</span>
                        {{ reserva.tipo }}
                    </li>
                    <li>
                        <span>Check-in:</span>
                        {{ this.formatarData(reserva.checkin) }}
                    </li>
                    <li><span>Check-out:</span> {{ this.formatarData(reserva.checkout) }}</li>
                    <li>
                        <span>Quantidade de pessoas:</span>
                        {{ reserva.qtdpessoas }}
                    </li>
                    <li><span>Data da reserva:</span> {{ this.formatarData(reserva.data) }}</li>
                    <li v-if="reserva.confirmacao == 'confirmado'">
                        <span>Data da confirmação:</span>
                        {{ this.formatarData(reserva.dataconfirmacao) }}
                    </li>
                    <li class='destaque2'><span>Total:</span> {{ this.formatarMoeda(parseFloat(reserva.total)) }}</li>
                    <li  v-if="reserva.totaldesconto" class='destaque2'>
                        <span>Total com desconto:</span>
                        {{ this.formatarMoeda(calcularDesconto(reserva.total,reserva.totaldesconto)) }}
                    </li>
                </ul>
                    </div>
                        <div class='btn-editar-remover'>
                        <router-link
                            :to="{
                                path: `/admin/editar-reserva/${reserva.id_reserva}`,
                            }"
                            class="button button-editar"
                            >Editar</router-link
                        >
                        <button @click="this.inativarReserva(reserva.id)" class="button">Remover</button>
                    </div>
            </div>
        </div>
    </main>
</template>

<script>
import axios from 'axios'
export default {
    name: 'AdminReservaView',
    data() {
        return {
            reservas: null,
            // acomodacoes: null,
            // usuarios: null,
            // nomeQuarto: null,
        }
    },
    methods: {
        // carregarDadosQuartos(id_acomodacao) {
        //     let nomeQuarto
        //     try {
        //         const filtro = this.acomodacoes.filter(
        //             (quarto) => quarto.id_acomodacao == id_acomodacao
        //         )
        //         nomeQuarto = filtro[0].tipo
        //         return nomeQuarto
        //     } catch (erro) {
        //         console.log(erro)
        //     }
        // },
        // carregarDadosUsuario(id_usuario) {
        //     let nomeUsuario
        //     try {
        //         const filtro = this.usuarios.filter(
        //             (usuario) => usuario.id_usuario == id_usuario
        //         )
        //         nomeUsuario = filtro[0].nome + " " + filtro[0].sobrenome
        //         console.log(nomeUsuario);
        //         return nomeUsuario
        //     } catch (erro) {
        //         console.log(erro)
        //     }
        // },
        formatarData(data) {
            const dataS = new Date(data)
            var formatarData = dataS.toLocaleDateString('pt-BR')
            return formatarData
        },

        formatarMoeda(valor) {
            const moeda = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
            return moeda
        },
        calcularDesconto(total,desconto) {
            const calculo = total*(1-(desconto/100))
            return calculo
        }
    },
    mounted() {
        axios
            .get('/api/reservas', {
                withCredentials: true,
            })
            .then((response) => (this.reservas = response.data))
            .catch((erro) => console.log(erro))

        // axios
        //     .get('/api/acomodacoes', {
        //         withCredentials: true,
        //     })
        //     .then((response) => (this.acomodacoes = response.data))
        //     .catch((erro) => console.log(erro))

        // axios
        //     .get('/api/usuarios', {
        //         withCredentials: true,
        //     })
        //     .then((response) => (this.usuarios = response.data))
        //     .catch((erro) => console.log(erro))
    },
}
</script>

<style lang='scss' scoped>
.header{
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
}
.destaque1 {
    border-block: solid 1px black;
    align-items: flex-start;
    font-weight: bold;
    margin-bottom: 10px;
    flex-basis: 300px;
}
.destaque2 {
    border-block: solid 1px rgb(0, 0, 0);
    background: rgba(6, 62, 86, 0.1);
    align-items: flex-start;
    font-weight: bold;
}
.box-reservas {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
}

.box-reservas .cada-box{
    width: 300px;
    height: 320px;
    padding: 10px;
    display: flex;
    background: #063f5710;
    flex-wrap: wrap;
    align-content: space-between;
    justify-content: flex-start;
}

.cada-box ul li {
    display: block;
    width: 280px;
}

.box-reservas span {
    color: #a35700;
    font-weight: bold;
}

.btn-editar-remover {
    margin-top: 20px;
    justify-content: flex-end;
    flex-wrap: wrap;
}

.button {
    background: #063f57;
    padding: 5px 10px;
    color: #ffffff;
    border: none;
    margin: 10px 7px 0 0;
    cursor: pointer;
}

.button:hover {
    background: #a35700;
}

.cadastro {
    display: block;
    margin: 0 auto;
    padding: 10px 20px;
    margin-bottom: 40px;
}
</style>
