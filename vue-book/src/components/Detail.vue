<template>
  <div class="detail">
    {{bid}}
  </div>
</template>
<script>
    export default {
        data(){
            return {msg: 'hello'}
        },
        created(){
        },
        methods: {},
        computed: {
            bid(){
                return this.$route.params.bid;//将路径参数的id映射到bid上
            }
        },
        components: {}
    }
</script>
<style scoped>
  .detail{
    position: absolute;
    top:0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #fff;
    z-index: 100;
  }
</style>
