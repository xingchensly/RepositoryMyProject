import "../style/s2.css";
import "../style/s1.scss";
import "../style/common.scss";
import "../style/iconfont/iconfont.css";
import Vue from "vue";
import VueRouter from "vue-router";
import App from "../modules/app.vue";
import {router} from "../js/route.js";
// import "./creatSocket.js";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


