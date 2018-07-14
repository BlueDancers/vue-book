+0<template>
  <div class="product">
    <div class="product-image">
      <img :src="list.image" :alt="list.name">
    </div>
    <div class="product-info">
      <div class="product-text">
        <p class="product-text-name">{{list.name}}</p>
        <p class="product-text-cost">￥{{list.cost}}</p>
        <p class="product-text-button">
           <button @click="addCart(list)">加入购物车</button>
        </p>
      </div>
        
    </div>
  </div>
</template>

<script>
  export default {
    created() {
      //let id = this.$route.params.id*1   //获取路由的标记
      let id = parseInt(this.$route.params.id)
      let list;                        //储存查看的商品
      
      if(this.$store.state.product.length == 0) {
        this.$store.dispatch('getProduct').then(() => {
          console.log("加载数据");
          this.list = this.$store.state.product.filter(item => item.id === id)[0]  
        })
      }else {
        this.list =  this.$store.state.product.filter(item => item.id === id)[0] 
        console.log(this.list);
      }
      
    },
    data () {
      return {
        list: []    //获取商品
      }
    },
    methods: {
      addCart (data) {
        this.$store.commit('setaddCar',data)
      }
    }
  }
</script>

<style lang="less" scoped>
.product {
  border: 1px solid #dddee1;
  border-radius: 10px;
  padding: 32px;
  margin: 32px;
  display: flex;
  justify-content: flex-start;
  .product-image {
    width: 50%;
    height: 560px;
    margin: 0 auto;
    img {
      height: 100%;
      margin-left: 10%;
    }
  }
  .product-info {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
     .product-text {
       
       .product-text-name {
          font-size: 2em;
          font-weight: bold;
          text-align: center;
       }
       .product-text-cost {
         color: red;
         text-align: center;
         margin: 10px;
       }
       .product-text-button {
         display: flex;
         justify-content: center;
         button {
            background-color: #2d8cf0;
            border: 1px solid #2d8cf0;
            margin: 10px; 
            padding: 8px 64px;
            color: white;
            border-radius: 3px;
            align-items: center;
            cursor: pointer;
          }
       }
     }
  }
}
</style>
