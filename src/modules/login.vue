<template>
  <div id="login">
    <div class="loginInfo">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-form>
      <div class="buttons">
        <el-button type="primary" @click="loginIn">登录</el-button>

      </div>
    </div>
  </div>
</template>
<script>
import {getWeather} from '../js/api.js'
export default {
  data() {
    return {
      form: {
        name: "admin"
      }
    };
  },
  mounted() {
    getWeather('北京')
  },
  methods: {
    loginIn(){
      this.$router.push({name:'metering'})
    }
  }
};
</script>
<style lang="scss">
#login {
  width: 100%;
  height: 100%;
  background: url("../img/bj.jpg") no-repeat center center;
  background-size: 100% 100%;
  .loginInfo {
    width: 400px;
    padding:20px;
    background-color: #fff;
    box-shadow: #fff;
    border-radius: 10px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .el-form-item__label{
      text-align: center;
    }
  }
  .buttons{
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
}
</style>


