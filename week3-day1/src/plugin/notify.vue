<template>
  <div>
    <div class="notify">{{value}}</div>
  </div>
</template>
<script>
    export default {
        data(){
            return {value:'我太帅了'}
        },
    }
</script>
<style scoped>
  .notify{
    width: 100px;
    height: 40px;
    background: rgba(0,0,0,.45);
    border-radius: 15px;
    line-height: 40px;
    text-align: center;
    color:#fff
  }
</style>