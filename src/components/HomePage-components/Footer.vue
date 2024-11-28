<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>关于我们</h3>
        <p>我们是一家致力于提供最佳购物体验的公司，拥有丰富的商品选择和优质的服务。</p>
      </div>
      <div class="footer-section">
        <h3>快速链接</h3>
        <ul>
          <li><a href="#">首页</a></li>
          <li><a href="#">产品</a></li>
          <li><a href="#">联系我们</a></li>
          <li><a href="#">隐私政策</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>联系我们</h3>
        <p>邮箱: support@example.com</p>
        <p>电话: 123-456-7890</p>
        <div class="social-media">
          <a href="#" class="social-icon"><i class="icon-font icon-hulianwang"></i></a>
          <a href="#" class="social-icon"><i class="icon-font icon-xinfeng"></i></a>
          <a href="#" class="social-icon"><i class="icon-font icon-dianhua"></i></a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2023 桂林电子科技大学花江慧谷1205实验室. 保留所有权利.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.icon-font {
  font-family: "iconfont" !important;
  font-size: 30px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.footer {
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #302f2f, #252424);
  color: #fff;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.footer-content {
  display: flex;
  justify-content: space-between;
}

.footer-section {
  flex: 1;
  padding: 10px;
  border: 0px solid rgba(63, 60, 60, 0.2);
  border-radius: 8px;
  transition: transform 0.3s;
}

.footer-section h3 {
  margin-bottom: 10px;
  font-family: 'Arial', sans-serif;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin: 5px 0;
}

.footer-section a {
  color: #ebe1e6;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-bottom {
  text-align: center;
  margin-top: 10px;
}

.social-media {
  margin-top: 10px;
}

.social-icon {
  margin-right: 10px;
  font-size: 20px; 
  color: #ffb3d9;
  transition: transform 0.3s;
}

.social-icon:hover {
  transform: scale(1.2);
}
</style>
