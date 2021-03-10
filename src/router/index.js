import Vue from 'vue'
import VueRouter from 'vue-router'

// 使用路由懒加载导入组件
const Home = () => import('../views/home/Home.vue')
const Order = () => import('../views/order/Order.vue')
const Search = () => import('../views/search/Search.vue')
const Profile = () => import('../views/profile/Profile.vue')
const Login = () => import('../views/login/Login.vue')


// 用use使用router插件
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes:[
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      meta: {
        showFoot: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFoot: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFoot: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFoot: true
      }
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
export default router