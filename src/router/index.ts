import {createRouter, createWebHistory} from 'vue-router'
import ProductView from '../views/ProductView.vue'
import ProductListView from '../views/ProductListView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            redirect: '/search',
        }, {
            path: '/products/:id',
            name: 'product',
            component: ProductView
        }, {
            path: '/search/:query?',
            name: 'search',
            component: ProductListView
        }
    ]
})

export default router
