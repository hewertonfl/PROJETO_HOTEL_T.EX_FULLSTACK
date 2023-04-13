<template>
    <table>
        <tr>
            <th>Código da Reserva</th>
            <th>Apartamento</th>
            <th>Nº de pessoas</th>
            <th>Check-in</th>
            <th>Check-out</th>
            <th>Noites</th>
            <th>Serviços:</th>
            <th>Total</th>
        </tr>
        <tr v-for="(reserva, i) in reservas" :key="i">
            <td>{{ reserva.id_reserva }}</td>
            <td>
                {{ reserva.tipo }} <br />
                {{ moeda(parseFloat(reserva.preco)) }}
            </td>
            <td>{{ reserva.qtdpessoas }}</td>
            <td>{{ formatarData(reserva.checkin) }}</td>
            <td>{{ formatarData(reserva.checkout) }}</td>
            <td>
                {{ reserva.noites }}
            </td>
            <td>
                <ul>
                    <li
                        v-for="servicos in JSON.parse(reserva.servicos)"
                        :key="servicos.nome"
                    >
                        {{ servicos.nome }} - {{ this.moeda(servicos.preco) }}
                    </li>
                </ul>
            </td>
            <td>{{ moeda(parseFloat(reserva.totalcomdesconto)) }}</td>
            <td>
                <button
                    @click="this.excluirReserva(reserva.id_reserva)"
                    class="excluir"
                    type="button"
                    title="Excluir Reserva"
                >
                    Excluir Reserva
                </button>
                <ComponenteDetalhes :codigo="reserva.id_reserva" />
            </td>
        </tr>
    </table>
</template>

<script>
import ComponenteDetalhes from './ComponenteDetalhes.vue'
import axios from 'axios'

export default {
    name: 'ComponenteMinhaReserva',
    components: {
        ComponenteDetalhes,
    },
    data() {
        return {
            reservas: '',
        }
    },
    methods: {
        async excluirReserva(id) {
            const resposta = confirm(
                'Tem certeza que deseja excluir essa reserva?'
            )
            if (resposta) {
                await axios.delete(
                    `/api/reservas/${id}`
                )
            }
            this.fillBookings()
        },
        salvar(chave, valor) {
            localStorage.setItem(chave, JSON.stringify(valor))
        },
        moeda(valor) {
            return valor.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            })
        },
        formatarData(data) {
            const dataS = new Date(data)
            var formatarData = dataS.toLocaleDateString('pt-BR')
            return formatarData
        },
        async fillBookings() {
            const id = JSON.parse(localStorage.getItem('token')).userID
            console.log(id)
            await axios
                .get(`/api/reservas/mybookings/${id}`)
                .then((res) => {
                    this.reservas = res.data
                    console.log(res)
                })
                .catch((error) => console.log(error))
        },
    },
    mounted() {
        this.fillBookings()
    },
}
</script>
<style scoped>
table {
    width: 100%;
}
table th {
    background: #063f57;
    padding: 5px;
    color: #fff;
}
table tr td {
    padding: 8px 0;
    text-align: center;
    border-bottom: 1px solid #ccc;
}
.excluir {
    width: 100%;
    border: none;
    color: #fff;
    padding: 5px;
    margin: 0 2px 5px 0;
    cursor: pointer;
}
.excluir {
    background: red;
}
</style>
