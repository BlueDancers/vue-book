<template>
  <div id="app">
    <div class="header">
      <router-link to="/" tag="p">耳机频道</router-link>
      <p @click="gotoCar">购物车 <span class="CarList" v-show="list">{{list}}</span></p>
    </div>
    <router-view></router-view>
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
    background-color: @appHeader;
    height: 48px;
    display: flex;
    justify-content: space-between;
    padding: 0% 2%;
    cursor: pointer;
    p {
      color: #fff;
      line-height: 48px;
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
}
</style>