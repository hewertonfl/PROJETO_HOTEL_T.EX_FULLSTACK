<template>
    <div
        v-for="(accommodation, i) in quartos"
        :key="accommodation.id"
        class="card"
    >
        <div class="img">
            <img :src="`${accommodation.imagem}`" />
        </div>
        <div class="inferior-text display-g">
            <div class="inferior-text-top">
                <h3 class="titulo-h3">{{ accommodation.tipo }}</h3>
                <p>{{ accommodation.descricao }}</p>
            </div>
            <div class="inferior-text-button display-f justify-csb">
                <div class="inferior-left display-f flex-dc">
                    <div class="text2 noto-sans">A partir de</div>
                    <div class="text-valor-acomodacoes">
                        {{
                            parseFloat(accommodation.preco).toLocaleString('pt-BR', {
                                style: 'currency',
                                currency: 'BRL',
                            })
                        }}
                    </div>
                </div>
                <div class="inferior-right display-f justify-c align-c">
                    <button
                        class="btn-blue"
                        @click="
                            this.$router.push('/reserva'),
                                changeOrder(i, accommodation.id)
                        "
                    >
                        Reservar
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ComponetCard',
    props: ['quartos'],

    methods: {
        changeOrder: function (i, id) {
            this.$store.commit('order', i)
            if (id > 3) {
                this.counter()
            }
        },

        counter: function () {
            this.$store.commit('counter')
        },
    },
}
</script>
