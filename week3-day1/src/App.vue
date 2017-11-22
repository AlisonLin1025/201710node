<template>
  <div>
    {{msg}}
    <!--<router-view></router-view>-->
    <button @click="show">notify</button>
  </div>
</template>
<script>
  export default {
      methods:{
        show(){
          this.$notify('我很丑',{delay:1000});
        }
      },
      data(){
          return {msg:'hello'}
      }
  }
</script>
<style>
</style>