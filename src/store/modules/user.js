/*
 * MODULE VUEX
 * user
 * =================================================
 */
import Cookies from 'js-cookie'
import axiosAPI from '@/api/api'

const UserKey = 'currentUser'

export default {
  state: {
    currentUser: {}
  },
  getters: {
    getNickname(state) {
      return state.currentUser.nickname
    },
    getAvatarUrl(state) {
      return state.currentUser.avatarUrl
    },
    getUserKey(state) {
      return UserKey
    }
  },
  mutations: {
    setCurrentUser(state, user) {
      state.currentUser = user
      Cookies.set(UserKey, JSON.stringify(user))
    },
    removeCurrentUser(state) {
      state.currentUser = {}
      Cookies.remove(UserKey)
    }
  },
  actions: {
    login({ commit }, userData) {
      return new Promise((resolve, reject) => {
        axiosAPI.user
          .Login2(userData)
          .then((response) => {
            const { data } = response
            if (data.status === 10000) {
              commit('setCurrentUser', data.content)
              console.log('data.content', data.content)
              resolve(true) // successed
            } else {
              resolve(false) // successed-> false
            }
          })
          .catch((error) => {
            reject(error)
          })
      })
    }
  }
}
