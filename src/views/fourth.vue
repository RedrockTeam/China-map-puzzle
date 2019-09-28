<template>
  <div class="game">
    <div class="header">
      <back-button></back-button>
      <div class="title">
        <img src="../assets/img/game/four.png" />
      </div>
      <div class="refresh_shadow">
        <div class="refresh" @click="refresh"></div>
      </div>
    </div>
    <div class="main">
      <div
        class="piece"
        v-for="(piece, index) in pieces"
        :key="piece.index"
        :id="'d'+index"
        @click="clickChange(index)"
        :class="{chosen: index === activeName}"
      >
        <div class="img"></div>
      </div>
    </div>
    <show-pic></show-pic>
  </div>
</template>

<script>
import "../assets/js/puzzle.js";
import showPic from "../components/showPic.vue";
import { SET_FOURTH, POST_GRADE } from "../store/type/mutations";
import { APOST_GRADE } from "../store/type/actions";
export default {
  data() {
    return {
      pieces: [{}, {}, {}, {}, {}, {}, {}, {}, {},{}, {}, {}, {}, {}, {}, {}, {}, {},{}, {}, {}, {}, {}, {}, {}],
      firstId: null,
      change_flag: false,
      activeName: null,
      time: 0,
      timer: null,
      num: 5
    };
  },
  mounted() {
    this.refresh();
    this.start();

    // 监听离开页面则停止计时
    window.addEventListener("unload", this.stop());
  },
  methods: {
    refresh() {
      let func = require("../assets/js/puzzle.js");
      func.initPuzzle(5);
      // 随机打乱
      for(var i=0;i<10;i++){
        var a = Math.floor(Math.random()*25);
        var b = Math.floor(Math.random()*25);
        var c = Math.floor(Math.random()*25);
        func.move(a,b,5);
        func.move(a,c,5);
      }
    },

    // 开始
    start() {
      //时间重置
      console.log("调用函数");
      if (this.timer) {
        clearInterval(this.timer);
        console.log(this.timer);
      }
      let _timer = setInterval(() => {
        this.time++;
        // console.log(this.time); // 作用域问题导致之前this指代有问题
      }, 1000);
      this.timer = _timer;
    },
    //停止
    stop() {
      //console.log(this.time); 获得此时的花费时间
      clearInterval(this.timer);
      this.time = 0;
    },
    clickChange(id) {
      this.activeName = id;
      if (this.change_flag == false) {
        this.firstId = id;
        this.change_flag = true;
      } else {
        let func = require("../assets/js/puzzle.js");
        func.move(id, this.firstId, 5);
        console.log("have changed");
        this.change_flag = false;
        console.log(this.change_flag);
        this.activeName = null;
        var chart = func.chart;
        // 判断是否完成拼图
        // for (var i = 0, k = 0; i < this.num; i++) {
        //   //一维长度为num
        //   for (var j = 0; j < this.num; j++, k++) {
        //     //二维长度为num
        //     // 当二维数组每个位置存储的数据即拼图块的id正好为原始状态即按行优先编写的序号相等时，即表示拼图完成
        //     if ((chart[i][j] = k)) {
        //       this.$store.commit(SET_FOURTH);
        //       this.stop();
        //       // this.time把时间传给后端
        //       this.$store.dispatch(APOST_GRADE, { level: 4, time: this.time });
        //       this.$router.push("/result?pass=" + this.num - 1);
        //     }
        //   }
        // }
      }
    }
  },
  components: {
    showPic
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/game.scss";
.game {
      .header {
    .title {
      img {
        width: 54px;
        height: 57px;
      }
    }
  }
  .main {
    .piece {
      width: 118px;
      height: 114px;
      .img {
          width: 100%;
          height: 100%;
        // width: 114px;
        // height: 103px;
      }
    }
  }
}
</style>