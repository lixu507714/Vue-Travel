import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: 'shanghai'
  },
  actions: { // 想再actions执行的时候调用mutations，必须执行一个commit方法。
    changeCity (ctx, city) {
      console.log(ctx) // ctx里面有commit方法
      console.log(city)
      ctx.commit('changeCity', city)
    }
  },
  mutations: { // 改变共用的数据
    changeCity (state, city) { // state公用数据
      console.log(state)
      console.log(city)
      state.city = city
    }
  } // 组件调用action，action调用mutations，mutations去改变state数据
})
