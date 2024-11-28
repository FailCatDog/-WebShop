<template>
  <div class="skeleton-homepage">
    <div class="skeleton-header"></div>
    <div class="skeleton-banner"></div>
    <div class="skeleton-product-list">
      <div v-for="n in 20" :key="n" class="skeleton-product-card"></div> <!-- 增加到 20 个产品卡片 -->
    </div>
    <div class="skeleton-footer"></div> <!-- 添加页脚 -->
  </div>
</template>

<style scoped>
.skeleton-homepage {
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.skeleton-header {
  height: 80px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  animation: shimmer 1.5s infinite;
  margin-bottom: 15px;
  border-radius: 50px;
}

.skeleton-banner {
  height: 400px; 
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  animation: shimmer 1.5s infinite;
  margin-bottom: 15px;
  border-radius: 10px;
}

.skeleton-product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
}

.skeleton-product-card {
  flex: 1 1 calc(20% - 10px);
  height: 200px; 
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  animation: shimmer 1.5s infinite;
  margin-bottom: 15px;
  border-radius: 5px;
}

.skeleton-footer {
  height: 150px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  animation: shimmer 1.5s infinite;
  margin-top: 15px;
  border-radius: 5px;
}

@keyframes shimmer {
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
}
</style>
