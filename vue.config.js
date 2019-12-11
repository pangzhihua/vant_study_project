module.exports = {
  outputDir: './docs',
  publicPath: process.env.NODE_ENV === 'production' ? '/vant-demo/' : '/',
  devServer: {
    host: "0.0.0.0", //如果是真机测试，就使用这个IP
    // https: false,
    proxy: {
      //配置跨域
      '/api': {
        target: "http://m.dcdapp.com",
        ws: true,
        changOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
};
