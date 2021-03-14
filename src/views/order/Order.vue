<template>
  <div class="order">
    <!-- 头部 -->
    <nav-bar class="order-nav">
      <div slot="center">订单列表</div>
    </nav-bar>
    <div class="groundImg">
      <img src="../../assets/img/person.png" alt="">
    </div>
    <div class="bottom">
      <div>登录后查看外卖订单</div>
      <button @click="itemClick">立即登录</button>
    </div>
  </div>
</template>

<script>
import NavBar from '../../components/common/navBar/NavBar.vue'
export default {
  components: { NavBar },
  name: 'Order',
  methods: {
    itemClick() {
      this.$router.push('/Login')
    }
  }
}
</script>
<style scoped>
  .order-nav {
    background-color: yellowgreen;
  }
  .groundImg {
    margin: 10px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .bottom {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .bottom div {
    margin: 10px auto;
  }
  .bottom button {
    border-radius: 4px;
    border: white;
    color: white;
    background-color: yellowgreen;
  }
</style>