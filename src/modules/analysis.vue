<template>
  <div id="analysis">
    analysis
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  mounted() {},
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
#analysis {
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  .nav{
    max-width: 200px;
    
  }
}
</style>


