import Vue from 'vue'
import App from './App.vue'
import router from './router'


import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'
import store from './store/store.js'
import messagePlugin from './utils/message.plugin'


const firebaseConfig = {
  apiKey: 'AIzaSyAVKSGzc1CtJol5rA5liF4W8tBhiYLTXsk',
  authDomain: 'e-cosmo-8f042.firebaseapp.com',
  projectId: 'e-cosmo-8f042',
  storageBucket: 'e-cosmo-8f042.appspot.com',
  messagingSenderId: '729191518103',
  appId: '1:729191518103:web:1be0c860169c233802fed2'
};

firebase.initializeApp(firebaseConfig);


Vue.config.productionTip = false

import "../public/css/materialdesignicons.min.css";
import 'swiper/swiper-bundle.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import BootstrapVue from 'bootstrap-vue'
var VueScrollTo = require('vue-scrollto');
import Scrollspy from 'vue2-scrollspy';
import VueYoutube from 'vue-youtube'
import vueVimeoPlayer from 'vue-vimeo-player'
import VueMasonry from 'vue-masonry-css'

Vue.use(VueScrollTo, {
  duration: 1500,
  easing: "ease"
})


Vue.use(BootstrapVue)
Vue.use(Scrollspy)
Vue.use(VueYoutube)
Vue.use(vueVimeoPlayer)
Vue.use(VueMasonry)

Vue.use(messagePlugin)


// Vue.use(Vuex)



// let app 

// firebase.auth().onAuthStateChanged(() => {
//   if(!app){
//     app = new Vue({
//       router,
//       store,    
//       render: h => h(App)
//     }).$mount('#app')
//   }
//   })
//   this.$store.dispatch('fetchProducts')

const app = new Vue({
  el: '#app',
  // указываем хранилище в опции «store», что обеспечит
  // доступ к нему также и во всех дочерних компонентах
  router,
  store,
  render: h => h(App),
}).$mount('#app');
