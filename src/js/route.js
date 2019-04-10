import VueRouter from "vue-router";

import course from "../modules/course.vue";
import charts from "../modules/charts.vue";
import management from "../modules/management.vue";
import alert from "../modules/alert.vue";
import alertCur from "../modules/alertCur.vue";
import alertHistory from "../modules/alertHistory.vue";
import analysis from "../modules/analysis.vue";
import login from "../modules/login.vue";
import user from "../modules/user.vue";

export let routes = [
  {
    path: "/user",
    name: "user",
    component: user,
    children:[
        {
          path: "/course",
          name: "course",
          component: course,
        },
        {
          path: "/alert",
          name: "alert",
          component: alert,
          children: [
            {
              path: "alertCur",
              name: "alertCur",
              component: alertCur,
            },
            {
              path: "alertHistory",
              name: "alertHistory",
              component: alertHistory
            }
          ]
        },
        {
          path: "/charts",
          name: "charts",
          component: charts
        },
        {
          path: "/management",
          name: "management",
          component: management
        },
        {
          path: "/analysis",
          name: "analysis",
          component: analysis
        },
        {
          path: "/",
          redirect: "/course"
        }
      ]
  },
  {
    path: "/login",
    name: "login",
    component: login
  },
  {
    path:"/",
    redirect:"/login"
  }
];
export let router = new VueRouter({
  routes
});
router.beforeEach((to, from, next) => {
    next()
})
