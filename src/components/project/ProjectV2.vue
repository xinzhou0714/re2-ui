<template>
  <div class="project-v2-container">
    <!--    tool bar-->
    <el-card>
      <b>Project list: </b>
      <el-input
        v-model="searchText"
        style="width: 60%"
        prefix-icon="el-icon-search"
      >
        <el-button
          slot="append"
          @click="handleAdd"
          icon="el-icon-circle-plus"
        ></el-button>
      </el-input>
    </el-card>
    <!--    project list -->
    <el-scrollbar>
      <ProjectItem
        v-for="item in getProjectListByPattern"
        :key="item.id"
        :project="item"
        @handleUpdate="handleUpdate"
        @submitDelete="submitDelete"
        @handleChoose='handleChoose'
      ></ProjectItem>
    </el-scrollbar>
    <!--    form for add or update project item-->
    <el-dialog :visible.sync="dialogVisible">
      <div slot="title">
        <b> {{ operation ? 'Create' : 'Update' }} </b>
      </div>
      <el-form
        :model="dataForm"
        ref="dataForm"
        label-position="left"
        label-width="120px"
      >
        <el-form-item label="Project Name:">
          <el-input v-model="dataForm.name"></el-input>
        </el-form-item>
        <el-form-item label="Description:">
          <el-input v-model="dataForm.detail"></el-input>
        </el-form-item>
        <el-form-item label="Image:">
          <el-upload
            action="sss"
            :show-file-list="false"
            :http-request="$api.project.uploadFile"
            :on-success="handleSuccessfulUpload"
          >
            <img :src="dataForm.imageUrl" class="photo" />
          </el-upload>
        </el-form-item>
        <el-form-item label="Progress:">
          <el-slider v-model="dataForm.progress" show-input></el-slider>
        </el-form-item>
      </el-form>
      <span slot="footer">
        <el-button v-if="operation" type="primary" @click="submitAdd(dataForm)"
          >Confirm</el-button
        >
        <el-button v-else type="primary" @click="submitUpdate(dataForm)"
          >Confirm</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import ProjectItem from '@/components/project/ProjectItem'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ProjectV2',
  components: { ProjectItem },
  data() {
    return {
      operation: false, // true->Add, false->Update
      dialogVisible: false, // if <el-dialog> visible
      dataForm: {
        id: null,
        name: '',
        detail: '',
        imageUrl: 'https://www.freeiconspng.com/uploads/upload-icon-30.png',
        progress: 0,
        ownerId: null,
        ownerName: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'loadProjectList',
      'removeProjectById',
      'addProject',
      'updateProject',
      'setCurrentProject'
    ]),
    // callback functions:
    handleAdd() {
      this.operation = true
      // reset form data
      this.dataForm = {
        id: null,
        name: '',
        detail: '',
        imageUrl: 'https://www.freeiconspng.com/uploads/upload-icon-30.png',
        progress: 0,
        ownerId: this.getUserId,
        ownerName: this.getNickname
      }
      this.dialogVisible = true
    },
    handleUpdate(record) {
      this.operation = false
      Object.assign(this.dataForm, record)
      this.dialogVisible = true
    },
    submitAdd(dataForm) {
      this.addProject(dataForm)
      this.dialogVisible = false
    },
    submitUpdate(dataForm) {
      this.updateProject(dataForm)
      this.dialogVisible = false
    },
    submitDelete(id) {
      this.removeProjectById(id)
    },
    handleSuccessfulUpload(res, file) {
      if (res.data.status === 10000) {
        // refresh image after upload
        this.dataForm.imageUrl = res.data.content.url
      }
    },
    handleChoose(dataForm) {
      this.setCurrentProject(dataForm)
    }
  },
  computed: {
    ...mapGetters([
      'getUserId',
      'getProjectList',
      'getNickname',
      'getProjectListByPattern'
    ]),
    searchText: {
      get() {
        // get state in module project
        return this.$store.state.project.projectSearchText
      },
      set(val) {
        this.$store.commit('setProjectSearchText', val)
      }
    }
  },
  mounted() {
    this.loadProjectList(this.getUserId)
    console.log('mounted project.vue')
  }
}
</script>

<style lang="scss">
.project-v2-container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  > .el-card {
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    > .el-card__body {
      padding: 0;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
    }
  }

  .el-scrollbar {
    flex-grow: 1;

    .el-scrollbar__wrap {
      overflow-x: auto;
      height: calc(100% + 20px); // 20px to hidden native scroll bar
      .el-scrollbar__view {
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
      }
    }
  }
  /*style for dialog*/
  .el-dialog__wrapper {
    .el-dialog {
      width: 50%;
    }
    @media screen and (max-width: 900px) {
      .el-dialog {
        width: 90%;
      }
    }

    .photo {
      width: 120px;
      height: 120px;
      object-fit: cover;
      margin-top: 10px;
    }
  }
}
</style>
