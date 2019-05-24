<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-footer></home-footer>
  </div>
</template>

<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/icons'
import HomeRecommend from './components/recommend'
import axios from 'axios'
import { mapState } from 'vuex'
import HomeFooter from './components/footer'
export default {
  name: 'Home',
  components: {
    HomeFooter,
    HomeRecommend,
    HomeSwiper,
    HomeHeader,
    HomeIcons
  },
  data () {
    return {
      lastCity: ''
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city)
        .then((res) => {
          console.log(res)
        }).catch()
    },
    getHomeInfoSuss (res) {
      console.log(res)
    }
  },
  mounted () { // 生命周期函数  当页面被挂载的时候
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () { // 当页面显示的时候  TODO activated 和keep alive 同用。提高性能。
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>
<style>

</style>
