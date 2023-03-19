<template>
    <form class="formulario" @submit.prevent="userUpdate()">
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

        <label for="senha">Senha:</label>
        <input
            type="text"
            id="senha"
            placeholder="Digite uma senha"
            v-model="senha"
            required
        />
        <button>Salvar alterações</button>
    </form>
</template>

<script>
import axios from 'axios'

export default {
    name: 'EditarUsuarioView',
    data() {
        return {
            usuarioID: null,
            nome: null,
            sobrenome: null,
            email: null,
            status: null,
            nivel: null,
            senha: null,
        }
    },
    methods: {
        async userUpdate() {
            const id = this.$store.state.idUser
            console.log(id)
            const dados = {
                id_usuario: id,
                nome: this.nome,
                status: this.status,
                sobrenome: this.sobrenome,
                nivel: this.nivel,
                senha: this.senha,
                email: this.email,
            }
            await axios
                .patch(`http://localhost:3000/admin/userupdate/${id}`, dados)
                .then((response) => console.log(response.data))
                .catch((error) => {
                    console.log(error.response.data)
                })
            alert('Usuário Atualizado com sucesso!')
            this.$router.push('/admin/usuarios')
        },
    },
}
</script>

<style scoped>
.formulario {
    width: 35%;
    margin: 0 auto;
    margin: 3% auto 3% auto;
    padding: 20px;
    background: #063f57;
    border-radius: 10px;
}
.formulario p {
    color: #a35700;
    font-weight: bold;
    line-height: 50px;
    font-size: 1.5rem;
    text-align: right;
    margin-right: 10px;
    cursor: pointer;
}
.formulario h2 {
    color: #ffffff;
    text-align: center;
}
.formulario label {
    width: 100%;
    display: block;
    color: #ffffff;
    margin: 5px 0;
}
.formulario input,
.formulario select {
    width: 100%;
    height: 40px;
    font-size: 1rem;
    padding-left: 10px;
}
.formulario button {
    font-size: 1rem;
    padding: 10px 30px;
    background: #a35700;
    color: #ffffff;
    border: none;
    margin-top: 10px;
}
</style>
