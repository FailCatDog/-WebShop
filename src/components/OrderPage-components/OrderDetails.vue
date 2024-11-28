<template>
  <div class="modal-overlay" v-if="isVisible">
    <div class="modal">
      <div class="modal-header">
        <h3>订单详情</h3>
        <button class="close-button" @click="closeModal">×</button>
      </div>
      <div class="modal-body" v-if="orders">
        <h4>订单 ID: {{ orders.id }}</h4>
        <p>下单时间: {{ formatOrderTime(orders.orderTime) }}</p>
        <h4>订单物品</h4>
        <ul>
          <li v-for="item in orders.orderDetail" :key="item.OrderDetailid">
            <span>{{ item.goodsName }} (×{{ item.nums.split(',')[0] }}) - ￥{{ item.nums.split('=')[1] }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderModal",
  props: {
    isVisible: {
      type: Boolean,
      required: true
    },
    orders: {
      type: Object,
      default: () => null
    }
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    formatOrderTime(orderTime) {
      return new Date(orderTime).toLocaleString(); // 格式化日期
    }
  }
}
</script>


<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: white;
  border-radius: 8px;
  padding: 20px;
  width: 80%;
  max-width: 600px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.close-button {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

.order {
  margin-bottom: 20px;
}
</style>
