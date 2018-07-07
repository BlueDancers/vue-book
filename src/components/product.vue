<template>
  <div id="product">
      <div v-for="item in list" :key="item.id" class="product-list" @click="lookProduct(item)">      <!--使用flex布局-->
        <div class="product-images">
          <img :src="item.image" alt="图片">
        </div>
        <div class="product-info">
            <h4>{{item.name}}</h4>
            <p class="product-color" :style="{background:colors[item.color]}"></p>
            <p class="product-cost">￥{{item.cost}}</p>
        </div>
        <div class="product-add-cart">
          <button>加入购物车</button> 
        </div>
      </div> 
  </div>
</template>

<script>
export default {
  created() {
    // this.$store.dispatch('getProduct').then(() => {
    //   //这里竟然拿不到,必须通过actions 这样不会影响性能吗
    //   this.list = this.$store.state.product
    // })
    //启用 影响性能 没有组件化思想
  },
  props: {
    list: {
      type: Array
    }
  },
  data() {
    return {
      // list: [],
      colors: {
        白色: '#ffffff',
        金色: '#dac272',
        蓝色: '#233472',
        红色: '#f2352e'
      }
    }
  },
  methods: {
    lookProduct(list) {
      this.$router.push('./product/' + list.id)
    }
  }
}
</script>

<style lang="less" scoped>
#product {
  display: flex;
  flex-wrap: wrap; //换行
  justify-content: flex-start; //左对齐
  width: 98%;
  margin: 0 auto;
  .product-list {
    position: relative;
    border: 1px solid #dddee1;
    margin: 10px;
    padding: 15px;
    background: #fff;
    border-radius: 10px;
    .product-images {
      //width: 50%;
      height: 320px;
      img {
        height: 100%;
      }
    }
    .product-info {
      width: 300px;
      h4 {
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .product-color {
        width: 16px;
        height: 16px;
        border: 1px solid #dddee1;
        border-radius: 50%;
        margin: 5px auto;
      }
      .product-cost {
        text-align: center;
        color: red;
      }
    }
    .product-add-cart {
      position: absolute;
      top: 5px;
      right: 8px;
      button {
        padding: 4px 8px;
        background: #2d8cf0;
        font-size: 12px;
        border: 1px solid #2d8cf0;
        border-radius: 3px;
        cursor: pointer;
      }
    }
  }
}
.product-list:hover .product-info h4 {
  color: #0070c9;
}
.product-list:hover .product-add-cart button {
  color: #fff;
}
</style>
