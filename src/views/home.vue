<template>
  <div class="main">
    <div class="btn">
      <img class="one" v-if="isShow" src="../assets/img/home/home_btn1.png" @click="startJoin" />
      <img class="two" v-if="!isShow" src="../assets/img/home/home_btn2.png" />
    </div>
    <div class="msg">
      <p>点两块交换位置</p>
      <p>用最短时间完成拼图</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true
    };
  },

  computed: {},
  methods: {
    startJoin() {
      this.isShow = false;
      this.$router.push("/pass");
    }
  }
};
</script>
<style lang="scss" scoped>
.main {
  position: absolute;
  width: 750px;
  // height: 1207px;
  height: 100%;
  background-image: url("../assets/img/home/home_bg2.jpg");
  background-repeat: repeat;
  background-position: 0% 0%;
  background-size: contain;
  .btn {
    .one {
      width: 567px;
      height: 561px;
      margin: 650px auto auto 210px;
    }
    .two {
      width: 577px;
      height: 581px;
      margin: 610px auto auto 172px;
    }
  }
  .msg {
    font-size: 28px;
    color: #e87142;
    font-family: "Tanuki";
    margin-top: -116px;
    p {
      text-align: center;
    }
  }
}
</style>