<template>
        <form class="formulario" method="POST" @submit="this.cadastrarAcomodacao" enctype="multipart/form-data">
            <label for="numero">Número:</label>
            <input
            type="text"
            id="numero"
            placeholder="Digite o número da acomodação"
            v-model="numero"
            required
            />

            <label for="tipo">Tipo:</label>
            <select v-model="tipo" id="tipo">
                <option value="Suíte Luxuosa">Suíte Luxuosa</option>
                <option value="Suíte com Varanda">Suíte com Varanda</option>
                <option value="Quarto Superior">Quarto Superior</option>
                <option value="Quarto Deluxe">Quarto Deluxe</option>
                <option value="Quarto Executivo">Quarto Executivo</option>
                <option value="Quarto Família">Quarto Família</option>
                <option value="Quarto Adaptado para Deficientes">Quarto Adaptado para Deficientes</option>
                <option value="Quarto com Vista para o Mar">Quarto com Vista para o Mar</option>
                <option value="Quarto Econômico">Quarto Econômico</option>
            </select>           

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

            <label for="status">Status:</label>
            <select v-model="status" id="status">
                <option value="Livre">Livre</option>
                <option value="Ocupado">Ocupado</option>
            </select>             

            <label for="foto">Imagem:</label>
            <input type="file" @change="cadastrarImagem" name="foto" id="foto">  

            <button>Cadastrar Acomodação</button>
        </form>
</template>

<script>
import axios from 'axios'

export default{
    name: "CadastrarAcomodacaoView",
    data() {
        return{
           numero: null,
           tipo: null,
           descricao: null,
           preco: null,
           imagem: null,
           status: null,
        }
    },
    methods:{
        cadastrarAcomodacao(){
            const dados = {
                numero: this.numero,
                tipo: this.tipo,
                descricao: this.descricao,
                preco: this.preco,
                imagem: this.imagem,
                status: this.status,
            }

            axios.post('http://localhost:3000/api/acomodacoes/', dados)
            .then(response => console.log(response))
            .catch(error => error)

            this.$router.push('/admin/acomodacoes')
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
