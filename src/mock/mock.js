const Mock = require('mockjs')

Mock.mock('http://localhost:8900/mock/test1', 'get', {
  name: '@name', // random name
  email: '@email', // random email
  'age|1-10': 5 // random age
})

Mock.mock('http://localhost:8900/mock/test2', 'get', {
  'MyArray|1-5': ['Moc'] // random name
})

Mock.mock('http://localhost:9999/project/list', 'get', {
  status: 10000,
  msg: 'mock data',
  'content|10': [
    {
      'id|+1': 1,
      name: '@name'
    }
  ]
})
