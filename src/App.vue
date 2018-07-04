<template>
  <div id="app">
    <div class="header">
      <p>耳机频道</p>
      <p>购物车</p>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    
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
    }
  }
}
</style>