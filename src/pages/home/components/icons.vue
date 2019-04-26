<template>
  <div class="icons">
    <div class="icon">
     <div class="icon-img">
       <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png">
     </div>
      <p class="icon-desc">景点门票</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeIcons',
    data () {
      return {
      //   swiperOption: {
      //     pagination: '.swiper-pagination',
      //     loop: true
      //   },
      //   swiperList: [{
      //     id: 1,
      //     img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1289507376,355891553&fm=26&gp=0.jpg'
      //   }, {
      //     id: 2,
      //     img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2263276031,4133146447&fm=26&gp=0.jpg'
      //   }]
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
  .icons {
    height:0;
    padding-bottom:50%;
    overflow :hidden;
  }
  .icon {
    position: relative;
    width:25%;
    float: left;
    padding-bottom:25%;
    height: 0;
  }
  .icon-img {
    position:absolute;
    box-sizing :border-box;
    padding: 0.1rem;
    top:0;
    left:0;
    right:0;
    bottom:0.44rem;
  }

  .icon-img-content {
    display: block;
    height:100%;
    margin:0 auto;
  }

  .icon-desc {
    position absolute;
    left:0;
    right:0;
    bottom:0;
    height: 0.44rem;
    line-height:0.44rem;
    text-align: center;
  }

</style>
