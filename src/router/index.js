import Vue from 'vue'
import Router from 'vue-router'
import cart from '../views/cart.vue'
import list from '../views/list.vue'
import product from '../views/product.vue'
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
      path: '/product/:id',
      name: 'product',
      component: product
    }
  ]
})

