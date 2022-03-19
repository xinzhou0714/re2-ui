<template>
  <div class='project-container'>
    <el-card :body-style='bodyStyle_outer' :style='cardStyle_outer'>
      <el-row class='title-panel'>
        <el-col :span='6' class='title-left'>Projects:</el-col>
        <el-col :span='16' class='title-right'>
          <el-input v-model='searchText'></el-input>
          <el-button type='text' @click='openCreateForm'>
            <Icon icon='carbon:add-alt' color='black' height='50' />
          </el-button>
        </el-col>
      </el-row>
      <el-scrollbar ref='scroll' wrapStyle='overflow-x: hidden;'>
        <el-card
          class='test'
          v-for='item in resultList'
          :key='item.id'
          :style='cardStyle_inner'
          :body-style='bodyStyle_inner'
        >
          <el-avatar
            shape='square'
            :size='80'
            :src='item.avatar_url'
          ></el-avatar>
          <div class='project-name' style='width: 30%'>
            <el-tooltip class='item' effect='dark' placement='top'>
              <div slot='content'>{{ item.detail }}</div>
              <span>{{ item.name }}</span>
            </el-tooltip>
          </div>
          <div class='progressbar' style='width: 30%'>
            <el-progress
              :text-inside='true'
              :stroke-width='26'
              :percentage='item.percentage'
            ></el-progress>
          </div>
          <div>
            <el-button type='text' @click='removeProjectById(item.id)'>
              <Icon icon='ep:delete' color='black' height='50' />
            </el-button>
            <el-button type='text' @click='openUpdateForm(item)'>
              <Icon icon='ep:edit-pen' color='black' height='50' />
            </el-button>
            <el-button type='text' @click="$router.push('/home')">
              <Icon icon='icomoon-free:enter' color='black' height='50' />
            </el-button>
          </div>
        </el-card>
      </el-scrollbar>
    </el-card>

    <!--button for test-->
    <el-button type='primary' @click='loadProjectList(getUserId)'
    >load new project list with vuex
    </el-button
    >
    <el-button type='default' @click='removeProjectList'>reset</el-button>
    <el-button type='default' @click='test1'>log newId</el-button>

    <!--    Dialog Box-->
    <el-button type='text' @click='formVisible = true'>
      open form to add project
    </el-button>
    <el-dialog :visible.sync='formVisible'>
      <div slot='title'>
        <span v-if="formType === 'create'">create a new project</span>
        <span v-else>update this project</span>
      </div>
      <el-form :model='dataForm' ref='dataFormRef' :rules='rules'>
        <el-form-item label='name' prop='name' label-width='120px'>
          <el-input v-model='dataForm.name' autocomplete='off'></el-input>
        </el-form-item>
        <el-form-item label='detail' prop='detail' label-width='120px'>
          <el-input v-model='dataForm.detail' autocomplete='off'></el-input>
        </el-form-item>
      </el-form>
      <span slot='footer'>
        <el-button
          v-if="formType === 'create'"
          type='primary'
          @click='confirmCreate'
        >Confirm create</el-button
        >
        <el-button
          v-if="formType === 'update'"
          type='primary'
          @click='confirmUpdate'
        >Confirm update</el-button
        >
      </span>
    </el-dialog>
    <el-button type='text' @click='formVisible = true'>
      <Icon icon='ep:edit-pen' color='black' height='32' />
    </el-button>
    <img src='http://192.168.178.48:8090/file/5fa71756-1857-4ce5-bb3e-f778bdcf7a6c.jpg'>
    <el-avatar src='http://192.168.178.48:8090/file/5fa71756-1857-4ce5-bb3e-f778bdcf7a6c.jpg'></el-avatar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { Icon } from '@iconify/vue2'

export default {
  name: 'ProjectV1',
  components: {
    Icon
  },
  data() {
    return {
      searchText: '',
      // form
      formType: 'create',
      dataForm: {
        name: '',
        detail: ''
      },
      formVisible: false,
      rules: {
        name: [
          {
            required: true,
            message: 'project name is required',
            trigger: 'change'
          }
        ],
        detail: [
          {
            required: true,
            message: 'detailis required',
            trigger: 'blur'
          }
        ]
      },
      // styles
      cardStyle_outer: {
        backgroundColor: '#F5F0E5',
        fontSize: '48px'
      },
      cardStyle_inner: {
        backgroundColor: '#FFF',
        width: '90%',
        margin: '10px auto'
      },
      bodyStyle_outer: { padding: '0' },
      bodyStyle_inner: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0px',
        height: '80px',
        backgroundColor: '#FFF',
        fontSize: '24px'
      }
    }
  },
  computed: {
    ...mapGetters([
      'getProjectList',
      'getProjectListByPattern',
      'getNewId',
      'getUserId'
    ]),
    resultList() {
      return this.getProjectListByPattern(this.searchText)
    }
  },
  methods: {
    ...mapActions([
      'loadProjectList',
      'removeProjectById',
      'removeProjectList',
      'addProject',
      'updateProject',
      'setCurrentProject'
    ]),
    test1() {
      console.log('new id:', this.getNewId)
    },
    openCreateForm() {
      this.formType = 'create'
      // this.dataForm.name = ''
      // this.dataForm.detail = ''
      this.formVisible = true
      this.$refs.dataFormRef.resetFields()
    },
    openUpdateForm(item) {
      this.formType = 'update'
      this.dataForm = Object.assign({}, item)
      this.formVisible = true
    },
    confirmCreate() {
      this.$refs.dataFormRef.validate((valid) => {
        if (valid) {
          this.addProject(this.dataForm)
        }
      })
      this.formVisible = false
    },
    confirmUpdate() {
      this.updateProject(this.dataForm)
      this.formVisible = false
    }
  },
  mounted() {
    this.loadProjectList(this.getUserId)
    console.log('mounted project.vue')
  },
  unmounted() {
    console.log('unmounted project.vue')
  }
}
</script>

<style lang='scss' scoped>
.project-container {
  > .el-card {
    width: 1132px;
    margin: 100px auto;

    .title-panel {
      display: flex;
      align-items: center;
      justify-items: center;
      justify-content: center;
      line-height: 100%;
      height: 100%; // related to align-items: center;
      .title-left {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 100%; // related to align-items: center;
      }

      .title-right {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%; // related to align-items: center;
        ::v-deep .el-input__inner {
          //overrive style of input box from element-ui
          border-radius: 20px;
          // height: 45px;
        }
      }
    }

    .el-scrollbar {
      margin: 0px auto;
      padding-top: 10px;
      width: 100%;
      height: 510px;

      //.el-scrollbar__wrap {
      //  overflow-x: hidden; //only works with scoped style
      //}
    }
  }

  .el-menu.el-menu--horizontal {
    border: none; // remove border line
    margin-right: 5px;
  }

  .el-menu-item {
    padding: 0;
  }
}
</style>
