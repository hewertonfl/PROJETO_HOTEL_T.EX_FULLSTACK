<template>
  <main class="container-contato">
    <div class="header">
      <h2 class="titulo-form-contato">Lista de Quartos</h2>
      <div class="filtro">
        <fieldset>
          <legend>Status</legend>
          <input
            @click="carregarDados()"
            type="radio"
            v-model="checked"
            name="status"
            value="livre"
            id="livre"
            class="status"
          />
          <div class="status">Livre</div>
          <input
            @click="carregarDados()"
            type="radio"
            v-model="checked"
            name="status"
            value="ocupado"
            id="ocupado"
            class="status"
          />
          <div class="status">Ocupado</div>
        </fieldset>
      </div>
      <div class="filtro">
        <fieldset>
          <legend>Tipo</legend>
          <select v-model="quartoTipo" @change="filtrarTipos(quartoTipo)">
            <option v-for="acomodacao in acomodacoes" :key="acomodacao.id">
              {{ acomodacao.tipo }}
            </option>
          </select>
        </fieldset>
      </div>
      <div class="filtro pesquisa">
        <fieldset>
          <legend>Número do Quarto</legend>
          <input
            class="pesquisa-numero"
            type="text"
            v-model="numero"
            name="numero"
            id="numero-quarto"
            placeholder="Nº do quarto"
          />
          <button @click="filtrarNumero()">Pesquisar</button>
        </fieldset>
      </div>
      <router-link :to="{ path: '/admin/cadastrar-acomodacao' }" class="button"
        >Cadastrar Quarto</router-link
      >
    </div>

    <div
      class="box-usuario"
      v-if="!quartosFiltrados && !numero && !checked && !quartoTipo"
    >
      <div v-for="quarto in quartos" :key="quarto.id">
        <ul>
          <li class="bold"><span>Número:</span> {{ quarto.numero }}</li>
          <li><span>Tipo:</span> {{ quarto.tipo }}</li>
          <li>
            <span>Preço:</span> {{ formatarMoeda(parseFloat(quarto.preco)) }}
          </li>
          <li><span>Status:</span> {{ quarto.status }}</li>
          <li>
            <router-link
              :to="{ path: '/admin/editar-acomodacao' }"
              class="button"
              >Editar</router-link
            >
            <button class="button">Remover</button>
          </li>
        </ul>
      </div>
    </div>
    <div v-else class="box-usuario">
      <div v-for="quarto in quartosFiltrados" :key="quarto.id">
        <ul>
          <li class="bold"><span>Número:</span> {{ quarto.numero }}</li>
          <li><span>Tipo:</span> {{ quarto.tipo }}</li>
          <li>
            <span>Preço:</span> {{ formatarMoeda(parseFloat(quarto.preco)) }}
          </li>
          <li><span>Status:</span> {{ quarto.status }}</li>
          <li>
            <router-link
              :to="{ path: '/admin/editar-acomodacao' }"
              class="button"
              >Editar</router-link
            >
            <button class="button">Remover</button>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
// import api from '../../services/api'
import axios from "axios";

export default {
  name: "AdminUsuariosView",
  data() {
    return {
      quartos: null,
      acomodacoes: null,
      checked: null,
      quartoTipo: null,
      numero: null,
      quartosFiltrados: null,
      vazio: 0,
      // tiposFiltrados: null,
    };
  },
  methods: {
    async carregarDados() {
      await axios
        .get("/api/acomodacoes/quartos", {
          withCredentials: true,
        })
        .then((response) => (this.quartos = response.data));
      this.itensFiltrados();
    },
    itensFiltrados() {
      const [...quartosArray] = this.quartos;

      if (this.checked === "livre") {
        const filtro = quartosArray.filter(
          (status) => status.status == "livre"
        );
        this.quartosFiltrados = filtro;
        this.quartoTipo = null;
        this.numero = null;
      } else if (this.checked === "ocupado") {
        const filtro = quartosArray.filter(
          (status) => status.status == "ocupado"
        );
        this.quartosFiltrados = filtro;
        this.quartoTipo = null;
        this.numero = null;
      }
    },
    filtrarTipos(quartoTipo) {
      const [...quartosArray] = this.quartos;
      const filtro = quartosArray.filter((tipo) => tipo.tipo == quartoTipo);
      this.quartosFiltrados = filtro;
      this.checked = null;
      this.numero = null;
    },
    filtrarNumero() {
      if (this.numero) {
        const [...quartosArray] = this.quartos;
        const filtro = quartosArray.filter(
          (numero) => numero.numero == this.numero
        );
        this.quartosFiltrados = filtro;
        this.vazio = 1;
        this.quartoTipo = null;
        this.checked = null;
      } else {
        this.$router.go();
      }
    },
    formatarMoeda(valor) {
      const moeda = valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      return moeda;
    },
  },
  mounted() {
    axios
      .get("/api/acomodacoes")
      .then((response) => (this.acomodacoes = response.data));
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
  select {
    margin-bottom: 10px;
  }
  .status {
    margin-bottom: 10px;
  }
  input[type=text]{
      height: 27px;
      margin-bottom: 10px;
    }
}
legend {
  font-weight: bold;
  color: #063f57;
  padding: 0 5px;
}
.header {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.bold {
  font-weight: bold;
}
.filtro {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  gap: 3px;
}
.pesquisa {
  display: flex;
  align-items: center;
  justify-content: center;
  button{
    margin-bottom: 10px;
  }
}
.pesquisa ::placeholder {
  border: 1px solid black;
}
.box-usuario {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}

.box-usuario div {
  width: 300px;
  padding: 10px;
  display: flex;
  background: #063f5710;
}

.box-usuario li span {
  color: #a35700;
  font-weight: bold;
}

.imagem img {
  width: 100%;
}

.button {
  background: #063f57;
  padding: 5px 10px;
  color: #ffffff;
  border: none;
  margin: 10px 7px 30px 0;
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
@media (max-width: 417px) and (orientation: portrait) {
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      margin-bottom: 10px;
    }
    .button {
      margin-bottom: 15px;
    }
    fieldset {
      margin: 0px;
    }
    
  }
}
</style>
