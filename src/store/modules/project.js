/*
 * MODULE VUEX
 * project
 * =================================================
 */
import axiosAPI from '@/api/api'
import router from '@/router'
import Cookies from 'js-cookie'
import CONSTANT from '@/utils/constant'
const ProjectKey = CONSTANT.ProjectKey

export default {
  state: {
    projectList: [],
    projectSearchText: '',
    currentProject: {}
  },
  getters: {
    getProjectList(state) {
      return state.projectList
    },
    getProjectListByPattern(state) {
      if (state.projectList.length === 0) {
        return state.projectList
      } else {
        const pattern = state.projectSearchText
        const regex = new RegExp(pattern)
        return state.projectList.filter((item) => regex.test(item.name))
      }
    },
    // getNewId -->obsolte!!!
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
    },
    setProjectSearchText(state, val) {
      state.projectSearchText = val
    },
    setCurrentProject(state, project) {
      state.currentProject = project
      Cookies.set(ProjectKey, JSON.stringify(project))
    },
    removeCurrentProject(state) {
      state.currentProject = {}
      Cookies.remove(ProjectKey)
    }
  },
  actions: {
    loadProjectList({ commit }, uid) {
      axiosAPI.project
        .loadProjectList(uid)
        .then((response) => response.data.content)
        .then((list) => {
          // console.log(list)
          commit('setProjectList', list)
        })
    },
    removeProjectById({ commit }, projectId) {
      axiosAPI.project
        .deleteProject(projectId)
        .then((response) => response.data.status)
        .then((status) => {
          if (status === 10000) {
            commit('removeProjectById', projectId)
            console.log('vuex delete project')
          }
        })
    },
    removeProjectList({ commit }) {
      commit('removeProjectList')
    },
    addProject({ commit }, formData) {
      axiosAPI.project
        .addProject(formData)
        .then((response) => response.data.status)
        .then((status) => {
          if (status === 10000) {
            commit('addProject', formData)
            console.log('vuex add project')
          }
        })
    },
    updateProject({ commit }, formData) {
      axiosAPI.project
        .updateProject(formData)
        .then((response) => response.data.status)
        .then((status) => {
          if (status === 10000) {
            commit('updateProject', formData)
            console.log('vuex update project')
          }
        })
    },
    setCurrentProject({ commit }, project) {
      commit('setCurrentProject', project)
      router.push('/home')
    },
    removeCurrentProject({ commit }) {
      commit('removeCurrentProject')
    }
  }
}
