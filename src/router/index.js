import Vue from 'vue'
import VueRouter from 'vue-router'

import Testing from '@/views/Testing'
import Login from '@/views/Login'
import Welcome from '@/views/Welcome'
import Home from '@/views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/testing',
    name: 'Testing',
    component: Testing
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  routes
})

export default router
