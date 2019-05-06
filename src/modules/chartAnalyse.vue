<template>
  <div id="chartAnalyse" ref="worldMap">
  </div>
</template>
<script>
import { chartDataList } from "../js/config.js";
let echarts = require("echarts");

export default {
  data() {
    return {};
  },
  mounted() {
      this.chartInit(this.$refs.worldMap);
  },
  methods: {
    chartInit(el) {
      let myChart = echarts.init(el);
      myChart.setOption(chartDataList.worldMap);
    }
  }
};
</script>
<style lang="scss">
#chartAnalyse {
  width: 100%;
  height: 100%;
  background-color: transparent;
  position: relative;
}
</style>


