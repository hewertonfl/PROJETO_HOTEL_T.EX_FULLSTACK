<template>
  <div class="box-reservas">
    <div class="cada-box" v-for="reserva in reservas" :key="reserva.id">
      <ul>
        <li>
          <span>Id da reserva:</span>
          {{ reserva.id_reserva }}
        </li>
        <li>
          <span>Check-in:</span>
          {{ this.formatarData(reserva.checkin) }}
        </li>
        <li>
          <span>Check-out:</span>
          {{ this.formatarData(reserva.checkout) }}
        </li>
        <li>
          <span>Quantidade de noites:</span>
          {{ reserva.noites }}
        </li>
        <li>
          <span>Quantidade de pessoas:</span>
          {{ reserva.qtdpessoas }}
        </li>
        <li>
          <span>Data da reserva:</span>
          {{ this.formatarData(reserva.data) }}
        </li>
        <li>
          <span>Serviços contratados:</span>
          <ul v-if="JSON.parse(reserva.servicos).length">
            <li
              v-for="servicos in JSON.parse(reserva.servicos)"
              :key="servicos.nome"
            >
              - {{ servicos.nome }} - {{ this.moeda(servicos.preco) }}
            </li>
          </ul>
          <ul v-else>
            <li>Nenhum serviço adicionado</li>
          </ul>
        </li>
        <li class="destaque2">
          <span>Total:</span>
          {{ this.formatarMoeda(parseFloat(reserva.total)) }}
        </li>
        <li v-if="reserva.totalcomdesconto" class="destaque2">
          <span>Total com desconto:</span>
          {{
            this.formatarMoeda(
              calcularDesconto(reserva.total, reserva.totaldesconto)
            )
          }}
        </li>
      </ul>

      <div class="excluir-detalhes">
        <button
          @click="this.excluirReserva(reserva.id_reserva)"
          class="btn-cancelar"
          type="button"
          title="Excluir Reserva"
        >
          Excluir Reserva
        </button>
        <ComponenteDetalhes :codigo="reserva.id_reserva" />
      </div>
    </div>
  </div>
</template>

<script>
import ComponenteDetalhes from "./ComponenteDetalhes.vue";
import axios from "axios";

export default {
  name: "ComponenteMinhaReserva",
  components: {
    ComponenteDetalhes,
  },
  data() {
    return {
      reservas: "",
    };
  },
  methods: {
    async excluirReserva(id) {
      const resposta = confirm("Tem certeza que deseja excluir essa reserva?");
      if (resposta) {
        await axios.delete(`/api/reservas/${id}`);
      }
      this.fillBookings();
    },
    moeda(valor) {
      return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    },
    formatarMoeda(valor) {
      const moeda = valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      return moeda;
    },
    formatarData(data) {
      const dataS = new Date(data);
      var formatarData = dataS.toLocaleDateString("pt-BR");
      return formatarData;
    },
    async fillBookings() {
      const id = JSON.parse(localStorage.getItem("token")).userID;
      console.log(id);
      await axios
        .get(`/api/reservas/mybookings/${id}`)
        .then((res) => {
          this.reservas = res.data;
          console.log(res);
          console.log(this.reservas);
        })
        .catch((error) => console.log(error));
    },
    calcularDesconto(total, desconto) {
      const calculo = total * (1 - desconto / 100);
      return calculo;
    },
  },
  mounted() {
    this.fillBookings();
  },
};
</script>

<style lang="scss" scoped>
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

.box-reservas .cada-box {
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

.button {
  background: #063f57;
  padding: 5px 10px;
  color: #ffffff;
  border: none;
  margin: 10px 7px 0 0;
  cursor: pointer;
}
.btn-cancelar {
  background-color: #831515;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  color: #ffffff;
}

.button:hover {
  background: #a35700;
}
.excluir-detalhes {
  display: flex;
  gap: 20px;
}
</style>
