// 直接更新state多个方法的对象

import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS} from './mutation-types'
export default {
  // 使用Es6风格，使用一个常量来作为函数名,相当于receive_address() {}
  [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address
  },
  [RECEIVE_CATEGORYS] (state, {category}) {
    // 这里的变量名categorys必须要和action里面返回提交的名字一样
    // 将这个变量赋值给state里面的categorys
    state.categorys = category
  }
}