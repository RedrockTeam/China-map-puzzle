import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    time: {
      minute: 0,
      second: 0,
      millisecond: 0,
      timecount: '00:00:00',
    },
  },
  mutations: {
    //开始
    start() {
      var that = this;
      //停止（暂停）
      clearInterval(time);
      //时间重置
      that.setData({
        minute: 0,
        second: 0,
        millisecond: 0,
      })
      time = setInterval(function () {
        that.timer()
      }, 50);
      time = () => {
        that.timer()
      }
    },
    //停止
    stop() {
      var that = this
      clearInterval(intt);
      that.setData({
        minute: 0,
        second: 0,
        millisecond: 0,
        timecount: '00:00:00',
      })
    },
    timer() {
      var that = this;
      console.log(that.data.millisecond)
      that.setData({
        millisecond: that.data.millisecond + 5
      })
      if (that.data.millisecond >= 100) {
        that.setData({
          millisecond: 0,
          second: that.data.second + 1
        })
      }
      if (that.data.second >= 60) {
        that.setData({
          second: 0,
          minute: that.data.minute + 1
        })
      }
      that.setData({
        timecount: that.data.minute + ":" + that.data.second + ":" + that.data.millisecond
      })
    },
  },
  actions: {
    // time = setInterval(function () {
    //   context.commit('time')
    // }, 50)
  }
})