import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../components/Homepage.vue'
import CadastroUser from '../views/CadastroUser.vue'
import LoginUser from '../views/LoginUser.vue'
import Perfil from '../views/Perfil.vue'

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
  {
    path: '/login',
    name: 'LoginUser',
    component: LoginUser
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: Perfil
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
