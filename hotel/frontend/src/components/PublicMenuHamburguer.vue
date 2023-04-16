<template>
  <div class="menu">
    <i @click="showMenu = !showMenu" class="fa-solid fa-bars"> </i>

    <div
      v-if="showMenu"
      @click="showMenu = false"
      class="modal__overlay"
      id="modal__overlay"
    >
      <div class="modal__detalhes" @click.stop="">
        <div class="modal__detalhes__itens">
          <div class="menu-hamburguer" v-if="showMenu">
            <ul>
              <li @click="showMenu = false">
                <router-link :to="{ path: '/' }">Home</router-link>
              </li>
              <li @click="showMenu = false"><router-link :to="{ path: '/sobre' }">Sobre</router-link></li>
              <li @click="showMenu = false">
                <router-link :to="{ path: '/acomodacoes' }"
                  >Quartos</router-link
                >
              </li>
              <li @click="showMenu = false">
                <router-link :to="{ path: '/contato' }">Contato</router-link>
              </li>
              <li @click="showMenu = false">
                <router-link :to="{ path: '/reserva' }"
                  >Faça sua reserva</router-link
                >
              </li>
              <li v-if="autenticacao" @click="showMenu = false">
                <router-link :to="{ path: '/minhasreservas' }"
                  >Minhas Reservas</router-link
                >
              </li>
            </ul>
          </div>
          <button type="button" @click="showMenu = false">Sair</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PublicMenuHamburguer",
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.menu{
  z-index: 1;
}
.modal__overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
}
.modal__detalhes {
  display: flex;
  background: #ffffff;
  border-radius: 5px;
  padding: 20px;
  width: 70%;
 

  .fechar {
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
    padding-right: 5px;
  }
  li {
    margin-bottom: 20px;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
  }
}

button {
  padding: 10px 30px;
  margin-top: 20px;
  border: none;
  background: #176485;
  color: #ffffff;
  text-transform: uppercase;
  cursor: pointer;
}

.detalhes {
  display: flex;
}
i {
  color: white;
}
</style>
