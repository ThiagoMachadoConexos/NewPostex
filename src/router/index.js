import { createRouter, createWebHistory } from 'vue-router'
import IdentificacaoView from '../views/IdentificacaoView.vue'
//import Teste from '../views/TesteView.vue'

const routes = [
  {
    path: '/',
    name: 'identificacao',
    component: IdentificacaoView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/servicos',
    name: 'servicos',
    component: () => import('../views/Servicos.vue')
  },
  {
    path: '/home',
    name: '/home',
    component: () => import('../views/HomeView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
