<template>
    <div class="container">
        <div class="title-container">
            <h1>Login Page</h1>
        </div>
        <div class="login-form">
            <form @submit.prevent="login" class="form">
                <div class="Group">
                    <label for="Username"><i class="icon-font icon-yonghuming"></i> Username</label>
                    <input placeholder="请输入用户名" v-model="username" id="Name" type="text">
                </div>
                <div class="Group">
                    <label for="Password"><i class="icon-font icon-ziyuanxhdpi"></i> Password</label>
                    <input placeholder="请输入密码" v-model="password" id="Password" type="password">
                </div>
                <div class="Group">
                    <button type="submit" class="btn">Log in</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { reqLogin } from '../../api/user'

export default {    
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
      async login() {
        const {data,status} = await reqLogin(this.username, this.password)
        if (data === 'invalid' && status === 200) {
          this.$message.error('登录失败，请检查用户名或密码')
        } else {
          this.$message.success('登录成功')
        
          // 登录成功后，将token存入store和localStorage，并跳转到首页
          this.$store.commit('userStore/setToken', data)
          localStorage.setItem('token', data)
          this.$router.push('/')
        }
      }
    }
}
</script>

<style scoped>
@import '../../assets/style/LoginPageComponent.css';
.icon-font {
  font-family: "iconfont" !important;
  font-size: 25px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>