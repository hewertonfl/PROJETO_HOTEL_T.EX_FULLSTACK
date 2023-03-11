<template> 
  <main class="container-contato">
    <div class="titulo-form-contato flex-dc align-c display-f">
      <h2>Cadastrar Acomodação</h2>
    </div>
    
  </main>
</template>

<script>
export default {
  name: "AdminReservaView",
  methods:{
    cadastrarImagem(e){
        this.imagem = e.target.files[0].name
    }
  }
};
</script>

<style scoped>

</style>