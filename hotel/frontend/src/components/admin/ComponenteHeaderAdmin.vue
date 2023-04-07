<template>
    <div class="header-admin">
<div class="login-admin display-f">
       
        <div class="img-logo">
            <router-link :to="{ path: '/' }"> 
                <img
                    src="@/assets/images/Logo-Branca.png"
                    alt="Logo Hotel"
                    width="100"
                />
            </router-link>
            <div class="navbar-div">
                <nav class="navbar">
                    <ul class="ul-navbar">
                        <li>
                            <router-link :to="{ path: '/admin/usuarios' }">Usuários</router-link>
                        </li>
                        <li>
                            <router-link :to="{ path: '/admin/acomodacoes' }"
                                >Acomodações</router-link
                            >
                        </li>
                        <li>
                            <router-link :to="{ path: '/admin/reservas' }"
                                >Reservas</router-link
                            >
                        </li>
                        <!-- <li>
                            <router-link :to="{ path: '/admin/adicionais' }"
                                >Adicionais</router-link
                            >
                        </li>                      -->
                    </ul>
                </nav>
            </div>
        </div>
    </div>
    
         <div class="login login-user">
          <span id="helloUser">{{ mensagem }}</span>
          <button
            @click="logout()"
            type="button"
            class="btn-white"
            id="btnLogin"
          >
            {{ botao }}
          </button>
        </div>
   </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "ComponenteHeaderAdmin",
     data() {
    return {
      mensagem: "",
      botao: ''
    }
     },
     methods: {
        obterLocalStorage() {
      const dados = JSON.parse(localStorage.getItem("token"));

      return dados;
    },
    carregarDados() {
      const dados = this.obterLocalStorage();
      if (dados) {
        this.mensagem = `Funcionário(a): ${dados.userNome} ${dados.userSobrenome}`;
        this.botao = "Sair";
      }
    },
    logout() {
    axios.post('/logout')
      .then(response => {
        sessionStorage.clear()
        localStorage.clear()
        this.$router.push('/sair')
        this.$router.go()
        console.log(response.data.message)
      })
      .catch(error => {
        console.log(error)
      })
  }
  },
    created() {
    this.carregarDados();
  },
}
</script>

<style lang="scss" scoped>
ul {
    margin:0;
    padding: 0;
}
* {
    display: flex;
    justify-content: center;
    // gap: 50px;
    margin-bottom: 2px;
    align-items: flex-end;
    background: #063f57;
    
}
.header-admin {
    flex-wrap: wrap;
    flex-direction: column;
    align-content: center
}
.img-logo {
    gap: 50px;
    width: 100%;
    border: 2px solid #063f57;
    box-shadow: 2px 2px 2px #063f57;
    img {
        width: 50px;
        height: 50px;
        margin: 5px 0;
    }
}
.navbar-div {
    height: 50px;
}
.login-admin {
    flex-direction: column;
    margin: 0;
}
.btn-white {
    background-color: #fff;
    padding: 2px 5px;
    font-size: 1rem;
    margin-top: 5px;
}
.login-user span {
    color: white;
    font-size: 1rem;
    
}
</style>