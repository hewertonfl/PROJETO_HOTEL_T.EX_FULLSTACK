<template>
  <main class="container-contato">
    <div class="header">
      <h2 class="titulo-form-contato">Lista de Adicionais</h2>  
      <router-link :to="{ path: '/admin/cadastrar-adicional' }" class="button">Cadastrar Adicional</router-link>
    </div>
    
    <div class="box-usuario">      
      <div v-for="adicional in acomodacoes" :key="adicional.id">        
        <ul>
            <li class="imagem"><img :src="`http://localhost:3000/images/${adicional.imagem}`" alt=""></li>
            <li><span>Item:</span> {{adicional.item}}</li>
            <li><span>Descrição:</span> {{adicional.descricao}}</li>
            <li><span>Preço:</span> {{adicional.preco}}</li>
            <li>
              <router-link :to="{ path: '/admin/editar-adicional' }" class="button">Editar Adicional</router-link>
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
  name: "AdminAdicionaisView",
    data(){
    return{
      adicionais: null,
    }
  },
  methods:{
    cadastrarImagem(e){
        this.imagem = e.target.files[0].name
    }
  },  
  mounted(){    
    api.get('/api/adicionais').then(response => this.adicionais = response.data)
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