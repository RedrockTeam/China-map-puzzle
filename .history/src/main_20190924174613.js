import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import ApiService from './common/service/api'

import './assets/styles/common.css'
import './assets/font/font.css'

// Vue.config.productionTip = false

// ApiService.init()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
