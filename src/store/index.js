import Vue from 'vue'
import Vuex from 'vuex'
import Sys from './modules/Sys'
Vue.use(Vuex)
export default new Vuex.Store({
    modules:{
        Sys
    }
})
