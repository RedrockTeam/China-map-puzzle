<template>
  <div class="game">
    <div class="header">
      <div class="back_shadow">
        <div class="back" @click="toPass"></div>
      </div>
      <div class="title">
        <img src="../assets/img/game/one.png" />
      </div>
      <div class="refresh_shadow">
        <div class="refresh"></div>
      </div>
    </div>
    <div class="main" ref="main">
      <div
        :class="setClass(index)"
        ref="pic"
        v-for="(value,index) of info"
        :key="index"
        :data-index="index"
        :style="{
          left:value[0] + 'px',
          top:value[1] +'px'
      }"
      >{{index}}</div>
    </div>
    <div class="showpic_shadow">
      <div class="showpic" ref="showPic">长按可看3s原图</div>
    </div>
    <div ref="map" class="map"></div>
  </div>
</template>

<script>
import { SET_FIRST } from "../store/type/mutations";
export default {
  data() {
    return {
      firstX: null,
      firstY: null,
      number: 0,
      time: 0,
      info: [[0, 0], [180, 0], [0, 170], [180, 170]]
    };
  },
  mounted() {
    this.random();
    this.moveImage();
    this.showPic();
  },

  methods: {
    toPass() {
      this.$router.push("/pass");
    },
    setClass(index) {
      let obj = { piece: true };
      obj[`${index}`] = true;
      return obj;
    },
    showPic() {
      let showPic = this.$refs.showPic;
      console.log(showPic);
      showPic.addEventListener("touchstart", function() {
        timer = setTimeout(function() {}, 1000);
      });
    },
    moveImage() {
      let pics = this.$refs.main.children;

      let firstX, firstY, firstIndex, firstPic, secondPic;
      let number = this.number;
      let isSuccess = this.isSuccess;
      for (var i = 0; i < pics.length; i++) {
        pics[i].addEventListener("touchstart", function(e) {
          this.style.zIndex = 100;
          this.startX = this.offsetLeft;
          this.startY = this.offsetTop;
          this.style.transition = "none";
          console.log(number);
          if (number == 0) {
            firstX = this.startX;
            firstY = this.startY;
            firstIndex = this.getAttribute("data-index");
            firstPic = this;
            number += 1;
          } else if (number == 1) {
            this.startX = this.offsetLeft;
            this.startY = this.offsetTop;
            secondPic = this;
            firstPic.style.left = this.startX + "px";
            firstPic.style.top = this.startY + "px";
            firstPic.setAttribute(
              "data-index",
              this.getAttribute("data-index")
            );
            secondPic.style.left = firstX + "px";
            secondPic.style.top = firstY + "px";
            secondPic.setAttribute("data-index", firstIndex);
            number = 0;
            isSuccess();
          }
        });
      }
      return pics;
    },

    random() {
      let pics = this.$refs.main.children;
      let arr = [];
      for (var i = 0; i < 1; i++) {
        //随机打乱
        let a = Math.floor(Math.random() * 4);
        let b = Math.floor(Math.random() * 4);
        if (a != b) {
          if (-1 == arr.indexOf(a) && -1 == arr.indexOf(b)) {
            arr.push(a);
            arr.push(b);
            this.$options.methods.change(a, b, pics);
          }
        }
      }
    },
    change(a, b, pics) {
      var aEle = pics[a];
      var bEle = pics[b];

      var _left;
      _left = aEle.offsetLeft;
      aEle.style.left = bEle.offsetLeft + "px";
      bEle.style.left = _left + "px";
      var _top;
      _top = aEle.offsetTop;
      aEle.style.top = bEle.offsetTop + "px";
      bEle.style.top = _top + "px";
      var _index;
      _index = aEle.getAttribute("data-index");
      aEle.setAttribute("data-index", bEle.getAttribute("data-index"));
      bEle.setAttribute("data-index", _index);
    },

    isSuccess() {
      let pics = this.$refs.main.children;

      let str = "";
      for (var i = 0; i < pics.length; i++) {
        str += pics[i].getAttribute("data-index");
      }
      if (str == "0123") {
        this.$store.commit(SET_FIRST);
        this.$router.push("/result?pass=1");

        return true;
      }
      return false;
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
    width: 750px;
    height: 700px;
    position: relative;
    padding: 26px;

    .piece {
      width: 328px;
      height: 306px;
      box-shadow: 2px 2px 24px #f3a98f;
      border-bottom: 7px solid #a6492b;
      background: url("../assets/img/button/map.jpg");
      transition: all 0.5s ease 0s;
      position: absolute;
    }
    // .first {
    //   background-size: 200%;
    //   background-position-x: 0;
    // }

    // .second {
    //   background-position-x: 328px;
    //   background-size: 200%;
    //   left: 380px;
    // }
    // .third {
    //   background-position: 0 306px;
    //   background-size: 200%;
    //   top: 350px;
    // }
    // .four {
    //   background-position: 328px 306px;
    //   background-size: 200%;
    //   top: 350px;
    //   left: 380px;
    // }
    .chosen {
      border-bottom: 7px solid #da8f43;
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
  .map {
    width: 741px;
    height: 624px;
    background: url("../assets/img/button/dialog.png");
    position: absolute;
    top: 40px;
    background-size: cover;
    // display: hidden;
  }
}
</style>