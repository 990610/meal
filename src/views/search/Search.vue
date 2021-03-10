<template>
  <div class="search">
    <!-- 搜索头部 -->
    <nav-bar class="search-nav">
      <div slot="center">搜索</div>
    </nav-bar>
    <!-- 搜索表单 -->
    <div class="search-form">
      <input type="text">
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
    font-size: 18px;
  }
  .search-form {
    margin: 6px 5px;
    display: flex;
    justify-content: space-between;
  }
  input {
    margin: 0px 2px;
    flex-grow: 2;
  }

</style>