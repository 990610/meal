<template>
  <div>
    <!-- 首页头部 -->
    <nav-bar class="home-nav">
      <div slot="left" class="iconfont">&#xe60d;</div>
      <div slot="center" class="center">{{address}}</div>
      <div @click="orderClick" slot="right">登录|注册</div>
    </nav-bar>

    <!-- 首页导航 -->
    <div class="home-swiper">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="../../assets/img/swiper1.png" alt=""></div>
          <div class="swiper-slide"><img src="../../assets/img/swiper2.png" alt=""></div>
        </div>
        <!-- 分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    

    <!-- 附近商家 -->
    <div class="shop-list">
    </div>
  </div>
</template>

<script>
import NavBar from '../../components/common/navBar/NavBar.vue'

import {mapState} from 'vuex'
// 轮播相关
import Swiper from 'swiper'
import '../../../node_modules/swiper/swiper-bundle'
import 'swiper/swiper-bundle.min.css'
export default {
  components: { NavBar },
  name: 'Home',
  data(){
    return{
      banners:[],
    }
  },
  created() {
    
  },
  mounted() {
    // 页面挂载后就获取商品分类数据和地址，这个数据是全局管理
    this.$store.dispatch('reqCategorys')
    this.$store.dispatch('reqAddress')



    // 使用swiper插件
    new Swiper('.swiper-container', {
      loop: true,
      speed: 100,
      autoplay: {
        delay: 100,
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
      }
    })
    
  },
  computed: {
    ...mapState(['address']),
  },
  methods: {

    
    // 点击相关
    orderClick() {
      // 点击登录注册
      this.$router.push('./Login')
    },
  }
}
</script>

<style scoped>
@import '../../assets/img/search/iconfont.css';
  .home-nav {
    background-color: yellowgreen;
    position: fixed;
    left: 0;
    right: 0px;
    top: 0px;
    z-index: 2;
  }
  .iconfont {
    font-size: 24px;
  }
  .center {
    width: 120px;
  }
  .home-swiper {
    /* height: 200px; */
    position: relative;
    top:46px;
    box-shadow: 0px 10px 1px rgb(230, 227, 227);
  }
  .home-swiper img {
    width: 100%;
    /* height: 100%; */
  }
  .swiper-pagination {
    position: relative;
    z-index: 9;
  }
 
</style>