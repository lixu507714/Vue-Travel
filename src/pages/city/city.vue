<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
  </div>
</template>

<script>
import CityHeader from './component/header'
import CitySearch from './component/search'
import CityList from './component/list'
export default {
  name: 'city',
  components: {CityList, CitySearch, CityHeader}
}
</script>

<style lang="stylus" scoped>

</style>
