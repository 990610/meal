import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './mock/mockServer'

Vue.config.productionTip = false

new Vue({
  router,//使用上vue-router
  store,//使用上vuex
  render: h => h(App),
}).$mount('#app')
