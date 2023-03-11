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


          <button @click.prevent="this.login" type="button" class="btn-entrar" id="btnLogin">Entrar</button>

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
import axios from 'axios'

export default {
  data(){
    return{
      email: null,
      senha: null
    }
  },
  methods:{
    async login(){
      const dados = {email: this.email, senha: this.senha}
      
      if(!this.email || !this.senha){
        alert('Preencha e-mail e senha')
        return
      }

      await axios.post('http://localhost:3000/api/usuarios/login', dados)
      .then(response => {
        if(response.statusText === 'OK'){
          this.$router.push('/')
        }
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message);
          console.log(error.response.data.message)
          return
        } 
      })
    }
  }
}
</script>
