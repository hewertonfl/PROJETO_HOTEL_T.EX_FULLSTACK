import { createRouter, createWebHistory } from 'vue-router'

//Headers e Footers
import ComponenteHeader from '../components/ComponenteHeader'
import ComponenteFooter from '../components/ComponenteFooter'
import ComponenteHeaderAdmin from '../components/admin/ComponenteHeaderAdmin.vue'

//Páginas
import HomeView from '../views/HomeView.vue'
import SobreView from '../views/SobreView.vue'
import AcomodacoesView from '../views/AcomodacoesView.vue'
import ContatoView from '../views/ContatoView.vue'
import LoginView from '../views/LoginView.vue'
import MinhasReservasView from '../views/MinhasReservasView.vue'
import ReservaView from '../views/ReservaView.vue'

//Admin
import LoginAdminView from '../views/admin/LoginAdminView.vue'
import RelatorioAdminView from '../views/admin/RelatorioAdminView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        components: {
            default: HomeView,
            header: ComponenteHeader,
            footer: ComponenteFooter,
        },
    },
    {
        path: '/sobre',
        name: 'sobre',
        components: {
            default: SobreView,
            header: ComponenteHeader,
            footer: ComponenteFooter,
        },
    },
    {
        path: '/acomodacoes',
        name: 'acomodacoes',
        components: {
            default: AcomodacoesView,
            header: ComponenteHeader,
            footer: ComponenteFooter,
        },
    },
    {
        path: '/contato',
        name: 'contato',
        components: {
            default: ContatoView,
            header: ComponenteHeader,
            footer: ComponenteFooter,
        },
    },
    {
        path: '/login',
        name: 'login',
        components: {
            default: LoginView,
            header: ComponenteHeader,
            footer: ComponenteFooter,
        },
    },
    {
        path: '/minhasreservas',
        name: 'minhasReservas',
        components: {
            default: MinhasReservasView,
            header: ComponenteHeader,
            footer: ComponenteFooter,
        },
    },
    {
        path: '/reserva',
        name: 'reserva',
        components: {
            default: ReservaView,
            header: ComponenteHeader,
            footer: ComponenteFooter,
        },
    },
    {
        path: '/admin',
        name: 'admin',
        components: {
            default: LoginAdminView,
            header: ComponenteHeaderAdmin
        },
    },
    {
    path: '/relatorio',
    name: 'relatorio',
    components: {
        default: RelatorioAdminView,
        header: ComponenteHeaderAdmin
    },
}
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
