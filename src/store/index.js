import Vue from 'vue'
import Vuex from 'vuex'
import app from '@/store/modules/app'

// see more about vuex :https://v3.vuex.vuejs.org/
Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    app: app
  }
})
