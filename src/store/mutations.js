// 直接更新state多个方法的对象

import {RECEIVE_ADDRESS} from './mutation-types'
export default {
  // 使用Es6风格，使用一个常量来作为函数名,相当于receive_address() {}
  [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address
  }
}