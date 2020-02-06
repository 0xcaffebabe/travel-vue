import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Resource from 'vue-resource';

import 'swiper/dist/css/swiper.css'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'


Vue.config.productionTip = false

fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.use(Resource)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

