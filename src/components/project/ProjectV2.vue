<template>
  <div class="project-v2-container">
    <el-card>
      <b>Project list: </b>
      <el-input style='width: 60%'></el-input>
    </el-card>
    <el-scrollbar>
      <ProjectItem></ProjectItem>
      <ProjectItem></ProjectItem>
      <ProjectItem></ProjectItem>
      <ProjectItem></ProjectItem>
      <ProjectItem></ProjectItem>
    </el-scrollbar>
  </div>
</template>

<script>
import ProjectItem from '@/components/project/ProjectItem'
export default {
  name: 'ProjectV2',
  components: { ProjectItem },
  data() {
    return {}
  }
}
</script>

<style lang="scss">
.project-v2-container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  > .el-card{
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    >.el-card__body{
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
}
</style>
