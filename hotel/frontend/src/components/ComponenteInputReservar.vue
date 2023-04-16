<template>
    <li v-for="item in content" :key="item">
        <label :for="item.name">{{ item.legenda }}</label
        ><br />
        <input
            v-if="item.type != 'number'"
            :type="item.type"
            :id="item.name"
            :name="item.name"
            :ref="item.id"
            value=""
            v-model="value"
            @change="updateDadosReserva(item.id, value), noites()"
            required
        />
        <input
            v-else
            :type="item.type"
            :id="item.id"
            :name="item.name"
            :min="item.min"
            :max="item.max"
            :placeholder="item.placeholder"
            value=""
            v-model="value"
            @change="updateDadosReserva(item.id, value)"
            required
        />
    </li>
</template>

<script>
import { DadosInputReservar } from './DadosInputReservar.js'
export default {
    name: 'ComponenteInputReservar',
    data() {
        return {
            content: DadosInputReservar,
        }
    },
    methods: {
        updateDadosReserva: function (name, value) {
            name = name[0].toUpperCase() + name.substring(1)
            name != 'Adultos' ? value : null
            this.$store.commit(`store${name}`, value)
        },

        noites: function () {
            if (
                this.$store.getters.bookingData.checkout &&
                this.$store.getters.bookingData.checkin
            ) {
                const dataCheckin = new Date(this.$store.getters.bookingData.checkin)
            const dataCheckout = new Date(this.$store.getters.bookingData.checkout)
            const milissegundos = dataCheckout - dataCheckin
            const diferencaDias = milissegundos/(1000*60*60*24)
                const noites = dataCheckout ? diferencaDias : ''
                this.$store.commit('storeNoites', noites)
            }
        },
    },
}
</script>
