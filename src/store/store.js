import Vue from 'vue'
import Vuex from 'vuex'
// import post from './modules/post' // так же нужно добавить в modules
import authToFirebase from './modules/authToFirebase'
import info from './modules/info'
import VuexPersist from 'vuex-persist'

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
    info
  },
  plugins: [vuexPersist.plugin]
})
 