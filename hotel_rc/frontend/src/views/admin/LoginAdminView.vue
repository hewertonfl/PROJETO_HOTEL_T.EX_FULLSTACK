<template>
    <main>
        <div class="container-form-image display-f justify-c">
          <div><img src="@/assets/images/hotel-login.png" alt=""></div>
      <div class="container-login">
        <form
          @submit.prevent="validarUsuario(this.email, this.senha)"
          class="form-login"
          id="formLogin"
        >
          <h2>ÁREA ADMINISTRATIVA</h2>

          <label for="username">E-mail</label>
          <input
            type="text"
            placeholder="Digite seu e-mail"
            v-model="email"
            autofocus
          />
          <span id="alertUserName" style="color: brown"></span>

          <label for="password">Senha</label>
          <input
            type="password"
            v-model="senha"
            placeholder="Digite sua senha"
          />
          <span id="alertPassword" style="color: brown"></span>

          <button class="btn-entrar" id="btnLogin">Entrar</button>
        </form>
      </div>
    </div>
    </main>
</template>

<script>
export default {
  name: "LoginAdminView",
  data() {
    return {
      email: "",
      senha: "",
    };
  },
  methods: {
    // salvarLocalStorage(dados) {
    //   localStorage.setItem("funcionario", JSON.stringify(dados));
    // },
    eCampoVazio(texto) {
      if (!texto.length) {
        return true;
      }
      return false;
    },
    removerAspas(texto) {
      if (texto.includes('"') || texto.includes("'")) {
        return texto.replace(/["']+/g, "");
      }
      return texto;
    },
    validarUsuario(email, senha) {
      if (this.eCampoVazio(email) || this.eCampoVazio(senha)) {
        return alert("Preencha todos os campos");
      }
      email = this.removerAspas(email).trim();
      senha = this.removerAspas(senha).trim();
      // const dados = {
      //   email,
      //   senha,
      // };
      // this.salvarLocalStorage(dados);
      window.location.href = "/consumo";
    },
  },
};
</script>

<style lang='scss' scoped>
.container-form-image {
  align-content: center;
  div img {
    width: 600px;
  }
  margin: 10px auto;
}
.container-login {
    display: block;
}
.form-login {
    width: 600px;
    height: 500px;
}
    .btn-entrar {
        margin-top: 40px;
    }
</style>