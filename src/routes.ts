import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'
import Product from '@/views/ProductView.vue'
import Cart from '@/views/CartView.vue'
import About from '@/views/AboutView.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/product/:productId', component: Product },
  { path: '/cart', component: Cart },
  { path: '/about', component: About }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
