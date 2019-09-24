<template>
  <div class="bg">
    <div class="head">
      <div class="back"></div>
      <div class="title"></div>
      <div class="front"></div>
    </div>

    <div class="contain">
      <div class="score">
        <div>
          <p>
            <span class="clock"></span>
            <span class="word">我的时间：</span>
          </p>
          <p>
            <i class="grade"></i>
            <span class="word">我的成绩：</span>
          </p>
        </div>
      </div>
      <div class="list">
        <p class="list_item first">
          <span class="icon"></span>
          <span class="nickname">这是我的昵称</span>
          <span class="time">10s</span>
        </p>
        <p class="list_item second">
          <span class="icon"></span>
          <span class="nickname">这是我的昵称</span>
          <span class="time">10s</span>
        </p>
        <p class="list_item third">
          <span class="icon"></span>
          <span class="nickname">这是我的昵称</span>
          <span class="time">10s</span>
        </p>
        <p class="list_item">
          <span class="normal">4</span>
          <span class="nickname">这是我的昵称</span>
          <span class="time">10s</span>
        </p>
        <p class="list_item">
          <span class="normal">4</span>
          <span class="nickname">这是我的昵称</span>
          <span class="time">10s</span>
        </p>
      </div>
    </div>
    <div class="line"></div>
  </div>
</template>

<style>
.bg {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: url("../assets/img/pass/background.png");
  background-size: cover;
}
.head {
  display: flex;
  margin-top: 100px;
  margin-left: 50px;
}

.back {
  background: url("../assets/img/ranking/back.png");
  width: 93px;
  height: 97px;
  background-size: cover;
  margin-right: 120px;
}
.title {
  background: url("../assets/img/ranking/ranking_title.png") no-repeat;
  width: 260px;
  height: 200px;
  background-size: 100%;
  margin-left: -20px;
}
.front {
  background: url("../assets/img/ranking/front.png");
  width: 93px;
  height: 97px;
  background-size: cover;
  margin-left: 80px;
}

.contain {
  width: 650px;
  height: 850px;
  background: #ffae72;
  margin: 0 auto;
}

.score {
  width: 617px;
  height: 256px;
  background: url("../assets/img/ranking/result.png");
  background-size: cover;
  padding-top: 80px;
}
.score div {
  margin-top: 20px;
  margin-left: 20px;
}

.word {
  letter-spacing: 5px;
}

.score p {
  color: #ffae72;
  font-weight: bold;
  font-size: 35px;
  padding-top: 20px;
  margin: 0 auto;
  width: 250px;
  margin-left: 90px;
  margin-bottom: 20px;
}

.clock,
.grade {
  width: 29px;
  height: 29px;
  display: inline-block;
  margin-right: 10px;
}
.clock {
  background: url("../assets/img/ranking/clock.png") no-repeat;
  background-size: cover;
}
.grade {
  background: url("../assets/img/ranking/list.png") no-repeat;
  background-size: cover;
}
.list {
  height: 440px;
  overflow: auto;
}
.list_item {
  background: url("../assets/img/ranking/box.png");
  width: 580px;
  height: 125px;
  background-size: cover;
  margin-left: 50px;
  display: flex;
}
.icon {
  display: inline-block;
  width: 81px;
  height: 82px;
  margin: 15px 30px;
}
.first .icon {
  background: url("../assets/img/ranking/first.png");
  background-size: cover;
}
.second .icon {
  background: url("../assets/img/ranking/second.png");
  background-size: cover;
}
.third .icon {
  background: url("../assets/img/ranking/third.png");
  background-size: cover;
}
.nickname {
  color: #ffae72;
  font-size: 35px;
  font-weight: bold;
  display: inline-block;
  margin-top: 30px;
}
.time,
.normal {
  margin-left: auto;
  margin-right: 80px;
  font-weight: bold;
  display: inline-block;
  margin-top: 20px;
  color: #ff7b5c;
  font-size: 50px;
}

.line {
  width: 570px;
  height: 36px;
  background: url("../assets/img/ranking/line.png");
  background-size: cover;
  margin-left: 100px;
  margin-top: -50px;
}
</style>

<script>
export default {};
</script>