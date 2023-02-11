<template>
  <button type="button" @click="abrirModal">Deixe um comentário</button>

  <div v-if="modal" class="overlay">
    <div class="popup">
      <button @click="closeModal" class="fechar">
        <i class="fa-sharp fa-solid fa-xmark fa-2x"></i>
      </button>

      <div class="box-container">
        <div class="quarto">
          <img :src="dados.img" alt="" class="img-quarto" />
          <h2>{{ dados.title }}</h2>
          <p>{{ dados.description }}</p>
          <p class="media" v-if="media">
            <span>{{ this.media.toFixed(1) }}</span>
          </p>
        </div>
        <div class="comentarios">
          <form @submit.prevent="adicionarComentario">
            <h2>Deixe seu Comentário</h2>
            <div class="row">
              <input
                v-model="nome"
                type="text"
                placeholder="Digite seu nome"
                required
              />
              <select v-model="estrelas" required>
                <option value="1">&#9733;</option>
                <option value="2">&#9733;&#9733;</option>
                <option value="3">&#9733;&#9733;&#9733;</option>
                <option value="4">&#9733;&#9733;&#9733;&#9733;</option>
                <option value="5">&#9733;&#9733;&#9733;&#9733;&#9733;</option>
              </select>
            </div>
            <textarea
              v-model="mensagem"
              cols="5"
              rows="5"
              placeholder="Digite sua mensagem"
              required
            ></textarea>
            <button>Publicar Comentário</button>
          </form>
          <div class="comentarios-clientes">
            <div v-for="comentario in comentarios" :key="comentario.id">
              <div
                v-if="comentario.quarto === dados.id"
                class="box-comentarios"
              >
                <p class="estrela">
                  {{ this.mostrarEstrelas(comentario.estrelas) }}
                </p>
                <p class="nome">{{ comentario.nome }}</p>
                <p class="mensagem">{{ comentario.mensagem }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComponenteModais",
  props: ["dados"],
  data() {
    return {
      modal: false,
      estrelas: null,
      nome: null,
      mensagem: null,
      comentarios: null,
      db: this.dados,
      media: "",
    };
  },
  methods: {
    closeModal() {
      this.modal = false;
    },
    abrirModal() {
      this.modal = true;
    },
    adicionarComentario() {
      const localStorageComentarios = this.buscarComentarios();

      const comentarios = [
        ...localStorageComentarios,
        {
          id: String(Math.random()).slice(2),
          quarto: this.db.id,
          nome: this.nome,
          estrelas: this.estrelas,
          mensagem: this.mensagem,
        },
      ];
      localStorage.setItem("comentarios", JSON.stringify(comentarios));

      this.nome = "";
      this.estrelas = "";
      this.mensagem = "";
      this.buscarComentarios().reverse();
      this.mediaQuarto(this.db.id);
      window.location.reload();
    },
    buscarComentarios() {
      const comentarios = localStorage.getItem("comentarios")
        ? JSON.parse(localStorage.getItem("comentarios"))
        : [];
      this.comentarios = comentarios.reverse();
      return comentarios;
    },
    mediaQuarto(id) {
      const comentarios = this.buscarComentarios();
      const quarto = comentarios.filter((item) => item.quarto === id);
      const total = quarto.reduce(
        (total, item) => total + Number(item.estrelas),
        0
      );
      const m = total ? total / quarto.length : "";
      this.media = m;
      return m;
    },
    mostrarEstrelas(estrelas) {
      switch (estrelas) {
        case "1":
          return "☆";
        case "2":
          return "☆☆";
        case "3":
          return "☆☆☆";
        case "4":
          return "☆☆☆☆";
        case "5":
          return "☆☆☆☆☆";
      }
    },
  },
  created() {
    this.buscarComentarios();
    this.mediaQuarto(this.db.id);
  },
};
</script>

<style scoped>
.overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(3px);
  width: 100%;
}

.popup {
  padding: 30px;
  background: #fff;
  border-radius: 5px;
  width: 90%;
  height: 90%;
  color: #080710;
  transition: all 5s ease-in-out;
  overflow: auto;
  position: relative;
}

.fechar {
  position: absolute;
  right: 5px;
  top: 5px;
  background: none;
  border: none;
  color: #a35700;
}

.box-container,
.row {
  display: flex;
  justify-content: space-between;
}

.row input,
.row select,
.quarto,
.comentarios {
  width: 49%;
}

form {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

form h2 {
  margin-bottom: 10px;
}

form input[type="text"],
form input[type="select"],
textarea {
  border: 1px solid #ccc;
  height: 35px;
  padding: 5px;
  margin: 2px 0;
  font-family: Arial, Helvetica, sans-serif;
}

textarea {
  outline: none;
}

form input[type="text"]::placeholder,
form input[type="select"]::placeholder,
textarea::placeholder {
  font-size: 1rem;
}

form button {
  margin-top: 2px;
  padding: 10px 30px;
  border: none;
  background: #063f57;
  color: #ffffff;
}

.box-comentarios {
  padding: 3px;
  margin-bottom: 10px;
}

.box-comentarios .estrela {
  color: #a35700;
  font-weight: bold;
}

.box-comentarios .mensagem {
  font-size: 0.8rem;
}

.media {
  position: absolute;
  top: 30px;
  left: 30px;
  font-size: 5rem;
  text-align: center;
}

.media span {
  background: #a35700;
  color: #ffffff;
  padding: 0 30px;
  text-align: center;
}

@keyframes popup {
  from {
    opacity: 0;
    transform: translate3d(0, -60px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.popup {
  animation-name: popup;
  animation-duration: 0.5s;
}
</style>
