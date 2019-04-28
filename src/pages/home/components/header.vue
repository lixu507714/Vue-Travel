<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>

    <router-link to="/city">
      <div class="header-right">{{this.$store.state.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>
<style lang="stylus" scoped>
/*@import "../../../assets/styles/main.scss";*/
@import "../../../assets/styles/main.styl";
/*@import "～@/assets/styles/main.styl";    @ 代表src目录*/
.header{
  display: flex;
  line-height: $headerHeight;
  background: $bgColor;
  color: #fff;
}
  .header-left {
    width: 0.64rem;
    float: left;
  }
  .header-input {
    flex: 1;
    height: 0.64rem;
    line-height: 0.64rem;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    border-radius: 0.1rem;
    background: #ffffff;
    padding-left: 0.2rem;
    margin-bottom: 0.12rem;
  }

  .header-right {
    width: 1.24rem;
    float: right;
    text-align: center;
    color: #fff;
  }

  .arrow-icon {
    font-size: 0.24rem;
  }

  .back-icon {
    text-align center;
    font-size:0.4rem;
  }

</style>
