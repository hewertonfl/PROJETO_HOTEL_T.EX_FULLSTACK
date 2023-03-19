<template>
    <main class="container-contato">
        <div class="header">
            <h2 class="titulo-form-contato">Lista de Acomodações</h2>
            <router-link
                :to="{ path: '/admin/cadastrar-acomodacao' }"
                class="button"
                >Cadastrar Acomodação</router-link
            >
        </div>

        <div class="box-usuario">
            <div v-for="acomodacao in acomodacoes" :key="acomodacao.id">
                <ul>
                    <li class="imagem">
                        <img :src="`${acomodacao.imagem}`" alt="" />
                    </li>
                    <li><span>Número:</span> {{ acomodacao.numero }}</li>
                    <li><span>Tipo:</span> {{ acomodacao.tipo }}</li>
                    <li><span>Descrição:</span> {{ acomodacao.descricao }}</li>
                    <li><span>Preço:</span> {{ acomodacao.preco }}</li>
                    <li><span>Status:</span> {{ acomodacao.status }}</li>
                    <li>
                        <button
                            @click="roomEdit(acomodacao['id_acomodacao'])"
                            class="button"
                        >
                            Editar
                        </button>
                        <button
                            @click="roomDelete(acomodacao['id_acomodacao'])"
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
            acomodacoes: null,
        }
    },
    mounted() {
        this.roomLoader()
    },
    props: {
        id: Number,
    },
    methods: {
        async roomEdit(id) {
            console.log(id)
            this.$store.state.idRoom = id
            this.$router.push('editar-acomodacao')
        },
        async roomDelete(id) {
            await axios
                .delete(`http://localhost:3000/admin/room/delete/${id}`)
                .then((res) => {
                    console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                })
            this.roomLoader()
        },
        async roomLoader() {
            await axios
                .get('/rooms')
                .then((res) => {
                    this.acomodacoes = res.data
                    console.log(res.data)
                })
                .catch((error) => {
                    console.log(error.response.data)
                })
        },
    },
}
</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
}

.box-usuario {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
}

.box-usuario div {
    width: 18rem;
    height: 28rem;
    padding: 10px;
    display: flex;
    align-items: center;
    background: #063f5710;
}

.box-usuario li span {
    color: #a35700;
    font-weight: bold;
    height: 1%;
    /* font-size: 13px; */
}

.imagem img {
    max-width: 100%;
    max-height: 100%;
}

.button {
    background: #063f57;
    padding: 0.75rem;
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
.container-contato {
    width: 80%;
    margin: auto;
}
</style>
