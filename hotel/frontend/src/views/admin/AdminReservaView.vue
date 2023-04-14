<template>
    <main class="container-contato">
        <div class="titulo-form-contato header">
            <h2>Reservas</h2>
            <div>
                <fieldset>
                <legend>Status</legend>
                <input
                    @click="carregarDados()"
                    type="radio"
                    v-model="checked"
                    name="status"
                    value="confirmados"
                    id="confirmados"
                />
                Confirmados
                <!-- <input
                    @click="carregarDados()"
                    type="radio"
                    v-model="checked"
                    name="status"
                    value="aguardando"
                    id="aguardando"
                />
                Aguardando -->
                <input
                    @click="carregarDados()"
                    type="radio"
                    v-model="checked"
                    name="status"
                    value="arquivados"
                    id="arquivados"
                />
                Arquivados
                <input
                    @click="carregarDados()"
                    type="radio"
                    v-model="checked"
                    name="status"
                    value="cancelados"
                    id="cancelados"
                />
                Cancelados
                </fieldset>
            </div>
            <router-link
                :to="{ path: '/admin/cadastrar-reserva' }"
                class="button"
                >Cadastrar Reserva</router-link
            >
        </div>

        <div class="box-reservas">
            <div class="cada-box" v-for="reserva in reservasFiltradas" :key="reserva.id">
                <div class="destaque1">
                    <span>Hóspede:</span>
                    {{ reserva.nome }} {{ reserva.sobrenome }}<br />
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
                        <li>
                            <span>Check-out:</span>
                            {{ this.formatarData(reserva.checkout) }}
                        </li>
                        <li>
                            <span>Quantidade de pessoas:</span>
                            {{ reserva.qtdpessoas }}
                        </li>
                        <li>
                            <span>Status:</span>
                            {{ reserva.confirmacao }} 
                        </li>
                        <li>
                            <span>Data da reserva:</span>
                            {{ this.formatarData(reserva.data) }}
                        </li>
                        <li class="destaque2">
                            <span>Total:</span>
                            {{ this.formatarMoeda(parseFloat(reserva.total)) }}
                        </li>
                        <li v-if="reserva.totaldesconto" class="destaque2">
                            <span>Total com desconto:</span>
                            {{
                                this.formatarMoeda(
                                    calcularDesconto(
                                        reserva.total,
                                        reserva.totaldesconto
                                    )
                                )
                            }}
                        </li>
                    </ul>
                </div>
                <div class="btn-editar-remover">
                    <router-link
                        :to="{
                            path: `/admin/editar-reserva/${reserva.id_reserva}`,
                        }"
                        class="button button-editar"
                        >Editar</router-link
                    >
                    <button v-if='!(reserva.confirmacao == "arquivado") && !(reserva.confirmacao == "cancelado")'
                        @click="this.arquivarReserva(reserva.id_reserva)"
                        class="button"
                    >
                        Arquivar
                    </button>
                    <button v-if='!(reserva.confirmacao == "cancelado") && !(reserva.confirmacao == "arquivado")'
                        @click="this.inativarReserva(reserva.id_reserva)"
                        class="button btn-cancelar"
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
  </main>
</template>

<script>
import axios from "axios";
export default {
  name: "AdminReservaView",
  data() {
    return {
      reservas: null,
      checked: "confirmados",
      reservasFiltradas: null,
    };
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
    async carregarDados() {
      await axios
        .get("/api/reservas", {
          withCredentials: true,
        })
        .then((response) => (this.reservas = response.data));
      this.itensFiltrados();
    },
    itensFiltrados() {
      const [...reservasArray] = this.reservas;

           if (this.checked === 'confirmados') {
                const filtro = reservasArray.filter(
                    (status) => status.confirmacao == 'confirmado'
                )
                this.reservasFiltradas = filtro
            // } else if (this.checked === 'aguardando') {
            //     const filtro = reservasArray.filter(
            //         (status) => status.confirmacao == 'aguardando'
            //     )
            //     this.reservasFiltradas = filtro
            } else if (this.checked === 'arquivados') {
                const filtro = reservasArray.filter(
                    (status) => status.confirmacao == 'arquivado'
                )
                this.reservasFiltradas = filtro
            } else if (this.checked === 'cancelados') {
                const filtro = reservasArray.filter(
                    (status) => status.confirmacao == 'cancelado'
                )
                this.reservasFiltradas = filtro
            } 
        },
        formatarData(data) {
            const dataS = new Date(data)
            var formatarData = dataS.toLocaleDateString('pt-BR')
            return formatarData
        },

    formatarMoeda(valor) {
      const moeda = valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      return moeda;
    },
    calcularDesconto(total, desconto) {
      const calculo = total * (1 - desconto / 100);
      return calculo;
    },
    inativarReserva(id) {
      if (confirm("Tem certeza que deseja cancelar essa reserva?")) {
        axios.delete(`/api/reservas/${id}`).then((response) => {
          alert(response.data.message);
        });
        this.$router.push("/admin/reservas");
      }
    },
    arquivarReserva(id) {
      if (confirm("Tem certeza que deseja arquivar essa reserva?")) {
        axios.patch(`/api/reservas/arquivar/${id}`).then((response) => {
          alert(response.data.message);
        });
        this.$router.push("/admin/reservas");
      }
    },
  },
  mounted() {
    this.carregarDados();
  },
};
</script>

<style lang="scss" scoped>
fieldset {
  border: #a35700 2px solid;
  padding: 2px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
legend {
  font-weight: bold;
  color: #063f57;
  padding: 0 5px;
}
.titulo-form-contato {
  div {
    color: black;
    margin-top: 12px;
    input {
      margin-left: 5px;
    }
  }
}
.header {
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
@media (max-width: 417px) and (orientation: portrait) {
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  fieldset{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
