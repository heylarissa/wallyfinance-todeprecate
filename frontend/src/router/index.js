import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import authRoutes from '@/modules/auth/router/routes.js'

const baseRoutes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }
]

const routes = baseRoutes.concat(authRoutes)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
