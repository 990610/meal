<template>
  <div class="login">
    <div v-if="enter">
      <!-- 标题 -->
      <div class="iconfont" @click="$router.back()">&#xe604;</div>
      <div class="title">饿了么</div>
      <!-- 两种登录 -->
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
        <div v-if="sign == 'message'" class="message-number" key="message">
          <input type="text" placeholder="手机号" maxlength="11" v-model="phone">
          <input type="text" placeholder="验证码" maxlength="6" v-model="code">
        <div>
          <input type="submit" 
            :disabled='!rightPhone' 
            :value="this.time>0 ? '已发送'+'('+(this.time)+'s'+')' :'获取验证码'" 
            @click="identifyClick" 
            style="backgroundColor:white;border: 0px;outline:none" >
            <span></span>
        </div>
        </div>
      <!-- 密码登录方式 -->
      <!-- if是条件渲染，并且会复用已有元素，可以通过key来表示完全独立，进而不复用。不频繁切换时使用 -->
      <!-- show是直接渲染，存在，只是简单的基于css切换，频繁切换时使用 -->
        <div v-if="sign == 'number'" class="pass-number" key="number">
          <input type="text" placeholder="手机号/邮箱/用户名" maxlength="18" v-model="email">
          <input type="password" placeholder="密码" v-model="password">
          <div class="yzstyle">
            <input type="text" placeholder="验证码" style="border:0px;outline:none">
            <img @click="yzClick" src="http://localhost:3000/captcha" alt="tubian">
            <!-- <img src="" alt=""> -->
          </div>
        </div>
      </div>
      <div class="point">温馨提示: 未注册老阴外卖账号的手机号，登录时将自动注册，且代表已经同意<span>《用户注册协议》</span> </div>
      <div class="btn">
        <button @click="enterClick">登录</button>
      </div>
    </div>
    <!-- 警告框组件 -->
    <alert-tip v-else :title="errorWay" @backClick='backClick'></alert-tip>
  </div>
</template>
<script>
import AlertTip from '../../components/common/alertTip/AlertTip.vue'
import {getLoginSendCode,getLoginCaptcha} from '../../api/login.js'

export default {
  components: { AlertTip },
  name: 'Login',
  data() {
    return {
      // 用于标识短信和密码登录的样式选择,message表示短信登录，number表示密码登录
      sign: 'message',
      //短信验证码计时的时间
      time: 0, 
      // 登录界面与登录警告界面的切换
      enter: true,
      // 传入警告组件的信息
      errorWay: '手机号错误',
      //以下几个都是 v-model双向绑定，可以动态拿到input输入的值保存
      phone: '', //手机号
      code: '', // 短信验证码，
      // 密码登录没有做
      email:'', // 密码登录手机，邮箱
      password:'', // 密码
      captcha:'' //图形验证码
      
    }
  },
  computed: {
    rightPhone() {
      return /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/.test(this.phone)
      // return /^1\d{10}$/.test(this.phone)
    },
  },
 
  methods: {
   
    /* 点击相关*/
    // 点击获取图片验证码
    yzClick(event) {
      // 图片验证码
      // 网址中，？后面表示要携带的参数Date.now()表示返回自1970年的毫妙/Date()返回的是当天日期和时间
      // 没有跨域的原因是这不是axios请求，
      event.target.src = 'http://localhost:3000/captcha?time' + Date.now()
     
    },
    // 点击切换登录方式
    typeClick(item) {
      this.sign = item
    },
    // 点击获取短信验证码,
     identifyClick() {
      // 只有为0时，才能点击。
      if(this.time == 0) {
        this.time = 30;
        this.timer = setInterval(() => {
          this.time--;
          if(this.time<=0) {
            clearInterval(this.timer)
          }
        },1000);
        // 发送请求(向指定手机发送验证码短信)
        getLoginSendCode(this.phone).then(result => {
          const res = result;
          if(res.code == 1){
            // 发送验证码失败
            this.errorWay = res.msg
            this.enter = false
            if(this.time) {
              this.time = 0
              clearInterval(this.timer)
            }
          }
        })
      }
    },
    //点击登录进行前台验证
    enterClick() {
      this.enter = false;
      if(/^1\d{10}$/.test(this.phone)) {
        // console.log('手机号正确')
        if(/\d{6}$/.test(this.code)) {
          // console.log('验证码正确')
          return this.errorWay = '登录成功'
        }else {
          // console.log('验证码不正确')
          return this.errorWay = '验证码不正确'
        }
      }else{
        // console.log('手机号不正确')
        return this.errorWay = '手机号不正确'
      }
    },
    // 监听子组件的点击，返回登录界面
    backClick() {
      this.enter = true
    }
  }
}
</script>
<style scoped>
@import '../../assets/img/左箭头&#xe604;/iconfont.css';
  .login {
    overflow: hidden;
    /* position: relative; */
    /* display: flex; */
    /* justify-content: center; */
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
  .message-number input, .pass-number input {
    width: 75%;
    height: 33px;
    margin: 5px auto;
    border-radius: 8px;
    /* border:1px solid blue */
  }

  .message-number div,.pass-number div {
    width: 75%;
    color: coral;
    margin: 5px auto;
    font-size: 14px;
  }
  .yzstyle {
    width: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid black; */
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