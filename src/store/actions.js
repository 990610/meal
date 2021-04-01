// 通过mutation间接更新state多个方法的对象
import {RECEIVE_ADDRESS, RECEIVE_CATEGORYS} from './mutation-types'
import {getAddress,getCategorys} from '../api/login'

export default {
  // 异步获取地址
  reqAddress({commit, state}) {
    // 发送网络请求
    const geohash = `/${state.latitude},${state.longitude}`//采用模板字符串的方法
    // const geohash = state.latitude+','+state.longitude
    getAddress(geohash).then(res => {
      const address = res.data.address
      // console.log(res.data.address)     

    // 提交mutation
      commit(RECEIVE_ADDRESS, {address}) 
    })
  },
  // 异步获取商品分类
  reqCategorys({commit}) {
    // 发送网络请求
    getCategorys().then(res => {
      console.log(res)
      const category = res.data
      commit(RECEIVE_CATEGORYS, {category})
    })
  }
}