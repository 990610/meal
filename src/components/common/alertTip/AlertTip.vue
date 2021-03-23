<template>
  <div class="background">
    <div class="alert-tip">
      <div class="fixd"></div>
      <div class="box">
        <div class="title">{{title}}</div>
        <span @click="backClick" class="back">返回{{this.time>=0 ? '('+this.time+')' :''}}</span>
      </div>
    </div>
   
  </div>
</template>

<script>
export default {
  name: 'AlertTip',
  props: {
    title: {
      type: String,
      default: '登录成功'
    }
  },
  data() {
    return {
      time: 5
    }
  },
  mounted() {
    this.autoBack()
  },
  computed: {
   
  },
  methods: {
    // 自动返回login页面
    autoBack() {
      this.time = 5
      const timer = setInterval(() => {
        this.time--
        if(this.time <= 0) {
          clearInterval(timer)
          this.backClick()
        }
      },1000)
    },
    // 点击返回login页面
    backClick() {
      this.$emit('backClick')
    }
  }
}
</script>
<style scoped>
  .fixd {
    width: 180px;
    height: 180px;
    position: absolute;
    left: 0;
    right: 0px;
    top: 0px;
    bottom: 0px;
    margin: auto auto;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #9370db;
    animation: run 2s linear infinite;
  }
  .fixd::after {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border-radius: 50%;
    border: 3px solid transparent;
    animation: run 3s linear infinite;
    border-top-color: #ba55d3;
  }
  .fixd::before {
    content: '';
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #f0f;
    animation: run 1.5s linear infinite;
  }
  /* 定义旋转动画 */
  @keyframes run {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes scale {
     0%{
      transform: scale(0.1)
     }
    35%{
      transform: scale(.5)
    }
    70%{
      transform: scale(.8)
    }
    100%{
      transform: scale(1)
    }
  }
  /* 定义缩放 */
  .box {
    font-size: 18px;
    width: 120px;
    height: 120px;
    background-color: rgb(219, 52, 219);
    opacity: 0.3;
    position: absolute;
    border-radius: 50%;
    left: 0px; 
    right: 0px;
    top: 0px;
    bottom: 0px;
    margin: auto auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    white-space:normal;
    text-align: center;
    /* overflow: hidden; */
  }
  .title {
    margin: 10px auto;
  }
  .back {
    margin: 10px auto;
  }
  .background {
    background-color: #222;
  }
  .alert-tip {
    height: 100vh;
    animation: scale 1.5s linear ;
  }
  

</style>