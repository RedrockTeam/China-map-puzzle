<template>
  <div class="game">
    <div class="header">
      <div class="back_shadow">
        <div class="back"></div>
      </div>
      <div class="title">
        <img src="../assets/img/game/one.png" />
      </div>
      <div class="refresh_shadow">
        <div class="refresh"></div>
      </div>
    </div>
    <div class="main" ref="main">
      <div class="piece" :class="this.index" ref="pic" v-for="index of 16" :key="index">{{index}}</div>
    </div>
    <div class="showpic_shadow">
      <div class="showpic">长按可看3s原图</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstX: null,
      firstY: null,
      number: 0
    };
  },
  mounted() {
    this.random();
    this.moveImage();
  },

  methods: {
    moveImage() {
      let pics = this.$refs.main.children;
      let picWidth = pics[0].offsetWidth;
      let picHeight = pics[0].offsetHeight;
      let boxWidth = this.$refs.main.offsetWidth;
      let boxHeight = this.$refs.main.offsetHeight;
      let dx,
        dy,
        newLeft,
        newTop,
        firstX,
        firstY,
        firstIndex,
        firstPic,
        secondPic;
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
            if (isSuccess() == true) {
              alert("true");
            }
          }
        });
      }
      return pics;
    },

    random(a, b) {
      var a = Math.floor(Math.random() * 9);
      var b = Math.floor(Math.random() * 9);
      let pics = this.$refs.main.children;
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
      console.log("try");
      let pics = this.$refs.main.children;
      console.log(pics);
      var str = "";
      for (var i = 0; i < pics.length; i++) {
        str += pics[i].getAttribute("data-index");
      }
      console.log(str);
      if (str == "123456789") {
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
      width: 150px;
      height: 135px;
      box-shadow: 2px 2px 24px #f3a98f;
      margin: 14px 14px 0 14px;
      border-bottom: 7px solid #a6492b;
      background: url("../assets/img/button/map.jpg") no-repeat;
      transition: all 0.5s ease 0s;
      position: absolute;
    }
    // .first {
    //   background-position: 0 0;
    //   background-size: 100%;
    //   top: 40px;
    // }

    // .second {
    //   background-position-x: -220px;
    //   background-size: 350%;
    //   left: 260px;
    //   top: 40px;
    // }
    // .third {
    //   background-position-x: -450px;
    //   background-size: 350%;
    //   left: 480px;
    //   top: 40px;
    // }
    // .four {
    //   background-size: 350%;
    //   background-position: 0 355px;
    //   top: 250px;
    // }

    // .five {
    //   background-size: 350%;
    //   background-position: -220px 355px;
    //   top: 250px;
    //   left: 260px;
    // }
    // .six {
    //   background-size: 350%;
    //   background-position: -440px 355px;
    //   top: 250px;
    //   left: 480px;
    // }
    // .seven {
    //   background-size: 350%;
    //   background-position: 0 -450px;
    //   top: 460px;
    // }
    // .eight {
    //   background-size: 350%;
    //   background-position: -200px -450px;
    //   top: 460px;
    //   left: 260px;
    // }
    // .nine {
    //   background-size: 350%;
    //   background-position: -410px -450px;
    //   top: 460px;
    //   left: 480px;
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
}
</style>