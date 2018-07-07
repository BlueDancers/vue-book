<template>
  <div class="list">
    <div class="list-header-show" v-show="!isShow"> 加载中  动画没有写....... </div>     <!--显隐层-->
    <div class="list-header" v-show="isShow">
       <div class="list-header-filter">
        <span>品牌:</span>
        <span class="list-control-filter-item" :class="{on:item === filterBrand}" @click="handleFilterBrand(item)"  v-for="item in brand" :key="item">
          {{item}}
        </span>
       </div>

        <div class="list-header-filter">
        <span>颜色:</span>
        <span class="list-control-filter-item" :class="{on:item === filterColor}" @click="handleFilterColor(item)" v-for="item in color" :key="item">
          {{item}}
        </span>
       </div>

        <div class="list-header-filter">
        <span>品牌:</span>
        <span class="list-control-filter-item" :class="{on:item === filterSort}" @click="handleFilterSort(item)" v-for="item in sort" :key="item">
          {{item}}
        </span>
       </div>

    </div>
    <div class="list-lists-show" v-show="!isShow">暂无商品</div>
    <!-- <Product v-show="isShow" v-for="item in list" :key="item.id" :info="item"></Product> -->
    <Product :list="brandList" v-show="isShow"></Product>    <!--brandList是计算属性处理的数据-->
  </div>
</template>

<script>
import Product from '../components/product'
export default {
  created() {
    this.$store.dispatch('getProduct').then(()=> {            //所有都建立在异步then获取数据上
      this.list = this.$store.state.product                   //获取商品列表
      this.brand = this.$store.getters.getProductName         //获取商品名
      this.color = this.$store.getters.getProductColor        //获取商品颜色
      this.isShow = true;                                     //所有过滤行vuex里面处理,数据加载完成 显示页面
    })
  },
    components: {
    Product
  },
  data: function() {
    return {
      list:[],                          //源数据
      brand: [],                        //品牌   
      color:[],                         //顏色
      sort: ["默认","销量","价格"],      //排序方式
      isShow:false,                     //商品list数据存在才变成true
      filterBrand:null,                 //控制品牌过滤
      filterColor:null,
      filterSort:null
    }
  },
  computed: {
    brandList () {
      let list = [...this.list];   //克隆数据
      if(this.filterBrand != null){
        list = list.filter(item => item.brand === this.filterBrand)     //进行商品类型过滤
      }
      if(this.filterColor != null) {
        list = list.filter(item => item.color === this.filterColor)     //进行商品颜色过滤
      }
      return list;
    }
  },
  methods: {
    handleFilterBrand (brand) {           //品牌选择器
      if(this.filterBrand == brand){
        this.filterBrand = null
      }else {
        this.filterBrand = brand 
      }
    },
    handleFilterColor (color) {          //颜色选择器
      if(this.filterColor == color){
        this.filterColor = null
      }else {
        this.filterColor = color  
      }
    },
    handleFilterSort (sort) {           //排序选择器
      if(this.filterSort == sort){
        this.filterSort = null
      }else {
        this.filterSort = sort 
      }
    }
  }
}
</script>

<style scoped lang="less">
.list {
  background-color: #f8f8f9;
}
.list-header {
  background-color: #fff;
  border-radius: 6px;
  margin: 16px;
  padding: 16px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  .list-header-filter {
    margin-bottom: 16px;
    span:first-child {
      margin-right: 6px;
    }
    .list-control-filter-item {
      user-select: none;
      cursor: pointer;
      display: inline-block;
      border: 1px solid #e9eaec;
      border-radius: 6px;
      margin: 3px;
      padding: 1px 7px;
    }
    .on {
      background: #f2352e;
      border: 1px solid #f2352e;
      color: #fff;
    }
  }
}

</style>