<template>
  <div id="chartQuery">
    <div class="cq_row cq_row1">
      <div class="row1_colomn1 chartPart" ref="pie">
      </div>
      <div class="row1_colomn2 chartPart" ref="pies">
      </div>
      <div class="row1_colomn3 chartPart" ref="paraller">
      </div>
    </div>
    <div class="cq_row cq_row2">
      <div class="row1_colomn1 chartPart" ref="emptyPis">
      </div>
      <div class="row1_colomn2 chartPart" ref="dash"></div>
      <div class="row1_colomn3 chartPart" ref="bar"></div>
    </div>
    <div class="cq_row cq_row3">
      <div class="chartPart" ref="longBar"></div>
    </div>
  </div>
</template>
<script>
let echarts = require("echarts");
import {chartDataList} from "../js/config.js";
export default {
  data() {
    return {
      refs:{},
      chartDataList:chartDataList
    };
  },
  mounted() {
    this.refs = this.$refs;

    for (let key in this.refs) {
      console.log('refs',this.refs,this.refs[key],key)

      this.chartInit(this.refs[key],key);
    }
  },
  methods: {
    chartInit(el,key) {
      let myChart = echarts.init(el);
      console.log('chartInit',this.chartDataList)
      myChart.setOption(this.chartDataList[key]);
    }
  }
};
</script>
<style lang="scss">
#chartQuery {
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
    margin:0 5px;
  }
  .cq_row2{
    margin: 5px;
  }
  .row1_colomn1 {
    flex: 1;
  }
  .row1_colomn2 {
    margin: 0 5px;
    flex: 2;
  }
  .row1_colomn3 {
    flex: 2;
  }
  .chartPart {
    width: 100%;
    height: 100%;
    background-color: #122d4a;
  }
}
</style>


