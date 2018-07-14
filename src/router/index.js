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
        component: cart,
        meta :{ title: "购物车"}
    },
    {
        path: '/',
        name: 'list',
        component: list,
        meta: { title: "商品列表" }
    },
    {
        path: '/product/:id',
        name: 'product',
        component: product,
        meta: { title: "商品详情" }
    }
  ]
})

