<template>
    <div class="order-container">
        <h1 class="order-title">我的订单</h1>
        <div class="order-list">
            <div class="order-item" v-for="order in ordersList" :key="order.id">
                <h2 class="order-item-title">订单ID: {{ order.id }}</h2>
                <p class="order-item-details">订单时间: {{ order.orderTime }}</p>
                <button class="order-button" @click="viewOrderDetails(order)">查看详情</button>
            </div>
        </div>
        <OrderDetails :isVisible="isModalVisible" :orders="selectedOrderDetails" @close="isModalVisible = false" />
    </div>
</template>

<script>
import { reqGetOrderList } from '../api/order'
import OrderDetails from './OrderPage-components/OrderDetails.vue'

export default {
    name: "OrderPage",
    computed: {
        ordersList() {
            return this.$store.getters['orderStore/getOrderList']
        }
    },
    components: {
        OrderDetails
    },
    data() {
        return {
            isModalVisible: false,
            selectedOrderDetails: null
        }
    },
    methods: {
        viewOrderDetails(order) {
            this.selectedOrderDetails = order; 
            this.isModalVisible = true;
        },
        async getOrderList() {
            const userId = this.$store.getters['userStore/getToken']
            const { data } = await reqGetOrderList(userId)
            this.$store.commit('orderStore/setOrderList', data)
        }
    },
    created() {
        this.getOrderList()
    }
}
</script>


<style scoped>
.order-container {
    max-width: 50vw;
    margin: 0 auto;
    margin-bottom: 15px;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    overflow-y: auto;
}

.order-title {
    text-align: center;
    color: #333;
    margin-bottom: 20px;
}

.order-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.order-item {
    background-color: #fff;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
}

.order-item-title {
    margin: 0;
    font-size: 1.5rem;
    color: #007BFF;
}

.order-item-details {
    margin: 5px 0;
    color: #555;
}

.order-button {
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.order-button:hover {
    background-color: #0056b3;
}
</style>
