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
        class="piece chosen"
        v-for="(piece, index) in pieces"
        :key="piece.index"
        :id="'d'+index+1"
        @click="clickChange"
      >
        <img :src="piece.url" />
      </div>
    </div>
    <div class="showpic_shadow">
      <div class="showpic" @click="showPic">长按可看3s原图</div>
    </div>
  </div>
</template>

<script>
import { finished } from 'stream';
// 因为图还没出来，先把first的内容写在这
export default {
  data() {
    return {
      pieces: [
        {
          url: require("../assets/img/game/one/pie.png")
        },
        {
          url: require("../assets/img/game/one/pie.png")
        },
        {
          url: require("../assets/img/game/one/pie.png")
        },
        {
          url: require("../assets/img/game/one/pie.png")
        }
      ]
    };
  },
  mounted() {
    this.$store.commit("start");
  },
  methods: {
    toHome() {
      this.$router.push("/");
    },
    showPic() {},
    over() {
      this.$store.commit("stop");
      // store.timecount把时间传给后端
      this.$router.push("/choose/first/rank");
    },
    clickChange() {
      if ((finish_flags = true)) {
        this.$store.firstId = id;
        finish_flags = false;
      }else{
        move(id, this.$store.firstId);
      }
    },
    init() {
      var d = new Array(4);
      d[1] = 1;
      d[2] = 2;
      d[3] = 3;
      d[4] = 0;
      var d_direct = new Array([0], [2, 4], [1, 3], [2], [1]);
      var d_posXY = new Array([0], [0, 0], [328, 0],[328, 306], [328 * 2, 306]);
    },

    move(id, firstId) {
      var i = 1;
      for (i = 1; i < 10; ++i) {
        if (d[i] == id) break;
      }
      var target_d = 0;
      target_d = whereCanTo(i);
      if (target_d != firstId) {
        d[i] = firstId;
        d[target_d] = id;
        document.getElementById("d" + id).style.left =
          d_posXY[target_d][0] + "px";
        document.getElementById("d" + id).style.top =
          d_posXY[target_d][1] + "px";
      }
      var finish_flag = true;
      for (var k = 1; k < 9; ++k) {
        if (d[k] != k) {
          finish_flag = false;
          break;
        }
      }
      if (finish_flag == true) {
        if (!pause) start();
        alert("congratulation");
      }
    },
    whereCanTo(cur_div) {
      var j = 0;
      var move_flag = false;
      for (j = 0; j < d_direct[cur_div].length; ++j) {
        if (d[d_direct[cur_div][j]] == firstId) {
          move_flag = true;
          break;
        }
      }
      if (move_flag == true) {
        return d_direct[cur_div][j];
      } else {
        return 0;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.game {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: url("../assets/img/pass/background.png");
  background-size: cover;
  overflow: hidden;
  .header {
    width: 95%;
    height: 140px;
    margin: 0 auto 24px 25px;
    display: inline-flex;
    justify-content: space-between;
    .back_shadow {
      width: 125px;
      height: 139px;
      background-image: url("../assets/img/common/btn_sbg.jpg");
      background-repeat: no-repeat;
      background-position: 0% 0%;
      background-size: contain;
      .back {
        width: 92px;
        height: 95px;
        background-image: url("../assets/img/common/back.png");
        background-repeat: no-repeat;
        background-position: 0% 0%;
        background-size: contain;
      }
    }
    .title {
      width: 240px;
      height: 96px;
      background-image: url("../assets/img/game/title_bg.jpg");
      background-repeat: no-repeat;
      background-position: 0% 0%;
      background-size: contain;

      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 54px;
        height: 17px;
      }
    }
    .refresh_shadow {
      width: 125px;
      height: 139px;
      background-image: url("../assets/img/common/btn_sbg.jpg");
      background-repeat: no-repeat;
      background-position: 0% 0%;
      background-size: contain;
      .refresh {
        width: 92px;
        height: 95px;
        background-image: url("../assets/img/common/refresh.png");
        background-repeat: no-repeat;
        background-position: 0% 0%;
        background-size: contain;
      }
    }
  }
  .main {
    // width: 750px;
    // height: 700px;

    padding: 26px;
    position: absolute;
    width: 450px;
    height: 450px;
    border-radius: 5px;
    display: inline-block;
    background-color: #ffe171;
    box-shadow: 0 0 10px #ffe171;

    .piece {
      width: 328px;
      height: 306px;
      box-shadow: 2px 2px 24px #f3a98f;
      margin: 14px 14px 0 14px;
      border-bottom: 7px solid #a6492b;

      position: absolute;
      width: 149px;
      height: 149px;
      box-shadow: 1px 1px 2px #777;
      background-color: #20a6fa;
      color: white;
      text-align: center;
      font-size: 150px;
      line-height: 150px;
      cursor: pointer;
      -webkit-transition: 0.3s;
      -moz-transition: 0.3s;
      -ms-transition: 0.3s;
      -o-transition: 0.3s;
      transition: 0.3s;

      img {
        width: 328px;
        height: 300px;
        border: 5px solid #f38251;
      }
    }
    .chosen {
      border-bottom: 7px solid #da8f43;
      img {
        border: 5px solid #fef1ba;
      }
    }
  }
  .showpic_shadow {
    width: 560px;
    height: 173px;
    margin: 60px auto auto 154px;
    background-image: url("../assets/img/game/showpic_sbg.jpg");
    background-repeat: no-repeat;
    background-position: 0% 0%;
    background-size: contain;

    .showpic {
      width: 458px;
      height: 107px;
      background-image: url("../assets/img/game/showpic_bg.png");
      background-repeat: no-repeat;
      background-position: 0% 0%;
      background-size: contain;
      text-align: center;
      line-height: 107px;
      font-family: "Cotton";
      font-size: 50px;
      color: #fffcad;
    }
  }
}
</style>