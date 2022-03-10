import Vue from 'vue'
import VueRouter from 'vue-router'

import Testing from '@/views/Testing'
import Login from '@/views/Login'
import Welcome from '@/views/Welcome'
import Home from '@/views/Home'

// Child Views
import Dashboard from '@/views/children/Dashboard'
import Editor from '@/views/children/Editor'
import TreeTable from '@/views/children/TreeTable'
import Draft from '@/views/children/Draft'

// fix Error: avoided redundant navigation to current location: “/xxx”
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}
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
    component: Home,
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: Dashboard
      },
      {
        path: 'editor',
        name: 'editor',
        component: Editor
      },
      {
        path: 'tree-table',
        name: 'tree-table',
        component: TreeTable
      },
      {
        path: 'draft',
        name: 'draft',
        component: Draft
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
