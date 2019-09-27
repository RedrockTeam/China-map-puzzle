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
      console.log('调用函数in')
      if (this.timer) {
        clearInterval(this.timer);
        console.log(this.timer);
      }
      let time = this.time;
      let _timer = setInterval(() => {
        this.time++;
        console.log(time)
      }, 1000)
      this.timer = _timer;
      console.log(this.timer);
    },
    //停止
    stop(state) {
      clearInterval(state.timer);
      state.time = 0
    },
  },
  actions: {}
})