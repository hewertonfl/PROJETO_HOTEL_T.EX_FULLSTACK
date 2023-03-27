<template>
        <form class="formulario" method="POST" @submit.prevent="atualizarUsuario(this.usuarioID)">
            <label for="nome">Nome:</label>
            <input
            type="text"
            id="name"
            placeholder="Digite seu nome"
            v-model="nome"
            required
            />

            <label for="sobrenome">Sobrenome:</label>
            <input
            type="text"
            id="sobrenome"
            placeholder="Digite seu sobrenome"
            v-model="sobrenome"
            required
            />        

            <label for="email">E-mail:</label>
            <input
            type="email"
            id="email"
            v-model="email"
            placeholder="Digite seu e-mail"
            required
            />

            <label for="nivel">Nivel:</label>
            <select v-model="nivel" id="nivel">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            </select> 

            <label for="status">Status:</label>
            <select v-model="status" id="status">
            <option value="ativo">Ativo</option>
            <option value="inativo">Inativo</option>
            </select>

            <!-- <label for="senha">Senha:</label>
            <input
            type="text"
            id="senha"
            placeholder="Digite uma senha"
            v-model="senha"
            />                -->
            <button @click="this.atualizar">Editar Hóspede</button>
        </form>
</template>

<script>
import axios from 'axios'

export default{
    name: "EditarUsuarioView",
    data() {
        return{
           usuarioID: null,
           nome: null,
           sobrenome: null,
           email: null,
           status: null,
           nivel: null,
           senha: null,
        }
    },
    methods:{
        identificarUsuario(id){
            axios.get(`/api/usuarios/${id}`)
            .then(response => {
                this.nome = response.data[0].nome
                this.sobrenome = response.data[0].sobrenome
                this.email = response.data[0].email
                this.status = response.data[0].status
                this.nivel = response.data[0].nivel
                this.senha = response.data[0].senha
            })
            .catch((error) => error)
        },
        atualizarUsuario(id){
            const dados = {
                nome: this.nome,
                sobrenome: this.sobrenome,
                email: this.email,
                status: this.status,
                nivel: this.nivel,
                senha: this.senha,
            }
            axios.patch(`/api/usuarios/${id}`, dados)
            .then(response => console.log(response))
            .catch((error) => error)

            this.$router.push('/admin/usuarios')
        },
    },
    mounted(){
        this.usuarioID = this.$route.params.id
        this.identificarUsuario(this.$route.params.id)
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
.formulario input, .formulario select{
    width: 100%;
    height: 40px;
    font-size: 1rem;
    padding-left: 10px;
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
