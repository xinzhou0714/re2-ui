import Vue from 'vue'
import Vuex from 'vuex'
import app from '@/store/modules/app'
import project from '@/store/modules/project'
import user from '@/store/modules/user'

// see more about vuex :https://v3.vuex.vuejs.org/
Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    app: app,
    project: project,
    user: user
  }
})
