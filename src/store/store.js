import Vue from 'vue'
import Vuex from 'vuex'
// import post from './modules/post' // так же нужно добавить в modules
import authToFirebase from './modules/authToFirebase'
import VuexPersist from 'vuex-persist'

const vuexPersist = new VuexPersist({
  key: 'my-app',
  storage: window.localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    authToFirebase
  },
  plugins: [vuexPersist.plugin]
})
 