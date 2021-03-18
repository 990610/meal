import {request} from './request'

// 1先封装一个axios请求函(害怕axios不运行了，以后就只重新换一个插件语法)
// 2.再封装一个只针对login的函数，需要做什么就在这个函数做，返回的是promise对象，不用去组件做，封装函数的思想
export function getLoginSendCode(phone) {
  return request({
    url: '/sendcode',
    params: {
      phone
    }
  })
}


