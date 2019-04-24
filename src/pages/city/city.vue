<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
    <city-alphabet></city-alphabet>
  </div>
</template>

<script>
import CityHeader from './component/header'
import CitySearch from './component/search'
import CityList from './component/list'
import CityAlphabet from './component/alphabet'
export default {
  name: 'city',
  components: {CityAlphabet, CityList, CitySearch, CityHeader}
}
</script>

<style lang="stylus" scoped>

</style>
