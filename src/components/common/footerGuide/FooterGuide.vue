<template>
  <div class="footerBox">
    <div :style="$route.path == '/home' ? {color: this.activestyle} :{}" class="item" @click="itemClick4('/home')">
      <div class="iconfont">&#xe724;</div>
      <div class="text">首页</div>
    </div>

    <div :style="this.$route.path == '/search' ? {color: this.activestyle} :{}" class="item" @click="itemClick2">
      <div class="iconfont">&#xe60d;</div>
      <div class="text">搜索</div>
    </div>

    <div :style="this.$route.path == '/order' ? {color: this.activestyle} :{}" class="item" @click="itemClick3">
      <div class="iconfont">&#xe60b;</div>
      <div class="text">订单</div>
    </div>
    <div :class="{activestyle: $route.path == '/profile' }" class="item" @click="itemClick4('/profile')">
      <div class="iconfont">&#xe608;</div>
      <div class="text">我的</div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'FooterGuide',
  data(){
    return {
      activestyle: 'black',
      path: ''
    }
  },
  computed: {
    // isActive() {
    //   return this.$route.path == this.path
    // }
  },
  methods: {
    itemClick2() {
      this.$router.push('/search').catch(() => {})
    },
    itemClick3() {
      this.$router.push('/order').catch(() => {})
    },
    itemClick4(path) {
      this.$router.push(path).catch(() => {})
    },
  }
}
</script>

<style scoped>
  @import '../../../assets/img/my/iconfont.css';
  @import '../../../assets/img/search/iconfont.css';
  @import '../../../assets/img/meal/iconfont.css';
  @import '../../../assets/img/order/iconfont.css';
  .footerBox {
    font-size: 15px;
    display: flex;
    position: fixed;
    /* background-color: silver; */
    height: 49px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    justify-content: space-around;
    /* border: 2px solid black; */
    box-shadow: 0px -4px 2px greenyellow;
  }
  .item {
    height: 26px;
    width: 50px;
    /* background-color: rgb(174, 174, 247); */
    margin: 2px 4px;
    text-align: center;
    color: greenyellow;

  }
  .iconfont{
    font-size: 24px;
  }
  .activestyle {
    color: black;
  }
  

</style>