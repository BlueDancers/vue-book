import Vue from 'vue';
import Vuex from 'vuex';
import product from './product'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    product: []
  },
  getters: {
    //获取并过滤商品名称 用于查询
    getProductName: (state)=>{     //优化代码 将过滤规则放在vuex里面
      let list=[];
      state.product.forEach(element => {
        list.push(element.brand)
      });
      list = Array.from(new Set(list))
      return list;
    },
    getProductColor : (state) => {
      let list = [];
      state.product.forEach(element => {
        list.push(element.color)
      });
      list = Array.from(new Set(list))
      return list;
    } 
  },
                                //在组件里面使用  {{$store.state.count}} 进行调用
  mutations: {                  //这和选项用于直接修改state里面的数据
    setProduct (state,data) {
      state.product = data
    }
  },
  actions: {                    //actions适应异步操作
    getProduct(context) {       //context就是mutations的一个实例,相当于给mutations加了处理异步的中间件
      return new Promise(resolve => {
        setTimeout(() => {
          context.commit('setProduct', product)
          resolve()
        }, 500);
      })
    }
  }
})
