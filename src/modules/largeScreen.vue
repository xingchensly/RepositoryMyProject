<template>
  <div id="largeScreen">
      <iframe :src="urlList.largeScreen" ></iframe>
  </div>
</template>
<script>
import {urlList} from "../js/config.js";
export default {
  data() {
    return {
      nav:0,
      urlList:urlList,
    };
  },
  computed:{
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="scss">
#largeScreen {
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


