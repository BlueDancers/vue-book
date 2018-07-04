<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>

    <router-link to="/one" tag="button">跳转</router-link>
    <router-link to="/" replace>跳转回去</router-link>
    <button @click="handlerouter">{{data}}</button>
    <br>
    <p>现在数据为:{{$store.state.count}}</p>
    <button @click="headleIncremrnt">增加</button>
    <button @click="headleDecrease">减少</button>
    <p>高级用法过滤: {{list}}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      data:"指定路由"  
    }
  },
  computed: {
    list () {
      //return this.$store.state.list.filter(item=>item>10)
      //return this.$store.getters.filteredList;
      return this.$store.getters.listCount;
    }
  },
  methods: {
    handlerouter(){
      this.$router.push('/one')
      console.log(this.$router);
    },
    headleIncremrnt () { 
      //this.$store.commit('increment',20)   //mutations调用写法
      //this.$store.dispatch('increment')      //actions 调用写法
      this.$store.dispatch('asyncIncrement').then(()=>{
        console.log(this.$store.state.count);
      })
    },
    headleDecrease () {
      this.$store.commit({
        type: 'decrease',
        count: 20     //第二种表现形式
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
