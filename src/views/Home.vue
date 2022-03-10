<template>
  <div class="home">
    <el-container>
      <el-header><HeadBar></HeadBar></el-header>
      <el-container>
        <SideBar></SideBar>
        <el-main><router-view></router-view></el-main>
      </el-container>
      <el-footer><FootBar></FootBar></el-footer>
    </el-container>
  </div>
</template>

<script>
import HeadBar from '@/components/common/HeadBar'
import SideBar from '@/components/common/SideBar'
import FootBar from '@/components/common/FootBar'

export default {
  name: 'Home',
  components: {
    HeadBar,
    SideBar,
    FootBar
  }
}
</script>
<style lang="scss" scoped>
.home {
  height: 100%;
  * {
    padding: 0;
    margin: 0;
  }

  .el-container {
    height: 100%;
  }
}
</style>
