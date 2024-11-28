<template>
    <div class="shoppingCart-page">
        <div class="shoppingCart-container">
            <ul>
                <transition-group name="slide-fade" tag="ul">
                    <li v-for="item in cartItems" :key="item.cardid" class="cart-item">
                        <div class="item-container">
                            <el-switch v-model="item.selected" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
                            <img :src="`http://10.60.81.45:8080/${item.thumbnail}`" alt="商品图片" class="item-image"/>
                            <div class="item-details">
                                <span style="position: relative; top: -5px; font-size: 16px;">{{ item.name }}</span>
                                <span style="position: relative; top: 0; font-size: 14px;">单价: {{ item.price }} 元</span>
                                <span style="position: relative; top: 20px; font-size: 16px;">￥{{ (item.price * item.num).toFixed(2) }} 元</span>
                            </div>
                            <div class="item-actions">
                                <button class="action-button" @click="increaseQuantity(item)"><i class="icon-font icon-jiahao" /></button>
                                <input type="text" v-model="item.num" class="quantity-input" min="1" />
                                <button class="action-button" @click="decreaseQuantity(item)"><i class="icon-font icon-minusl" /></button>
                                <button class="delete-button" @click="deleteCartItem(item)"><i class="icon-font icon-ziyuan" /></button>
                            </div>
                        </div>
                    </li>
                </transition-group>
            </ul>
        </div>
        <div class="checkout-container">
            <div class="select-all">
                <el-switch v-model="selectALLStatus" active-color="#13ce66" inactive-color="#ff4949" @change="goodsSelectAll"></el-switch>
                <span style="margin-left: 10px;font-size: 24px;">全选</span>
            </div>
            <div class="total-price">
                <span>总计:</span>
                <span style="margin-left: 10px; color:red">￥{{ totalPrice }} 元</span>
            </div>
            <button class="checkout-button" @click="checkout">结算</button>
        </div>
    </div>
</template>

<style scoped>
.icon-font {
    font-family: "iconfont" !important;
    font-size: 20px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.shoppingCart-page {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.shoppingCart-container {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: #fafafa;
}

.cart-item {
    list-style-type: none;
    border-bottom: 1px solid #eee;
    padding: 5px 0;
}

.item-container {
    display: flex;
    height: 10vh;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
}

.item-image {
    width: 60px;
    height: 60px;
    margin: 0 15px 0 10px;
    overflow: hidden;
}

.item-details {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.item-actions {
    display: flex;
    align-items: center;
}

.quantity-input {
    width: 50px; 
    height: 30px; 
    font-size: 16px;
    text-align: center;
    border: 1px solid #ddd; 
    border-radius: 5px; 
    outline: none;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2); 
    transition: border-color 0.3s;
}

.quantity-input:focus {
    border-color: #409eff;
}

.action-button,
.delete-button {
    background: transparent;
    border: 1px solid #ddd;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    margin: 0 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.3s;
}

.action-button:hover,
.delete-button:hover {
    background-color: #e0e0e0; 
}

.checkout-container {
    background-color: #f9f9f9;
    padding: 15px;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.total-price {
    font-size: 18px;
    font-weight: bold;
}

.checkout-button {
    background-color: #409eff;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
}

.checkout-button:hover {
    background-color: #66b1ff;
}

.slide-fade-enter-active, .slide-fade-leave-active {
    transition: all 0.5s ease;
}

.slide-fade-enter {
    opacity: 0;
    transform: translateX(-30px);
}

.slide-fade-leave-active {
    opacity: 0;
    transform: translateX(100%); 
}
</style>

<<script>
import { reqDeleteCart } from '../api/cart'
import { reqSubmitOrder } from '../api/order'

export default {
    name: "ShoppingCartPage",
    data() {
        return {
            selectAll: false
        };
    },
    computed: {
        cartItems() {
            return this.$store.getters['cartStore/getCartList'];
        },
        totalPrice() {
            return this.cartItems
                .filter(item => item.selected)
                .reduce((total, item) => total + item.price * item.num, 0)
                .toFixed(2);
        },
        selectALLStatus() {
            return this.cartItems.every(item => item.selected); 
        }
    },
    methods: {
        increaseQuantity(item) {
            item.num++;
        },
        decreaseQuantity(item) {
            if (item.num > 1) {
                item.num--;
            }
        },
        async checkout() {
            const orderList = this.cartItems.filter(item => item.selected).map(item => item.cardid).join(',')
            const { data } = await reqSubmitOrder(this.$store.getters['userStore/getToken'], orderList);
            this.$store.commit('orderStore/setOrderList',data)
            this.$store.commit('cartStore/clearCart');
        },
        async deleteCartItem(item) {
            const { data } = await reqDeleteCart(this.$store.getters['userStore/getToken'], item.cardid);
            this.$store.commit('cartStore/setCartList', data);
            this.$message.success('删除成功');
        },
        goodsSelectAll(value) {
            this.cartItems.forEach(item => {
                item.selected = value; // 根据全选状态更新每个商品的选择状态
            });
        },
    }
}
</script>