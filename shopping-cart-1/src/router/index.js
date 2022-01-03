import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProductsPage from '../views/products/ProductsPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About'
  },
  {
    path: '/products',
    name: 'ProductsPage',
    component: ProductsPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
