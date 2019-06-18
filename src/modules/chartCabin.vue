<template>
  <div id="chartCabin">
    <div class="cq_row cq_row1">
      <div class="row1_colomn1 chartPart2">
        <div class="rc_1 margin_b chartPart" ref="waterFullBar1"></div>
        <div class="rc_1 chartPart" ref="lineArea1"></div>
      </div>
      <div class="chartPart row1_colomn2">
        <iframe src="//117.34.118.57:33061/bian/aktj/" frameborder="0" id="frame"></iframe>
      </div>
      <div class="row1_colomn1 chartPart2">
        <div class="rc_1 margin_b chartPart" ref="waterFullBar2"></div>
        <div class="rc_1 chartPart" ref="lineArea2"></div>
      </div>
    </div>
    <div class="cq_row cq_row2">
      <div class="row2_colomn1 chartPart" ref="lineBar1"></div>
      <div class="row2_colomn2 chartPart" ref="lineBar2"></div>
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
      this.chartInit(this.refs[key], key);
    }
  },
  methods: {
    chartInit(el, key) {
      let myChart = echarts.init(el);
      myChart.setOption(this.chartDataList[key]);
    }
  }
};
</script>
<style lang="scss">
#chartCabin {
  width: 100%;
  height: 100%;
  background-color: transparent;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  #frame{
    width: 100%;
    height: 100%;
  }
  .cq_row {
    flex: 2;
    display: flex;
    justify-content: space-between;
    margin:5px;
  }
  .cq_row2{
    flex: 1;
    margin-top: 0;
  }
  .row1_colomn1 {
    flex: 1;
    display: flex;
    flex-direction: column;
    .rc_1{
      flex: 1;
      &.margin_b{
        margin-bottom: 5px;
      }
    }
  }
  .row1_colomn2{
    flex: 1;
    margin: 0 5px;
  }
  .row2_colomn1 {
    flex: 1;
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
.chartPart2{
  width: 100%;
  height: 100%;
  background-color: none;
}
}
</style>


