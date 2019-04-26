<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="img" :src="item.img">
      </swiper-slide>
      <!--<swiper-slide><img class="img" src="../../../assets/img/swiper2.jpg"></swiper-slide>-->
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: 1,
        img: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/a9658b2ee2c2c6de227c9710a8b04d48.jpg_750x200_f38fba28.jpg'
        // img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1289507376,355891553&fm=26&gp=0.jpg'
      }, {
        id: 2,
        img: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/2df3ba0f23801d7ed5607f4767a18482.jpg_750x200_b4d6aa93.jpg'
        // img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2263276031,4133146447&fm=26&gp=0.jpg'
      }]
    }
  }
}
</script>
<!--.wrapper {-->
<!--overflow :hidden;-->
<!--width:100%;-->
<!--height:0;-->
<!--}-->
<style lang="stylus" scoped>
@import "../../../assets/styles/main.styl";
  .img {
    width:100%;
  }

</style>
