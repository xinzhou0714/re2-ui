<template>
  <div class='welcome'>
    <el-button @click='testAxios'  type='primary' icon='el-icon-edit'> Testing Axios</el-button>
    <el-button @click='resetInfo'  type='primary' icon='el-icon-edit'> Reset</el-button>
    <el-button type='primary' icon='el-icon-share'></el-button>
    <el-button type='primary' icon='el-icon-delete'></el-button>
    <el-button type='primary' icon='el-icon-search'>Search</el-button>
    <el-button type='primary'>Upload<i class='el-icon-upload el-icon-right'></i></el-button>
    <br>
    {{ info }}
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Welcome',
  data() {
    return {
      info: null
    }
  },
  methods: {
    testAxios() {
      axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => (this.info = response))
    },
    resetInfo() {
      this.info = null
    }
  }
}
</script>

<style scoped>

</style>
