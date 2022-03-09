/*
 * Mock Data for project
 * */
const Mock = require('mockjs')

export function list() {
  const listData = Mock.mock({
    status: 10000,
    msg: 'mock data', // flag
    'content|10': [
      {
        'id|1': '@increment(1)',
        name: '@string(lower,8)',
        detail: '@string(lower,16)',
        avatar_url: 'https://picsum.photos/id/' + '@integer(1,200)' + '/80',
        percentage: '@integer(0,100)',
        ownerId: 1,
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
