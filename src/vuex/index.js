import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    count: 0, //数据都保存在state里面
    list:[1,2,3,34,4,5445,4]
  },
  getters: {
    filteredList: state =>{ 
      return state.list.filter(item=>item>10)   //类似计算属性 对数据进行处理
    },
    listCount: (state,getters) => {             //可以依赖其他的getters,把getters作为参数传进去
      return getters.filteredList.length;
    }
  
  },
  //在组件里面使用  {{$store.state.count}} 进行调用
  mutations: { //这和选项用于直接修改state里面的数据
    // increment (state,n=1){
    //   state.count+=n;
    // },
    // decrease (state,n=1) {
    //   state.count-=n;
    // }
    increment (state,n=1){
      state.count+=n;
    },
    decrease(state, params) {
      state.count -= params.count;   //第二种表现形式
    }
  },
  actions: {             //actions适应异步操作
    asyncIncrement (context) {
      return new Promise(resolve =>{
        setTimeout(() => {
           context.commit('increment')
           resolve();
        }, 2000);
      })
    }
  }
})
