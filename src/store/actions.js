// 通过mutation间接更新state多个方法的对象
import {RECEIVE_ADDRESS} from './mutation-types'
import {getAddress} from '../api/login'

export default {
  // 异步获取地址
  reqAddress({commit, state}) {
    // 发送网络请求
    const geohash = `/${state.latitude},${state.longitude}`//采用模板字符串的方法
    // const geohash = state.latitude+','+state.longitude
    getAddress(geohash).then(res => {
      const address = res
    // 可以判断一下

    // 提交mutation
      commit(RECEIVE_ADDRESS, {address}) 
      // console.log(res)     
    })
    
  }
}