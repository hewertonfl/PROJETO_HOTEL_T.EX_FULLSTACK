<template>
    <main class="container-contato">
        <div class="titulo-form-contato flex-dc align-c display-f">
            <h2>Reservas</h2>
        </div>
        <div class="box-reservas">
            <div v-for="reserva in reservas" :key="reserva.id">
                <ul>
                    <li><span>Check-in:</span> {{ reserva.checkin }}</li>
                    <li><span>Check-out:</span> {{ reserva.checkout }}</li>
                    <li>
                        <span>Quantidade de pessoas:</span>
                        {{ reserva.qtdpessoas }}
                    </li>
                    <li><span>Total:</span> {{ reserva.total }}</li>
                    <li v-if="reserva.totaldesconto">
                        <span>Total do desconto:</span>
                        {{ reserva.totaldesconto }}
                    </li>
                    <li><span>Data da reserva:</span> {{ reserva.data }}</li>
                    <li v-if="reserva.confirmacao == 'confirmado'">
                        <span>Data da confirmação:</span>
                        {{ reserva.dataconfirmacao }}
                    </li>
                    <li><span>Quarto:</span> {{ carregarDadosQuartos(reserva.id_acomodacao) }}</li>

                    <li>
                    <router-link :to="{ path: `/admin/editar-reserva/${reserva.id_reserva}` }" class="button">Editar</router-link>
                        <!-- <button @click="this.inativarReserva(reserva.id)" class="button">Remover</button> -->
                    </li>
                </ul>
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
            acomodacoes: null,
            // nomeQuarto: null,
        }
    },
    methods: {
        carregarDadosQuartos(id_acomodacao) {
            let nomeQuarto 
            try{
                    const filtro = this.acomodacoes.filter(
                        (quarto) => quarto.id_acomodacao == id_acomodacao
                    )
                    // return filtro
                   nomeQuarto = filtro[0].tipo
                   return nomeQuarto
            } 
            catch(erro) {console.log(erro)}
        },
    },
    mounted() {
        axios
            .get('/api/reservas', {
                withCredentials: true,
            })
            .then((response) => (this.reservas = response.data))
            .catch((erro) => console.log(erro))

    axios
                .get('/api/acomodacoes', {
                    withCredentials: true,
                })
                .then((response) => (
                    this.acomodacoes = response.data)).catch((erro) => console.log(erro))
    },
}
</script>

<style scoped>
.box-reservas {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
}

.box-reservas div {
    width: 300px;
    height: 350px;
    padding: 10px;
    display: flex;
    background: #063f5710;
}

.box-reservas li span {
    color: #a35700;
    font-weight: bold;
}
.button{
  background: #063f57;
  padding: 5px 10px;
  color: #ffffff;
  border: none;
  margin: 10px 7px 0 0;
  cursor: pointer;
}

.button:hover{
    background: #a35700;
}

.cadastro{
  display: block;
  margin: 0 auto;
  padding: 10px 20px;
  margin-bottom: 40px;
}

</style>
