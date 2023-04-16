<template>
  <nav class="navbar">
    <ul class="noto-sans display-f justify-c align-c">
      <li>
        <router-link :to="{ path: '/' }">Home</router-link>
      </li>
      <li><router-link :to="{ path: '/sobre' }">Sobre</router-link></li>
      <li>
        <router-link :to="{ path: '/acomodacoes' }">Quartos</router-link>
      </li>
      <li>
        <router-link :to="{ path: '/contato' }">Contato</router-link>
      </li>
      <li>
        <router-link :to="{ path: '/reserva' }">Faça sua reserva</router-link>
      </li>
      <li v-if="autenticacao">
        <router-link :to="{ path: '/minhasreservas' }"
          >Minhas Reservas</router-link
        >
      </li>
    </ul>
  </nav>
  <!-- <div class="mobile">
    <PublicMenuHamburguer />
  </div> -->
</template>
<script>
// import PublicMenuHamburguer from "./PublicMenuHamburguer.vue";

export default {
  name: "ComponenteNavbar",
  props: ["autenticacao"],
  // components: PublicMenuHamburguer,
};
</script>
<style lang="scss" scoped>

.mobile{
  display: none;
}

@media (max-width: 417px) and (orientation: portrait) {
  .mobile {
    display: flex;
  }
  .navbar {
    display: none;
  }  
}

</style>
