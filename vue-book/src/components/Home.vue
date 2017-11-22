<template>
  <div>
    <MHeader>首页</MHeader>
    <div class="content">
      <Swiper :swiperSlides="sliders"></Swiper>
      <div class="container">
        <h3>热门图书</h3>
        <ul>
          <li v-for="hot in hotBooks">
            <img :src="hot.bookCover">
            <b>{{hot.bookName}}</b>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
   //1.引入组件 2.注册组件 3.使用组件
    import MHeader from '../base/MHeader.vue';
    import Swiper from '../base/Swiper.vue';
    import {getSliders,getHotBook} from '../api';
    export default {
        created(){
          this.getSlider(); // 获取轮播图
          this.getHot(); // 获取最新图书
        },
        data(){

            return {sliders: [],hotBooks:[]}
        },
        methods: {
          async getHot(){
              this.hotBooks = await getHotBook();
          },
          async getSlider(){
              // 给data起别名 对象中的属性名字必须和 得到的结果名字一致
              this.sliders = await getSliders();
              // 将获取的数据放到sliders中
          }
        },
        computed: {},
        components: {
          MHeader,Swiper
        }
    }
</script>
<style scoped lang="less">
 h3{color: #999;padding: 5px 0}
.container{
  width: 90%;
  margin: 0 auto;
  ul {
    display: flex;
    flex-wrap: wrap; /*默认不换行*/
    padding-bottom: 10px;
    li {
      width: 50%;
      text-align: center;
      margin: 5px 0;
      img{width: 100%}
    }
  }
}
</style>
