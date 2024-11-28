<template>
    <div class="modal" @click.self="closeModal">
        <div class="modal-content">
            <span class="close" @click="closeModal">&times;</span>
            <h2>{{ selectedProduct.name }}</h2>
            <img :src="`http://10.60.81.45:8080/${selectedProduct.pthumbnail}`" alt="商品图片" class="modal-image" />
            <p style="color:red;font-weight:bold;font-size:20px">价格: ¥{{ selectedProduct.price1 }}</p>
            <div class="quantity-container">
                <label for="quantity">数量:</label>
                <input type="text" id="number" v-model="number" min="1" />
            </div>
            <button @click="addToCart()" class="add-to-cart-button">添加到购物车</button>
        </div>
    </div>
</template>

<style scoped>
.modal {
    display: flex;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
}

.modal-content {
    background-color: #fff;
    padding: 50px;
    border-radius: 10px;
    width: 30vw;
    height: 45vh;
    max-width: 90%;
    text-align: center;
    position: relative;
}

.modal-content img {
    width: 200px;
    height: 200px;
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

.modal-image {
    width: 100%;
    height: auto;
}

/* 添加样式调整 */
.quantity-container {
    margin: 20px 0; /* 增加上下间距 */
}

.quantity-container label {
    margin-right: 10px; /* 标签和输入框的间距 */
}

.quantity-container input {
    width: 50px; /* 输入框的宽度 */
    text-align: center; /* 输入框内容居中 */
}

.add-to-cart-button {
    background-color: #c2185b; /* 按钮背景颜色 */
    color: white; /* 按钮文字颜色 */
    padding: 10px 20px; /* 内边距 */
    border: none; /* 去掉边框 */
    border-radius: 5px; /* 圆角 */
    cursor: pointer; /* 鼠标指针 */
    font-size: 16px; /* 字体大小 */
}

.add-to-cart-button:hover {
    background-color: #a5003e; /* 悬停时的背景颜色 */
}
</style>

<script>
import { reqAddCart, reqCartList } from '../../api/cart'
export default {
    name: 'Modal',
    data() {
        return {
            number: 1,
        };
    },
    props: {
        selectedProduct: {
            type: Object,
            required: true
        },
        isVisible: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        closeModal() {
            this.$emit('close'); // 触发关闭事件
        },
        async addToCart() {
            const userId = this.$store.getters['userStore/getToken']
            const { data } = await reqAddCart(userId, this.selectedProduct, this.number)
            this.$store.commit('cartStore/setCartList', data)
            this.closeModal()
            this.$message.success('添加成功')
        }
    }
}
</script>
