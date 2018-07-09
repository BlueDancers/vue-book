<template>
  <div>
    <div class="cart" v-show="isShow">
      <div class="cart-header" >
        <p class="cart-title">购物清单</p>
        <div class="cart-header-main">
          <div class="cart-info">商品信息</div>
          <div class="cart-price">单价</div>
          <div class="cart-count">数量</div>
          <div class="cart-cost">小计</div>
          <div class="cart-delete">删除</div>
        </div>
      </div>
      <div class="cart-content-main">
        <div class="cart-content-list" v-for="item in list" :key="item.id">
          <div class="cart-info">
            <img :src="item.image" alt="">
            <span>{{item.name}}</span>
          </div>
          <div class="cart-price"> ￥{{ item.cost }} </div>
          <div class="cart-count"> 
            <span class="cart-control-minus" @click="miunsCart(item.id)">-</span>
              {{ item.count }}  
            <span class="cart-control-add"  @click="addCart(item.id)">+</span>  
          </div>
          <div class="cart-cost"> {{ item.cost * item.count }} </div>
          <div class="cart-delete" @click="deleteCart(item.id)">删除</div>
        </div>
      </div>
      <div class="cart-footer">
          <div class="cart-footer-desc">
            <p>共计<span> {{ countAll }} </span>件商品</p>
          </div>
          <div class="cart-footer-money"><p> 应付总金额<span> ￥{{ countMoney }}</span></p></div>
          <div class="cart-footer-button">
            <button>现在结算</button>
          </div>
      </div>
    </div>
    <div v-show="!isShow">
      购物车为空,请添加商品
    </div>
</div>
  
</template>

<script>
export default {
  data() {
    return {
      list: this.$store.state.addCar //vuex里面获取购物车里面的物品
    }
  },
  computed: {
    isShow() {
      if (this.list.length == 0) {
        return false
      } else {
        return true
      }
    },
    countAll() {
      return this.list.length //获取商品数量
    },

    countMoney() {
      //获取商品总价格
      let money = 0
      this.$store.state.addCar.forEach(element => {
        money += element.cost * element.count
      })
      return money
    }
  },
  methods: {
    deleteCart(cartId) {
      //删除购物车里面的东西
      this.$store.commit('deleteCart', cartId)
    },
    addCart(cartId) {
      this.$store.commit('addCart', cartId)
    },
    miunsCart(cartId) {
      this.$store.commit('miunsCart', cartId)
    }
  }
}
</script>

<style lang="less">
.cart {
  border: 1px solid #dddee1;
  border-radius: 10px;
  background-color: #f8f8f9;
  margin: 32px;
  .cart-header {
    .cart-title {
      padding: 16px 32px;
      background-color: #fff;
    }
    .cart-header-main div:not(:first-child) {
      display: inline-block;
      text-align: center;
    }
    .cart-header-main {
      border: 1px solid #dddee1;
      overflow: hidden;
      padding: 8px 32px;
      .cart-info {
        display: inline-block;
        width: 55%;
      }
      .cart-price {
        width: 10%;
        text-align: center;
      }
      .cart-count {
        width: 10%;
      }
      .cart-cost {
        width: 10%;
      }
      .cart-delete {
        width: 10%;
      }
    }
  }
  .cart-content-main {
    .cart-content-list div:not(:first-child) {
      display: inline-block;
      text-align: center;
      position: relative;
      bottom: 20px;
    }
    .cart-content-list {
      background-color: #fff;
      overflow: hidden;
      padding: 0px 32px;
      height: 60px;
      border-bottom: 1px dashed #e9eaec;
      .cart-info {
        display: inline-block;
        width: 55%;
        img {
          height: 50px;
          margin: 3px;
        }
        span {
          text-align: center;
          position: relative;
          bottom: 20px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      .cart-price {
        width: 10%;
      }
      .cart-count {
        width: 10%;
        .cart-control-minus,
        .cart-control-add {
          display: inline-block;
          width: 24px;
          height: 24px;
          line-height: 22px;
          border-radius: 50%;
          background-color: #f8f8f9;
          box-shadow: 0 1px 1px #dddee1;
          cursor: pointer;
          user-select: none;
        }
      }
      .cart-cost {
        width: 10%;
      }
      .cart-delete {
        width: 10%;
        color: #2d8cf0;
        cursor: pointer;
      }
    }
  }
  .cart-footer {
    display: flex;
    justify-content: flex-end;
    padding: 32px;
    .cart-footer-desc {
      display: flex;
      align-items: center;
      p {
        span {
          color: red;
          font-size: 20px;
        }
      }
    }
    .cart-footer-money {
      display: flex;
      align-items: center;
      p {
        span {
          color: red;
          font-size: 20px;
        }
      }
    }
    .cart-footer-button {
      button {
        color: white;
        border: 1px solid #2d8cf0;
        background-color: #2d8cf0;
        border-radius: 5px;
        padding: 8px 32px;
        font-size: 18px;
      }
    }
  }
  .cart-footer div {
    padding: 0 16px;
  }
}
</style>
