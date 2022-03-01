<template>
  <div class="welcome">Welcome</div>
</template>

<script>
export default {
  name: 'Welcome',
  data() {
    return {
      msg: 'aaaa'
    }
  },
  methods: {
    test() {
      this.$api.project.getList().then((res) => {
        this.msg = res.data.content
      })
    }
  }
}
</script>

<style scoped></style>
