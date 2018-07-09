// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

// router.beforeEach((to, from, next) => {
//   console.log(to);    //即将要进入的路由对象
//   console.log(from);  //当前导航要离开的路由对象
  
//   next();             //调用该方法,才能进入下一个钩子
// })