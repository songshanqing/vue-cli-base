import Vue from 'vue'
export default{
    state:{
        token:''
    },
    getters:{
        getToken(){
            return Vue.ls.get('token','')//获取token
        }
    },
    mutations:{
        //缓存toke  缓存7天
        cacheToken(state,token){
            state.token=token;
            Vue.ls.set('token',token,7*24*60*60*1000)
        }
    },
    actions:{
        setToken({commit},token){
            commit('cacheToken',token)
        }
    }
}