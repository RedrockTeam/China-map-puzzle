<template>
  <div class="bg">
    <div class="head">
      <div class="back"></div>
      <div class="title"></div>
    </div>

    <div class="body">
      <div class="first"></div>
      <div class="second"></div>
      <div class="third"></div>
      <div class="four"></div>
    </div>

    <div class="end">
      <div class="list"></div>
      <div class="begin"></div>
    </div>
  </div>
</template>


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
  background: url("../assets/img/pass/first.png");
  background-size: cover;
  left: 20px;
  top: 200px;
}
.second {
  background: url("../assets/img/pass/second.png");
  background-size: cover;
  left: 360px;
  top: 200px;
}
.third {
  background: url("../assets/img/pass/third.png");
  background-size: cover;
  left: 50px;
  top: 530px;
}
.four {
  background: url("../assets/img/pass/four.png");
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
  width: 340px;
  height: 125px;
  background-size: 100%;
}
.begin {
  background: url("../assets/img/pass/right.png");
  width: 340px;
  height: 125px;
  background-size: 100%;
}
</style>

<script>
export default {};
</script>