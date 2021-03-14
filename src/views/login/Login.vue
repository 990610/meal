<template>
  <div class="Login">
    <div class="iconfont" @click="$router.back()">&#xe604;</div>

    <div class="title">老尹外卖</div>
    <div class="body">
      <div class="type">
        <div class="dl" @click="typeClick('message')">短信登录
          <div v-if="sign == 'message'" class="line"></div>
        </div>
        <div class="dl" @click="typeClick('number')">密码登录
          <div v-if="sign == 'number'" class="line"></div>
        </div>
      </div>
      <!-- 短信登录方式 -->
      <div v-if="sign == 'message'" class="message-number">
        <input type="text" placeholder="手机号" maxlength="11" v-model="phone">
        <input type="text" placeholder="验证码" maxlength="6">
        <div>
          <input type="submit" :disabled='!rightPhone' value="获取验证码" style="backgroundColor:white;border: 0px;outline:none" >
          <span>88888</span>
        </div>
      </div>
      <!-- 密码登录方式 -->
      <div v-if="sign == 'number'" class="pass-number">
        <input type="text" placeholder="账号">
        <input type="text" placeholder="密码">
        <input type="text" placeholder="验证码">
        <div>验证码 <span>sdfsdf</span></div>
      </div>
    </div>
    <div class="point">温馨提示: 未注册老阴外卖账号的手机号，登录时将自动注册，且代表已经同意<span>《用户注册协议》</span> </div>
    <div class="btn">
      <button>登录</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      // 用于标识短信和密码登录的样式选择
      sign: 'message',
      // v-model双向绑定，可以动态拿到input输入的值保存到phone中
      phone: '',
    }
  },
  computed: {
    rightPhone() {
      return /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/.test(this.phone)
      // return /^1\d{10}$/.test(this.phone)
    }
  },
  methods: {
    // 点击相关
    typeClick(item) {
      this.sign = item
    }
  }
}
</script>
<style scoped>
@import '../../assets/img/左箭头&#xe604;/iconfont.css';
  .login {
    overflow: hidden;
  }
  .iconfont {
    font-size: 30px;
    width: 50px;
    /* border: 1px solid black; */
  }
  .title {
    margin: 20px auto;
    font-size: 30px;
    text-align: center;
    color: green;
    /* border: 1px solid black; */
  }
  .type {
    height: 40px;
    display: flex;
    /* border: 1px solid black; */
    justify-content: center;
    align-items: center;
  }
  .type .dl {
    margin: auto 20px;
  }
  .line {
    background-color: yellowgreen;
    margin: 5px auto;
    height: 1px;
  }
  .message-number, .pass-number {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border: 1px solid black; */
    margin: 20px auto;
  }
  .message-number input, .pass-number input{
    width: 75%;
    height: 25px;
    margin: 5px auto;
    border-radius: 8px;
  }
  .message-number div,.pass-number div {
    width: 75%;
    color: coral;
    margin: 5px auto;
    font-size: 14px;
  }
  .point {
    /* border: 1px solid black; */
    width: 75%;
    font-size: 12px;
    margin: 15px auto;
  }
  .point span {
    color: rgb(6, 87, 6);
  }
  .btn {
   display: flex;
   /* border: 1px solid black; */
   justify-content: center;
  }
  .btn button {
    width: 75%;
    height: 35px;
    background-color: yellowgreen;
    border-radius: 6px;
    border: white;
    color: white;
  }
</style>