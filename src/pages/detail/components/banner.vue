<template>
  <div class="banner">
    <img src="http://img1.qunarzz.com/sight/p0/1602/68/68aa05adb5315f9990.water.jpg_600x330_0dcecae1.jpg" alt="" class="banner-img">
    <div class="banner-info">
      <div class="banner-title">大连圣亚海洋世界</div>
      <div class="banner-number"><span class="iconfont">&#xe632;</span> 10</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBanner'
}
</script>

<style lang="stylus" scoped>
.banner {
  position: relative
  overflow: hidden;
  height : 0;
  padding-bottom:55%;
}
.banner-img {
  width:100%;
}
.banner-info {
  display: flex;
  position: absolute;
  left:0;
  line-height:0.6rem;
  right:0;
  bottom:0;
  color: #ffffff;
  background-image: linear-gradient(top, rgba(0,0,0,0),rgba(0,0,0,0.8))
}
.banner-title {
  flex:1;
  font-size:0.32rem;
  padding:0 0.2rem;
}
.banner-number {
  height:0.32rem;
  margin-top: 0.14rem;
  padding:0 0.4rem;
  line-height:0.4rem;
  border-radius:0.2rem;
  background: rgba(0, 0, 0, 0.8 )
  font-size:0.24rem;
}
.iconfont {
  font-size: 0.24rem;
}
</style>
