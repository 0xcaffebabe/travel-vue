//vue.config.js
module.exports = {
    devServer: {
        port: 8080,

        host: "0.0.0.0",

        https: false,

        // 自动启动浏览器

        open: false,
        proxy: {
            "/api": {
                target: "http://127.0.0.1:8080/", //设置调用的接口域名和端口
                changeOrigin: true, //是否跨域
                ws:true,
                pathRewrite: {
                    "^/api": "/mock/api"
                }
            }
        }
    }
}
