<template>
  <div id="course">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
  iframe{
    width: 100%;
    height: 100%;
  }
}
</style>


