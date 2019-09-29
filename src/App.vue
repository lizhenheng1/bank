<template>
  <div id="bank" v-cloak>
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isRouterAlive: true
    };
  },
  provide() {
    return {
      reload: this.reload
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body,
html {
  width: 100%;
  height: 100%;
  background: #062e5f;
  padding: 8px;
  box-sizing: border-box;
}
[v-cloak] {
  display: none !important;
}
#bank {
  height: 100%;
  background: #fff;
}
</style>
