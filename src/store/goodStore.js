export default {
    namespaced: true, // 启用命名空间
    state: {
        products: [] // 用于存储商品列表的状态
    },
    mutations: {
        setGoodsList(state, payload) {
            state.products = payload;
        }
    },
    getters: {
        getGoodsList(state) {
            return state.products;
        }
    }
}
