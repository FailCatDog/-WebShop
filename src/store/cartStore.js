export default {
  namespaced: true,
  state: {
    cart: []
    },
    mutations: {
        addProductToCart(state, product) {
            state.cart.push(product)
        },
        removeProductFromCart(state, product) {
            state.cart = state.cart.filter(item => item.id!== product.id)
        },
        setCartList(state, cart) {
            state.cart = cart
        },
        clearCart(state, orderList) {
            // state.cart = []
            const idsToRemove = orderList.split(',').map(id => id.trim())
            state.cart = state.cart.filter(item => !idsToRemove.includes(item.cardid))
        }
    },
    getters: {
        getCartList(state) {
            return state.cart
        }        
    },
}