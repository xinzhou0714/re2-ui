/*
 * MODULE VUEX
 * user
 * =================================================
 */
import Cookies from 'js-cookie'
import axiosAPI from '@/api/api'
import CONSTANT from '@/utils/constant'
import router from '@/router'
import { Message } from 'element-ui'

const UserKey = CONSTANT.UserKey

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
    getUserKey() {
      return UserKey
    },
    getUsername: (state) => {
      return state.currentUser.username
    },
    getUserId: (state) => {
      return state.currentUser.id
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
              router.push('/') // jump to welcome.vuw
            }
            resolve()
          })
          .catch((error) => {
            // throw error inside axios
            reject(error)
          })
      })
    },
    logout: ({ commit }) => {
      return new Promise((resolve, reject) => {
        axiosAPI.user
          .Logout()
          .then((response) => {
            const { data } = response
            if (data.status === 10000) {
              commit('removeCurrentUser')
              router.push('/login')
              resolve() //  call method onFulfilled
            }
          })
          .catch((error) => {
            // throw error inside axios
            Message.error('error from vuex-action: ' + 'nothing happens')
            reject(error) //  call method onRejected
          })
      })
    }
  }
}
