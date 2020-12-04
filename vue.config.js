/**
 * vue.config.js配置网址：
 * TODO:https://cli.vuejs.org/zh/config/#pages
 */

module.exports={
    publicPath:'./',//这样所有的资源都会被链接为相对路径，这样打出来的包可以被部署在任意路径
    pages:{
        // JavaScript 入口文件
        index:{
            entry:'src/main.js',// page 的入口
            template:'public/index.html',// 模板来源
            filename:'index.html',// 在 dist/index.html 的输出
            title:'app' // 当使用 title 选项时，template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
        }
    },
    productionSourceMap:false,//如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
    //代理
    devServer:{
        proxy:{
            '/api':{
                target:process.env.VUE_APP_BASE_URL,//代理地址，这里设置的地址会代替axios中设置的baseURL
                ws:true,// 是否启用websockets
                changeOrigin:true,//开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                pathRewrite:{
                    '^/api':''
                    /*
                        这里理解成用'/api'代替target里面的地址,比如我要调用'http://40.00.100.100:3002/user/add'，直接写'/api/user/add'即可
                        pathRewrite: {'^/api': '/'} 重写之后url为 http://192.168.1.16:8085/xxxx
                        pathRewrite: {'^/api': '/api'} 重写之后url为 http://192.168.1.16:8085/api/xxxx
                    */
                }
            }
        }
    }
}