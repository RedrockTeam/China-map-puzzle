<template>
  <div class="game">
    <div class="header">
      <back-button></back-button>
      <div class="title">
        <img src="../assets/img/game/one.png" />
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
import { SET_FIRST } from "../store/type/mutations";
export default {
  data() {
    return {
      pieces: [{}, {}, {}, {}],
      firstId: null,
      change_flag: false,
      activeName: null,
      time: 0,
      timer: null
    };
  },

  mounted() {
    let func = require("../assets/js/puzzle.js");
    func.initPuzzle(2);
    // this.$store.commit("start");
    this.start();

    // 监听离开页面则停止计时
    window.addEventListener("unload", this.$store.commit("stop"));
  },
  methods: {
    refresh() {
      let func = require("../assets/js/puzzle.js");
      func.initPuzzle(2);
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
        console.log(this.time); // 作用域问题导致之前this指代有问题
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
        func.move(id, this.firstId, 2, SET_FIRST);
        console.log("have changed");
        this.change_flag = false;
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
        height: 17px;
      }
    }
  }
  .main {
    .piece {
      width: 328px;
      height: 306px;
      background-size: 656px 598px; //200%
      background-size: 200%; //200%
      background-origin: padding-box; //设置背景图片的位置从padding（内边距）开始放置
    }
  }
}
</style>