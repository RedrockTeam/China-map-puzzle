<template>
  <div class="bg">
    <div class="head">
      <div class="back"></div>
      <div class="title"></div>
    </div>

    <div class="body">
      <div @click="startFirst">
        <img class="first" src="../assets/img/pass/first.png" />
      </div>
      <div @click="startSecond">
        <img v-if="first == " class="second" src="../assets/img/pass/second.png" />
        <img class="second" src="../assets/img/pass/lock.png" />
      </div>
      <div @click="startThird">
        <img class="third" src="../assets/img/pass/third.png" />
      </div>
      <div @click="startFour">
        <img class="four" src="../assets/img/pass/four.png" />
      </div>
    </div>

    <div class="end">
      <div class="list"></div>
      <div class="begin"></div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    first() {}
  },

  methods: {
    startFirst() {
      this.$router.push("/first");
    },
    startSecond() {
      this.$router.push("/second");
    },
    startThird() {
      this.$router.push("/third");
    },
    startFour() {
      this.$router.push("/four");
    }
  },
  mounted() {
    console.log(this.$store.state.result);
  }
};
</script>


<style scoped>
.bg {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: url("../assets/img/pass/background.png");
  background-size: cover;
  overflow: hidden;
}
.head,
.end {
  display: flex;
}
.head {
  margin-top: 120px;
  margin-left: 55px;
}
.back {
  width: 93px;
  height: 97px;
  background: url("../assets/img/pass/back.png");
  background-size: cover;
}
.title {
  width: 307px;
  height: 95px;
  background: url("../assets/img/pass/title.png");
  background-size: 100%;
  margin-left: -40px;
}

.body {
  position: relative;
  top: -200px;
}
.first,
.second,
.third,
.four {
  width: 500px;
  height: 580px;
  position: absolute;
}
.first {
  background-size: cover;
  left: 20px;
  top: 200px;
}
.second {
  background-size: cover;
  left: 360px;
  top: 200px;
}
.third {
  background-size: cover;
  left: 50px;
  top: 530px;
}
.four {
  background-size: cover;
  left: 350px;
  top: 530px;
}

.end {
  margin-left: 60px;
  position: relative;
  top: 790px;
}
.list {
  background: url("../assets/img/pass/left.png");
  width: 272px;
  height: 105px;
  background-size: 100%;
}
.begin {
  background: url("../assets/img/pass/right.png");
  width: 337px;
  height: 140px;
  background-size: 100%;
  margin-top: -5px;
}
</style>

