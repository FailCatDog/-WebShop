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
        clearCart(state) {
            state.cart = []
        }
    },
    getters: {
        getCartList(state) {
            return state.cart
        }        
    },
}