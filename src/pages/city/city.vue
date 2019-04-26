<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
  </div>
</template>

<script>
import CityHeader from './component/header'
import CitySearch from './component/search'
export default {
  name: 'city',
  components: {CitySearch, CityHeader}
}
</script>

<style lang="stylus" scoped>

</style>
