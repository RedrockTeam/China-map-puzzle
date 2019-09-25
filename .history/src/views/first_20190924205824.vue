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
  mounted() {
    let pics = this.$refs.main.children;
    let picWidth = pics[0].offsetWidth;
    let picHeight = pics[0].offsetHeight;
    let boxWidth = this.$refs.main.offsetWidth;
    let boxHeight = this.$refs.main.offsetHeight;
    for (var i = 0; i < pics.length; i++) {
      pics[i].addEventListener("touchstart", function(e) {
        console.log("ok");
        // this.style.zIndex = 100; 设置拖拽元素的z-index值，使其在最上面。
        console.log(e.targetTouches[0].pageX);
        console.log(this.offsetLeft);
        var dx = e.targetTouches[0].pageX - this.offsetLeft; //记录触发拖拽的水平状态发生改变时的位置
        var dy = e.targetTouches[0].pageY - this.offsetTop; //记录触发拖拽的垂直状态发生改变时的位置
        this.startX = this.offsetLeft; //记录当前初始状态水平发生改变时的位置
        this.startY = this.offsetTop; //offsetTop等取得的值与this.style.left获取的值区别在于前者不带px,后者带px
        this.style.transition = "none";
      });
      pics[i].addEventListener("touchmove", function(e) {
        newLeft = e.targetTouches[0].pageX - dx; //记录拖拽的水平状态发生改变时的位置
        newtop = e.targetTouches[0].pageY - dy;
        if (newLeft <= -picWidth / 2) {
          //限制边界代码块，拖拽区域不能超出边界的一半
          newLeft = -picWidth / 2;
        } else if (newLeft >= picboxWidth - picWidth / 2) {
          newLeft = picboxWidth - picWidth / 2;
        }
        if (newtop <= -picHeight / 2) {
          newtop = -picWidth / 2;
        } else if (newtop >= picboxHeight - picHeight / 2) {
          newtop = picboxHeight - picHeight / 2;
        }
        this.style.left = newLeft + "px";
        this.style.top = newtop + "px"; //设置目标元素的left,top
      });
      pics[i].addEventListener("touchend", function(e) {
        // this.style.zIndex = 0;
        this.style.transition = "all 0.5s ease 0s"; //添加css3动画效果
        this.endX = e.changedTouches[0].pageX - dx;
        this.endY = e.changedTouches[0].pageY - dy; //记录滑动结束时的位置，与进入元素对比，判断与谁交换
        var obj = change(e.target, this.endX, this.endY); //调用交换函数
        if (obj == e.target) {
          //如果交换函数返回的是自己
          obj.style.left = this.startX + "px";
          obj.style.top = this.startY + "px";
        } else {
          //否则
          var _left = obj.style.left;
          obj.style.left = this.startX + "px";
          this.style.left = _left;
          var _top = obj.style.top;
          obj.style.top = this.startY + "px";
          this.style.top = _top;
          var _index = obj.getAttribute("data-index");
          obj.setAttribute("data-index", this.getAttribute("data-index"));
          this.setAttribute("data-index", _index); //交换函数部分，可提取
        }
      });
      pics[i].addEventListener("transitionend", function() {
        if (isSuccess()) {
          console.log("成功了！"); //此处监听事件有bug，会添加上多次事件。
        } else {
          // pic[i].removeEventListener('transitionend');
        }
      });
    }
    function change(obj, x, y) {
      //交换函数，判断拖动元素的位置是不是进入到目标原始1/2，这里采用绝对值得方式
      for (var i = 0; i < pics.length; i++) {
        //还必须判断是不是当前原素本身。将自己排除在外
        if (
          Math.abs(pics[i].offsetLeft - x) <= picWidth / 2 &&
          Math.abs(pics[i].offsetTop - y) <= picHeight / 2 &&
          pic[i] != obj
        )
          return pics[i];
      }
      return obj; //返回当前
    }
    this.test();
  },
  methods() {
    function test() {
      console.log("try");
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

    padding: 26px;
    display: flex;
    flex-wrap: wrap;
    .piece {
      width: 328px;
      height: 306px;
      box-shadow: 2px 2px 24px #f3a98f;
      margin: 14px 14px 0 14px;
      border-bottom: 7px solid #a6492b;
      background: url("../assets/img/button/map.jpg");
    }
    .first {
      background-size: 200%;
      background-position-x: 0;
    }

    .second {
      background-position-x: 328px;
      background-size: 200%;
    }
    .third {
      background-position: 0 306px;
      background-size: 200%;
    }
    .four {
      background-position: 328px 306px;
      background-size: 200%;
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