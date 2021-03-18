import axios from 'axios'

// 封装一个名叫request的请求函数
export function request(config) {
  // 1.创建axios实例
  const instance = axios.create({
    // baseURL: 'http://152.136.185.210:7878/api/m5',
    baseURL: '/api',
    timeout: 300
    // 
  })
  // 使用实例
  instance.interceptors.response.use(res => {
    // return res  请求会包含许多其他信息，像status headers等
    return res
  })
  
  return instance(config)
}


