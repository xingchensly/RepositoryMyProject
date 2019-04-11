<template>
  <div id="course">
    <!-- <template v-for="(value,index) in urlList" >
      <iframe v-if="nav==index" :src="value" frameborder="0" :key="index" :style="index>1?'padding-top:60px':''"></iframe>
    </template>
    <div class="mask">
      <template v-for="(value,index) in navList">
        <el-button type="primary" @click="nav=index" v-if="index==nav" class="active" :key="index">{{value}}</el-button>
        <el-button type="primary" @click="nav=index" v-else :key="index">{{value}}</el-button>
      </template>
    </div> -->

  </div>
</template>
<script>
export default {
  data() {
    return {
      nav:0,
      urlList:[
        "//sc-ken.wise-paas.com/scene.html?org_id=2&tag=scenes/DEMO/LKOFFICE.json",
        "//sc-ken.wise-paas.com/scene.html?org_id=2&tag=scenes/DEMO/LKBUILDING.json",
        "//www.hightopo.com/demo/metering-station/",
        "//www.hightopo.com/demo/large-screen/index.html",
        "//www.hightopo.com/demo/CoolingSystem/",
        "//www.hightopo.com/demo/gas-pipeline/",
        "//www.hightopo.com/demo/htap/index.html",
      ],
      navList:[
        'demon1',
        'demon2',
        'demon3',
        'demon4',
        'demon5',
        'demon6',
        'demon7',
      ]
    };
  },
  computed:{
  },
  mounted() {},
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
  .mask{
    width: 100%;
    height: 60px;
    padding: 10px 0;
    box-sizing: border-box;
    position: absolute;
    background-color: #525252;
    top:0;
    left: 0;
    .active{
      background-color: #405AFF;
    }
  }
  iframe{
    width: 100%;
    height: 100%;
  }
}
</style>


