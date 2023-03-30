import { createRouter, createWebHistory } from 'vue-router'

//Headers e Footers
import ComponenteHeaderBanner from '../components/ComponenteHeaderBanner'
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
import AdminUsuariosAdminView from '../views/admin/AdminUsuariosAdminView.vue'
import CadastrarUsuarioView from '../views/admin/CadastrarUsuarioView.vue'
import EditarUsuarioView from '../views/admin/EditarUsuarioView.vue'

import AdminAcomodacoesView from '../views/admin/AdminAcomodacoesView.vue'
import CadastrarAcomodacaoView from '../views/admin/CadastrarAcomodacaoView.vue'
import EditarAcomodacaoView from '../views/admin/EditarAcomodacaoView.vue'

import AdminAdicionaisView from '../views/admin/AdminAdicionaisView.vue'
import CadastrarAdicionalView from '../views/admin/CadastrarAdicionalView.vue'
import EditarAdicionalView from '../views/admin/EditarAdicionalView.vue'

import AdminReservaView from '../views/admin/AdminReservaView.vue'
import AdminEditarReservaView from '../views/admin/AdminEditarReservaView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        components: {
            default: HomeView,
            header: ComponenteHeaderBanner,
            footer: ComponenteFooter,
        },
    },
    {
        path: '/sobre',
        name: 'sobre',
        components: {
            default: SobreView,
            header: ComponenteHeaderBanner,
            footer: ComponenteFooter,
        },
    },
    {
        path: '/acomodacoes',
        name: 'acomodacoes',
        components: {
            default: AcomodacoesView,
            header: ComponenteHeaderBanner,
            footer: ComponenteFooter,
        },
    },
    {
        path: '/contato',
        name: 'contato',
        components: {
            default: ContatoView,
            header: ComponenteHeaderBanner,
            footer: ComponenteFooter,
        },
    },
    {
        path: '/login',
        name: 'login',
        components: {
            default: LoginView,
            header: ComponenteHeaderBanner,
            footer: ComponenteFooter,
        },
        meta: {
            requiresAuth: false,
            nivel: 0,
        },
    },
    {
        path: '/sair',
        name: 'sair',
        components: {
            default: LoginView,
            header: ComponenteHeaderBanner,
            footer: ComponenteFooter,
        },
        meta: {
            requiresAuth: true,
            nivel: 1,
        },
    },
    {
        path: '/minhasreservas',
        name: 'minhasReservas',
        components: {
            default: MinhasReservasView,
            header: ComponenteHeaderBanner,
            footer: ComponenteFooter,
        },
        meta: {
            requiresAuth: true,
            nivel: 1,
        },
    },
    {
        path: '/reserva',
        name: 'reserva',
        components: {
            default: ReservaView,
            header: ComponenteHeaderBanner,
            footer: ComponenteFooter,
        },
    },
    {
        path: '/admin',
        name: 'admin',
        components: {
            default: LoginAdminView,
        },
        meta: {
            requiresAuth: false,
            nivel: 20,
        },
    },
    {
        path: '/admin/usuarios',
        name: 'admin-usuarios',
        components: {
            default: AdminUsuariosView,
            header: ComponenteHeaderAdmin,
        },
        meta: {
            requiresAuth: true,
            nivel: 2,
        },
    },
    {
        path: '/admin/usuarios-admin',
        name: 'admin-usuarios-admin',
        components: {
            default: AdminUsuariosAdminView,
            header: ComponenteHeaderAdmin,
        },
        meta: {
            requiresAuth: true,
            nivel: 2,
        },
    },
    {
        path: '/admin/cadastrar-usuario',
        name: 'admin-cadastrar-usuario',
        components: {
            default: CadastrarUsuarioView,
            header: ComponenteHeaderAdmin,
        },
        meta: {
            requiresAuth: true,
            nivel: 2,
        },
    },
    {
        path: '/admin/editar-usuario/:id',
        name: 'admin-editar-usuario',
        components: {
            default: EditarUsuarioView,
            header: ComponenteHeaderAdmin,
        },
        meta: {
            requiresAuth: true,
            nivel: 2,
        },
    },
    {
        path: '/admin/acomodacoes',
        name: 'admin-acomodacoes',
        components: {
            default: AdminAcomodacoesView,
            header: ComponenteHeaderAdmin,
        },
        meta: {
            requiresAuth: true,
            nivel: 2,
        },
    },
    {
        path: '/admin/cadastrar-acomodacao',
        name: 'admin-cadastrar-acomodacao',
        components: {
            default: CadastrarAcomodacaoView,
            header: ComponenteHeaderAdmin,
        },
        meta: {
            requiresAuth: true,
            nivel: 2,
        },
    },
    {
        path: '/admin/editar-acomodacao',
        name: 'admin-editar-acomodacao',
        components: {
            default: EditarAcomodacaoView,
            header: ComponenteHeaderAdmin,
        },
        meta: {
            requiresAuth: true,
            nivel: 2,
        },
    },
    {
        path: '/admin/adicionais',
        name: 'admin-adicionais',
        components: {
            default: AdminAdicionaisView,
            header: ComponenteHeaderAdmin,
        },
        meta: {
            requiresAuth: true,
            nivel: 2,
        },
    },
    {
        path: '/admin/cadastrar-adicional',
        name: 'admin-cadastrar-adicional',
        components: {
            default: CadastrarAdicionalView,
            header: ComponenteHeaderAdmin,
        },
        meta: {
            requiresAuth: true,
            nivel: 2,
        },
    },
    {
        path: '/admin/editar-adicional',
        name: 'admin-editar-adicional',
        components: {
            default: EditarAdicionalView,
            header: ComponenteHeaderAdmin,
        },
        meta: {
            requiresAuth: true,
            nivel: 2,
        },
    },
    {
        path: '/admin/reservas',
        name: 'admin-editar-reservas',
        components: {
            default: AdminReservaView,
            header: ComponenteHeaderAdmin,
        },
        meta: {
            requiresAuth: true,
            nivel: 2,
        },
    },
    {
        path: '/admin/editar-reserva/:id',
        name: 'admin-reservas',
        components: {
            default: AdminEditarReservaView,
            header: ComponenteHeaderAdmin,
        },
        meta: {
            requiresAuth: true,
            nivel: 2,
        },
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

const token = JSON.parse(localStorage.getItem('token'))
router.beforeEach(async (to, from, next) => {
    if (
        to.matched.some(
            (record) => record.meta.requiresAuth && record.meta.nivel == 1
        )
    ) {
        if (token) {
            if (token.userNivel === 1) {
                return next()
            }
        }
        return next('/login')
    }
    if (
        to.matched.some(
            (record) => record.meta.requiresAuth && record.meta.nivel == 2
        )
    ) {
        if (token) {
            if (token.userNivel === 2) {
                return next()
            }
        }
        return next('/admin')
    }
    if (
        to.matched.some(
            (record) => !record.meta.requiresAuth && record.meta.nivel === 0
        )
    ) {
        if (token) {
            return next('/')
        }
    }
    if (
        to.matched.some(
            (record) => !record.meta.requiresAuth && record.meta.nivel === 20
        )
    ) {
        if (token) {
            if (token.userNivel === 2) {
                return next('/admin/usuarios')
            }
            return next('/')
        }
    }
    next()
})

export default router
