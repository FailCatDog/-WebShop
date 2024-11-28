<template>
  <div class="not-found">
    <div class="background"></div>
    <h1>404</h1>
    <h2>页面未找到</h2>
    <p>抱歉，您请求的页面似乎不存在。</p>
    <router-link to="/">返回首页</router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFoundPage'
}
</script>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
  z-index: 0;
}

h1 {
  font-size: 100px;
  margin: 0;
  animation: bounce 2s infinite;
  z-index: 1;
}

h2 {
  font-size: 24px;
  margin: 10px 0;
  z-index: 1;
}

p {
  font-size: 18px;
  z-index: 1;
}

a {
  margin-top: 20px;
  font-size: 16px;
  color: #ffcc00;
  text-decoration: none;
  transition: color 0.3s;
  z-index: 1;
}

a:hover {
  color: #ffffff;
}

/* 动画效果 */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}

/* 添加水波效果 */
@keyframes wave {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-10px);
  }
  100% {
    transform: translateX(0);
  }
}

/* 添加图像元素 */
.not-found::before {
  content: '';
  position: absolute;
  width: 200px;
  height: 200px;
  background: url('https://cdn-icons-png.flaticon.com/512/2399/2399471.png') no-repeat center center / cover;
  top: 200px;
  left: calc(50% - 100px);
  animation: wave 2s infinite;
  z-index: 0;
}
</style>
