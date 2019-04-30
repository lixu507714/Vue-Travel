<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/banner'
import DetailHeader from './components/header'
import DetailList from './components/list'
export default {
  name: 'Detail',
  components: {DetailList, DetailHeader, DetailBanner},
  data () {
    return {
      list: [
        {
          title: '成人票',
          children: [
            {
              title: '成人票 - 五一活动'
            },
            {
              title: '成人票 - 五一活动'
            },
            {
              title: '成人票 - 五一活动'
            }
          ]
        }, {
          title: '儿童票',
          children: [
            {
              title: '儿童票 - 五一活动'
            }
          ]
        }, {
          title: '优惠票',
          children: [
            {
              title: '儿童票 - 五一活动'
            }
          ]
        }, {
          title: '团票',
          children: [
            {
              title: '儿童票 - 五一活动'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.content {
  height:50rem;
}
</style>
