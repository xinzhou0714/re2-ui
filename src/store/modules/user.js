/*
 * MODULE VUEX
 * user
 * =================================================
 */
export default {
  state: {
    currentUser: {
      id: 1,
      username: 'tester1',
      nickname: 'nickname',
      avatar_url:
        'https://robohash.org/de520e875232378f2eebe737f8ff709e?set=set4&size=100x100',
      email: '@email',
      create_time: '@date',
      update_time: '@date'
    }
  },
  getters: {
    getNickname(state) {
      return state.currentUser.nickname
    },
    getAvatarUrl(state) {
      return state.currentUser.avatar_url
    }
  },
  mutations: {},
  actions: {}
}
