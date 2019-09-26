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
export default {
  data() {
    return {
      pieces: [{}, {}, {}, {}, {}, {}, {}, {}, {}],
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
      fun.initPuzzle(3);
    },
    clickChange(id) {
      console.log(id);
      console.log(this.firstId);
      if (this.change_flag == false) {
        console.log(this.change_flag);
        console.log(this.firstId);
        this.firstId = id;
        console.log(this.firstId);
        this.$store.state.change_flag = true;
        console.log(this.change_flag);
      } else {
        let func = require("../assets/js/puzzle.js");
        console.log(
          id,
          this.firstId,
          2,
          this.$store.state.first_flag,
          this.chart,
          this.d_direct
        );
        func.move(
          id,
          this.firstId,
          2,
          this.$store.state.first_flag,
          this.chart,
          this.d_direct
        );
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
      width: 208px;
      height: 196px;
      .img {
        width: 208px;
        height: 189px;
      }
    }
  }
}
</style>