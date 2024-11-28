import Vue from 'vue'
import Vuex from 'vuex'

import goodStore from './goodStore'
import userStore from './userStore'
import cartStore from './cartStore'
import orderStore from './orderStore'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
    goodStore,
    userStore,
    cartStore,
    orderStore
  } 
})