<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-top-bottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">
              北京
            </div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-top-bottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hotCities" :key="item.id">
            <div class="button">
              {{item.name}}
            </div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(cityItem, key) of cities" :key="key">
        <div class="title border-top-bottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="innerItems of cityItem" :key="innerItems.id">
            {{innerItems.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'cityList',
  props: {
    cities: Object,
    hotCities: Array
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
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
