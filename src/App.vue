<template>
  <div id="app">
    <div class="header">
      <router-link to="/" tag="p">Sony</router-link>
      <p @click="gotoCar">购物车 <span class="CarList" v-show="list">{{list}}</span></p>
    </div>
    <div class="router">
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>
  export default {
    data () {
      return {
        car: this.$store.state.addCar
      }
    },
    computed: {
      list () {
        if(this.car.length == 0){
          return ""
        }else {
          return this.car.length
        }
        
      }
    },
    methods: {
      gotoCar () {
        this.$router.push('/cart')
      }
    }
  }
</script>

<style lang="less">
*{
  margin: 0;
  padding: 0;
}
@appHeader:rgba(0,0,0,.8);
#app{
  .header {
    position: fixed;
    top: 0;
    background-color: @appHeader;
    height: 48px;
    width: 97.5%;
    display: flex;
    justify-content: space-between;
    padding: 0% 1%;
    z-index: 100000;

    p {
      color: #fff;
      line-height: 48px;
      cursor: pointer;
      .CarList {
        display: inline-block;
        width: 17px;
        height: 17px; 
        background-color: red;
        border-radius: 50%;
        text-align: center;
        line-height: 15px;
        position: relative;
        left: 2px;
        font-size: 12px;
      }
    }
  }
  .router {
    margin-top: 60px;
  }
}
</style>