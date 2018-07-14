import Vue from 'vue';
import Vuex from 'vuex';
import product from './product'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    product: [], //商品列表
    addCar: [] //购物车
  },
  getters: {
    //获取并过滤商品名称 用于查询
    getProductName: (state) => { //优化代码 将过滤规则放在vuex里面
      let list = [];
      state.product.forEach(element => {
        list.push(element.brand)
      });
      list = Array.from(new Set(list))
      return list;
    },
    //获取并过滤商品颜色
    getProductColor: (state) => {
      let list = [];
      state.product.forEach(element => {
        list.push(element.color)
      });
      list = Array.from(new Set(list))
      return list;
    }
  },
  //在组件里面使用  {{$store.state.count}} 进行调用
  mutations: { //这和选项用于直接修改state里面的数据
    setProduct(state, data) {
      state.product = data
    },

    setaddCar(state, data) { //添加进入购物车
      let isCart = state.addCar.find(item => item.id === data.id) //如果没有找到就返回undefined,找到就返回找到的数组
      if (isCart) {
        isCart.count++;
      } else {
        state.addCar.push({
          id: data.id,
          name: data.name,
          brand: data.brand,
          image: data.image,
          sales: data.sales,
          cost: data.cost,
          color: data.color,
          count: 1
        }) //当加入购物车的时候 添加字段 count (数量) 以便于购物车的实现
      }
      alert("您已加入购物车")
    },

    deleteCart(state, id) { //删除购物车里面的商品
      var index = state.addCar.findIndex(item => item.id === id) //返回匹配到的数组出现的位置
      state.addCar.splice(index, 1)
    },

    addCart(state, id) {
      var index = state.addCar.findIndex(item => item.id === id)   //获取数组的下标
      var count = ++state.addCar[index].count; //数量+1
      Vue.set(state.addCar[index], "count", count)
    },

    miunsCart(state, id) {
      var index = state.addCar.findIndex(item => item.id === id)
      console.log("数组的位置是" + index);
      if (state.addCar[index].count == 0) {
        alert("数量不可以为0")
      }else {
        state.addCar[index].count--;
      }
    },
  },
  actions: { //actions适应异步操作
    getProduct(context) { //context就是mutations的一个实例,相当于给mutations加了处理异步的中间件
      return new Promise(resolve => {
        setTimeout(() => {
          context.commit('setProduct', product)
          resolve()
        }, 500);
      })
    }
  }
})
