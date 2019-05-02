<template>
  <div id="chartEdit">
    <div class="cq_row cq_row1">
      <div class="row1_colomn1 chartPart" ref="gauge1"></div>
      <div class="row1_colomn1 chartPart" ref="gauge2"></div>
      <div class="row1_colomn1 chartPart" ref="gauge3"></div>
      <div class="row1_colomn1 chartPart" ref="gauge4"></div>
      <div class="row1_colomn2 chartPart" ref="radar"></div>
    </div>
    <div class="cq_row cq_row2">
      <div class="row2_colomn1 chartPart" ref="chinaMap"></div>
      <div class="row2_colomn2 chartPart" ref="negativeBar2"></div>
    </div>
  </div>
</template>
<script>
let echarts = require("echarts");
import { chartDataList } from "../js/config.js";

export default {
  data() {
    return {
      refs: {},
      chartDataList: chartDataList
    };
  },
  mounted() {
    this.refs = this.$refs;

    for (let key in this.refs) {
      console.log("refs", this.refs, this.refs[key], key);
      this.chartInit(this.refs[key], key);
    }
  },
  methods: {
    chartInit(el, key) {
      let myChart = echarts.init(el);
      console.log("chartInit", this.chartDataList);
      myChart.setOption(this.chartDataList[key]);
    }
  }
};
</script>
<style lang="scss">
#chartEdit {
  width: 100%;
  height: 100%;
  background-color: transparent;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .cq_row {
    flex: 1;
    display: flex;
    justify-content: space-between;
    margin:5px;
  }
  .cq_row2{
    margin-top: 0;
  }
  .row1_colomn1 {
    flex: 1;
  }
  .row1_colomn2 {
    flex: 2;
    margin-left: 5px
  }
  .row2_colomn1 {
    flex: 2;
  }
  .row2_colomn2 {
    flex: 1;
    margin-left: 5px
  }
  .chartPart {
  width: 100%;
  height: 100%;
  background-color: #122d4a;
}
}
</style>


