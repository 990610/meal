<template>
  <div>
    <!-- 首页头部 -->
    <nav-bar class="home-nav">
      <div slot="left" class="iconfont">&#xe60d;</div>
      <div slot="center" class="center" @click="adderssClick">重庆市南岸区重庆邮电大学</div>
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
import Swiper from 'swiper'
import '../../../node_modules/swiper/swiper-bundle'
import 'swiper/swiper-bundle.min.css'
import {request} from '../../api/request'
import {getAddress} from '../../api/login'
export default {
  components: { NavBar },
  name: 'Home',
  data(){
    return{
      banners:[],
      geohash: '/40.10038,116.36867'
    }
  },
  created() {
  },
  mounted() {

    this.getHomeGoods()
    // reqFoodCategorys()

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
  methods: {
    // 点击相关
    orderClick() {
      // 点击登录注册
      this.$router.push('./Login')
    },
    // 网络请求相关
    getHomeGoods() {
      request({
        // method: 'get',
        url: '/index_category'
      }).then(res => {
        console.log(res)
        // this.banners = res
      })
    },
    adderssClick() {
      this.$store.dispatch('reqAddress')
      // getAddress(this.geohash).then(res => {
      //   console.log(res)
      // })
    }
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