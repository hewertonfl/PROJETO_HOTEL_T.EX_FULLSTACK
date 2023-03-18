<template>
        <form class="formulario" method="POST" @submit="cadastrarAdicional" enctype="multipart/form-data">
            <label for="item">Item:</label>
            <input
            type="text"
            id="item"
            placeholder="Digite o nome do item"
            v-model="item"
            required
            />

            <label for="descricao">Descrição:</label>
            <textarea v-model="descricao" cols="30" rows="10"></textarea>

            <label for="preco">Preço:</label>
            <input
            type="text"
            id="preco"
            placeholder="Digite o preço"
            v-model="preco"
            required
            />

            <label for="imagem">Imagem:</label>
            <input type="file" @change="cadastrarImagem" name="imagem" id="imagem">  

            <button>Editar Adicionais</button>
        </form>
</template>

<script>
import axios from 'axios'

export default{
    name: "EditarHospede",
    data() {
        return{
           item: null,
           descricao: null,
           valor: null,
           imagem: null,
        }
    },
    methods:{
        cadastrarAdicional(){
            const dados = {
                item: this.item,
                descricao: this.descricao,
                valor: this.valor,
                imagem: this.imagem
            }

            axios.post('http://localhost:3000/api/adicionais', dados)
            .then(resolve => console.log(resolve))
            .catch(error => error)
        },
        cadastrarImagem(e){
            this.imagem = e.target.files[0].name
        }
    }
}
</script>

<style scoped>
.formulario{
    width: 50%;
    margin: 0 auto;
    margin: 3% auto 0 auto;
    padding: 20px;
    background: #063f57;
    border-radius: 10px;
}
.formulario p{
    color: #a35700;
    font-weight: bold;
    line-height: 50px;
    font-size: 1.5rem;
    text-align: right;
    margin-right: 10px;
    cursor: pointer;
}
.formulario h2{
    color: #ffffff;
    text-align: center;
}
.formulario label{
    width: 100%;
    display: block;
    color: #ffffff;
    margin: 5px 0;
}
.formulario input, .formulario select, textarea{
    width: 100%;
    height: 40px;
    font-size: 1rem;
    padding-left: 10px;
}
textarea{
    height: 60px;
}
.formulario button{
    font-size: 1rem;
    padding: 10px 30px;
    background: #a35700;
    color: #ffffff;
    border: none;
    margin-top: 10px;
}
</style>
