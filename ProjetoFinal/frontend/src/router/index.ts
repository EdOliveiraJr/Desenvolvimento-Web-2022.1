import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import AdminHome from '../views/admin/Home.vue'
import AdminEstoque from './views/admin/Estoque.vue'
import Home from '../views/Home.vue'
import ProductExpandedCard from '../views/ProductDetails.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
    {
        path: "/login",
        component: Login,
        name: 'login'
    },
    {
        path: "/admin",
        component: AdminHome,
        meta: { requiresAdmin: true}
    },
    {
        path: "/admin/estoque/",
        component: AdminEstoque,
        name: 'addProduto',
        meta: { requiresAdmin: true}
    }, 
    {
        path: "/admin/estoque/:id",
        component: AdminEstoque,
        name: 'editProduto',
        props: true,
        meta: { requiresAdmin: true}
    }, 
    {
        path: "/",
        component: Home,
        alias: '/produtos'
    }, 
    {
        path: '/produtos/:id',
        component: ProductExpandedCard,
        name: 'verManga',
    },
    {
        path: '/404',
        component: NotFound,
        name: 'notFound',
        props: true
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})