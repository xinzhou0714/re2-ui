<template>
  <div class='welcome'>
    <el-row>
      <el-button @click='testAxios' type='primary'> Testing Axios</el-button>
      <el-button @click='testMock1' type='primary'> Testing Mock1</el-button>
      <el-button @click='testMock2' type='primary'> Testing Mock2</el-button>
      <el-button @click='testMock3' type='primary'> Testing Mock3</el-button>
      <el-button @click='testLogin' type='primary'> Testing login</el-button>
      <el-button @click='testWrongLogin' type='primary'>
        Testing wrong login
      </el-button>
    </el-row>

    <el-row>
      <el-button @click='testPostMock'> test post mock</el-button>
      <el-button @click='testPostMock2'> test post mock2</el-button>
    </el-row>
    <el-button @click='resetInfo' type='primary'> Reset</el-button>
    <br />
    <pre>{{ info }}</pre>
  </div>
</template>

<script>
import axios from 'axios'
import { getList } from '@/api/project'

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
      getList({}).then((res) => {
        this.info = res.data.content
      })
    },
    testLogin() {
      this.$api.user.Login('tester1', '123456').then((res) => {
        this.info = res
      })
    },
    testWrongLogin() {
      this.$api.user.Login('tester1', '123459').then((res) => {
        this.info = res
      })
    },
    testPostMock() {
      this.$http.post('/test/post', {
        ss: 1,
        ss2: 2
      }).then(
        (res) => {
          this.info = res
        }
      )
    },
    testPostMock2() {
      this.$http.post('/test/post', {
        ss: 2,
        ss2: 2
      }).then(
        (res) => {
          this.info = res
        }
      )
    },
    resetInfo() {
      this.info = null
    }
  }
}
</script>

<style scoped></style>
