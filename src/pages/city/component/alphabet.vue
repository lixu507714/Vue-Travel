<template>
  <ul class="list">
   <li class="item" v-for="(item, key) of cities" :key="key">{{key}}</li>
  </ul>
</template>

<script>
export default {
  name: 'cityAlphabet',
  props: {
    cities: Object
  }
}
</script>

<style lang="stylus" scoped>
@import "../../../assets/styles/main.styl";
.list {
  display:flex;
  flex-direction:column;
  justify-content:center;
  position: absolute;
  top:1.58rem;
  bottom:0;
  width:0.4rem;
  right:0;
}
.item {
  line-height: 0.4rem;
  text-align: center;
  color:$bgColor;
}
</style>
