<template>
  <el-row class="footer-container" type="flex" justify="space-between">
    <el-col ><b>Copyright:&nbsp; </b>  {{getAppAuthoer}}</el-col>
    <el-col :span='18' class='middle' >{{getAppDescription}}</el-col>
    <el-col style='justify-content: flex-end;'><b>Version:&nbsp; </b> {{getAppVersion}}</el-col>
  </el-row>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'FootBar',
  computed: {
    ...mapGetters(['getAppAuthoer', 'getAppDescription', 'getAppVersion'])
  }
}
</script>

<style lang="scss" scoped>
.footer-container {
  height: 100%;
  background-color: #f0f0f0;
  .el-col {
    height: 100%;
    display: flex;
    white-space: nowrap;
    align-items: center;
  }
  @media screen and (max-width: 900px) {
    .middle {
      display: none;
    }
  }
}
</style>
