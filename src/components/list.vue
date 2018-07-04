<template>
  <div class="hello">
    <p>{{list}}</p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      msg: 'list'
    }
  }
}
</script>

<style scoped lang="less">
.hello {
  color: red;
  font-size: 1rem;
  h2 {
    color: blue;
  }
}

</style>