<template>
  <div>
    <div class="showpic_shadow">
      <div class="showpic" @click="showPic">长按可看3s原图</div>
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
  methods: {
    showPic() {
      this.isShow = true;
      setTimeout(function() {
        this.isShow = false;
        console.log("3s结束");
        console.log(this.isShow)
      }, 3000);
    }
  }
};
</script>
<style lang="scss">
.showpic_shadow {
  width: 560px;
  height: 173px;
  margin: 60px auto auto 156px;
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

