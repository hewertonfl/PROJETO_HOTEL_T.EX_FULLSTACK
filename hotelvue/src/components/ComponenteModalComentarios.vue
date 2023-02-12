<template>
    <button
        type="button"
        @click="abrirModal(), starsMean(dados.id)"
        style="padding: 5px"
    >
        Deixe um comentário
    </button>

    <div v-if="modal" class="overlay">
        <div class="popup">
            <button @click="closeModal" class="fechar">
                <i class="fa-sharp fa-solid fa-xmark fa-2x"></i>
            </button>

            <div class="box-container">
                <div class="quarto">
                    <img :src="dados.img" alt="" class="img-quarto" />
                    <h2>{{ dados.title }}</h2>
                    <p>{{ dados.description }}</p>
                    <p class="media" v-if="media">
                        <span>{{ media }}</span>
                    </p>
                </div>
                <div class="comentarios">
                    <form @submit.prevent="adicionarComentario">
                        <h2>Deixe seu Comentário</h2>
                        <div class="row">
                            <input
                                type="text"
                                v-model="nome"
                                placeholder="Digite seu nome"
                                @change="
                                    avaliacao.addName(nome),
                                        avaliacao.addRoom(dados.title),
                                        avaliacao.addID(dados.id)
                                "
                                required
                            />
                            <select
                                v-model="estrelas"
                                @change="avaliacao.addStars(estrelas)"
                                required
                            >
                                <option value="1">&#9733;</option>
                                <option value="2">&#9733;&#9733;</option>
                                <option value="3">&#9733;&#9733;&#9733;</option>
                                <option value="4">
                                    &#9733;&#9733;&#9733;&#9733;
                                </option>
                                <option value="5">
                                    &#9733;&#9733;&#9733;&#9733;&#9733;
                                </option>
                            </select>
                        </div>
                        <textarea
                            v-model="mensagem"
                            cols="5"
                            rows="5"
                            placeholder="Digite sua mensagem"
                            @change="avaliacao.addComments(mensagem)"
                            required
                        ></textarea>
                        <button
                            @click="
                                publication(nome, dados.id, mensagem, estrelas),
                                    $emit('signal')
                            "
                            type="button"
                        >
                            Publicar Comentário
                        </button>
                    </form>
                    <div
                        class="comentarios-clientes"
                        :key="componentComentarios"
                    >
                        <div
                            v-for="avaliacao in avaliacoes"
                            :key="avaliacao.id"
                        >
                            <div
                                v-if="avaliacao.room === dados.title"
                                class="box-comentarios"
                            >
                                <p class="estrela">
                                    {{ this.mostrarEstrelas(avaliacao.stars) }}
                                </p>
                                <p class="nome">{{ avaliacao.name }}</p>
                                <p class="mensagem">
                                    {{ avaliacao.comments }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Avaliacao from '@/assets/js/avaliacao.js'
import StorageAvaliacoes from '@/assets/js/storageAvaliacoes'
export default {
    name: 'ComponenteModais',
    props: ['dados'],
    data() {
        return {
            modal: false,
            media: '',
            avaliacoes: '',
            nome: '',
            mensagem: '',
            estrela: '',
        }
    },
    methods: {
        closeModal() {
            this.modal = false
        },
        abrirModal() {
            this.modal = true
        },
        starsMean(id) {
            let soma = 0
            let counter = 0
            let m

            if (this.storageAvaliacoes.getStorage().length != 0) {
                this.storageAvaliacoes.getStorage().forEach((element) => {
                    if (element.id == id) {
                        soma += Number(element.stars)
                        counter++
                    }
                })
                if (counter != 0) {
                    m = soma / counter
                    this.media = m.toFixed(1)
                    localStorage.setItem(`starsMean_${id}`, this.media)
                } else {
                    this.media = ''
                }
            } else {
                this.media = ''
            }

            return this.media
        },
        mostrarEstrelas(estrelas) {
            switch (estrelas) {
                case '1':
                    return '☆'
                case '2':
                    return '☆☆'
                case '3':
                    return '☆☆☆'
                case '4':
                    return '☆☆☆☆'
                case '5':
                    return '☆☆☆☆☆'
            }
        },
        updateAvaliacao() {
            this.avaliacoes = this.storageAvaliacoes.getStorage()
            return this.avaliacoes
        },
        validation(name, id) {
            let flag = false
            this.storageAvaliacoes.getStorage().forEach((element) => {
                if (element.name == name && element.id == id) {
                    flag = true
                } else {
                    flag = false
                }
            })
            return flag
        },
        publication(name, id, comments, stars) {
            if (!name || !comments || !stars) {
                alert('Favor preencher todos os campos')
            } else if (!this.validation(name, id)) {
                this.storageAvaliacoes.setStorage(this.avaliacao.readRating())
                this.updateAvaliacao()
                this.starsMean(id)
                alert('Avaliação publicada com sucesso')
            } else {
                alert('O usuário ja avaliou este quarto')
            }
        },
    },

    mounted() {
        this.avaliacao = new Avaliacao()
        this.storageAvaliacoes = new StorageAvaliacoes()
        localStorage.getItem('avaliacoes')
            ? (this.avaliacoes = JSON.parse(localStorage.getItem('avaliacoes')))
            : null
        console.log(this.avaliacoes)
    },
}
</script>

<style scoped>
.overlay {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(3px);
    width: 100%;
}

.popup {
    padding: 30px;
    background: #fff;
    border-radius: 5px;
    width: 90%;
    height: 90%;
    color: #080710;
    transition: all 5s ease-in-out;
    overflow: auto;
    position: relative;
}

.fechar {
    position: absolute;
    right: 5px;
    top: 5px;
    background: none;
    border: none;
    color: #a35700;
}

.box-container,
.row {
    display: flex;
    justify-content: space-between;
}

.row input,
.row select,
.quarto,
.comentarios {
    width: 49%;
}

form {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}

form h2 {
    margin-bottom: 10px;
}

form input[type='text'],
form input[type='select'],
textarea {
    border: 1px solid #ccc;
    height: 35px;
    padding: 5px;
    margin: 2px 0;
    font-family: Arial, Helvetica, sans-serif;
}

textarea {
    outline: none;
}

form input[type='text']::placeholder,
form input[type='select']::placeholder,
textarea::placeholder {
    font-size: 1rem;
}

form button {
    margin-top: 2px;
    padding: 10px 30px;
    border: none;
    background: #063f57;
    color: #ffffff;
}

.box-comentarios {
    padding: 3px;
    margin-bottom: 10px;
}

.box-comentarios .estrela {
    color: #a35700;
    font-weight: bold;
}

.box-comentarios .mensagem {
    font-size: 0.8rem;
}

.media {
    position: absolute;
    top: 30px;
    left: 30px;
    font-size: 5rem;
    text-align: center;
}

.media span {
    background: #a35700;
    color: #ffffff;
    padding: 0 30px;
    text-align: center;
}

@keyframes popup {
    from {
        opacity: 0;
        transform: translate3d(0, -60px, 0);
    }
    to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
}

.popup {
    animation-name: popup;
    animation-duration: 0.5s;
}
</style>
