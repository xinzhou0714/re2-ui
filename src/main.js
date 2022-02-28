import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// element ui fully import
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')

console.log(process.env.NODE_ENV)
console.log(process.env.NODE_ENV)
