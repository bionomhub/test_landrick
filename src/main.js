import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

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

import { BootstrapVue } from 'bootstrap-vue'
var VueScrollTo = require('vue-scrollto');
import Scrollspy from 'vue2-scrollspy';
import VueYoutube from 'vue-youtube'
import vueVimeoPlayer from 'vue-vimeo-player'
import VueMasonry from 'vue-masonry-css'

Vue.use(VueScrollTo, {
  duration: 3000,
  easing: "ease"
})

Vue.use(BootstrapVue)
Vue.use(Scrollspy);
Vue.use(VueYoutube)
Vue.use(vueVimeoPlayer)
Vue.use(VueMasonry)

const firebaseConfig = {
  apiKey: "AIzaSyAVKSGzc1CtJol5rA5liF4W8tBhiYLTXsk",
  authDomain: "e-cosmo-8f042.firebaseapp.com",
  projectId: "e-cosmo-8f042",
  storageBucket: "e-cosmo-8f042.appspot.com",
  messagingSenderId: "729191518103",
  appId: "1:729191518103:web:1be0c860169c233802fed2"
};

firebase.initializeApp(firebaseConfig);
var ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start('#firebaseui-auth-container', {
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  // Other config options...
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
