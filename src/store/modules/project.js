/*
 * MODULE VUEX
 * project
 * =================================================
 */
import axiosAPI from '@/api/api'
const Mock = require('mockjs')

export default {
  state: {
    projectList: [
      {
        id: 1,
        name: 'Project1aaaaaaa',
        detail: 'some details11111111',
        avatar_url: 'https://picsum.photos/id/' + 1 + '/80',
        ownerId: 1,
        percentage: 70,
        ownerName: '@name(true)',
        createTime: '@datetime',
        updateTime: '@datetime'
      },
      {
        id: 2,
        name: 'Project2',
        detail: 'some details22222222',
        avatar_url: 'https://picsum.photos/id/' + 2 + '/80',
        ownerId: 1,
        percentage: 50,
        ownerName: '@name(true)',
        createTime: '@datetime',
        updateTime: '@datetime'
      },
      {
        id: 3,
        name: 'Project3',
        detail: 'some details33333333',
        avatar_url: 'https://picsum.photos/id/' + 3 + '/80',
        ownerId: 1,
        percentage: 100,
        ownerName: '@name(true)',
        createTime: '@datetime',
        updateTime: '@datetime'
      }
    ]
  },
  getters: {
    getProjectList(state) {
      return state.projectList
    },
    getProjectListByPattern(state) {
      return (pattern) => {
        const regex = new RegExp(pattern)
        return state.projectList.filter((item) => regex.test(item.name))
      }
    },
    getNewId(state) {
      const newId =
        Math.max.apply(
          Math,
          state.projectList.map((o) => o.id)
        ) + 1
      return newId
    }
  },
  mutations: {
    setProjectList(state, list) {
      state.projectList = list
    },
    removeProjectById(state, projectId) {
      state.projectList = state.projectList.filter(
        (item) => item.id !== projectId
      )
    },
    removeProjectList(state) {
      state.projectList = []
    },
    addProject(state, project) {
      state.projectList.push(project)
    },
    updateProject(state, project) {
      const index = state.projectList.findIndex(
        (item) => item.id === project.id
      )
      if (index !== -1) {
        state.projectList.splice(index, 1, project)
      }
    }
  },
  actions: {
    loadProjectList({ commit }) {
      axiosAPI.project
        .getList()
        .then((response) => response.data.content)
        .then((list) => {
          // console.log(list)
          commit('setProjectList', list)
        })
    },
    removeProjectById({ commit }, projectId) {
      commit('removeProjectById', projectId)
    },
    removeProjectList({ commit }) {
      commit('removeProjectList')
    },
    addProject({ commit, getters }, project) {
      const newProject = {
        id: getters.getNewId,
        name: project.name,
        detail: project.detail,
        avatar_url:
          'https://picsum.photos/id/' + Mock.mock('@integer(100,200)') + '/80',
        ownerId: 1,
        percentage: 0,
        ownerName: 'someone',
        createTime: '@datetime',
        updateTime: '@datetime'
      }
      commit('addProject', newProject)
    },
    updateProject({ commit }, project) {
      commit('updateProject', project)
    }
  }
}
