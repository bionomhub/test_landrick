import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
// import post from './modules/post' // так же нужно добавить в modules
import authToFirebase from './modules/authToFirebase'
import info from './modules/info'
import VuexPersist from 'vuex-persist'
import product from './modules/product'
import cart from './modules/cart'
import orders from './modules/orders'
import wishlist from './modules/wishlist'


const vuexPersist = new VuexPersist({
  key: 'my-app',
  storage: window.localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null
  },
  mutations:{
    setError(state, error){
      state.error = error
    },
    clearError(state, error){
      state.error = null
    }
  },
  getters:{
    error: s => s.error
  },
  modules: {
    authToFirebase,
    info,
    product,
    cart,
    orders,
    wishlist
  },
  plugins: [vuexPersist.plugin]
})
 