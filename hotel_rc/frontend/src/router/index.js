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

import AdminUsuariosView from '../views/admin/AdminUsuariosView.vue'
import CadastrarUsuarioView from '../views/admin/CadastrarUsuarioView.vue'
import EditarUsuarioView from '../views/admin/EditarUsuarioView.vue'

import AdminAcomodacoesView from '../views/admin/AdminAcomodacoesView.vue'
import CadastrarAcomodacaoView from '../views/admin/CadastrarAcomodacaoView.vue'
import EditarAcomodacaoView from '../views/admin/EditarAcomodacaoView.vue'

import AdminAdicionaisView from '../views/admin/AdminAdicionaisView.vue'
import CadastrarAdicionalView from '../views/admin/CadastrarAdicionalView.vue'
import EditarAdicionalView from '../views/admin/EditarAdicionalView.vue'

import AdminReservaView from '../views/admin/AdminReservaView.vue'

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
        },
    },
    {
        path: '/admin/usuarios',
        name: 'admin-usuarios',
        components: {
            default: AdminUsuariosView,
            header: ComponenteHeaderAdmin,
        },
    },
    {
        path: '/admin/cadastrar-usuario',
        name: 'admin-cadastrar-usuario',
        components: {
            default: CadastrarUsuarioView,
            header: ComponenteHeaderAdmin,
        },
    },
    {
        path: '/admin/editar-usuario/',
        name: 'admin-editar-usuario',
        components: {
            default: EditarUsuarioView,
            header: ComponenteHeaderAdmin,
        },
    },
    {
        path: '/admin/acomodacoes',
        name: 'admin-acomodacoes',
        components: {
            default: AdminAcomodacoesView,
            header: ComponenteHeaderAdmin,
        },
    },
    {
        path: '/admin/cadastrar-acomodacao',
        name: 'admin-cadastrar-acomodacao',
        components: {
            default: CadastrarAcomodacaoView,
            header: ComponenteHeaderAdmin,
        },
    },
    {
        path: '/admin/editar-acomodacao',
        name: 'admin-editar-acomodacao',
        components: {
            default: EditarAcomodacaoView,
            header: ComponenteHeaderAdmin,
        },
    },
    {
        path: '/admin/adicionais',
        name: 'admin-adicionais',
        components: {
            default: AdminAdicionaisView,
            header: ComponenteHeaderAdmin,
        },
    },
    {
        path: '/admin/cadastrar-adicional',
        name: 'admin-cadastrar-adicional',
        components: {
            default: CadastrarAdicionalView,
            header: ComponenteHeaderAdmin,
        },
    },
    {
        path: '/admin/editar-adicional',
        name: 'admin-editar-adicional',
        components: {
            default: EditarAdicionalView,
            header: ComponenteHeaderAdmin,
        },
    },
    {
        path: '/admin/reservas',
        name: 'admin-reservas',
        components: {
            default: AdminReservaView,
            header: ComponenteHeaderAdmin,
        },
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
