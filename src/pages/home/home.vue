<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-recommend></home-recommend>
  </div>
</template>

<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/swiper'
import HomeRecommend from './components/recommend'
export default {
  name: 'Home',
  components: {
    HomeRecommend,
    HomeSwiper,
    HomeHeader
  }
}
</script>
<style>

</style>
