import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'WelCome',
    redirect: '/home', 
  },
  {
    path: '/home',
    name: 'Home',
    redirect: '/home/main',
    component: () => import('../components/HomePage.vue'),
    children: [
      {
        path: '/home/order',
        name: 'Order',
        component: () => import('../components/OrderPage.vue')
      },
      {
        path: '/home/main',
        name: 'Main',
        component: () => import('@/components/HomePage-components/Main.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/UserAuthPage.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('../components/NotFoundPage.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../components/HomePage.vue')
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

// 添加全局前置守卫
router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters['userStore/getToken'];  //注意，前置守卫的上下文是 router，不是 vue 实例
  const localToken = localStorage.getItem('token');

  if (localToken) {
    store.commit('userStore/setToken', localToken);
    next()
    return
  }

  if ((to.path === '/login' || to.path === '/home') && to.path !== from.path) {
    next()
  } else if (isAuthenticated && to.path !== from.path) {
    next()
  } else {
    next({ name: 'Login' })
  }
})

export default router