<template>
    <div class="good-list">
        <div class="product" v-for="product in products" :key="product.id" @click="showModal(product)">
            <img :src="`http://10.60.81.45:8080/${product.pthumbnail}`" alt="商品图片" class="product-image" />
            <h3 class="product-name">{{ product.name }}</h3>
            <p class="product-price">价格: ¥{{ product.price1 }}</p>
            <i class="icon-font icon-tianjia add-icon" @click.stop="addToCart(product)"></i> <!-- 阻止点击事件传播 -->
        </div>
        
        <!-- 模态框，显示商品详情 -->
        <Goods-info-modal v-if="isModalVisible" :selectedProduct="selectedProduct" :isVisible="isModalVisible" @close="isModalVisible = false"  />
    </div>
</template>

<style scoped>
.good-list {
  min-height: 100vh; /* 页面最小高度 */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20vw, 1fr));
  grid-auto-rows: minmax(20vh, 30vh);
  gap: 10px; /* 网格的间距 */
  flex: 0.6;
  padding: 16px;
}

.product {
  background-color: #fff;
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  position: relative; /* 为定位图标做准备 */
}

.product:hover {
  transform: translateY(-5px);
}

.product-image {
  width: 30%;
  height: 50%;
  border-radius: 4px;
  object-fit: cover;
}

.product-name {
  font-size: 1.2em;
  margin: 10px 0;
}

.product-price {
  color: #ff4d4d;
  font-weight: bold; 
}

.icon-font {
  font-family: "iconfont" !important;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.add-icon {
  position: absolute; 
  bottom: 30px; 
  right: 50px; 
  font-size: 25px;
  color: #c2185b;
  cursor: pointer;
  transition: transform 0.2s; 
}

.add-icon:hover {
  transform: scale(1.3); 
}
</style>

<script>
import { reqGoodsList } from '../../api/good'
import { reqAddCart } from '../../api/cart'
import GoodsInfoModal from './GoodsInfoModal.vue'
export default {
    name: 'GoodsList',
    data() {
        return {
            products: [],
            isModalVisible: false, // 控制模态框显示
            selectedProduct: {}, // 存储选中的商品
            number: 1
        }
    },
    components: {
        GoodsInfoModal
    },
    methods: {

        // 获取商品列表并存储到vuex和localStore中
        async getAndSaveGoodsList() {      
            // 先请求数据
            const { data } = await reqGoodsList()

            // 存储到vuex和localStore中
            this.products = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : []
            this.$store.commit('goodStore/setGoodsList', data)

            this.products = data
        },

        // 添加商品到购物车
        async addToCart(product) {
            if (!this.$store.getters['userStore/getToken']) {
                this.$message.error('请先登录')
                return
            }
            const userId = this.$store.getters['userStore/getToken']
            const { data } = await reqAddCart(userId, product, this.number)
            this.$store.commit('cartStore/setCartList', data)
            this.$message.success('添加成功')
        },

        // 显示商品详情
        showModal(product) {
            this.selectedProduct = product
            this.isModalVisible = true
        }
    },
    created() {
      this.getAndSaveGoodsList();   
    }
}
</script>
