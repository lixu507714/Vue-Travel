<template>
  <div>
    <div class="search">
      <input v-model="value" class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content" v-show="value" ref="search">
      <ul class="search-ul">
        <li class="search-item border-bottom"
            v-for="item of list" :key="item"
            @click="handleCityClick(item)"
        >{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'citySearch',
  props: {
    citiesSearch: Object
  },
  data: function () {
    return {
      value: '',
      list: [],
      timer: null
    }
  },
  methods: {
    handleCityClick (item) {
      this.$store.dispatch('changeCity', item.name) // 派发一个名字叫changeCity的action。然后吧item.name查 u 能过去。
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    value () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.value) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const arr = []
        for (let i in this.citiesSearch) {
          this.citiesSearch[i].forEach((item) => {
            if (item.spell.indexOf(this.value) > -1 || item.name.indexOf(this.value) > -1) {
              arr.push(item)
            }
          })
        }
        this.list = arr
      }, 300)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  }
}
</script>

<style lang="stylus" scoped>
@import "../../../assets/styles/main.styl";
.search {
  height:0.72rem;
  background: $bgColor;
  padding:0 0.1rem;
}
.search-input {
  box-sizing : border-box;
  height: 0.62rem;
  line-height: 0.62rem;
  width:100%;
  text-align: center;
  border-radius:0.06rem;
  color: #666;
  padding: 0 0.1rem;
}
.search-content {
  overflow: hidden;
  position:absolute;
  top:1.58rem;
  left:0;
  right:0;
  bottom:0;
  background: #eee;
  z-index:2;
}
.search-item {
  line-height:0.62rem;
  padding-left:0.2rem;
  color: #666;
  background: #ffffff;
}
</style>
