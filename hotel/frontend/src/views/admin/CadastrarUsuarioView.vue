<template>
        <form class="formulario" method="POST" @submit="cadastrarUsuario">
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
            <option value="admin">Admin</option>
            <option value="hospede">Hóspede</option>
            <option value="funcionario">Funcionário</option>
            </select> 

            <label for="status">Status:</label>
            <select v-model="status" id="status">
            <option value="ativo">Ativo</option>
            <option value="inativo">Inativo</option>
            </select>

            <label for="senha">Senha:</label>
            <input
            type="text"
            id="senha"
            placeholder="Digite uma senha"
            v-model="senha"
            required
            />               

            <button>Cadastrar</button>
        </form>
</template>

<script>
import axios from 'axios'

export default{
    name: "CadastrarUsuarioView",
    data() {
        return{
           nome: null,
           sobrenome: null,
           email: null,
           nivel: null,
           status: null,
           senha: null,
        }
    },
    methods:{
        cadastrarUsuario(){
            const dados = {
                nome: this.nome,
                sobrenome: this.sobrenome,
                email: this.email,
                nivel: this.nivel,
                status: this.status,
                senha: this.senha,
            }
            axios.post('http://localhost:3000/api/usuarios', dados)
            .then(response => {
                console.log(response)
            })
            .catch(error => error)

            this.$router.push('/admin/usuarios')
        }
    },
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
    margin: auto;
    display: block;
    margin-top: 10px;
}
</style>
