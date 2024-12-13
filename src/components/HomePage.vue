<template>
  <div class="container">
    <!-- 用来做背景，让订单和主页切换的时候不会突然拉长 -->
    <div class="bg" />

    <!-- 导航栏 -->
    <Nav-bar v-if="!isLoading" @updateDrawer="updateDrawer"></Nav-bar>
    
    <!-- 骨架屏（虽然是假的） -->
    <Skeleton v-if="isLoading"></Skeleton>
    
    <transition name="fade" mode="out-in">
      <!-- 把组件写成二级路由 -->
      <router-view v-if="!isLoading"></router-view>
    </transition>
    
    <Footer v-if="!isLoading"></Footer>
    
    <!-- element的抽屉，购物车组件 -->
    <el-drawer title="购物车" :visible.sync="drawer" :with-header="true" @close="handleClose">
      <ShoppingCart></ShoppingCart>
    </el-drawer>
  </div>
</template>

<script>
import NavBar from './HomePage-components/NavBar.vue'
import Main from './HomePage-components/Main.vue'
import Footer from './HomePage-components/Footer.vue'
import Skeleton from './SkeletonPage.vue'
import ShoppingCart from './ShoppingCartPage.vue'
import OrderPage from './OrderPage.vue'

export default {
  name: 'HomePage',
  components: {
    'Nav-bar': NavBar,
    'Main': Main,
    'Footer': Footer,
    'Skeleton': Skeleton,
    'ShoppingCart': ShoppingCart,
    'OrderPage': OrderPage
  },
  computed: {
    currentComponent() {
      return this.$route.path === '/order' ? 'OrderPage' : 'Main';
    }
  },
  data () {
    return {
      isLoading: true,  // 默认最初加载的时候骨架屏展示
      drawer: false,  // 默认不展示购物车
    }
  },
  methods: {

    // 打开购物车抽屉组件
    updateDrawer () {
      const userId = this.$store.getters['userStore/getToken']
      if (userId === undefined){
        this.$message.error('请先登录')
        this.$router.push({ name: 'Login' })
        return
      }
      this.$router.push({ name: 'Cart' })
      this.drawer = true
    },

    // 关闭购物车
    handleClose() {
      this.$router.push({ name: 'Home' });
    }
  },

  mounted () {

    // 挂载后进行骨架屏展示
    setTimeout(() => {
      this.isLoading = false
    }, 2000);
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.bg {
  position: fixed;
  width: 100%;
  height: 100%;
  background-image: url('../assets/image/homeBg.jpg');
  z-index: -1;
}

/* 深层渲染element组件，穿透scoped */
.container >>> .el-drawer span {
  position: relative;
  left: 5px;
  font-size: 30px;
  color: rgb(0, 0, 0);
}

.container >>> .el-drawer__header {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 5px;
  padding: 10px;
  height: 5vh;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>