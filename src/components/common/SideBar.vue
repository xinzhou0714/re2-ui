<template>
  <div class="sidebar-container">
    <el-menu class="el-menu-vertical-demo" :collapse="false">
      <el-menu-item @click='$router.push("/home/dashboard")'>
        <Icon icon="bi:kanban" height="30" />
        <span slot="title">Dashboard</span>
      </el-menu-item>
      <el-menu-item @click='$router.push("/home/editor")'>
        <Icon icon="bi:table" height="30" />
        <span slot="title">Editor</span>
      </el-menu-item>
      <el-menu-item @click='$router.push("/home/tree-table")'>
        <Icon icon="bi:table" height="30" />
        <span slot="title">tree table</span>
      </el-menu-item>
      <el-menu-item @click='$router.push("/home/draft")'>
        <Icon icon="fa:paint-brush" height="30" />
        <span slot="title">Draft</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue2'
export default {
  name: 'SideBar',
  components: {
    Icon
  }
}
</script>

<style lang="scss" scoped>
.sidebar-container {
  height: 100%;
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
}
</style>
