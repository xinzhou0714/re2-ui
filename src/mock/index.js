import * as user from './modules/user'
import * as project from './modules/project'

const Mock = require('mockjs')
const baseUrl = process.env.VUE_APP_SERVER

const openMock = process.env.NODE_ENV === 'dev-local-mock'

fnCreate(user, openMock)
fnCreate(project, openMock)

/*
 * enable mock data in separate module,
 * ###################################
 * res is the result of method mod[key]()
 * if res.isOpen is true or undefined, this method will be enabled
 * @param {*} mod Alias for Module
 * @param {*} isOpen if mock data from this module enabled
 * */
function fnCreate(mod, isOpen = true) {
  if (isOpen) {
    for (const key in mod) {
      ;((res) => {
        if (res.isOpen !== false) {
          console.log('res is', res)
          console.log('isOpen is', isOpen)
          const url = baseUrl + res.url
          console.log('url is', url)
          Mock.mock(new RegExp(url), res.type, (opts) => {
            opts.data = opts.body ? JSON.parse(opts.body) : null
            delete opts.body
            console.log('\n')
            console.log('%c mocking, request is: ', 'color:blue', opts)
            console.log('%c mocking, response is: ', 'color:blue', res.data)
            return Mock.mock(res.data)
          })
        }
      })(mod[key]() || {})
    }
  }
}
