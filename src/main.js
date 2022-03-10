import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// element ui fully import
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// api
import api from '@/api/api'
// axios
import service from '@/utils/request'

// vxe-table v3
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

Vue.use(ElementUI)
// vxe-table v3
Vue.use(VXETable)

Vue.prototype.$api = api
Vue.prototype.$http = service

Vue.config.productionTip = false

require('@/mock/index')

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')

console.log(process.env.NODE_ENV)
console.log(process.env.NODE_ENV)
