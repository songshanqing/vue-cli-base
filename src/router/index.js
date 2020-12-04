import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 定义路由
const routes=[
    {
        path:'/',
        name:'Home',
        component:resolve=>(require(["@/views/Home"],resolve))
    },
    {
        path:'/login',
        name:'Login',
        component:resolve=>(require(["@/views/Login"],resolve))
    },
]

// 创建 router 实例
const router=new VueRouter({
    routes
})

export default router;