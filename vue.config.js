module.exports = {
  devServer: {
    // 相当于一个拦截器，拦截api，并替换成代理地址
    proxy: {
      '/api':{
      // 配置跨域
        target: "http://localhost:3000",//代理地址
        changeOrigin: true,
        pathRewrite: {
          // 重写地址，相当http://localhost:3000/api变成http://localhost:3000
          '/api': ''
        }
      }
    } 
  }
  
}