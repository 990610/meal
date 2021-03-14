<template>
  <div class="search">
    <!-- 搜索头部 -->
    <nav-bar class="search-nav">
      <div slot="center">搜索</div>
    </nav-bar>
    <!-- 搜索表单 -->
    <div class="search-form">
      <input type="text" placeholder="请输入商家或者美食名称">
      <button style="backgroundColor:yellowgreen">提交</button>
    </div>
  </div>
</template>
<script>
import NavBar from '../../components/common/navBar/NavBar.vue'
export default {
  components: { NavBar },
  name: 'Search'
}
</script>
<style scoped>
  .search-nav {
    background-color: yellowgreen;
    font-size: 16px;
  }
  .search-form {
    margin: 15px 7px;
    display: flex;
    justify-content: space-between;
  }
  input {
    margin: 0px 8px;
    flex-grow: 2;
    height: 20px;
    border-radius: 7px;
  }
  button {
    border-radius: 5px;
    color: white;
    border-style: none;
  }

</style>