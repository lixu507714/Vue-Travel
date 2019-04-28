<template>
  <ul class="list">
   <li class="item"
       v-for="item of changeCity"
       :key="item"
       :ref="item"
       @touchstart="hangleTouchStart"
       @touchmove= "handleTouchMove"
       @touchend="handleTouchEnd"
       @click="handleClick"
   >{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: 'cityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: 0
    }
  },
  updated () { // s生命周期钩子   当页面的数据被更新的时候
    this.startY = this.$refs['A'][0].offsetTop
  },
  computed: {
    changeCity () {
      const arr = []
      for (let i in this.cities) {
        arr.push(i)
      }
      return arr
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('change', e.target.innerText)
    },
    hangleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.timer) {
        clearTimeout(this.timer)
      } else {
        setTimeout(() => {
          if (this.touchStatus) { // TODO 计算元素到顶部的高度，手指移动的高度以及字母所在的位置。 视频 8-6
            const touchY = e.touches[0].clientY - 79
            const index = Math.floor((touchY - this.startY) / 20)
            console.log(index)
            if (index >= 0 && index < this.changeCity.length) {
              this.$emit('change', this.changeCity[index])
            }
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
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
