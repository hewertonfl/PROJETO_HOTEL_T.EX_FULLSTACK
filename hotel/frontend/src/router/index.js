import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/sobre',
        name: 'sobre',
        component: () => import('../views/SobreView.vue'),
    },
    {
        path: '/acomodacoes',
        name: 'acomodacoes',
        component: () => import('../views/AcomodacoesView.vue'),
    },
    {
        path: '/contato',
        name: 'contato',
        component: () => import('../views/ContatoView.vue'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/LoginView.vue'),
    },
    {
        path: '/minhasreservas',
        name: 'minhasReservas',
        component: () => import('../views/MinhasReservasView.vue'),
        meta: {
            requiresAuth: true,
            nivel: 2,
        },
    },
    {
        path: '/reserva',
        name: 'reserva',
        component: () => import('../views/ReservaView.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

router.beforeEach(async (to, from, next) => {
    if (
        to.matched.some(
            (record) => record.meta.requiresAuth && record.meta.nivel === 2
        )
    ) {
        // Authentication check
        const token = JSON.parse(localStorage.getItem('token'))
        if (token.userNivel === 2) {
            // Check if token is valid
            return next()
        } 
        return next('/login')
    }
    if (
        to.matched.some(
            (record) => record.meta.requiresAuth && record.meta.nivel === 1
        )
    ) {
        // Authentication check
        const token = JSON.parse(localStorage.getItem('token'))
        console.log(token)

        if (token) {
            // Check if token is valid
            return next()
        }

        return next('/login')
    }
    // if (
    //     to.matched.some(
    //         (record) => record.meta.requiresAuth && record.meta.nivel == 1
    //     )
    // ) {
    //     const token = JSON.parse(localStorage.getItem('token'))
    //     console.log(token)

    //     if (token.userNivel === 1) {
    //         // Check if token is valid
    //         return next()
    //     }

    //     return next('/login')
    // }
    next()
})

export default router
