<template>
  <div class="main">
    <div class="recommend-container">
    <Goods-swiper></Goods-swiper>
    </div>
    <Goods-list></Goods-list>
  </div>

</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  margin: 30px; 
  padding: 15px;
  /* border: 3px solid #252524; */
  border-radius: 10px;
  /* box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);  */
}

.recommend-container {
  display: flex;
  flex: 0.4;
  flex-direction: row;
  border-radius: 10px;
  overflow: hidden;
}
</style>

<script>
import GoodsSwiperVue from './GoodsSwiper.vue'
import GoodsList from './GoodsList.vue'
export default {
    name: "Main",
    components: {
        GoodsSwiper: GoodsSwiperVue,
        GoodsList: GoodsList,
    },
}
</script>
