<template>
  <main>
    <div class="container-form-image display-f">
      <div class="container-login">
        <form
          class="form-login" method="POST"
        >
          <h2>FAÇA LOGIN</h2>

          <label for="username">E-mail</label>
          <input
            type="text"
            placeholder="Digite seu e-mail"
            v-model="email"
            name="email"
            autofocus
          />
          <span id="alertUserName" style="color: brown"></span>

          <label for="password">Senha</label>
          <input
            type="password"
            v-model="senha"
            name="senha"
            placeholder="Digite sua senha"
          />
          <span id="alertPassword" style="color: brown"></span>

          <div class="lembrar-esqueci">
            <input type="checkbox" />
            <span>Lembrar-me</span>
            <a href="#" class="link-login"
              ><span class="esqueci-senha">Esqueci minha senha</span></a
            >
          </div>


          <button @click="this.login" type="button" class="btn-entrar" id="btnLogin">Entrar</button>

          <h3>Entre com suas redes sociais</h3>
          <div class="social-login display-f">
            <div class="google-icon">
              <a href="#" class="link-login"
                ><i class="fab fa-google"></i> Google</a
              >
            </div>
            <div class="facebook-icon">
              <a href="#" class="link-login"
                ><i class="fab fa-facebook"></i> Facebook</a
              >
            </div>
          </div>
        </form>
      </div>
      <div class="container-img-login">
        <img
          src="@/assets/images/hotel-login.png"
          alt="FOTO DO HOTEL"
          width="700"
          height="585"
        />
      </div>
    </div>
  </main>
</template>

<script>
//import api from './../services/api.js'
//import axios from 'axios'

export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      senha: "",
      error: null,
      success: false
    };
  },
  methods: {
    login: async function() {
      // const auth = { username: this.email, senha: this.senha };
      // const url = 'http://localhost:3000/api/usuarios/login';
      // this.success = false;
      // this.error = null;

      // try {
      //   const res = await axios.post(url, auth).then(res => res.data);
      //   this.success = true;
      //   console.log(res)
      // } catch (err) {
      //   this.error = err.message;
      //   console.log(err)
      // }
      console.log(this.email, this.senha)
    }

  },
}
</script>
