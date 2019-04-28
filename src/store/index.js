import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: state,
  actions: { // 想再actions执行的时候调用mutations，必须执行一个commit方法。
    changeCity (ctx, city) {
      console.log(ctx) // ctx里面有commit方法
      ctx.commit('changeCity', city)
    }
  },
  mutations: mutations,
  getters: {
    doubleCity (state) {
      return state.city + '' + state.city
    }
  }
})
