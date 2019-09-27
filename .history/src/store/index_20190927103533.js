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
    timer: function () { },
  },
  mutations: {
    // 开始
    start(state) {
      //时间重置
      console.log('调用函数')
      clearInterval(this.timer);
      var _timer = setInterval(function () {
        state.time++;
        console.log(state.time)
      }, 1000);
      _timer()
      state.timer = _timer
      console.log(state.timer)

    },
    //停止
    stop(state) {
      clearInterval(state.timer);
      state.time = 0
      console.log(state.time)
    },
  },
  actions: {}
})