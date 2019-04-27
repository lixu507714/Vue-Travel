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
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeRecommend,
    HomeSwiper,
    HomeHeader
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
        .then((res) => {
          console.log(res)
        }).catch()
    },
    getHomeInfoSuss (res) {
      console.log(res)
    }
  },
  mounted () { // 生命周期函数
    this.getHomeInfo()
  }
}
</script>
<style>


</style>
