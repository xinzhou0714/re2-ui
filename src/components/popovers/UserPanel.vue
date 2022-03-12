<template>
  <div class="user-panel">
    <div class="option-item" @click="logout">Logout</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'UserPanel',
  methods: {
    ...mapActions(['logout'])
  }
}
</script>

<style lang="scss" scoped>
.option-item {
  font-size: 16px;
  padding-left: 8px;
  padding-top: 8px;
  padding-bottom: 8px;
  cursor: pointer;
}
.option-item:hover {
  font-size: 18px;
  background: #b0d6ce4d;
}
</style>
