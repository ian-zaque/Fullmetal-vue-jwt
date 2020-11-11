import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../components/Homepage.vue'
import CadastroUser from '../views/CadastroUser.vue'

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage
  },
  {
    path: '/cadastro',
    name: 'CadastroUser',
    component: CadastroUser
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
