<template>
  <div class="profile">
    <nav-bar class="profile-nav">
      <div slot="center">我的</div>
    </nav-bar>
    <div class="body">
      <img src="" alt="touxiang">
      <div>
        <router-link to="Login">
          <span>登录/注册</span>
          <div>暂无绑定手机</div>
        </router-link>
      </div>
    </div>
    <div class="information">

    </div>
  </div>
</template>
<script>
import NavBar from '../../components/common/navBar/NavBar.vue'
export default {
  components: { NavBar },
  name: 'Profile'
}
</script>
<style scoped>
  .profile {
    background-color: yellowgreen;
    /* font-size: 20px; */
  }
</style>