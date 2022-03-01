import request from '@/utils/request'
import md5 from 'js-md5'

export function Login(username, rowPassword) {
  const password = md5(rowPassword)
  return request({
    url: '/user/login',
    method: 'post',
    params: { username: username, password: password }
  })
}
