<template>
  <div class="order">
    <!-- 头部 -->
    <nav-bar class="order-nav">
      <div slot="center">订单列表</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '../../components/common/navBar/NavBar.vue'
export default {
  components: { NavBar },
  name: 'Order'
}
</script>
<style scoped>
  .order {
    background-color: yellowgreen;
  }
</style>