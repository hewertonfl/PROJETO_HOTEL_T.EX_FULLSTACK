<template>
  <main class="container-contato">
    <div class="header">
      <h2 class="titulo-form-contato">Lista de Acomodações</h2>  
      <router-link :to="{ path: '/admin/cadastrar-acomodacao' }" class="button">Cadastrar Acomodação</router-link>
    </div>
    
    <div class="box-usuario">      
      <div v-for="acomodacao in acomodacoes" :key="acomodacao.id">        
        <ul>
            <li class="imagem"><img :src="`http://localhost:3000/images/${acomodacao.imagem}`" alt=""></li>
            <li><span>Número:</span> {{acomodacao.numero}}</li>
            <li><span>Tipo:</span> {{acomodacao.tipo}}</li>
            <li><span>Descrição:</span> {{acomodacao.descricao}}</li>
            <li><span>Preço:</span> {{acomodacao.preco}}</li>
            <li><span>Status:</span> {{acomodacao.status}}</li>
            <li>
              <router-link :to="{ path: '/admin/editar-acomodacao' }" class="button">Editar</router-link>
              <button class="button">Remover</button>
            </li>
        </ul>
      </div>
    </div>    
  </main>
</template>

<script>
import api from '../../services/api'

export default {
  name: "AdminUsuariosView",
  data(){
    return{
      acomodacoes: null,
    }
  },
  mounted(){    
    api.get('/api/acomodacoes').then(response => this.acomodacoes = response.data)
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

.imagem img{
  width: 100%;
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