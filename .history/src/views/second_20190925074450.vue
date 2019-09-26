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
      <div class="piece chosen first" ref="pic"></div>
      <div class="piece second" ref="pic"></div>
      <div class="piece third" ref="pic"></div>
      <div class="piece four" ref="pic"></div>
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
    this.moveImage();
  },
  methods: {
    moveImage(e) {
      let pics = this.$refs.main.children;
      let picWidth = pics[0].offsetWidth;
      let picHeight = pics[0].offsetHeight;
      let boxWidth = this.$refs.main.offsetWidth;
      let boxHeight = this.$refs.main.offsetHeight;
      let dx, dy, newLeft, newTop;

      for (var i = 0; i < pics.length; i++) {
        pics[i].addEventListener("touchstart", function(e) {
          this.style.zIndex = 100;
          //   dx = e.targetTouches[0].pageX - this.offsetLeft; //记录触发拖拽的水平状态发生改变时的位置
          //   dy = e.targetTouches[0].pageY - this.offsetTop; //记录触发拖拽的垂直状态发生改变时的位置
          this.startX = this.offsetLeft; //记录当前初始状态水平发生改变时的位置
          this.startY = this.offsetTop; //offsetTop等取得的值与this.style.left获取的值区别在于前者不带px,后者带px
          this.style.transition = "none";
          console.log($data);
          if (this.number == 0) {
            firstX = this.startX;
            firstY = this.startY;
            this.number += 1;
            console.log(this.number);
          }
        });
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
    width: 750px;
    height: 700px;
    position: relative;
    padding: 26px;
    // display: flex;
    //flex-wrap: wrap;
    .piece {
      width: 328px;
      height: 306px;
      box-shadow: 2px 2px 24px #f3a98f;
      margin: 14px 14px 0 14px;
      // float: left;
      border-bottom: 7px solid #a6492b;
      background: url("../assets/img/button/map.jpg");
      transition: all 0.5s ease 0s;
      position: absolute;
    }
    .first {
      background-size: 200%;
      background-position-x: 0;
    }

    .second {
      background-position-x: 328px;
      background-size: 200%;
      left: 380px;
    }
    .third {
      background-position: 0 306px;
      background-size: 200%;
      top: 350px;
    }
    .four {
      background-position: 328px 306px;
      background-size: 200%;
      top: 350px;
      left: 380px;
    }
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