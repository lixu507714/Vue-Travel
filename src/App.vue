<template>
  <div id="app">
    <!--<img src="assets/logo.png">-->
    <!--显示的是当前路由地址所对应的内容-->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import "assets/styles/function/function.scss";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
