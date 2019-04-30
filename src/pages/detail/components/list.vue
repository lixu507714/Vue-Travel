<template>
  <div class="item">
    <div class="item-title border-bottom" v-for="item of list" :key="item.name">
      <span class="item-title-icon">
        {{item.title}}
      </span>
      <div v-show="item.children" class="item-title-child">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  },
  methods: {

  }
}
</script>
<style lang="stylus" scoped>
@import "../../../assets/styles/main.styl";
.item-title {
  line-height:0.8rem;
  font-size:0.32rem;
  padding:0 0.2rem;
}
.item-title-child {
  padding:0 0.2rem;
}
</style>
