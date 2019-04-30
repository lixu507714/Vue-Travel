<template>
  <div class="header">
    <router-link tag="div" to="/" class="header-abs" v-show="!isShow">
      <div class="iconfont header-abs-back-icon">&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show="isShow" :style="opcityStyle">
      <!--<router-link to="/">-->
        <!--<div class="iconfont">&#xe624;</div>-->
      <!--</router-link>-->
      景点详情
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
export default {
  name: 'DetailHeader',
  computed: {
    ...mapState(['city']), // 展开运算符
    ...mapGetters(['doubleCity'])
  },
  data () {
    return {
      isShow: false,
      opcityStyle: 0
    }
  },
  methods: {
    handleScroll () {
      let top = document.documentElement.scrollTop
      if (top > 0) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opcityStyle = {
          opacity
        }
        this.isShow = true
      } else {
        this.isShow = false
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () { // 解绑
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style lang="stylus" scoped>
@import "../../../assets/styles/main.styl";

.header-abs {
  position: absolute;
  left 0.2rem;
  top: 0.2rem;
  width:0.8rem;
  height:0.8rem;
  text-align: center;
  line-height:0.8rem;
  -webkit-border-radius: 0.4rem;
  -moz-border-radius: 0.4rem;
  border-radius: 0.4rem;
  background: rgba(0,0,0,0.8)
}
.header-abs-back-icon {
  color: #fff;
  font-size:0.4rem;
}
.header-fixed {
  z-index:2;
  position: fixed;
  top:0;
  left:0;
  right:0;
  height:$headerHeight;
  line-height:$headerHeight;
  text-align: center;
  color:#fff;
  background: $bgColor;
  font-size:0.32rem;

}

</style>
