<template>
  <div id="alert">
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
  mounted() {},
  methods: {
  }
};
</script>
<style lang="scss">
#alert {
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  .nav{
    max-width: 200px;
    
  }
}
</style>


