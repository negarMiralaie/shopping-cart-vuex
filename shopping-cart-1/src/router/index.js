import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProductsPage from '../views/products/ProductsPage.vue'
import CartDetails from '../views/cart/CartDetails.vue'

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
  },
  {
    path: '/cart',
    name: 'CartDetails',
    component: CartDetails
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
