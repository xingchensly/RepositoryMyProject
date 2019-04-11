<template>
  <div class="container">
    <div class="top clearfix">
      <div>
        <i class="el-icon-menu menuIcon pointer" @click="switchNavStyle"></i>
        <img src="../img/logo.png" class="logo" alt>
      </div>
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        background-color="#3c8dbc"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">退出</el-menu-item>
        <el-submenu index="2">
          <template slot="title">个人账户</template>
          <el-menu-item index="2-1">修改密码</el-menu-item>
          <el-menu-item index="2-2">注销</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="iconfont icon-alert1" style="color:#fff"></i>
          </template>
          <el-menu-item index="3-1">报警消息</el-menu-item>
          <el-menu-item index="3-2">调度消息</el-menu-item>
          <el-menu-item index="3-2">流程消息</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <div class="content">
      <div class="nav_leftSide">
        <el-menu
          :default-active="curNav"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          @select="handleSelect"
          :collapse="isCollapse"
          :unique-opened="true"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="iconfont icon-coursera"></i>
              <span slot="title">实时流程</span>
            </template>
            <el-submenu index="1-1">
              <template slot="title">XXXX1车间</template>
              <el-menu-item index="1-1-1">xxxx工段视频</el-menu-item>
              <el-menu-item index="1-1-2">xxxx工段视频</el-menu-item>
            </el-submenu>
            <el-menu-item index="1-2">XXXX2车间</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="iconfont icon-alert"></i>
              <span slot="title">报警记录</span>
            </template>
            <el-menu-item index="2-1">实时报警</el-menu-item>
            <el-menu-item index="2-2">历史报警</el-menu-item>
            <el-menu-item index="2-3">报警记录</el-menu-item>
            <el-menu-item index="2-4">报警设置</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="iconfont icon-chart"></i>
              <span slot="title">报表分析</span>
            </template>
            <el-menu-item index="3-1">查询报表</el-menu-item>
            <el-menu-item index="3-2">填报报表</el-menu-item>
            <el-menu-item index="3-3">统计分析</el-menu-item>
            <el-menu-item index="3-4">驾驶舱</el-menu-item>
            <el-menu-item index="3-5">数据钻取</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="iconfont icon-hetongguanli"></i>
              <span slot="title">系统管理</span>
            </template>
            <el-menu-item index="4-1">人员管理</el-menu-item>
            <el-menu-item index="4-2">角色管理</el-menu-item>
            <el-menu-item index="4-3">资源管理</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="iconfont icon-analysis"></i>
              <span slot="title">数据调试</span>
            </template>
            <el-menu-item index="5-1">点表配置</el-menu-item>
            <el-menu-item index="5-2">链路配置</el-menu-item>
            <el-menu-item index="5-3">数据库配置</el-menu-item>
            <el-menu-item index="5-4">调试界面</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
      <div class="c_content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import { routes } from "../js/route.js";
import {mapState} from "vuex";
export default {
  data() {
    return {
      navEls: [],
      mydata: "sly",
      curNav: "1",
      isCollapse: true
    };
  },
  computed:{
    ...mapState(['login'])
  },
  components: {},
  mounted() {
console.log(1,this.$store)

  },
  methods: {
    switchNavStyle() {
      this.isCollapse = !this.isCollapse;
      // js修改侧栏宽度
      // if (this.isCollapse) {
      //   if (this.navEls.length == 0)
      //     this.navEls = document.getElementsByClassName("el-submenu__title");
      //   console.log("this.navEls", this.navEls);
      //   setTimeout(() => {
      //     for (let i = 2; i < this.navEls.length; i++) {
      //       this.navEls[i].style["padding-left"] = "8px";
      //     }
      //   },500);
      // }
    },
    // sendmessage() {
    //   console.log("sendmessage");
    //   WS.send("start");
    // },
    // closemessage() {
    //   console.log("closemessage");
    //   WS.close();
    // },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.curNav = keyPath[0];
      console.log("routes", routes[0].children[this.curNav - 1].name);

      // this.$router.push(routes[0].children[this.curNav-1].name)
      this.$router.push({ name: routes[0].children[this.curNav - 1].name });
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang="scss">
.container {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #fff;
  // .el-menu--collapse {
  //   width: 35px;
  // }
  .el-menu--horizontal > .el-submenu,
  .el-menu--horizontal > .el-menu-item {
    float: right;
  }
}
.top {
  position: relative;
  .menuIcon {
    position: absolute;
    left: 20px;
    width: 50px;
    height: 60px;
    line-height: 60px;
    font-size: 30px;
    z-index: 2;
  }
  .logo {
    position: absolute;
    left: 60px;
    height: 50px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
  }
  // .el-menu--horizontal>.el-submenu .el-submenu__title,.el-menu--horizontal>.el-menu-item{
  //   height: 40px;
  //   line-height: 40px;
  // }
}
.content {
  position: absolute;
  width: 100%;
  // top: 40px;
  top: 60px;
  bottom: 0;
  display: flex;
  .nav_leftSide {
    // width: 200px;
    background-color: #545c64;
    .el-submenu__title {
      padding-right: 40px;
    }
    ul {
      border: none !important;
    }
  }
  .c_content {
    flex: 1;
    overflow: hidden;
  }
}
</style>


