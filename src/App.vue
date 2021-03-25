<template>
  <div id="app">
    <router-view/>
    <!-- <footer-guide v-show="$route.path != '/Login'"/> -->
    <footer-guide v-show="$route.meta.showFoot"/>
    
  </div>
</template>

<script>
import FooterGuide from './components/common/footerGuide/FooterGuide.vue'

export default {
  name: 'App',
  components: {
    FooterGuide
  },
  mounted() {

  }
}
</script>

<style>
  @import "./assets/css/reset.css";
</style>
