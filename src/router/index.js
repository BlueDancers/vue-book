import Vue from 'vue'
import Router from 'vue-router'
import cart from '../components/cart.vue'
import list from '../components/list.vue'
import product from '../components/product.vue'
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
        path: '/',
        name: 'list',
        component: list
    },
    {
      path: '/product',
      name: 'product',
      component: product
    }
  ]
})

