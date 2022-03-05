<template>
  <div class="welcome">
    <el-container>
      <el-header>
        <el-col :span="12" class="left-panel">
          <img src="../assets/TU-Berlin-Logo.svg" alt="Logo" />
        </el-col>
        <el-col :span="12" class="right-panel">
          <Icon icon="bxs:bell" width="30px" height="30px" />
          <Icon icon="ant-design:fullscreen-outlined" width="30px" height="30px" />
          <Icon icon="fa:language" width="30px" height="30px" />
          <el-avatar :src="user.avatar_url"></el-avatar>
        </el-col>
      </el-header>
      <el-main>
        <span>Main</span>
      </el-main>
      <el-footer>
        <span><b>Copyright </b> @Xin Zhou</span>
        <span>{{ description }} </span>
        <span>Version: {{ version }}</span>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue2'
export default {
  name: 'Welcome',
  components: {
    Icon
  },
  data() {
    return {
      user: {
        nickname: '',
        avatar_url: ''
      }
    }
  },
  computed: {
    description() {
      return this.$store.state.app.appDescription
    },
    version() {
      return this.$store.state.app.appVersion
    }
  }
}
</script>

<style lang="scss" scoped>
.welcome {
  height: 100%;
  .el-container {
    padding: 0;
    margin: 0;
    height: 100%;

    .el-header {
      background-color: #f0f0f0;
      color: #333;
      text-align: center;
      line-height: 60px;
      .left-panel {
        display: flex;
        align-items: center;
        justify-items: center;
        justify-content: flex-start;
        height: 100%; // related to align-items: center;
        img {
          width: 60px;
        }
      }
      .right-panel {
        display: flex;
        align-items: center;
        justify-items: center;
        justify-content: flex-end;
        height: 100%; // related to align-items: center;
      }
    }
    .el-main {
      background-color: #b9e3f3;
      color: #333;
      padding: 0;
    }
    .el-footer {
      background-color: #f0f0f0;
      color: #333;
      text-align: center;
      line-height: 60px;
      display: flex;
      align-items: center;
      justify-items: center;
      justify-content: space-between;
    }
  }
}
</style>
