<template>
  <div class="bg">
    <div class="head">
      <back-button></back-button>
      <div class="title"></div>
    </div>

    <div class="body">
      <div>
        <img
          class="first"
          v-if="this.first =='unlock'"
          src="../assets/img/pass/first.png"
          @click="checked('first',$event)"
        />
        <img
          class="first"
          v-else
          src="../assets/img/pass/firstpass.png"
          @click="checked('first',$event)"
        />
      </div>
      <div>
        <img
          v-if="this.second =='unlock' "
          class="second"
          src="../assets/img/pass/second.png"
          @click="checked('second',$event)"
        />
        <img
          v-if="this.second =='success' "
          class="second"
          src="../assets/img/pass/secondpass.png"
          @click="checked('second',$event)"
        />
        <img
          v-if="this.second =='lock'"
          class="second"
          v-on:click.prevent.self
          src="../assets/img/pass/lock.png"
        />
      </div>
      <div>
        <img
          class="third"
          v-if="this.third =='unlock' "
          src="../assets/img/pass/third.png"
          @click="checked('third',$event)"
        />
        <img
          class="third"
          v-if="this.third =='success' "
          src="../assets/img/pass/thirdpass.png"
          @click="checked('third',$event)"
        />
        <img
          class="third"
          v-if="this.third =='lock'"
          v-on:click.self.prevent
          src="../assets/img/pass/lock.png"
        />
      </div>
      <div>
        <img
          class="fourth"
          v-if="this.fourth=='unlock' "
          src="../assets/img/pass/fourth.png"
          @click="checked('fourth',$event)"
        />
        <img
          class="fourth"
          v-if="this.fourth =='success' "
          src="../assets/img/pass/fourthpass.png"
          @click="checked('fourth',$event)"
        />
        <img
          class="fourth"
          v-if="this.fourth =='lock'"
          v-on:click.self.prevent
          src="../assets/img/pass/lock.png"
        />
      </div>
    </div>

    <div class="end">
      <div class="mylist" @click="toRankList"></div>
      <div class="begin" @click="toBegin"></div>
    </div>
  </div>
</template>

<script>
import { SET_CURRENT_PASS } from "../store/type/mutations";
import { FETCH_RANKPAGE } from "../store/type/actions";
export default {
  computed: {
    //通关状态显示不同的图片
    first() {
      return this.$store.state.result.first_flag;
    },
    second() {
      return this.$store.state.result.second_flag;
    },
    third() {
      return this.$store.state.result.third_flag;
    },
    fourth() {
      return this.$store.state.result.fourth_flag;
    },
    current_pass() {
      return this.$store.state.result.current_pass;
    },
    default_pass() {
      return this.$store.state.result.default_pass;
    }
  },
  mounted() {
    console.log(this.$store.state);
  },
  methods: {
    checked(params, e) {
      this.$store.commit(SET_CURRENT_PASS, params);
      var that = e.currentTarget;
      e.currentTarget.style.transform = "scale(0.9)";
      setTimeout(() => {
        that.style.transform = "scale(1)";
      }, 1500);
    },
    toBegin() {
      if (this.current_pass == null) {
        this.$router.push(`/${this.default_pass}`);
      } else {
        this.$router.push(`/${this.current_pass}`);
      }
    },
    toRankList() {
      // 用户没有选择
      if (this.current_pass == null) {
        this.$router.push(`/result?pass=${this.default_pass}`);
        if (this.default_pass == "second") {
          this.$store.dispatch(FETCH_RANKPAGE, 1);
        } else if (this.default_pass == "third") {
          this.$store.dispatch(FETCH_RANKPAGE, 2);
        } else if (this.default_pass == "fourth" && this.fourth == "unlock") {
          this.$store.dispatch(FETCH_RANKPAGE, 3);
        } else if (this.default_pass == "fourth" && this.fourth == "success") {
          this.$store.dispatch(FETCH_RANKPAGE, 4);
        }
        console.log(this.default_pass);
      } else {
        // 用户选择了，但只能查看已过关卡的排行榜
        if (this.current_pass == "first" && this.first == "success") {
          this.$store.dispatch(FETCH_RANKPAGE, 1);
          this.$router.push(`/result?pass=${this.current_pass}`);
        } else if (this.current_pass == "second" && this.second == "success") {
          this.$store.dispatch(FETCH_RANKPAGE, 2);
          this.$router.push(`/result?pass=${this.current_pass}`);
        } else if (this.current_pass == "third" && this.third == "success") {
          this.$store.dispatch(FETCH_RANKPAGE, 3);
          this.$router.push(`/result?pass=${this.current_pass}`);
        } else if (this.current_pass == "fourth" && this.fourth == "success") {
          this.$store.dispatch(FETCH_RANKPAGE, 4);
          this.$router.push(`/result?pass=${this.current_pass}`);
        } else {
          alert("请通过该关卡才可查看排行榜");
        }
      }
    }
  }
};
</script>


<style scoped lang="scss">
.beautify {
  position: absolute;
  top: 200px;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  .center {
    transform: translate(0, -6%);
  }
}
.bg {
  position: absolute;
  width: 750px;
  height: 100%;
  background-image: url("../assets/img/common/bg.jpg");
  background-repeat: repeat-y;
  background-position: 0% 0%;
  background-size: 100% auto;
  padding-top: 66px;
}
.head {
  display: flex;
}
.end {
  display: flex;
  align-items: center;
}
.head {
  width: 70%;
  height: 140px;
  margin: 0 auto 24px 25px;
  display: inline-flex;
  justify-content: space-around;
}
.title {
  width: 307px;
  height: 95px;
  background: url("../assets/img/pass/title.png");
  background-size: 100%;
  margin-left: 40px;
}

.body {
  position: relative;
  top: -220px;
}
.first,
.second,
.third,
.fourth {
  width: 500px;
  height: 580px;
  position: absolute;
}
.first {
  left: 20px;
  top: 160px;
  transform: scale(1);
}
.second {
  left: 330px;
  top: 160px;
}
.third {
  left: 20px;
  top: 490px;
}
.fourth {
  left: 330px;
  top: 510px;
}

.end {
  margin-left: 60px;
  position: relative;
  top: 730px;
}
.mylist {
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
  /* margin-top: -5px; */
}
</style>

