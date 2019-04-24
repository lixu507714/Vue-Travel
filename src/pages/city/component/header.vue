<template>
  <div class="city-header">
    城市选择
   <router-link to="/">
     <div class="iconfont header-back">&#xe624;</div>
   </router-link>
  </div>
</template>

<script>
export default {
  name: 'cityHeader'
}
</script>

<style lang="stylus" scoped>
@import "../../../assets/styles/main.styl";
.city-header {
  position: relative;
  overflow: hidden;
  height:$headerHeight;
  background: $bgColor;
  text-align center;
  line-height: $headerHeight;
  color: #ffffff;
  font-size: 0.32rem;
}
.header-back {
  position : absolute;
  width: 0.64rem;
  text-align: center;
  font-size:0.4rem;
  top:0;
  left:0;
  color: #fff;
}
</style>
