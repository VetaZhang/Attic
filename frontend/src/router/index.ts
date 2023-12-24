import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/HelloWorld.vue'

export const routeConfigList = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/button',
  //   name: 'Button',
  //   component: () => import('../components/Button.vue')
  // },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routeConfigList
})
