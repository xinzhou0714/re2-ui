import request from '@/utils/request'
import md5 from 'js-md5'

// deprecated login API, server needs to be adjusted
export function Login(username, rowPassword) {
  const password = md5(rowPassword)
  return request({
    url: '/user/login',
    method: 'post',
    params: { username: username, password: password }
  })
}

// login variant2: post a data body, without parameters
export function Login2(data) {
  const submitData = Object.assign({}, data)
  submitData.password = md5(submitData.password)
  return request.post('/user/login', submitData)
}

// logout

export function Logout() {
  return request.post('/user/logout')
}
