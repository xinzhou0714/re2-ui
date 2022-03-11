<template>
  <div class="welcome">
    <el-container>
      <el-header> <HeadBar></HeadBar> </el-header>
      <el-main>
        <Project></Project>
      </el-main>
      <el-footer>
        <FootBar></FootBar>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Project from '@/components/project/index'
import HeadBar from '@/components/common/HeadBar'
import FootBar from '@/components/common/FootBar'
export default {
  name: 'Welcome',
  components: {
    Project,
    HeadBar,
    FootBar
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
  * {
    padding: 0;
    margin: 0;
  }
  .el-container {
    height: 100%;

    .el-main {
      background-color: #b9e3f3;
      color: #333;
      padding: 0;
    }
  }
}
</style>
