import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../components/Homepage.vue'
import CadastroUser from '../views/CadastroUser.vue'
import LoginUser from '../views/LoginUser.vue'
import Perfil from '../views/Perfil.vue'
import CadastroEmpresa from '../views/CadastroEmpresa.vue'

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
  {
    path: '/cadastroEmpresa',
    name: 'CadastroEmpresa',
    component: CadastroEmpresa
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async(to, from, next)=>{
  const publicos = ['/login', '/cadastro', '/'];
  const authRequired = !publicos.includes(to.path);
  const logado = localStorage.getItem('user');

  if (authRequired && !logado) { next('/login'); }
  else { next(); }
})

export default router
