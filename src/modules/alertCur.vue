<template>
  <div id="alertCur">
    alertCurCur

    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapse: true
    };
  },
  mounted() {
    console.log('alertCur params',this.$route.params.color,this.$route.query.color)

  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang="scss">
#alertCur {
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  .nav{
    max-width: 200px;
    
  }
}
</style>


