import axios from 'axios'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_SERVER,
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000
})

export default service
