<template>
  <div class="back_shadow">
    <div class="back" @click="toHome"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    toHome() {
      this.$router.push("/");
    },
  },
};
</script>
<style lang="scss">
.back_shadow {
  width: 125px;
  height: 139px;
  background-image: url("../assets/img/common/btn_sbg.png");
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
</style>