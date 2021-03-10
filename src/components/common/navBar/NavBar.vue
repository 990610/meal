<template>
  <div class="nav-bar">
    <div class="left"> <slot name="left"></slot>   </div>
    <div class="center"> <slot name="center"></slot>   </div>
    <div class="right"> <slot name="right"></slot>   </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
<style scoped>
  .nav-bar {
    font-size: 16px;
    height: 44px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: yellowgreen; */
    color: #fff;
    box-shadow: 0px 3px 2px rgb(190, 243, 84);

  }
  .left, .right{
    width: 80px;
  }
  .center {
    overflow: hidden;
    /* width: 120px; */
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>