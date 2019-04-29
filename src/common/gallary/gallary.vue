<template>
  <div class="container" @click="changeBanner">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide
          v-for="item of list"
          :key="item">
          <img class="img" :src="item">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    list: Array,
    default: function () {
      return ['http://img1.qunarzz.com/sight/p0/1611/8c/8c31ff91d910f6ada3.img.jpg_r_800x800_5fcc807f.jpg',
        'http://img1.qunarzz.com/sight/p0/1611/98/982abef16c8470daa3.img.jpg_r_800x800_aff1f252.jpg']
    }
  },
  methods: {
    changeBanner () {
      this.$emit('changeBanner')
    }
  },
  data: function () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.container >>> .swiper-container {
  overflow:inherit;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 22;
  position: fixed;
  left:0;
  right:0;
  top:0;
  bottom:0;
  background: #000;
}
.wrapper {
  background:#fff;
  width:100%;
  height:0;
  /*overflow: hidden;*/
  padding-bottom:66%;
}
.img {
  width:100%;
}
.swiper-pagination {
  color: #ffffff;
  bottom:-1rem;
}
</style>
