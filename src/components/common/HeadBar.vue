<template>
  <el-row class="header-container" type="flex" justify="space-between">
    <el-col :span="9" class="left-panel">
      <img src="@/assets/TU-Berlin-Logo.svg" alt="Logo" />
    </el-col>
    <el-col :span="9" class="right-panel">
      <el-menu mode="horizontal" background-color="#f0f0f0">
        <!--        theme picker-->
        <el-menu-item>
          <Icon icon="icon-park-outline:theme" height="30" />
        </el-menu-item>
        <!--        language selector-->
        <el-menu-item>
          <Icon icon="fa:language" width="30px" height="30px" />
        </el-menu-item>
        <!--        notifications-->
        <el-menu-item>
          <el-badge :value="4" :max="99" class="badge" type="warning">
            <Icon icon="bxs:bell" width="30px" height="30px" />
          </el-badge>
        </el-menu-item>
        <!--        user information-->
        <el-menu-item>
          <span>
            {{ getNickname }}
            <el-avatar :src="getAvatarUrl"></el-avatar>
          </span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
import { mapGetters } from 'vuex'
import { Icon } from '@iconify/vue2'
export default {
  name: 'HeadBar',
  components: {
    Icon
  },
  computed: {
    ...mapGetters(['getNickname', 'getAvatarUrl'])
  }
}
</script>

<style lang="scss" scoped>
.header-container {
  background-color: #f0f0f0;
  height: 100%;
  .el-row {
    height: 100%;
  }
  img {
    height: 100%;
  }
  .right-panel {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%; // related to align-items: center;
  }
  .badge {
    line-height: 18px;
  }
  .el-menu--horizontal {
    border: none;
    > .el-menu-item {
      padding: 0 10px;
    }
  }
}
</style>
