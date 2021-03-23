import {request} from './request'

// 1先封装一个axios请求函(害怕axios不运行了，以后就只重新换一个插件语法)
// 2.再封装一个只针对login的函数，需要做什么就在这个函数做，返回的是promise对象，不用去组件做，封装函数的思想


// 发送手机号，获取短信验证码
export function getLoginSendCode(phone) {
  return request({
    url: '/sendcode',
    params: {
      phone
    }
  })
}

export function getAddress(geohash) {
  return request({
    // 参考接口文档可知，此处不是传递参数，而是直接拼接字符串成url
    // 此处使用了模板字符串语法 字符串中可以嵌入变量对象。 `${变量名}`
    url:`/position${geohash}`,
    // method: 'get',
  })
}


