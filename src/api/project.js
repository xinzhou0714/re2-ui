import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/project/list',
    method: 'get',
    params
  })
}

/*
 * Get project list by owner id
 * @param {number} uid - user id of project owner
 * */
export function loadProjectList(uid) {
  return request.get('/project/list/' + uid)
}

/*
 *  add new project into database
 * */
export function addProject(formData) {
  return request.post('/project/add', formData)
}

export function updateProject(formData) {
  return request.post('/project/update', formData)
}

export function deleteProject(id) {
  return request.delete('/project/delete/' + id)
}

/*
 *  function to override default upload-method of component <el-upload>
 * */
export function uploadFile(option) {
  const formData = new FormData()
  formData.append('file', option.file)
  return request.post('/project/upload-file', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
