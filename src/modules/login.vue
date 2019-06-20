<template>
  <div id="login">
    <div class="loginSection">
      <div class="weather" v-if="weatherData.last_update">
        <div class="weatherMain">
          <div class="temperature">
            <span>{{weatherData.now.temperature}}℃</span>
          </div>
          <div class="weatherImg">
            <img src="../img/cloudy.png" alt>
          </div>
        </div>
        <div class="weatherText">
          <span class="addres">{{weatherData.location.name}}</span>
          <span>{{weatherData.last_update.slice(0,10)}} {{weatherData.now.text}}</span>
        </div>
      </div>
      <div class="loginDiv">
        <div class="logo">
          <img src="../img/logo.png" alt class="firstImg">
          <!-- <img src="../img/team.jpg" alt class="secondImg"> -->
        </div>
        <div class="loginInfo">
          <div class="loginTips">Login to your account</div>
          <div class="account inputStyle">
            <span class="text">用户名</span>
            <input type="text" class="inputs">
          </div>
          <div class="password inputStyle">
            <span class="text">密码</span>
            <input type="text" class="inputs">
          </div>
          <div class="btn_section">
            <div class="btn pointer" @click="loginIn">登陆</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getWeather } from "../js/api.js";
import {mapState} from "vuex";

export default {
  data() {
    return {
      form: {
        name: "admin"
      }
    };
  },
  computed:{
    ...mapState(['weatherData'])
  }
  ,
  mounted() {
    // getWeather((data)=>{
    //   this.$store.commit('updateObj',{"key":"weatherData","val":data})
    // });
  },
  methods: {
    loginIn() {
      this.$router.push({ name: "metering" });
    }
  }
};
</script>
<style lang="scss">
@import "../style/common.scss";
#login {
  width: 100%;
  height: 100%;
  background: url("../img/city.jpg") no-repeat center center;
  background-size: 100% 100%;
  position: relative;
  .loginSection {
    width: 1040px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @include flexCenter;
    .weather {
      // width: 300px;
      .weatherMain {
        // width: 100%;
        height: 100px;
        @include flexCenter;
        .temperature {
          font-size: 60px;
          font-weight: bold;
          color: #252445;
        }
        .weatherImg {
          img {
            height: 100px;
          }
        }
      }
      .weatherText {
        background-color: #e9eef2;
        color: #252445;
        font-weight: 800;
        border-radius: 10px;
        text-align: center;
        padding: 10px 20px;
        .addres {
          margin-right: 20px;
          color: #555555;
        }
      }
    }
  }
  .loginDiv {
    width: 400px;

    .logo {
      @include flexCenter;
      justify-content: center;
      margin: 0 auto;
      img {
        height: 60px;
      }
      .firstImg {
      }
      .secondImg{
        padding-left: 10px;
        border-left: 1px solid #fff;
      }
    }
    .loginInfo {
      width: 400px;
      padding: 20px 0px 0px;
      background-color: rgba(167, 172, 175, 0.8);
      border-radius: 5px;
      margin-top: 20px;
      .inputStyle {
        width: 380px;
        height: 40px;
        border-radius: 5px;
        display: flex;
        margin-top: 20px;
        margin-left: 10px;
        .text {
          width: 55px;
          height: 40px;
          text-align: center;
          font-size: 12px;
          color: #fff;
          line-height: 40px;
          background-color: #7e8284;
          border-right: 1px solid #fff;
        }
        .inputs {
          flex: 1;
          height: 100%;
          background-color: #7e8284;
        }
      }
      .loginTips {
        color: #fff;
        font-size: 24px;
        padding: 10px;
      }
      .btn_section {
        width: 400px;
        height: 100px;
        background-color: #7e8284;
        position: relative;
        margin-top: 20px;
        .btn {
          width: 200px;
          height: 50px;
          line-height: 50px;
          font-size: 20px;
          background-color: #5c86aa;
          border-radius: 5px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #fff;
          text-align: center;
          &:hover {
            background-color: #3184ca;
          }
        }
      }
    }
  }
}
</style>


