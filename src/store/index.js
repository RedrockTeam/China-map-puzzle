import Vue from 'vue'
import Vuex from 'vuex'

import result from './result'


Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    result
  },
  state: {
    time: 0,
  },
  mutations: {
    // 开始
    start(state) {
      //时间重置
      clearInterval(state.timer);
      setInterval(function () {
        state.time++;
        console.log(state.time)
      }, 1000);
      
    },
    //停止
    stop() {
      clearInterval(state.timer);
      state.time = 0
      console.log(state.time)
    },
  },
  actions: {}
})