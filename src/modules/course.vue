<template>
  <div id="course">
    <template v-for="(value,index) in urlList">
      <iframe
        v-if="nav==index"
        :src="value"
        frameborder="0"
        :key="index"
        :style="index>0?'padding-top:60px':''"
      ></iframe>
    </template>
    <div class="mask">
      <template v-for="(value,index) in navList">
        <el-button
          type="primary"
          @click="nav=index"
          v-if="index==nav"
          class="active"
          :key="index"
        >{{value}}</el-button>
        <el-button type="primary" @click="nav=index" v-else :key="index">{{value}}</el-button>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nav: 0,
      urlList: [
        "//sc-ken.wise-paas.com/scene.html?org_id=2&tag=scenes/DEMO/LKOFFICE.json",
        "//www.hightopo.com/demo/metering-station/",
        "//www.hightopo.com/demo/large-screen/index.html",
        "//www.hightopo.com/demo/CoolingSystem/",
        "//www.hightopo.com/demo/gas-pipeline/",
        "//www.hightopo.com/demo/htap/index.html"
      ],
      navList: [
        "LKOFFICE",
        "metering",
        "largeScreen",
        "CoolingSystem",
        "gasPipeline",
        "htap"
      ]
    };
  },
  computed: {},
  mounted() {
    let obsj = {
      content: {
        agentId: "E0025DCB898B6987",
        type: "LoRaSensor",
        data: [
          {
            temperature: "26.60",
            humidity: "43.10",
            recordIndex: 1,
            batVol: "0.00",
            fallingTime: "",
            fallingIndex: 0,
            alarmFlag: 0,
            estimatedCapacity: 70,
            ts: "1556257896000",
            tsTest: "1570665600000"
          },
          {
            temperature: "26.80",
            humidity: "43.10",
            recordIndex: 2,
            batVol: "0.00",
            fallingTime: "",
            fallingIndex: 0,
            alarmFlag: 0,
            estimatedCapacity: 70,
            ts: "1556257956000",
            tsTest: "1570665600000"
          },
          {
            temperature: "26.90",
            humidity: "42.30",
            recordIndex: 3,
            batVol: "0.00",
            fallingTime: "",
            fallingIndex: 0,
            alarmFlag: 0,
            estimatedCapacity: 70,
            ts: "1556258016000",
            tsTest: "1570665600000"
          },
          {
            temperature: "27.10",
            humidity: "42.00",
            recordIndex: 4,
            batVol: "0.00",
            fallingTime: "",
            fallingIndex: 0,
            alarmFlag: 0,
            estimatedCapacity: 70,
            ts: "1556258076000",
            tsTest: "1570665600000"
          }
        ]
      },
      commCmd: 0,
      agentID: "D0D8EC03B32589E2",
      handlerName: "StoreSenseData",
      sendTS: { $date: 1556258201473 }
    };
  },
  methods: {}
};
</script>
<style lang="scss">
#course {
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  position: relative;
  overflow: hidden;
  .mask {
    width: 100%;
    height: 60px;
    padding: 10px 0;
    box-sizing: border-box;
    position: absolute;
    background-color: #525252;
    top: 0;
    left: 0;
    .active {
      background-color: #405aff;
    }
  }
  iframe {
    width: 100%;
    height: 100%;
  }
}
</style>


