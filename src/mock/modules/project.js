/*
 * Mock Data for project
 * */
const Mock = require('mockjs')

export function list() {
  const listData = Mock.mock({
    status: 10000,
    msg: 'mock data', // flag
    'content|3': [
      {
        id: '@increment(1)',
        name: '@string(lower,8)',
        detail: '@string(lower,16)',
        ownerId: 1,
        ownerName: '@name(true)',
        createTime: '@datetime',
        updateTime: '@datetime'
      },
      {
        id: '@increment(1)',
        name: '@string(lower,8)',
        detail: '@string(lower,16)',
        ownerId: 2,
        ownerName: '@name(true)',
        createTime: '@datetime',
        updateTime: '@datetime'
      }
    ]
  })
  return {
    isOpen: true,
    url: '/project/list',
    type: 'get',
    data: listData
  }
}
