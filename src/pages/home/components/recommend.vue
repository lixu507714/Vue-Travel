<template>
  <div class="wrapper">
    <div class="recommend-title">热销推荐</div>
    <ul>
      <router-link tag="li" class="item border-bottom"
                   v-for="item of recommendList"
                   :key="item.id"
                   :to="'detail/'+ item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.img" alt="圆明园">
        </div>

        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '1',
        img: 'http://img1.qunarzz.com/sight/p0/1505/f5/f5f45e1a83537bcb.water.jpg_250x250_63e3520a.jpg',
        title: '北京欢乐谷',
        desc: '北京欢乐谷好玩'
      }, {
        id: '2',
        img: 'http://img1.qunarzz.com/sight/p0/1505/f5/f5f45e1a83537bcb.water.jpg_250x250_63e3520a.jpg',
        title: '北京欢乐谷',
        desc: '北京欢乐谷好玩'
      }, {
        id: '3',
        img: 'http://img1.qunarzz.com/sight/p0/1505/f5/f5f45e1a83537bcb.water.jpg_250x250_63e3520a.jpg',
        title: '北京欢乐谷',
        desc: '北京欢乐谷好玩'
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
.recommend-title {
  line-height :0.8rem;
  text-indent : 0.2rem;
  margin-top:0.2rem;
  background:#eee;
}
.item {
  overflow :hidden;
  display:flex;
  height:1.9rem;
}
.item-img {
  width: 1.7rem;
  height: 1.7rem;
  padding: 0.1rem;
}
.item-info {
  flex : 1;
  padding: 0.1rem;
  min-width : 0;
}
.item-title {
  line-height :0.54rem;
  font-size : 0.32rem;
  ellipsis();
}
.item-desc {
  line-height :0.4rem;
  color:#ccc;
  ellipsis();
}
.item-button {
  line-height : 0.44rem;
  margin-top:0.2rem;
  background: #ff9300;
  padding: 0 0.2rem;
  border-radius: 0.06rem;
}
</style>
