<template>
    <div class="swiper-container">
        <div class="block">
            <el-carousel trigger="click" height="100%">
                <el-carousel-item v-for="(product, index) in products" :key="index">
                    <div class="carousel-item">
                        <img :src="`http://10.60.81.45:8080/${product.pthumbnail}`" alt="商品图片" class="product-image" />
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GoodsSwiper',
    data() {
        return {
            products: []
        }
    },
    methods: {
        getProducts() {
            const storedProducts = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
            this.products = storedProducts.slice(0, 5);  // 只取前5个产品
        }
    },
    created() {
        this.getProducts()
    }
}
</script>

<style lang='css' scoped>
.swiper-container {
    display: flex;
    flex: 1;
    /* height: 100%; */
    height: 40vh;
    /* padding: 15px; */
    margin: 15px;
    /* border: 2px solid #000000; */
    margin-bottom: 10px;
    border-radius: 10px;
    overflow: hidden;
}

.block {
    width: 100%;
    height: 100%;
}

.el-carousel {
    height: 100%;
}

.el-carousel-item {
    height: 100%;
}

.carousel-item {
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.carousel-item img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
}

 /* 指示器 */
:deep(.el-carousel__indicator) {
    width: 30px; 
    height: 10px;
    margin: 0 4px;
}
</style>
