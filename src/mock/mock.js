const Mock = require('mockjs')

Mock.mock('http://localhost:8900/mock/test1', 'get', {
  name: '@name', // random name
  email: '@email', // random email
  'age|1-10': 5 // random age
})

Mock.mock('http://localhost:8900/mock/test2', 'get', {
  'MyArray|1-5': ['Moc'] // random name
})

Mock.mock(process.env.VUE_APP_SERVER + '/project/list', 'get', {
  status: 10000,
  msg: 'mock data',
  'content|5': [
    {
      'id|+1': '@increment(1)',
      name: '@string(lower,8)',
      detail: '@string(lower,16)',
      ownerId: 1,
      ownerName: '@name(true)',
      createTime: '@datetime',
      updateTime: '@datetime'
    },
    {
      'id|+1': '@increment(1)',
      name: '@string(lower,8)',
      detail: '@string(lower,16)',
      ownerId: 2,
      ownerName: '@name(true)',
      createTime: '@datetime',
      updateTime: '@datetime'
    },
    {
      'id|+1': '@increment(1)',
      name: '@string(lower,8)',
      detail: '@string(lower,16)',
      ownerId: 3,
      ownerName: '@name(true)',
      createTime: '@datetime',
      updateTime: '@datetime'
    },
    {
      'id|+1': '@increment(1)',
      name: '@string(lower,8)',
      detail: '@string(lower,16)',
      ownerId: 4,
      ownerName: '@name(true)',
      createTime: '@datetime',
      updateTime: '@datetime'
    }
  ]
})

const mockUserInfo = {
  status: 10000,
  msg: 'mock data',
  content: '@string(6)'
}

Mock.mock(
  new RegExp(process.env.VUE_APP_SERVER + '/user/login'),
  'post',
  (opt) => {
    console.log('/user/login', opt)
    return Mock.mock(mockUserInfo)
  }
)

Mock.mock(process.env.VUE_APP_SERVER + '/test/post', 'post', (option) => {
  console.log('/test/post', option.body)
  const data = JSON.parse(option.body)
  if (data.ss === 1) {
    return 'aaa'
  } else {
    return 'bbb'
  }
})
