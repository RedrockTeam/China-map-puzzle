<template>
  <div>
    <div class="showpic_shadow">
      <div
        class="showpic"
        @ontouchstart="gtouchstart()"
        @ontouchmove="gtouchmove()"
        @ontouchend="gtouchend()"
        @click="showPic"
      >
        <!-- 暂时加点击事件 -->
        <!-- 长按可看3s原图 -->
        <img src="../assets/img/game/showpic_font.png" />
      </div>
    </div>
    <div class="dialogCon" v-show="isShow">
      <div class="dialog"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: false
    };
  },
  mounted() {
    // 长按事件
    var timeOutEvent = 0; //定时器
    //开始按
    function gtouchstart() {
      timeOutEvent = setTimeout("longPress()", 500); //这里设置定时器，定义长按500毫秒触发长按事件，时间可以自己改，个人感觉500毫秒非常合适
      return false;
    }
    //手释放，如果在500毫秒内就释放，则取消长按事件，此时可以执行onclick应该执行的事件
    function gtouchend() {
      clearTimeout(timeOutEvent); //清除定时器
      // if (timeOutEvent != 0) {
      //   //这里写要执行的内容（尤如onclick事件）
      //   alert("你这是点击，不是长按");

      // 暂时先写上showPic()
      this.showPic();
      // }
      return false;
    }
    //如果手指有移动，则取消所有事件，此时说明用户只是要移动而不是长按
    function gtouchmove() {
      clearTimeout(timeOutEvent); //清除定时器
      timeOutEvent = 0;
    }

    //真正长按后应该执行的内容
    function longPress() {
      timeOutEvent = 0;
      //执行长按要执行的内容，如弹出菜单
      // alert("长按事件触发发");
      this.showPic();
      console.log("长按了");
    }
  },
  methods: {
    showPic() {
      this.isShow = true;
      setTimeout(() => {
        this.isShow = false;
        console.log("3s结束");
        console.log(this.isShow);
      }, 3000);
    }
  }
};
</script>
<style lang="scss">
.showpic_shadow {
  width: 560px;
  height: 173px;
  margin: 60px auto auto 145px;
  background-image: url("../assets/img/game/showpic_sbg.png");
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
    img {
      width: 333px;
      height: 46px;
    }
  }
}
.dialogCon {
  width: 100%;
  height: 1208px;

  background-color: rgba($color: #dd8e5e, $alpha: 0.4);
  position: absolute;
  top: 0;
  .dialog {
    background: url("../assets/img/common/dialog.png");
    background-size: cover;
    width: 741px;
    height: 624px;
    margin: auto auto;
    position: absolute;
    top: 0;
    transform: translate(0, 40%);
  }
}
</style>

