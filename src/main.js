import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import './assets/styles/common.css'
import './assets/font/font.css'

Vue.prototype.$axios = axios;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
// axios的全局配置baseURL、超时时间、header
axios.defaults.baseURL = 'https://wx.redrock.team'
axios.defaults.timeout = 5000
axios.defaults.header.post['Content-type'] = 'application/json'
