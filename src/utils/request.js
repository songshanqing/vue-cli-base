/**
 * aixos封装网址
 * TODO:https://blog.csdn.net/weixin_43216105/article/details/98877960
*/
import axios from 'axios';
// import store from '@/store/index'

// 创建axios 实例
var ajax=axios.create({
    baseURL:process.env.NODE_ENV==='production'?process.env.VUE_APP_BASE_URL:'/api',
    //请求覆写超时设置
    //请求覆写超时设置
    timeout:50000,
    // headers: {
    //     'Content-Type': 'application/json;charset=UTF-8'
    //   }
});

//post请求的时候，我们需要加上一个请求头
ajax.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded;charset=UTF-8'

// 添加请求拦截器
ajax.interceptors.request.use(config=>{
     // 在发送请求之前做些什么

    /*
     每次发送请求之前判断vuex中是否存在token        
     如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
     即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断 
    */
   console.log(config)
    // const token=store.getters.getToken;
    // if(token){
    //     config.headers.token=token
    // }
    return config
},error=>{
     // 对请求错误做些什么
    return Promise.reject(error)
})

// 添加响应拦截器
ajax.interceptors.response.use(response=>{
    // 对响应数据做点什么
    // if(response.data.code === 'fail'){
    //     if(response.data.failMessages&&response.data.failMessages[0].code === '99978'){
    //       store.dispatch('setToken','').then(res=>{
    //           router.push('/login')
    //       })
    //     }
    //   }
    return response;
},error=>{
    // 对响应错误做点什么
    /***** 接收到异常响应的处理开始 *****/
//   if (error && error.response) {
//     // 1.公共错误处理
//     // 2.根据响应码具体处理
//     switch (error.response.status) {
//       case 400:
//         error.message = '错误请求'
//         break;
//       case 401:
//         error.message = '未授权，请重新登录'
//         break;
//       case 403:
//         error.message = '拒绝访问'
//         break;
//       case 404:
//         error.message = '请求错误,未找到该资源'
//         window.location.href = "/NotFound"
//         break;
//       case 405:
//         error.message = '请求方法未允许'
//         break;
//       case 408:
//         error.message = '请求超时'
//         break;
//       case 500:
//         error.message = '服务器端出错'
//         break;
//       case 501:
//         error.message = '网络未实现'
//         break;
//       case 502:
//         error.message = '网络错误'
//         break;
//       case 503:
//         error.message = '服务不可用'
//         break;
//       case 504:
//         error.message = '网络超时'
//         break;
//       case 505:
//         error.message = 'http版本不支持该请求'
//         break;
//       default:
//         error.message = `连接错误${error.response.status}`
//     }
//   } else {
//     // 超时处理
//     if (JSON.stringify(error).includes('timeout')) {
//       Message.error('服务器响应超时，请刷新当前页')
//     }
//     error.message('连接服务器失败')
//   }

//   Message.error(error.message)
  /***** 处理结束 *****/
  //如果不需要错误处理，以上的处理过程都可省略
    return Promise.reject(error);
})

export default ajax;

    
