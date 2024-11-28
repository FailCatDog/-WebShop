<template>
    <div class="container" :key="componentKey">
        <div class="title-container">
            <h1>Register Page</h1>
        </div>
        <div class="login-form">
            <form @submit.prevent="register" class="form">
                <div class="Group">
                    <label for="Username">Username</label>
                    <input placeholder="请输入用户名" v-model="username" id="Username" type="text" required>
                </div>
                <div class="Group">
                    <label for="Password">Password</label>
                    <input placeholder="请输入密码" v-model="password" id="Password" type="password" required>
                </div>
                <div class="Group">
                    <button class="btn" type="submit">Register</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { reqRegister } from '../../api/user'
export default {    
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
      async register() {
        const { status, statusText, data } = await reqRegister(this.username, this.password)

        if (status === 200 && statusText === 'OK') {
          if (data === 'isexist') {
            alert('该用户已存在！')
            this.username = ''
            this.password = ''
        } else {
            window.location.reload();
          }
        }

        this.componentKey++
      }
    }
}
</script>

<style scoped>
@import '../../assets/style/LoginPageComponent.css';
</style>