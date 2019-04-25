<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cities="cities" :hotCities="hotCities"></city-list>
    <city-alphabet :cities="cities"></city-alphabet>
  </div>
</template>

<script>
import CityHeader from './component/header'
import CitySearch from './component/search'
import CityList from './component/list'
import CityAlphabet from './component/alphabet'
import axios from 'axios'
export default {
  name: 'city',
  components: {CityAlphabet, CityList, CitySearch, CityHeader},
  data: function () {
    return {
      cities: {},
      hotCities: []
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then((res) => {
          console.log(res.data.data)
          if (res.data.success && res.data.data) {
            this.cities = res.data.data.cities
            this.hotCities = res.data.data.hotCities
          }
        })
    }

  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
