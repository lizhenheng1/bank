<template>
  <div style="height:100%">
    <el-container>
      <el-header height="25%">
        <router-link to="role">role</router-link>
        <router-link to="copy">copy</router-link>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  
};
</script>


<style scoped>
.el-container {
  width: 100%;
  height: 100%;
}
.el-header {
  background: #ccc;
}
.el-main {
  padding-top: 5px;
  padding-bottom: 5px;
}
</style>