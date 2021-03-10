<template>
  <div class="Login">
    <div class="iconfont" @click="$router.back()">&#xe604;</div>
    <p>外卖</p>
    <div class="data">
      <div class="type">
        <span>短信登录</span> &nbsp;
        <span>密码登录</span>
      </div>
      <input type="text">
      <input type="text">
    </div>
    <p>温馨提示Lorem ipsum dolor sit amet, consectetur.</p>
    <button>登录</button>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>
<style scoped>
@import '../../assets/img/左箭头&#xe604;/iconfont.css'

</style>