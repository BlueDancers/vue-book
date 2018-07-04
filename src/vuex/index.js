import Vue from 'vue';
import Vuex from 'vuex';
import product from './product'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    product: product  
  },
  getters: {
    
  },
  //在组件里面使用  {{$store.state.count}} 进行调用
  mutations: { //这和选项用于直接修改state里面的数据
    
  },
  actions: {             //actions适应异步操作
    
  }
})
