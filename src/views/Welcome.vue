<template>
  <div class='welcome'>
    <el-button @click='testAxios' type='primary' icon='el-icon-edit'>
      Testing Axios
    </el-button
    >
    <el-button @click='testMock1' type='primary' icon='el-icon-edit'>
      Testing Mock1
    </el-button
    >
    <el-button @click='testMock2' type='primary' icon='el-icon-edit'>
      Testing Mock2
    </el-button
    >
    <el-button @click='testMock3' type='primary' icon='el-icon-edit'>
      Testing Mock3
    </el-button
    >
    <el-button @click='resetInfo' type='primary' icon='el-icon-edit'>
      Reset
    </el-button
    >
    <el-button type='primary' icon='el-icon-share'></el-button>
    <el-button type='primary' icon='el-icon-delete'></el-button>
    <el-button type='primary' icon='el-icon-search'>Search</el-button>
    <el-button type='primary'
    >Upload<i class='el-icon-upload el-icon-right'></i
    ></el-button>
    <br />
    <pre>{{ info }}</pre>
  </div>
</template>

<script>
import axios from 'axios'

if (process.env.NODE_ENV === 'dev-local-mock') {
  require('@/mock/mock.js')
}

export default {
  name: 'Welcome',
  data() {
    return {
      info: null
    }
  },
  methods: {
    testAxios() {
      axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then((response) => (this.info = response))
    },
    testMock1() {
      axios
        .get('http://localhost:8900/mock/test1')
        .then((response) => (this.info = response))
    },
    testMock2() {
      axios
        .get('http://localhost:8900/mock/test2')
        .then((response) => (this.info = response))
    },
    testMock3() {
      axios
        .get('http://localhost:9999/project/list')
        .then((response) => (this.info = response))
    },
    resetInfo() {
      this.info = null
    }
  }
}
</script>

<style scoped></style>
