import Vue from 'vue'
import VueRouter from 'vue-router'

// import utils
import Cookies from 'js-cookie'
import CONSTANT from '@/utils/constant'

// Parent Views
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

// Views do not need to login
const whiteList = ['/login']

// Router Guard
// see more on: https://v3.router.vuejs.org/guide/advanced/navigation-guards.html
router.beforeEach((to, from, next) => {
  // determine whether the user has logged in
  const hasCurrentUser = Cookies.get(CONSTANT.UserKey)
  if (hasCurrentUser) {
    next()
  } else {
    // has not login
    // if in white list
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next({ path: '/login' })
    }
  }
})

export default router
