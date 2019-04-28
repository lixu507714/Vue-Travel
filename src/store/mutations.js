export default {
  // 改变共用的数据
  changeCity (state, city) { // state公用数据
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  }
} // 组件调用action，action调用mutations，mutations去改变state数据
// 同步的对数据进行改变
