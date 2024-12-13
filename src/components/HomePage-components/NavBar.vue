<template>
  <div class="navbar">
    <div class="logo">
      <img src="@/assets/image/new.png" alt="Logo">
    </div>
    <div class="navbar-link">
      <ul>
        <li class="link-item" :class="{ active: activeLink === 'home' }" @click="handleLinkClick('main')">
          <i class="icon-font icon-shouye"></i>
          <span class="text">首页</span>
        </li>
        <li class="link-item" :class="{ active: activeLink === 'category' }" @click="handleLinkClick('category')">
          <i class="icon-font icon-fenlei"></i>
          <span class="text">分类</span>
        </li>
        <li class="link-item" :class="{ active: activeLink === 'order' }" @click="handleLinkClick('order')">
          <i class="icon-font icon-dingdan"></i>
          <span class="text">订单</span>
        </li>
      </ul>
    </div>
    <div class="search-bar">
      <Search-bar></Search-bar>
    </div>
    <div class="user-info">
      <i class="icon-font icon-wode cart-icon" @click="isLogin"></i>
      <i class="icon-font icon-gouwuche cart-icon" @click="goToShoppingCart"></i>
    </div>
  </div>
</template>

<script>
import SearchBar from './SearchBar.vue'
import { reqCartList } from '../../api/cart'

export default {
  name: "NavBar",
  components: {
    'Search-bar': SearchBar,
  },
  data() {
    return {
      activeLink: 'home', // 默认激活的链接
    }
  },
  methods: {
    // 处理标签的点击
    handleLinkClick(link) {
      if (link === 'main'){
        this.activeLink = 'home'
      }else {
        this.activeLink = link
      }
      
      if (link === 'category') return
      this.$router.push(`/home/${link}`)
      
    },

    // 跳转到购物车
    goToShoppingCart() {
      this.$emit('updateDrawer')
    },

    // 获取购物车的数据
    async getCartList() {
      const userId = this.$store.getters['userStore/getToken']
      const { data } = await reqCartList(userId)
      this.$store.commit('cartStore/setCartList', data)
    },

    // 判断是否登录
    isLogin() {
      if(!localStorage.getItem('token')){
        this.$router.push('/login')
      }
    }
  },
  
  // 页面加载完成
  mounted() {
    // 挂载的时候获取购物车的数据
    this.getCartList()

    // 根据当前路由设置 activeLink
    const currentPath = this.$route.path; // 获取当前路径
    if (currentPath.includes('category')) {
      this.activeLink = 'category';
    } else if (currentPath.includes('order')) {
      this.activeLink = 'order';
    } else {
      this.activeLink = 'home';
    }
  }
}
</script>

<style scoped>
.icon-font {
  font-family: "iconfont" !important;
  font-size: 24px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.navbar {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: #ffffff;
    overflow: hidden;
    border: 1px solid #585855;
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
    
    /* 设置为 sticky 粘性的 */
    position: sticky;
    top: 0;
    
    margin: 10px;
    border-radius: 50px;
    z-index: 1000; /* 在其它内容之上 */
}

.logo {
    display: flex;
    flex: 0.3;
    height: 8vh;
}

.logo img {
    width: 100%;
    height: auto;
    object-fit: cover;
    margin-left: 5%;
    margin-bottom: 1%;
}

.navbar-link {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 0.4;
  margin-left: 5%;
}

.navbar-link ul {
  list-style-type: none;
  padding: 0; 
  margin: 0; 
  display: flex; 
}

.link-item {
    display: flex;
    align-items: center; 
    padding: 8px 12px;
    cursor: pointer;
    flex: 1;
    font-size: 16px;
    font-weight: bold;
    color: #8b4513;
    position: relative;
}

.link-item i {
    margin-right: 6px;
    color: #8b4513;
}

.link-item .text {
    writing-mode: horizontal-tb;
}

/* 鼠标悬停伪类 */
.link-item:hover {
    background-color: #e7e6e0; 
}

.link-item.active {
    background-color: transparent;  /* 设置选中的时候背景色为透明 */
}

.link-item.active::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 100%;
    background-color: #8b4513;
    transition: width 0.3s;
}

.search-bar {
    display: flex;
    flex: 0.3;
    align-items: center;
}

.user-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: 0.1;
    justify-content: center;
}

.user-info i {
    font-size: 40px;
    margin-right: 10px;
    color: #142194; 
    margin-left: 10%;
}

.cart-icon {
    cursor: pointer;
    transition: transform 0.2s;
}

.cart-icon:hover {
    transform: scale(1.2);
}

/* 响应式 */
@media (max-width: 768px) {
    .navbar {
        flex-direction: column;
        align-items: center;
    }
    
    .navbar-link {
        margin: 10px 0;
        flex: 1;
    }
    
    .search-bar {
        flex: 1;
    }
    
    .user-info {
        flex: 1;
        justify-content: center;
    }
}
</style>
