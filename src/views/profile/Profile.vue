<template>
  <div class="profile">
    <nav-bar class="profile-nav">
      <div slot="center">我的</div>
    </nav-bar>
    <div class="body">
      <div class="iconfont my" >&#xe608;</div>
      <div class="message">
        <router-link to="Login">
          <span>登录/注册</span>
        </router-link>
        <div>暂无绑定手机</div>
      </div>
    </div>
    <div class="bottom">
      <div class="money">金钱</div>
      <div class="discount">我的优惠</div>
      <div class="cum">我的积分</div>
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
@import '../../assets/img/my/iconfont.css';
  .profile-nav {
    background-color: yellowgreen;
    font-size: 16px;
  }
  .body {
    margin: 3px auto;
    background-color: yellowgreen;
    display: flex;
  }
  .my {
    font-size: 42px;
    background-color: #aaa;
    color: rgba(255, 255, 255, 0.918);
    border-radius: 50%;
    margin: auto 10px;
    width: 40px;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .message {
    margin: 10px 15px;
  }
  .message span, .message div{
    margin: 5px auto;
    color: white;
  }
  .message div {
    font-size: 13px;
  }
  .bottom {
    display: flex;
    justify-content: space-around;
  }
  .bottom div {
    flex: 1;
    background-color: wheat;
    margin: 0px 0px;
    text-align: center;

    
  }
  
</style>