export default {
    namespaced: true, 
    state: {
        token: null,
    },
    mutations: {
        setToken(state, payload) {
            state.token = payload;
        }
    },
    getters: {
        getToken(state) {
            return state.token;
        }
    }
}