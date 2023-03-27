<template>
  <main class="container-contato">
    <div class="header">
      <h2 class="titulo-form-contato">Lista de Hóspedes</h2>  
      <router-link :to="{ path: '/admin/cadastrar-usuario' }" class="button">Cadastrar Usuário</router-link>
    </div>
    
    <div class="box-usuario">      
      <div v-for="usuario in usuarios" :key="usuario.id">
        <ul>
            <li><span>Nome:</span> {{usuario.nome}} {{usuario.sobrenome}}</li>
            <li><span>E-mail:</span> {{usuario.email}}</li>
            <li><span>Nível:</span> {{usuario.nivel}}</li>
            <li><span>Status:</span> {{usuario.status}}</li>
            <li>
              <router-link :to="{ path: `/admin/editar-usuario/${usuario.id}` }" class="button">Editar</router-link>
              <button @click="this.inativarUsuario(usuario.id)" class="button">Remover</button>
            </li>
        </ul>
      </div>
    </div>    
  </main>
</template>

<script>
import axios from 'axios'

export default {
  name: "AdminUsuariosView",
  data(){
    return{
      usuarios: null,
    }
  },
  methods:{
    inativarUsuario(id){
      if(confirm('Tem certeza que deseja inativar esse usuário?')){
        axios.delete(`/api/usuarios/${id}`).then(response => {
          alert(response.data.message)
        })
        this.$router.push('/admin/usuarios')
      }
    },    
  },   
  mounted(){    
    axios.get('/api/usuarios/usuarioshospedes', {
                withCredentials: true
            }).then(response => this.usuarios = response.data)
  }
};
</script>

<style scoped>
.header{
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
}

.box-usuario{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}

.box-usuario div{
  width: 300px;
  padding: 10px;
  display: flex;
  background: #063f5710;
}

.box-usuario li span{
  color: #a35700;
  font-weight: bold;
}

.button{
  background: #063f57;
  padding: 5px 10px;
  color: #ffffff;
  border: none;
  margin: 10px 7px 0 0;
  cursor: pointer;
}

.button:hover{
    background: #a35700;
}

.cadastro{
  display: block;
  margin: 0 auto;
  padding: 10px 20px;
  margin-bottom: 40px;
}
</style>