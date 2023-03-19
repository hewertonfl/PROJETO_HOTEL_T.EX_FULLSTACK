<template>
    <form class="formulario" enctype="multipart/form-data">
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
            <option value="Quarto Adaptado para Deficientes">
                Quarto Adaptado para Deficientes
            </option>
            <option value="Quarto com Vista para o Mar">
                Quarto com Vista para o Mar
            </option>
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
            <option value="livre">Livre</option>
            <option value="ocupado">Ocupado</option>
        </select>

        <label for="imagem">Imagem:</label>
        <input
            type="file"
            ref="file"
            @change="selectFile()"
            name="UploadImage"
        />

        <button @click="roomUpdate()" type="button">Editar Acomodação</button>
    </form>
</template>

<script>
import axios from 'axios'
export default {
    name: 'EditarHospede',
    data() {
        return {
            numero: null,
            preco: null,
            status: null,
            imagem: null,
            descricao: null,
            tipo: null,
        }
    },
    methods: {
        async roomUpdate() {
            const id = this.$store.state.idRoom
            await this.uploadImage()
            const dados = {
                numero: this.numero,
                preco: this.preco,
                status: this.status,
                imagem: this.imagem,
                descricao: this.descricao,
                tipo: this.tipo,
            }
            await axios
                .patch(`http://localhost:3000/admin/room/update/${id}`, dados)
                .then((response) => console.log(response.data))
        },
        uploadImage: async function () {
            const formData = new FormData()
            formData.append('UploadImage', this.file)
            //console.log(this.$refs.file.files[0])
            try {
                await axios
                    .post('http://localhost:3000/admin/room/put', formData)
                    .then((response) => {
                        console.log(response.data.message)
                        this.imagem =
                            'http://localhost:3000/images/' +
                            response.data.image
                    })
                    .catch((error) => console.log(error.response.data.message))
            } catch (error) {
                console.log(error)
            }
        },
        async selectFile() {
            const file = this.$refs.file.files[0]
            this.file = file
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
.formulario select,
textarea {
    width: 100%;
    height: 40px;
    font-size: 1rem;
    padding-left: 10px;
}
textarea {
    height: 60px;
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
