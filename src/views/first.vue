<template>
  <div class="game">
    <div class="header">
      <div class="back_shadow">
        <div class="back" @click="toHome"></div>
      </div>
      <div class="title">
        <img src="../assets/img/game/one.png" />
      </div>
      <div class="refresh_shadow">
        <div class="refresh"></div>
      </div>
    </div>
    <div class="main">
      <div
        class="piece"
        v-for="(piece, index) in pieces"
        :key="piece.index"
        :id="'d'+index"
        @click="clickChange(index)"
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
// 因为图还没出来，先把first的内容写在这
export default {
  data() {
    return {
      pieces: [{}, {}, {}, {}],
      firstId: null,
      change_flag: false
    };
  },

  mounted() {
    this.init();
    // this.$store.commit("start");
  },
  methods: {
    toHome() {
      this.$router.push("/");
    },
    over() {
      // this.$store.commit("stop");
      // store.timecount把时间传给后端
      this.$router.push("/choose/first/rank");
    },
    init() {
      let fun = require("../assets/js/puzzle.js");
      // console.log(fun.puzzle)
      fun.initPuzzle(2);
    },
    clickChange(id) {
      if (this.change_flag == false) {
        this.firstId = id;
        this.change_flag = true;
      } else {
        let func = require("../assets/js/puzzle.js");

        func.move(
          id,
          this.firstId,
          2,
          this.$store.state.first_flag,
        );
        console.log("change");
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
  .main {
    .piece {
      width: 328px;
      height: 306px;

      background-size: 656px 598px; //200%
      background-size: 200%; //200%
      // background-origin: padding-box;//设置背景图片的位置从padding（内边距）开始放置

      .img {
        width: 328px;
        height: 299px;
      }
    }
  }
}
</style>