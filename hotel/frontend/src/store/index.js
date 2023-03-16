import { createStore } from 'vuex'

export default createStore({
    state: {
        usuario: {},
          // Conteudo dos cards da página reservar
        cardContent: [],

        // Dados da Reserva
        dadosReserva: {
            checkin: '',
            checkout: '',
            adultos: '',
            acomodacao: '',
            noites: '',
            servicos: [],
            quartoPreco: '',
            cupomDesconto: '',
            img: '',
            valorTotal: '',
        },

        modalProperties: {
            detalhes: false,
            servicos: false,
        },

        contador: 0,
    },
    getters: {
        rCard(state) {
            return state.cardContent
        },
        bookingData(state) {
            return state.dadosReserva
        },
        modalState(state) {
            return state.modalProperties
        },
        getCardContent(state) {
            return state.cardContent
        },
        getCounter(state) {
            return state.contador
        },
    },
    mutations: {
        // Atribuir usuário
        setUser(state, payload){
            state.usuario = payload
        },

        // Muda a ordem dos cards
        order(state, i) {
            let cardContent = state.cardContent
            let aux = []
            aux.push(cardContent[i])
            cardContent.splice(i, 1)
            cardContent.forEach((element) => {
                aux.push(element)
            })
            state.cardContent = aux
            localStorage.setItem('cardContent', JSON.stringify(aux))
        },
        // Contador
        counter(state) {
            state.contador += 1
            localStorage.getItem('counter')
                ? (state.contador =
                      parseInt(localStorage.getItem('counter')) + 1)
                : null
            localStorage.setItem('counter', state.contador)
        },
        // Dados da Reserva
        storeBookingData(state, data) {
            state.dadosReserva = data
        },
        storeCheckin(state, data) {
            state.dadosReserva.checkin = data
        },
        storeCheckout(state, data) {
            state.dadosReserva.checkout = data
        },
        storeAdultos(state, data) {
            state.dadosReserva.adultos = data
        },
        storeAcomodacao(state, data) {
            state.dadosReserva.acomodacao = data
        },
        storeNoites(state, data) {
            state.dadosReserva.noites = data
        },
        storeServicos(state, data) {
            state.dadosReserva.servicos = data
        },
        storeValorTotal(state, data) {
            state.dadosReserva.valorTotal = data
        },
        storeCupomDesconto(state, data) {
            state.dadosReserva.cupomDesconto = data
        },
        storeQuartoPreco(state, data) {
            state.dadosReserva.quartoPreco = data
        },
        storeImg(state, data) {
            state.dadosReserva.img = data
        },
        // Conteudo dos cards
        storeCardContent(state, data) {
            state.cardContent = data
        },
    },
    actions: {},
    modules: {},
})
