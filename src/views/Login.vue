<template>
  <div class="login">
    <div class="login-wrapper">
      <div class="login-header">Prototyp</div>
      <div class="login-panel">
        <span>Sign in</span>
        <el-form ref="loginForm" :model="loginForm" :rules="rules">
          <el-form-item prop="username">
            <el-input v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="loginForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              round
              :style="{ width: '100%' }"
              type="primary"
              :loading="loading"
              @click="onSubmit"
              >Login</el-button
            >
          </el-form-item>
        </el-form>
      </div>
      <div class="login-header"></div>
    </div>
  </div>
</template>

<script>
import md5 from 'js-md5'
import { mapActions } from 'vuex'
export default {
  name: 'Login',
  data() {
    return {
      loading: false,
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: 'Please enter username',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: 'Please enter password',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    ...mapActions(['login']),
    onSubmit() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          // prepare data
          const userData = {
            username: this.loginForm.username,
            password: md5(this.loginForm.password) // password can not be transfered with plaintext
          }
          // set  button state to loading
          this.loading = true
          // call login action in vuex
          this.login(userData).then((successed) => {
            if (successed) {
              this.$router.push('/')
            } else {
              this.loading = false
            }
          })
        } else {
          console.log('error submit')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  height: 100%;
  background-image: url('~@/assets/huawei_wallpaper.png');
  overflow: hidden;
  position: relative;

  background-size: cover;

  .login-wrapper {
    position: relative;
    transform: translateY(-50%);
    top: 50%;
    width: 450px;
    height: auto;
    margin: 0 auto;

    .login-header {
      height: 70px;
      font-size: 64px;
      color: white;
      text-align: center;
      margin: 20px 0px;
    }

    .login-panel {
      text-align: center;
      font-size: 64px;
      background-color: #fffa;
      padding: 30px 40px;
      border-radius: 30px;
      ::v-deep .el-input__inner {
        //overrive style of input box from element-ui
        border-radius: 20px;
        height: 45px;
      }
    }
  }

  // adapt to smartphone
  @media screen and (max-width: 900px) {
    .login-wrapper {
      position: relative;
      transform: translateY(-50%);
      top: 50%;
      width: 310px;
      height: auto;
      margin: 0 auto;
    }
  }
}
</style>
