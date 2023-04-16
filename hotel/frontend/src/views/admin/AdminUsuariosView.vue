<template>
    <main class="container-contato">
        <div class="header">
            <h2 class="titulo-form-contato">Lista de Usuários</h2>
            <div>
              <fieldset>
                <legend>Hóspedes</legend>
                <input
                    @click="carregarDados()"
                    type="radio"
                    v-model="checked"
                    name="status"
                    value="ativo-hospede"
                    id="status-ativo-hospede"
                />
                Ativo
                <input
                    @click="carregarDados()"
                    type="radio"
                    v-model="checked"
                    name="status"
                    value="inativo-hospede"
                    id="status-inativo-hospede"
                />
                Inativo
                <input
                    @click="carregarDados()"
                    type="radio"
                    v-model="checked"
                    name="status"
                    value="todos-hospede"
                    id="status-todos-hospede"
                />
                Todos
                </fieldset>
            </div>
            <div>
              <fieldset>
                <legend>Funcionários</legend>
                <input
                    @click="carregarDados()"
                    type="radio"
                    v-model="checked"
                    name="status"
                    value="ativo-funcionario"
                    id="status-ativo-funcionario"
                />
                Ativo
                <input
                    @click="carregarDados()"
                    type="radio"
                    v-model="checked"
                    name="status"
                    value="inativo-funcionario"
                    id="status-inativo-funcionario"
                />
                Inativo
                <input
                    @click="carregarDados()"
                    type="radio"
                    v-model="checked"
                    name="status"
                    value="todos-funcionario"
                    id="status-todos-funcionario"
                />
                Todos
                </fieldset>
            </div>
            <router-link
                :to="{ path: '/admin/cadastrar-usuario' }"
                class="button"
                >Cadastrar Usuário</router-link
            >
        </div>

        <div v-if='!usuariosFiltrados' class="box-usuario">
            <div v-for="usuario in usuarios" :key="usuario.id">
                <ul>
                    <li>
                        <span>Nome:</span> {{ usuario.nome }}
                        {{ usuario.sobrenome }}
                    </li>
                    <li><span>E-mail:</span> {{ usuario.email }}</li>
                    <li><span>Nível:</span> {{ usuario.nivel }}</li>
                    <li><span>Status:</span> {{ usuario.status }}</li>
                    <li>
                        <router-link
                            :to="{
                                path: `/admin/editar-usuario/${usuario.id_usuario}`,
                            }"
                            class="button"
                            >Editar</router-link
                        >
                        <button
                            @click="this.inativarUsuario(usuario.id_usuario)"
                            class="button"
                        >
                            Remover
                        </button>
                    </li>
                </ul>
            </div>
        </div>
        <div v-else class="box-usuario">
            <div v-for="usuario in usuariosFiltrados" :key="usuario.id">
                <ul>
                    <li>
                        <span>Nome:</span> {{ usuario.nome }}
                        {{ usuario.sobrenome }}
                    </li>
                    <li><span>E-mail:</span> {{ usuario.email }}</li>
                    <li><span>Nível:</span> {{ usuario.nivel }}</li>
                    <li><span>Status:</span> {{ usuario.status }}</li>
                    <li>
                        <router-link
                            :to="{
                                path: `/admin/editar-usuario/${usuario.id_usuario}`,
                            }"
                            class="button"
                            >Editar</router-link
                        >
                        <button
                            @click="this.inativarUsuario(usuario.id_usuario)"
                            class="button"
                        >
                            Remover
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </main>
</template>

<script>
import axios from 'axios'

export default {
    name: 'AdminUsuariosView',
    data() {
        return {
            usuarios: null,
            checked: 'ativo',
            usuariosFiltrados: null,
        }
    },
    methods: {
       async carregarDados() {
            await axios
                .get('/api/usuarios', {
                    withCredentials: true,
                })
                .then((response) => (this.usuarios = response.data))
            this.itensFiltrados()
        },
        itensFiltrados() {
            const [...usuariosArray] = this.usuarios

           if (this.checked === 'todos-hospede') {
                const filtro = usuariosArray.filter(
                    (status) => status.nivel == 1
                )
                this.usuariosFiltrados = filtro
            } else if (this.checked === 'ativo-hospede') {
                const filtro = usuariosArray.filter(
                    (status) => status.status == 'ativo' && status.nivel == 1
                )
                this.usuariosFiltrados = filtro
            } else if (this.checked === 'inativo-hospede') {
                const filtro = usuariosArray.filter(
                    (status) => status.status == 'inativo' && status.nivel == 1
                )
                this.usuariosFiltrados = filtro
            } else if (this.checked === 'todos-funcionario') {
                const filtro = usuariosArray.filter(
                    (status) => status.nivel == 2
                )
                this.usuariosFiltrados = filtro
            } else if (this.checked === 'ativo-funcionario') {
                const filtro = usuariosArray.filter(
                    (status) => status.status == 'ativo' && status.nivel == 2
                )
                this.usuariosFiltrados = filtro
            } else if (this.checked === 'inativo-funcionario') {
                const filtro = usuariosArray.filter(
                    (status) => status.status == 'inativo' && status.nivel == 2
                )
                this.usuariosFiltrados = filtro
            }
        },
        inativarUsuario(id) {
            if (confirm('Tem certeza que deseja inativar esse usuário?')) {
                axios.delete(`/api/usuarios/${id}`).then((response) => {
                    alert(response.data.message)
                })
                this.$router.push('/admin/usuarios')
            }
        },
    },
    mounted() {
      this.carregarDados()
    },
}
</script>

<style lang='scss' scoped>
.header {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
}
fieldset {
  border: #a35700 2px solid;
  padding: 2px 10px;
}
legend {
    font-weight: bold;
    color: #063f57;
    padding: 0 5px;
}
.box-usuario {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
}

.box-usuario div {
    width: 300px;
    padding: 10px;
    display: flex;
    background: #063f5710;
}

.box-usuario li span {
    color: #a35700;
    font-weight: bold;
}

.button {
    background: #063f57;
    padding: 5px 10px;
    color: #ffffff;
    border: none;
    margin: 10px 7px 0 0;
    cursor: pointer;
}

.button:hover {
    background: #a35700;
}

.cadastro {
    display: block;
    margin: 0 auto;
    padding: 10px 20px;
    margin-bottom: 40px;
}
@media (max-width: 417px) and (orientation: portrait) {
    .header{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .button{
        margin-bottom: 15px;
    }
    fieldset{
        margin-top: 10px;
    }
}
</style>
