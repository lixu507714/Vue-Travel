<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-top-bottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">
             {{this.currentCity}}
            </div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-top-bottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper"
               v-for="item of hotCities"
               :key="item.id"
               @click="handleCityClick(item)"
          >
            <div class="button">
              {{item.name}}
            </div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(cityItem, key) of cities" :key="key" :ref="key">
        <div class="title border-top-bottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom"
               v-for="innerItems of cityItem"
               :key="innerItems.id"
               @click="handleCityClick(innerItems)">
            {{innerItems.name}}
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {mapState} from 'vuex'
import Bscroll from 'better-scroll'
export default {
  name: 'cityList',
  props: {
    cities: Object,
    hotCities: Array,
    changeCity: String
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    }) // 展开运算符
  },
  watch: {
    // 这时候用到贞听器，去监听changeCity的变化。
    changeCity () {
      if (this.changeCity) {
        console.log(this.changeCity)
        const element = this.$refs[this.changeCity][0]
        this.scroll.scrollToElement(element) //  TODO  没有滚动到顶部，还未知原因。
      }
    }
  },
  methods: {
    handleCityClick (item) {
      this.$store.dispatch('changeCity', item.name) // 派发一个名字叫changeCity的action。然后吧item.name查 u 能过去。
      // this.changeCity(item.name) // 与上边代码相同的含义 TODO 报错
      this.$router.push('./')
    }
    // ...mapMutations(['changeCity'])
  }
}
</script>

<style lang="stylus" scoped>
@import "../../../assets/styles/main.styl";
.list {
  position: absolute;
  top:1.58rem;
  left: 0;
  right:0;
  bottom:0;
  overflow: hidden;
}
.title {
  color:#666;
  line-height: 0.54rem;
  padding-left: 0.22rem;
  font-size: 0.26rem;
  background: #eee;
}
.border-top-bottom
  &:before
    border-color: #ccc;

  &:after
    border-color: #ccc;

.button-list {
  overflow: hidden;
  padding:0.1rem 0.6rem 0.1rem 0.1rem;
}
.button-wrapper {
  width: 33.3%;
  float:left;

}
.button {
  padding: 0.1rem 0;
  text-align: center;
  margin: 0.1rem;
  border: 0.02rem solid #ccc;
  border-radius: 0.06rem;
}
.item {
  line-height :0.76rem;
  padding-left:0.2rem;
}
.border-bottom {
  border-color: #ccc;
}
</style>
