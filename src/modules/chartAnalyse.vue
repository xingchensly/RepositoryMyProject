<template>
  <div id="chartAnalyse">
    <div class="somePic">
      <iframe src="http://172.93.39.153/AAAAA/" frameborder="0"></iframe>
    </div>
    <div class="zone1 fl">
      <div class="charts1 fl" :ref="'chart'+index" v-for="(value,index) in 3" :key="index"></div>
    </div>
    <div class="zone2 fr">
      <div class="charts1 fl" :ref="'chart2'+index" v-for="(value,index) in 3" :key="index"></div>
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
      let colors = [
        "#3FB1E3",
        "#6BE6C1",
        "#626C91",
        "#1A4968",
        "#5C658A",
        "#FFEE51"
      ];
      if (indx < 2) {
        return {
          title: {
            text: ""
          },
          tooltip: {},
          legend: {
            data: ["电量"],

            textStyle: {
              color: "#fff"
            }
          },
          xAxis: {
            splitLine: { show: false },
            axisLine: {
              lineStyle: {
                color: "#fff"
              }
            },
            axisLabel: {
              color: "#fff"
            },
            data: ["电压", "电流", "电容", "功率", "功效"]
          },
          yAxis: {
            splitLine: { show: false },
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
              name: "油量",
              type: "bar",
              data: [5, 20, 36, 10, 10, 20]
            }
          ],
          color: colors
        };
      } else if (indx < 4) {
        return {
          legend: {
            textStyle: {
              color: "#fff"
            }
          },
          color: colors,
          series: [
            {
              name: "厂房编号",
              type: "pie",
              radius: "55%",
              roseType: "angle",
              data: [
                { value: 235, name: "油压" },
                { value: 274, name: "管压" },
                { value: 310, name: "电压" },
                { value: 335, name: "电流" },
                { value: 400, name: "冷却水流" }
              ]
            }
          ]
        };
      } else if (indx < 6) {
        return {
          color: colors,

          tooltip: {
            trigger: "none",
            axisPointer: {
              type: "cross"
            }
          },
          legend: {
            data: ["2015 蒸汽量", "2016 蒸汽量"]
          },
          grid: {
            top: 70,
            bottom: 50
          },
          xAxis: [
            {
              splitLine: { show: false },

              type: "category",
              axisTick: {
                alignWithLabel: true
              },
              axisLine: {
                onZero: false,
                lineStyle: {
                  color: "#fff"
                }
              },
              axisPointer: {
                label: {
                  formatter: function(params) {
                    return (
                      "蒸汽量  " +
                      params.value +
                      (params.seriesData.length
                        ? "：" + params.seriesData[0].data
                        : "")
                    );
                  }
                }
              },
              data: [
                "2018-1",
                "2018-2",
                "2018-3",
                "2018-4",
                "2018-5",
                "2018-6",
                "2018-7",
                "2018-8",
                "2018-9",
                "2018-10",
                "2018-11",
                "2018-12"
              ]
            },
            {
              splitLine: { show: false },

              type: "category",
              axisTick: {
                alignWithLabel: true
              },
              axisLine: {
                onZero: false,
                lineStyle: {
                  color: "#fff"
                }
              },
              axisPointer: {
                label: {
                  formatter: function(params) {
                    return (
                      "蒸汽量  " +
                      params.value +
                      (params.seriesData.length
                        ? "：" + params.seriesData[0].data
                        : "")
                    );
                  }
                }
              },
              data: [
                "2017-1",
                "2017-2",
                "2017-3",
                "2017-4",
                "2017-5",
                "2017-6",
                "2017-7",
                "2017-8",
                "2017-9",
                "2017-10",
                "2017-11",
                "2017-12"
              ]
            }
          ],
          yAxis: [
            {
              splitLine: { show: false },

              type: "value",

              axisLine: {
                lineStyle: {
                  color: "#fff"
                }
              },
              axisLabel: {
                color: "#fff"
              }
            }
          ],
          series: [
            {
              label: {
                color: "#fff"
              },
              name: "2018 蒸汽量",
              type: "line",
              xAxisIndex: 1,
              smooth: true,
              data: [
                2.6,
                5.9,
                9.0,
                26.4,
                28.7,
                70.7,
                175.6,
                182.2,
                48.7,
                18.8,
                6.0,
                2.3
              ]
            },
            {
              name: "2017 蒸汽量",
              type: "line",
              smooth: true,
              data: [
                3.9,
                5.9,
                11.1,
                18.7,
                48.3,
                69.2,
                231.6,
                46.6,
                55.4,
                18.4,
                10.3,
                0.7
              ]
            }
          ]
        };
      } else {
        return {
          color: colors,
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "cross",
              crossStyle: {
                color: "#fff"
              }
            }
          },
          toolbox: {},
          legend: {
            textStyle: {
              color: "#fff"
            },
            data: ["蒸发量", "蒸汽量", "平均温度"]
          },
          xAxis: [
            {
              splitLine: { show: false },

              axisLine: {
                lineStyle: {
                  color: "#fff"
                }
              },
              axisLabel: {
                color: "#fff"
              },
              type: "category",
              data: [
                "1月",
                "2月",
                "3月",
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月"
              ],
              axisPointer: {
                type: "shadow"
              }
            }
          ],
          yAxis: [
            {
              splitLine: { show: false },

              axisLine: {
                lineStyle: {
                  color: "#fff"
                }
              },
              axisLabel: {
                color: "#fff"
              },
              type: "value",
              name: "水量",
              min: 0,
              max: 250,
              interval: 50,
              axisLabel: {
                formatter: "{value} ml"
              }
            },
            {
              splitLine: { show: false },

              axisLine: {
                lineStyle: {
                  color: "#fff"
                }
              },
              axisLabel: {
                color: "#fff"
              },
              type: "value",
              name: "温度",
              min: 0,
              max: 25,
              interval: 5,
              axisLabel: {
                formatter: "{value} °C"
              }
            }
          ],
          series: [
            {
              name: "蒸发量",
              type: "bar",
              data: [
                2.0,
                4.9,
                7.0,
                23.2,
                25.6,
                76.7,
                135.6,
                162.2,
                32.6,
                20.0,
                6.4,
                3.3
              ]
            },
            {
              name: "蒸汽量",
              type: "bar",
              data: [
                2.6,
                5.9,
                9.0,
                26.4,
                28.7,
                70.7,
                175.6,
                182.2,
                48.7,
                18.8,
                6.0,
                2.3
              ]
            },
            {
              name: "平均温度",
              type: "line",
              yAxisIndex: 1,
              data: [
                2.0,
                2.2,
                3.3,
                4.5,
                6.3,
                10.2,
                20.3,
                23.4,
                23.0,
                16.5,
                12.0,
                6.2
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
#chartAnalyse {
  width: 100%;
  height: 100%;
  background-color: transparent;
  position: relative;
  .somePic {
    width: 100%;
    height: 100%;
    iframe {
      width: 100%;
      height: 100%;
    }
  }
  .chartsZone {
    width: 100%;
    height: 100%;
  }
  .zone1,
  .zone2 {
    width: 450px;
    height: 100%;
    position: absolute;
    top: 0;
  }
  .zone1{
    left: 0;
  }
  .zone2{
    right: 0;
  }
  .charts1 {
    width: 100%;
    height: 200px;
  }
}
</style>


