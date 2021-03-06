import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import md5 from 'js-md5'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_SERVER,
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000
})

service.interceptors.request.use(
  (config) => {
    // do something before request is sent
    if (store.getters.getUsername) {
      config.headers['X-Token'] = md5(store.getters.getUsername)
    }

    Message.success('request sended')
    return config
  },
  (error) => {
    // do something with request error
    Message.error('error from axios request-interceptors: ' + error.message)
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    // Message.success('interceptor enter here1')
    console.log('response', response)
    if (response.data.status === 10000) {
      Message.success(response.data.msg)
    } else {
      if (response.data.msg !== null) {
        if (response.data.status > 10000) {
          Message.error('error from REST-Controller: ' + response.data.msg)
        } else {
          Message.error('error from Backend-Interceptor: ' + response.data.msg)
        }
      }
    }
    return response
  },
  (error) => {
    Message.error('error from axios response-interceptors: ' + error.message)
    return Promise.reject(error)
  }
)

export default service
