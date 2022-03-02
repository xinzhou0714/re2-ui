/*
 * Mock Data for user
 * */

export function login() {
  const loginData = {
    status: 10000,
    msg: 'mock data',
    content: {
      id: 1,
      username: 'tester1',
      nickname: '@name',
      avatar_url:
        'https://robohash.org/de520e875232378f2eebe737f8ff709e?set=set4&size=100x100',
      email: '@email',
      create_time: '@date',
      update_time: '@date'
    }
  }
  return {
    isOpen: true,
    url: '/user/login',
    type: 'post',
    data: loginData
  }
}

export function logout() {
  const logoutData = {
    status: 10000,
    msg: 'mock data',
    content: {}
  }
  return {
    isOpen: false,
    url: '/user/logout',
    type: 'post',
    data: logoutData
  }
}
