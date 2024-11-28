export default {
    namespaced: true,
    state: {
        orderList: [],
        orderGoodsList: []
    },
    mutations: {
        setOrderList(state, payload) {
            state.orderList = payload;
        }
    },
    getters: {
        getOrderList(state) {
            return state.orderList;
        }
    }
}