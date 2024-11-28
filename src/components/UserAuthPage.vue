<template>
    <div class="user-auth-page">
        <div class="container">
            <div class="left-box">
                <transition name="scale">
                    <login-component-vue v-if="isLoginActive"></login-component-vue>
                </transition>
            </div>
            <div class="right-box">
                <transition name="scale">
                    <register-component-vue v-if="!isLoginActive"></register-component-vue>
                </transition>
            </div>
            <transition name="slide">
                <div class="slide-box" :class="getSlideBoxClass">
                    <button @click="toggleAuth" class="slide-btn" :class="{ 'slide-left': !isLoginActive, 'slide-right': isLoginActive }">
                        <i class="icon-font" :class="isLoginActive ? 'icon-zhuce' : 'icon-denglu'"></i>
                        {{ isLoginActive ? 'Register' : 'Login' }}
                    </button>
                </div>
            </transition>
        </div>
    </div>
</template>

<style scoped>
@import '../assets/style/UserAuthPage.css';

.icon-font {
  font-family: "iconfont" !important;
  font-size: 30px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* 添加从小到大的过渡效果 */
.scale-enter, .scale-leave-to {
  opacity: 0;
  transform: scale(0.8); /* 起始时缩小到80% */
}
.scale-enter-active, .scale-leave-active {
  transition: opacity 1s, transform 1s;
}
.scale-leave-active {
  transform: scale(1); /* 离开时恢复到100% */
}
</style>

<script>
import loginComponentVue from './userAuthPage-components/loginComponent.vue'
import registerComponentVue from './userAuthPage-components/registerComponent.vue'

export default {
    name: 'UserAuthPage',
    components: {
        loginComponentVue,
        registerComponentVue
    },
    data() {
        return {
            isLoginActive: true
        };
    },
    computed: {
        getSlideBoxClass() {
            return this.isLoginActive ? 'right' : 'left';
        }
    },
    methods: {
        toggleAuth() {
            this.isLoginActive = !this.isLoginActive;
        }
    }
}
</script>