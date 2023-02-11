<template>
  <div class="stars">
    <i class="fa-solid fa-star"></i> {{ this.calcularMedia(this.id) }}
  </div>
</template>

<script>
export default {
  name: "ComponenteEstrela",
  props: ["id"],
  methods: {
    buscarComentarios() {
      const comentarios = localStorage.getItem("comentarios")
        ? JSON.parse(localStorage.getItem("comentarios"))
        : [];
      this.comentarios = comentarios;
      return comentarios;
    },
    calcularMedia(id) {
      const comentarios = this.buscarComentarios();
      const quarto = comentarios.filter((item) => item.quarto === id);
      const total = quarto.reduce(
        (total, item) => total + Number(item.estrelas),
        0
      );
      const m = total ? (total / quarto.length).toFixed(1) : "";
      return m;
    },
  },
  created() {
    this.calcularMedia(this.id);
  },
};
</script>

<style scoped>
.stars {
  margin-bottom: 5px;
  color: #a35700;
}
</style>
