<template>
  <el-row class="footer-container" type="flex" justify="space-between">
    <el-col :span="9"><b>Copyright:&nbsp; </b>  {{getAppAuthoer}}</el-col>
    <el-col >{{getAppDescription}}</el-col>
    <el-col :span="6" style='justify-content: flex-end;'><b>Version:&nbsp; </b> {{getAppVersion}}</el-col>
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
    align-items: center;
  }
}
</style>
