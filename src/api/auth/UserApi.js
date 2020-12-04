import request from '@/utils/request'
export default{
    //登录
    login(params){
        return request({
            url:'/dangerousWeatherReport/list',
            method:'post',
            data:params
        })
    }
} 