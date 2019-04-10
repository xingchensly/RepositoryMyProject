<template>
  <div id="charts">
    <div class="zone1 fl">
      <div class="charts1 fl" :ref="'chart'+index" v-for="(value,index) in 4" :key="index"></div>
    </div>
    <div class="zone2 fr">
      <div class="charts1 fl" :ref="'chart2'+index" v-for="(value,index) in 4" :key="index"></div>
    </div>
  </div>
</template>
<script>
let echarts = require("echarts");

export default {
  data() {
    return {};
  },
  mounted() {
    // this.chartInit()
    let refslist = this.$refs;
    console.log("refs", refslist);
    for (let key in refslist) {
      this.chartInit(refslist[key][0]);
    }
  },
  methods: {
    chartInit(el) {
      let myChart = echarts.init(el);
      myChart.setOption(this.optionCacul());

      // setInterval(function() {
      //   addData(true);
      //   myChart.setOption(option);
      // }, 500);
    },
    optionCacul() {
      let indx = Math.random() * 10;
      if (indx < 5) {
        return {
          title: {
            text: ""
          },
          tooltip: {},
          legend: {
            data: ["销量"]
          },
          xAxis: {
            axisLine: {
              lineStyle: {
                color: "#fff"
              }
            },
            axisLabel: {
              color: "#fff"
            },
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
          },
          yAxis: {
            axisLine: {
              lineStyle: {
                color: "#fff"
              }
            },
            axisLabel: {
              color: "#fff"
            }
          },
          series: [
            {
              name: "销量",
              type: "bar",
              data: [5, 20, 36, 10, 10, 20]
            }
          ]
        };
      } else {
        return {
          series: [
            {
              name: "访问来源",
              type: "pie",
              radius: "55%",
              roseType: "angle",
              data: [
                { value: 235, name: "视频广告" },
                { value: 274, name: "联盟广告" },
                { value: 310, name: "邮件营销" },
                { value: 335, name: "直接访问" },
                { value: 400, name: "搜索引擎" }
              ]
            }
          ]
        };
      }
    }
  }
};
</script>
<style lang="scss">
#charts {
  width: 100%;
  height: 100%;
  background-color: #07294a;
  .zone1,.zone2{
    width: 20%;
    height: 100%;
  }
  .charts1 {
    width: 100%;
    height: 200px;
  }
}
</style>


