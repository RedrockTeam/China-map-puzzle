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
    <div class="main"></div>
    <div class="showpic_shadow">
      <div class="showpic">长按可看3s原图</div>
    </div>
  </div>
</template>

<script>
// 因为图还没出来，先把first的内容写在这
export default {
  data() {
    return {};
  },
  methods: {
    toHome() {
      this.$router.push("/");
    }
  }
};
</script>
<style lang="scss" scoped>
.game {
  width: 750px;
  height: 1208px;
  background-image: url("../assets/img/common/bg.jpg");
  background-repeat: no-repeat;
  background-position: 0% 0%;
  background-size: contain;
  padding-top: 66px;
  .header {
    width: 95%;
    height: 140px;
    margin: 0 auto 66px 25px;
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
      font-family: 'Cotton';
      font-size: 50px;
      color: #fffcad;
    }
  }
}
</style>