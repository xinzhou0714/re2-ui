/*
 * MODULE VUEX
 * app
 * =================================================
 */
export default {
  state: {
    appName: 're2-ui',
    appVersion: '0.0.0',
    appAuthor: 'Xin Zhou',
    appDescription:
      'Masterarbeit: Prototypische Implementierung eines Software-Tools für Requirements Engineerings'
  },
  getters: {
    getAppAuthoer(state) {
      return '@' + state.appAuthor
    },
    getAppDescription(state) {
      return state.appDescription
    },
    getAppVersion(state) {
      return state.appVersion
    }
  },
  mutations: {},
  actions: {}
}
